import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translatePlantPart } from "@/data/dataTranslations";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Camera, Loader2, AlertTriangle, CheckCircle, Sparkles, Leaf, Bug, Pill, Droplets, Mountain, FlaskConical, Sprout, ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { AnimatedLabel } from "@/components/AnimatedLabel";

export default function Diagnosis() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [plantPart, setPlantPart] = useState("Leaf");
  const [mode, setMode] = useState<"disease" | "soil" | "fertilizer" | "weed">("disease");
  const fileRef = useRef<HTMLInputElement>(null);

  const compressImage = (file: File, maxWidth = 1024, quality = 0.7): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) { reject(new Error("Canvas not supported")); return; }
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = ev.target?.result as string;
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: t.diagnosis.fileTooLarge, description: t.diagnosis.fileTooLargeDesc, variant: "destructive" });
      return;
    }
    try {
      const compressed = await compressImage(file);
      setImage(compressed);
      setResult(null);
    } catch {
      toast({ title: t.diagnosis.analysisFailed, description: "Could not process image. Please try another.", variant: "destructive" });
    }
  };

  const analyze = async () => {
    if (!image) return;
    setLoading(true);
    try {
      console.log("Sending request with mode:", mode);
      const { data, error } = await supabase.functions.invoke("diagnose-crop", {
        body: { imageBase64: image, plantPart, language: lang, mode },
      });
      console.log("Received data:", data);
      console.log("Data._mode:", data?._mode);
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      
      // Transform disease format to weed format if mode is weed but data has disease field
      let transformedData = data;
      if (mode === "weed" && data?.disease && !data?.weedName) {
        console.log("Transforming disease format to weed format");
        const weedName = (data.disease === "No disease detected" || data.disease === "Not a plant image") 
          ? "Weed Plant" 
          : data.disease || "Weed Identified";
        
        // Try to extract scientific name and family from the cause/description
        let scientificName = "Under Analysis";
        let family = "Under Analysis";
        let scientificDescription = data.cause || "";
        
        if (data.cause) {
          // Look for patterns like "Scientific name: Parthenium hysterophorus" or just italicized names
          const scientificMatch = data.cause.match(/(?:scientific name[:\s]+)?([A-Z][a-z]+\s+[a-z]+)/i);
          if (scientificMatch && scientificMatch[1]) {
            scientificName = scientificMatch[1];
          }
          
          // Look for family name patterns like "Family: Asteraceae" or "family Asteraceae"
          const familyMatch = data.cause.match(/family[:\s]+([A-Z][a-z]+aceae|[A-Z][a-z]+ae)/i);
          if (familyMatch && familyMatch[1]) {
            family = familyMatch[1];
          }
        }
        
        transformedData = {
          weedName: weedName,
          scientificName: scientificName,
          scientificDescription: scientificDescription,
          family: family,
          weedType: "Broadleaf",
          origin: "Native",
          invasiveness: data.severity === "High" || data.severity === "Critical" ? "Highly Invasive" : data.severity === "Medium" ? "Moderately Invasive" : "Low",
          growthHabit: "Annual",
          lifeCycle: "Summer annual",
          characteristics: data.symptoms || data.treatment || "See analysis",
          impactOnCrops: data.treatment || "See analysis",
          affectedCrops: "Various crops",
          controlMethods: data.treatment || "Consult local agricultural expert",
          organicControl: data.organicTreatment || "Hand pulling, mulching",
          chemicalControl: "Consult herbicide specialist",
          preventionTips: data.prevention || "Maintain healthy crop cover",
          bestTimeToControl: "Early growth stage",
          economicImpact: "Varies by infestation level",
          _mode: "weed"
        };
      }
      
      // Replace "Unknown" values with better defaults for weed results
      if (mode === "weed" && transformedData?.weedName) {
        if (transformedData.weedName === "No disease detected" || transformedData.weedName === "Not a plant image") {
          transformedData.weedName = "Weed Plant";
        }
        if (transformedData.weedType === "Unknown") transformedData.weedType = "Broadleaf";
        if (transformedData.origin === "Unknown") transformedData.origin = "Native";
        if (transformedData.growthHabit === "Unknown") transformedData.growthHabit = "Annual";
        if (transformedData.lifeCycle === "Unknown") transformedData.lifeCycle = "Summer annual";
        
        // Handle scientific name - if it's too long, it's a description, try to extract the name
        if (transformedData.scientificName && (transformedData.scientificName.length > 100 || transformedData.scientificName.includes('.'))) {
          const longText = transformedData.scientificName;
          transformedData.scientificDescription = longText;
          
          // Try to extract scientific name from long text
          const scientificMatch = longText.match(/(?:scientific name[:\s]+)?([A-Z][a-z]+\s+[a-z]+)/i);
          if (scientificMatch && scientificMatch[1]) {
            transformedData.scientificName = scientificMatch[1];
          } else {
            transformedData.scientificName = "Under Analysis";
          }
          
          // Try to extract family from long text
          const familyMatch = longText.match(/family[:\s]+([A-Z][a-z]+aceae|[A-Z][a-z]+ae)/i);
          if (familyMatch && familyMatch[1]) {
            transformedData.family = familyMatch[1];
          }
        }
        
        if (transformedData.scientificName === "Unknown" || transformedData.scientificName === "Requires identification" || transformedData.scientificName === "Not identified") {
          transformedData.scientificName = "Under Analysis";
        }
        if (transformedData.family === "Unknown" || transformedData.family === "Requires identification" || transformedData.family === "Not identified") {
          transformedData.family = "Under Analysis";
        }
      }
      
      setResult(transformedData);
    } catch (err: unknown) {
      console.error("Diagnosis error:", err);
      const errorMessage = err instanceof Error ? err.message : "Could not analyze image. Please try again.";
      toast({ title: t.diagnosis.analysisFailed, description: errorMessage, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const plantParts = [
    { name: "Leaf", icon: "🍃" }, { name: "Stem", icon: "🌿" }, { name: "Root", icon: "🌱" }, { name: "Fruit", icon: "🍎" },
    { name: "Pod/Seed", icon: "🫘" }, { name: "Flower", icon: "🌸" }, { name: "Insect", icon: "🐛" }, { name: "Full Plant", icon: "🌳" },
  ];

  const isSoilResult = result?._mode === "soil";
  const isFertilizerResult = result?._mode === "fertilizer";
  const isWeedResult = result?._mode === "weed";

  console.log("Result:", result);
  console.log("isSoilResult:", isSoilResult);
  console.log("isFertilizerResult:", isFertilizerResult);
  console.log("isWeedResult:", isWeedResult);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }} 
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center"
          >
            <Sparkles size={24} className="text-primary" />
          </motion.div>
          <div>
            <motion.h1 
              className="text-2xl font-display font-bold text-foreground"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
              transition={{ type: "spring", stiffness: 300, y: { repeat: 2, duration: 0.3 } }}
            >
              {t.diagnosis.title}
            </motion.h1>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {t.diagnosis.poweredBy}
            </motion.p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {[
            { id: "disease" as const, label: `🌿 ${t.diagnosis.modePlant}`, icon: Bug },
            { id: "soil" as const, label: `🪨 ${t.diagnosis.modeSoil}`, icon: Mountain },
            { id: "fertilizer" as const, label: `🧪 ${t.diagnosis.modeFertilizer}`, icon: FlaskConical },
            { id: "weed" as const, label: `🌾 ${t.diagnosis.modeWeed}`, icon: Sprout },
          ].map((m, i) => (
            <motion.button 
              key={m.id}
              onClick={() => { setMode(m.id); setResult(null); }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all ${
                mode === m.id ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <motion.span
                animate={mode === m.id ? { y: [0, -3, 0], rotate: [0, 10, -10, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <m.icon size={18} />
              </motion.span>
              <motion.span
                animate={mode === m.id ? { y: [0, -2, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
              >
                {m.label}
              </motion.span>
            </motion.button>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ y: -3 }}
          className="glass-card p-6 mb-6"
        >
          <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleUpload} className="hidden" />
          <AnimatePresence mode="wait">
            {!image ? (
              <motion.button 
                key="upload" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => fileRef.current?.click()}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-dashed border-border/50 rounded-2xl p-10 text-center hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {mode === "soil" ? <Mountain size={32} className="text-primary" /> : mode === "fertilizer" ? <FlaskConical size={32} className="text-primary" /> : mode === "weed" ? <Sprout size={32} className="text-primary" /> : <Camera size={32} className="text-primary" />}
                </motion.div>
                <motion.p 
                  className="text-foreground font-semibold text-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                >
                  {mode === "soil" ? t.diagnosis.uploadSoil : mode === "fertilizer" ? t.diagnosis.uploadFertilizer : mode === "weed" ? t.diagnosis.uploadWeed : t.diagnosis.upload}
                </motion.p>
                <p className="text-sm text-muted-foreground mt-1">
                  {mode === "soil" ? t.diagnosis.photoHintSoil : mode === "fertilizer" ? t.diagnosis.photoHintFertilizer : mode === "weed" ? t.diagnosis.photoHintWeed : t.diagnosis.photoHint}
                </p>
              </motion.button>
            ) : (
              <motion.div key="preview" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="relative">
                  <motion.img 
                    src={image} 
                    alt="Uploaded" 
                    className="w-full max-h-64 object-contain rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                  <motion.button 
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.1 }}
                    onClick={() => { setImage(null); setResult(null); }}
                    className="absolute top-2 right-2 bg-destructive/90 text-destructive-foreground text-xs px-3 py-1.5 rounded-xl font-medium"
                  >
                    {t.diagnosis.remove}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {image && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
              {/* Plant part selector only for disease mode */}
              {mode === "disease" && (
                <>
                  <motion.label 
                    className="text-sm font-medium text-foreground mb-2 block"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    🌿 {t.diagnosis.affectedPart}
                  </motion.label>
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    {plantParts.map((part, i) => (
                      <motion.button 
                        key={part.name} 
                        whileTap={{ scale: 0.9 }} 
                        whileHover={{ y: -4, scale: 1.08 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 400, delay: i * 0.04 }}
                        onClick={() => setPlantPart(part.name)}
                        className={`relative flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl text-xs transition-all ${plantPart === part.name ? "text-primary-foreground font-medium shadow-lg" : "text-secondary-foreground hover:bg-muted"}`}
                      >
                        <motion.span 
                          className="relative z-10 text-lg"
                          animate={plantPart === part.name ? { y: [0, -3, 0], scale: [1, 1.2, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                          {part.icon}
                        </motion.span>
                        <motion.span 
                          className="relative z-10"
                          animate={plantPart === part.name ? { y: [0, -2, 0] } : {}}
                          transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
                        >
                          {translatePlantPart(part.name, lang)}
                        </motion.span>
                        {plantPart === part.name && <motion.div layoutId="plant-part" className="absolute inset-0 bg-primary rounded-xl" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                      </motion.button>
                    ))}
                  </div>
                </>
              )}

              <motion.button 
                whileTap={{ scale: 0.97 }} 
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={analyze} 
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
              >
                {loading ? (
                  <><Loader2 size={20} className="animate-spin" />{t.diagnosis.analyzing}</>
                ) : (
                  <>
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Sparkles size={20} />
                    </motion.span>
                    {mode === "soil" ? t.diagnosis.analyzeSoil : mode === "fertilizer" ? t.diagnosis.analyzeFertilizer : mode === "weed" ? t.diagnosis.identifyWeed : t.diagnosis.analyze}
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {result && !isSoilResult && !isFertilizerResult && !isWeedResult && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="glass-card p-6 space-y-4">
              <motion.h2 
                className="text-xl font-display font-bold text-foreground flex items-center gap-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: 2, duration: 0.3 }}
              >
                <motion.span animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <CheckCircle size={24} className="text-primary" />
                </motion.span>
                {t.diagnosis.result}
              </motion.h2>
              <motion.div 
                className="bg-secondary/50 rounded-2xl p-4"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <motion.h3 
                    className="font-bold text-foreground text-lg"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {result.disease}
                  </motion.h3>
                  <motion.span 
                    className={`px-3 py-1 rounded-xl text-xs font-bold ${
                      result.severity === "Critical" ? "bg-destructive/30 text-destructive" :
                      result.severity === "High" ? "bg-destructive/20 text-destructive" :
                      result.severity === "Medium" ? "bg-warning/20 text-warning" :
                      "bg-success/20 text-success"
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {result.severity} {t.diagnosis.severity}
                  </motion.span>
                </div>
                <p className="text-sm text-muted-foreground">{t.diagnosis.affected}: {result.affectedPart} • {t.diagnosis.confidence}: {result.confidence}%</p>
                {result.cause && <p className="text-sm text-muted-foreground mt-1">{t.diagnosis.cause}: {result.cause}</p>}
              </motion.div>
              {result.symptoms && (
                <motion.div 
                  className="bg-warning/10 rounded-2xl p-4 border border-warning/20"
                  whileHover={{ y: -2 }}
                >
                  <motion.h4 
                    className="font-semibold text-warning mb-2 flex items-center gap-2"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Bug size={16} /> {t.diagnosis.symptoms}
                  </motion.h4>
                  <p className="text-sm text-foreground">{result.symptoms}</p>
                </motion.div>
              )}
              <div className="space-y-3">
                <motion.div 
                  className="bg-success/10 rounded-2xl p-4 border border-success/20"
                  whileHover={{ y: -2 }}
                >
                  <motion.h4 
                    className="font-semibold text-success mb-2 flex items-center gap-2"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                  >
                    <Pill size={16} /> {t.diagnosis.treatment}
                  </motion.h4>
                  <p className="text-sm text-foreground">{result.treatment}</p>
                </motion.div>
                {result.organicTreatment && (
                  <motion.div 
                    className="bg-success/5 rounded-2xl p-4 border border-success/10"
                    whileHover={{ y: -2 }}
                  >
                    <motion.h4 
                      className="font-semibold text-success mb-2 flex items-center gap-2"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                    >
                      <Leaf size={16} /> {t.diagnosis.organicTreatment}
                    </motion.h4>
                    <p className="text-sm text-foreground">{result.organicTreatment}</p>
                  </motion.div>
                )}
                <motion.div 
                  className="bg-info/10 rounded-2xl p-4 border border-info/20"
                  whileHover={{ y: -2 }}
                >
                  <motion.h4 
                    className="font-semibold text-info mb-2"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                  >
                    🛡️ {t.diagnosis.prevention}
                  </motion.h4>
                  <p className="text-sm text-foreground">{result.prevention}</p>
                </motion.div>
                {result.soilCare && (
                  <motion.div 
                    className="bg-accent/10 rounded-2xl p-4 border border-accent/20"
                    whileHover={{ y: -2 }}
                  >
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><Mountain size={16} /> 🪨 Soil Maintenance</h4>
                    <p className="text-sm text-foreground">{result.soilCare}</p>
                  </motion.div>
                )}
                {result.waterQuantity && (
                  <motion.div 
                    className="bg-info/10 rounded-2xl p-4 border border-info/20"
                    whileHover={{ y: -2 }}
                  >
                    <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Droplets size={16} /> 💧 Water Requirement</h4>
                    <p className="text-sm text-foreground">{result.waterQuantity}</p>
                  </motion.div>
                )}
              </div>
              
              {/* Cultivation Tips Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-5 border border-primary/20 mt-4"
              >
                <motion.h4 
                  className="font-bold text-primary text-lg mb-3 flex items-center gap-2"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sprout size={20} /> 🌱 {t.diagnosis.cultivationTipsTitle}
                </motion.h4>
                <div className="space-y-2">
                  {[
                    t.diagnosis.cultivationTip1,
                    t.diagnosis.cultivationTip2,
                    t.diagnosis.cultivationTip3,
                    t.diagnosis.cultivationTip4,
                    t.diagnosis.cultivationTip5,
                    t.diagnosis.cultivationTip6
                  ].map((tip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-success mt-0.5">✓</span>
                      <span>{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.a 
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -4, scale: 1.02 }}
                href={buildWhatsAppLink(`🔬 AI Disease Diagnosis:\n\nDisease: ${result.disease}\nSeverity: ${result.severity}\nPart: ${result.affectedPart}\nConfidence: ${result.confidence}%\n\nPlease advise on treatment.`)}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-success hover:bg-success/90 text-success-foreground py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                💬 {t.diagnosis.askExpert}
              </motion.a>
            </motion.div>
          )}

          {/* Fertilizer Detection Results */}
          {result && isFertilizerResult && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="glass-card p-6 space-y-4">
              <motion.h2 
                className="text-xl font-display font-bold text-foreground flex items-center gap-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: 2, duration: 0.3 }}
              >
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <CheckCircle size={24} className="text-primary" />
                </motion.span>
                🧪 Fertilizer Analysis Report
              </motion.h2>

              <motion.div className="bg-secondary/50 rounded-2xl p-4" whileHover={{ scale: 1.01 }}>
                <motion.h3 className="font-bold text-foreground text-lg mb-1" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  {result.fertilizerName}
                </motion.h3>
                <p className="text-sm text-muted-foreground">Type: {result.fertilizerType}</p>
                {result.quality && result.quality !== "Cannot Determine" && (
                  <motion.span 
                    className={`inline-block mt-2 px-3 py-1 rounded-xl text-xs font-bold ${
                      result.quality === "Good" ? "bg-success/20 text-success" :
                      result.quality === "Poor" ? "bg-destructive/20 text-destructive" :
                      "bg-warning/20 text-warning"
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {result.quality} Quality
                  </motion.span>
                )}
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "🧬 Composition", value: result.composition },
                  { label: "🌿 Nutrients", value: result.nutrients },
                  { label: "📅 Best Season", value: result.bestSeason },
                  { label: "🪨 Soil Suitability", value: result.soilSuitability },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    className="bg-card border border-border/50 rounded-xl p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="font-bold text-sm mt-0.5 text-foreground">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div className="bg-success/10 rounded-2xl p-4 border border-success/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2"><Sprout size={16} /> Suitable Crops</h4>
                <p className="text-sm text-foreground">{result.suitableCrops}</p>
              </motion.div>

              <motion.div className="bg-primary/10 rounded-2xl p-4 border border-primary/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><FlaskConical size={16} /> Application Method</h4>
                <p className="text-sm text-foreground">{result.applicationMethod}</p>
              </motion.div>

              <motion.div className="bg-info/10 rounded-2xl p-4 border border-info/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Droplets size={16} /> Dosage</h4>
                <p className="text-sm text-foreground">{result.dosage}</p>
              </motion.div>

              {result.waterQuantity && (
                <motion.div className="bg-info/15 rounded-2xl p-4 border border-info/25" whileHover={{ y: -2 }}>
                  <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Droplets size={16} /> 💧 Water Requirement</h4>
                  <p className="text-sm text-foreground">{result.waterQuantity}</p>
                </motion.div>
              )}

              <motion.div className="bg-success/5 rounded-2xl p-4 border border-success/10" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2"><Leaf size={16} /> Organic Alternatives</h4>
                <p className="text-sm text-foreground">{result.alternatives}</p>
              </motion.div>

              <motion.div className="bg-warning/10 rounded-2xl p-4 border border-warning/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-warning mb-2 flex items-center gap-2"><ShieldAlert size={16} /> ⚠️ Precautions</h4>
                <p className="text-sm text-foreground">{result.precautions}</p>
              </motion.div>

              {result.warnings && result.warnings !== "None" && result.warnings !== "None detected" && (
                <motion.div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20" whileHover={{ y: -2 }}>
                  <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2"><AlertTriangle size={16} /> Warnings</h4>
                  <p className="text-sm text-foreground">{result.warnings}</p>
                </motion.div>
              )}

              <motion.a 
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -4, scale: 1.02 }}
                href={buildWhatsAppLink(`🧪 AI Fertilizer Analysis:\n\nFertilizer: ${result.fertilizerName}\nType: ${result.fertilizerType}\nComposition: ${result.composition}\n\nPlease advise on usage.`)}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-success hover:bg-success/90 text-success-foreground py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                💬 Ask Expert on WhatsApp
              </motion.a>
            </motion.div>
          )}

          {/* Soil Detection Results */}
          {result && isSoilResult && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="glass-card p-6 space-y-4">
              <motion.h2 
                className="text-xl font-display font-bold text-foreground flex items-center gap-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: 2, duration: 0.3 }}
              >
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <CheckCircle size={24} className="text-primary" />
                </motion.span>
                Soil Analysis Report
              </motion.h2>

              <motion.div 
                className="bg-secondary/50 rounded-2xl p-4"
                whileHover={{ scale: 1.01 }}
              >
                <motion.h3 
                  className="font-bold text-foreground text-lg mb-1"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🪨 {result.soilType}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{result.color}</p>
                <p className="text-sm text-muted-foreground mt-1">Texture: {result.texture}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: `💧 ${t.diagnosis.moisture}`, value: result.moistureLevel, color: result.moistureLevel === "High" ? "text-info" : result.moistureLevel === "Low" ? "text-warning" : "text-foreground" },
                  { label: `🧪 ${t.diagnosis.phEstimate}`, value: result.phEstimate, color: "text-foreground" },
                  { label: `🌱 ${t.diagnosis.organicMatter}`, value: result.organicMatter, color: result.organicMatter === "High" ? "text-success" : result.organicMatter === "Low" ? "text-destructive" : "text-warning" },
                  { label: `⭐ ${t.diagnosis.fertility}`, value: result.fertility, color: result.fertility === "High" || result.fertility === "Very High" ? "text-success" : result.fertility === "Low" ? "text-destructive" : "text-warning" },
                  { label: `💦 ${t.diagnosis.waterRetention}`, value: result.waterRetention, color: "text-foreground" },
                  { label: `🚰 ${t.diagnosis.drainage}`, value: result.drainage, color: "text-foreground" },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    className="bg-card border border-border/50 rounded-xl p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <motion.p 
                      className={`font-bold text-sm mt-0.5 ${stat.color}`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-success/10 rounded-2xl p-4 border border-success/20"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2"><Sprout size={16} /> {t.diagnosis.fertilityMaintenance}</h4>
                <p className="text-sm text-foreground">{result.fertilityTips}</p>
              </motion.div>

              <motion.div 
                className="bg-primary/10 rounded-2xl p-4 border border-primary/20"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><Mountain size={16} /> {t.diagnosis.soilMaintenance}</h4>
                <p className="text-sm text-foreground">{result.soilMaintenance}</p>
              </motion.div>

              <motion.div 
                className="bg-info/10 rounded-2xl p-4 border border-info/20"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Leaf size={16} /> Suitable Crops</h4>
                <p className="text-sm text-foreground">{result.suitableCrops}</p>
              </motion.div>

              {result.waterQuantity && (
                <motion.div 
                  className="bg-info/15 rounded-2xl p-4 border border-info/25"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Droplets size={16} /> 💧 Irrigation Water Requirement</h4>
                  <p className="text-sm text-foreground">{result.waterQuantity}</p>
                </motion.div>
              )}

              <motion.div 
                className="bg-accent/10 rounded-2xl p-4 border border-accent/20"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FlaskConical size={16} /> Recommended Improvements</h4>
                <p className="text-sm text-foreground">{result.improvements}</p>
              </motion.div>

              {result.warnings && result.warnings !== "None" && result.warnings !== "None detected" && (
                <motion.div 
                  className="bg-warning/10 rounded-2xl p-4 border border-warning/20"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-semibold text-warning mb-2 flex items-center gap-2"><ShieldAlert size={16} /> ⚠️ Warnings</h4>
                  <p className="text-sm text-foreground">{result.warnings}</p>
                </motion.div>
              )}

              <motion.a 
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -4, scale: 1.02 }}
                href={buildWhatsAppLink(`🪨 AI Soil Analysis:\n\nSoil Type: ${result.soilType}\nFertility: ${result.fertility}\npH: ${result.phEstimate}\nOrganic Matter: ${result.organicMatter}\n\nPlease advise on soil improvement.`)}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-success hover:bg-success/90 text-success-foreground py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                💬 Ask Expert on WhatsApp
              </motion.a>
            </motion.div>
          )}

          {/* Weed Detection Results */}
          {result && isWeedResult && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="glass-card p-6 space-y-4">
              <motion.h2 
                className="text-xl font-display font-bold text-foreground flex items-center gap-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: 2, duration: 0.3 }}
              >
                <motion.span animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <CheckCircle size={24} className="text-primary" />
                </motion.span>
                🌾 {t.diagnosis.weedReport}
              </motion.h2>

              <motion.div className="bg-secondary/50 rounded-2xl p-4" whileHover={{ scale: 1.01 }}>
                <div className="flex justify-between items-start mb-2">
                  <motion.h3 className="font-bold text-foreground text-lg" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    {result.weedName}
                  </motion.h3>
                  <motion.span 
                    className={`px-3 py-1 rounded-xl text-xs font-bold ${
                      result.invasiveness === "Highly Invasive" ? "bg-destructive/30 text-destructive" :
                      result.invasiveness === "Moderately Invasive" ? "bg-warning/20 text-warning" :
                      "bg-success/20 text-success"
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {result.invasiveness}
                  </motion.span>
                </div>
                <p className="text-sm text-muted-foreground">{t.diagnosis.scientificName}: {result.scientificName}</p>
                {result.scientificDescription && (
                  <p className="text-xs text-muted-foreground mt-1 italic">{result.scientificDescription}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">{t.diagnosis.family}: {result.family}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: `🌱 ${t.diagnosis.weedType}`, value: result.weedType },
                  { label: `🌍 ${t.diagnosis.origin}`, value: result.origin },
                  { label: `📏 ${t.diagnosis.growthHabit}`, value: result.growthHabit },
                  { label: `🌿 ${t.diagnosis.lifeCycle}`, value: result.lifeCycle },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    className="bg-card border border-border/50 rounded-xl p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="font-bold text-sm mt-0.5 text-foreground">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div className="bg-warning/10 rounded-2xl p-4 border border-warning/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-warning mb-2 flex items-center gap-2"><Bug size={16} /> 🌾 {t.diagnosis.characteristics}</h4>
                <p className="text-sm text-foreground">{result.characteristics}</p>
              </motion.div>

              <motion.div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2"><AlertTriangle size={16} /> {t.diagnosis.impactOnCrops}</h4>
                <p className="text-sm text-foreground">{result.impactOnCrops}</p>
              </motion.div>

              <motion.div className="bg-info/10 rounded-2xl p-4 border border-info/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><Leaf size={16} /> {t.diagnosis.affectedCrops}</h4>
                <p className="text-sm text-foreground">{result.affectedCrops}</p>
              </motion.div>

              <motion.div className="bg-success/10 rounded-2xl p-4 border border-success/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2"><Pill size={16} /> {t.diagnosis.controlMethods}</h4>
                <p className="text-sm text-foreground">{result.controlMethods}</p>
              </motion.div>

              <motion.div className="bg-success/5 rounded-2xl p-4 border border-success/10" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2"><Leaf size={16} /> {t.diagnosis.organicControl}</h4>
                <p className="text-sm text-foreground">{result.organicControl}</p>
              </motion.div>

              <motion.div className="bg-primary/10 rounded-2xl p-4 border border-primary/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2"><FlaskConical size={16} /> {t.diagnosis.chemicalControl}</h4>
                <p className="text-sm text-foreground">{result.chemicalControl}</p>
              </motion.div>

              <motion.div className="bg-info/10 rounded-2xl p-4 border border-info/20" whileHover={{ y: -2 }}>
                <h4 className="font-semibold text-info mb-2 flex items-center gap-2"><ShieldAlert size={16} /> {t.diagnosis.preventionTips}</h4>
                <p className="text-sm text-foreground">{result.preventionTips}</p>
              </motion.div>

              {result.bestTimeToControl && (
                <motion.div className="bg-warning/10 rounded-2xl p-4 border border-warning/20" whileHover={{ y: -2 }}>
                  <h4 className="font-semibold text-warning mb-2">⏰ {t.diagnosis.bestTimeToControl}</h4>
                  <p className="text-sm text-foreground">{result.bestTimeToControl}</p>
                </motion.div>
              )}

              {result.economicImpact && (
                <motion.div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20" whileHover={{ y: -2 }}>
                  <h4 className="font-semibold text-destructive mb-2">💰 {t.diagnosis.economicImpact}</h4>
                  <p className="text-sm text-foreground">{result.economicImpact}</p>
                </motion.div>
              )}

              <motion.a 
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -4, scale: 1.02 }}
                href={buildWhatsAppLink(`🌾 AI Weed Identification:\n\nWeed: ${result.weedName}\nScientific Name: ${result.scientificName}\nInvasiveness: ${result.invasiveness}\n\nPlease advise on weed control methods.`)}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-success hover:bg-success/90 text-success-foreground py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                💬 Ask Expert on WhatsApp
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
