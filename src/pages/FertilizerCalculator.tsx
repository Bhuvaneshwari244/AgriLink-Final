import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Calculator, Plus, Minus, ArrowLeft } from "lucide-react";

export default function FertilizerCalculator() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [crop, setCrop] = useState("wheat");
  const [area, setArea] = useState(0.5);
  const [unit, setUnit] = useState("acre");

  const crops = [
    { id: "wheat", name: "Wheat", icon: "🌾" },
    { id: "rice", name: "Rice", icon: "🌾" },
    { id: "maize", name: "Maize", icon: "🌽" },
    { id: "cotton", name: "Cotton", icon: "🌿" },
    { id: "sugarcane", name: "Sugarcane", icon: "🎋" },
    { id: "potato", name: "Potato", icon: "🥔" },
    { id: "tomato", name: "Tomato", icon: "🍅" },
    { id: "onion", name: "Onion", icon: "🧅" }
  ];

  const fertilizerData: Record<string, { n: number; p: number; k: number }> = {
    wheat: { n: 120, p: 60, k: 40 },
    rice: { n: 100, p: 50, k: 50 },
    maize: { n: 120, p: 60, k: 40 },
    cotton: { n: 120, p: 60, k: 60 },
    sugarcane: { n: 250, p: 115, k: 115 },
    potato: { n: 150, p: 80, k: 80 },
    tomato: { n: 120, p: 60, k: 60 },
    onion: { n: 100, p: 50, k: 50 }
  };

  const conversionFactor = unit === "acre" ? 1 : unit === "hectare" ? 2.47 : 0.025;
  const npk = fertilizerData[crop];
  const n = (npk.n * area * conversionFactor).toFixed(1);
  const p = (npk.p * area * conversionFactor).toFixed(1);
  const k = (npk.k * area * conversionFactor).toFixed(1);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/tools")}
          className="flex items-center gap-2 text-primary mb-4 hover:gap-3 transition-all"
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft size={18} />
          Back to Tools
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-3">
            <Calculator size={32} className="text-primary" />
            Fertilizer Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate NPK fertilizer requirements for your crops
          </p>
        </motion.div>

        <div className="glass-card p-6 space-y-6">
          {/* Crop Selection */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              🌾 Select Crop
            </label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="w-full bg-secondary text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none"
            >
              {crops.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Unit Selection */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              📏 Unit
            </label>
            <div className="flex gap-2">
              {["acre", "hectare", "gunta"].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                    unit === u
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {u.charAt(0).toUpperCase() + u.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Area Input */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              📐 Plot Size
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setArea(Math.max(0.1, area - 0.1))}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-muted flex items-center justify-center"
              >
                <Minus size={20} />
              </button>
              <div className="flex-1 text-center">
                <div className="text-4xl font-bold text-foreground">{area.toFixed(1)}</div>
                <div className="text-sm text-muted-foreground capitalize">{unit}</div>
              </div>
              <button
                onClick={() => setArea(area + 0.1)}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-muted flex items-center justify-center"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-6 border border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-4">
              💊 Nutrient Quantities
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card/50 rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">N:</div>
                <div className="text-2xl font-bold text-foreground">{n} kg</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {(parseFloat(n) * 2.2).toFixed(1)} kg/ac
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">P:</div>
                <div className="text-2xl font-bold text-foreground">{p} kg</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {(parseFloat(p) * 2.2).toFixed(1)} kg/ac
                </div>
              </div>
              <div className="bg-card/50 rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">K:</div>
                <div className="text-2xl font-bold text-foreground">{k} kg</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {(parseFloat(k) * 2.2).toFixed(1)} kg/ac
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">
              📋 Fertilizer Combinations
            </h3>
            
            <div className="bg-secondary/50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-2">MOP/TSP/Urea</h4>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground">MOP</div>
                  <div className="font-bold">{(parseFloat(n) * 0.45).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">1/4 Bag</div>
                </div>
                <div>
                  <div className="text-muted-foreground">TSP</div>
                  <div className="font-bold">{(parseFloat(p) * 1.08).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">1/2 Bag</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Urea</div>
                  <div className="font-bold">{(parseFloat(k) * 1.32).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">1 Bag</div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-2">DAP/MOP/Urea</h4>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground">DAP</div>
                  <div className="font-bold">{(parseFloat(n) * 1.08).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">1/2 Bag</div>
                </div>
                <div>
                  <div className="text-muted-foreground">MOP</div>
                  <div className="font-bold">{(parseFloat(p) * 0.45).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">1/4 Bag</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Urea</div>
                  <div className="font-bold">{(parseFloat(k) * 1.05).toFixed(0)} kg</div>
                  <div className="text-xs text-muted-foreground">3/4 Bag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
