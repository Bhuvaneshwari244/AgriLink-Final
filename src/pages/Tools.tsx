import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";
import { calculatorTranslations } from "@/data/calculatorTranslations";
import { 
  Bug, Mountain, FlaskConical, Sprout, 
  Calculator, Tractor, Leaf, AlertTriangle,
  Camera, BookOpen
} from "lucide-react";

export default function Tools() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = calculatorTranslations[lang] || calculatorTranslations.en;

  const detectionTools = [
    {
      id: "disease",
      title: t.tools.plantDisease,
      subtitle: t.tools.plantDiseaseDesc,
      icon: Bug,
      color: "from-green-500 to-emerald-600",
      route: "/diagnosis?mode=disease"
    },
    {
      id: "soil",
      title: t.tools.soilDetection,
      subtitle: t.tools.soilDetectionDesc,
      icon: Mountain,
      color: "from-amber-600 to-orange-600",
      route: "/diagnosis?mode=soil"
    },
    {
      id: "fertilizer",
      title: t.tools.fertilizer,
      subtitle: t.tools.fertilizerDesc,
      icon: FlaskConical,
      color: "from-blue-500 to-cyan-600",
      route: "/diagnosis?mode=fertilizer"
    },
    {
      id: "weed",
      title: t.tools.weedDetection,
      subtitle: t.tools.weedDetectionDesc,
      icon: Sprout,
      color: "from-lime-500 to-green-600",
      route: "/diagnosis?mode=weed"
    }
  ];

  const libraryTools = [
    {
      id: "crops",
      title: t.tools.crops,
      subtitle: t.tools.cropsDesc,
      icon: Leaf,
      color: "from-green-400 to-emerald-500",
      route: "/crops",
      badge: null
    },
    {
      id: "cultivation-tips",
      title: t.tools.cultivationTips,
      subtitle: t.tools.cultivationTipsDesc,
      icon: BookOpen,
      color: "from-purple-500 to-indigo-600",
      route: "/cultivation-tips",
      badge: null
    },
    {
      id: "crop-health",
      title: t.tools.cropHealth,
      subtitle: t.tools.cropHealthDesc,
      icon: Sprout,
      color: "from-teal-500 to-cyan-600",
      route: "/crop-health",
      badge: null
    },
    {
      id: "crop-calendar",
      title: t.tools.cropCalendar,
      subtitle: t.tools.cropCalendarDesc,
      icon: AlertTriangle,
      color: "from-orange-500 to-amber-600",
      route: "/crop-calendar",
      badge: null
    }
  ];

  const calculatorTools = [
    {
      id: "fertilizer-calc",
      title: t.tools.fertilizerCalculator,
      subtitle: t.tools.fertilizerCalculatorDesc,
      icon: Calculator,
      color: "from-blue-500 to-indigo-600",
      route: "/fertilizer-calculator",
      badge: null
    },
    {
      id: "pesticide-calc",
      title: t.tools.pesticideCalculator,
      subtitle: t.tools.pesticideCalculatorDesc,
      icon: FlaskConical,
      color: "from-teal-500 to-cyan-600",
      route: "/pesticide-calculator",
      badge: null
    },
    {
      id: "farming-calc",
      title: t.tools.farmingCalculator,
      subtitle: t.tools.farmingCalculatorDesc,
      icon: Tractor,
      color: "from-amber-500 to-orange-600",
      route: "/farming-calculator",
      badge: null
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            {t.tools.title}
          </h1>
          <p className="text-muted-foreground">
            {t.tools.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column - Detection Tools */}
          <div className="space-y-4 md:space-y-6">
            {/* Take a Picture Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/diagnosis")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-colors shadow-lg"
              >
                <Camera size={20} className="md:w-6 md:h-6" />
                {t.tools.takePicture}
              </motion.button>
            </motion.div>

            {/* Detection Tools Grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 px-1">
                {t.tools.detectionTools}
              </h2>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {detectionTools.map((tool, index) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(tool.route)}
                    className="glass-card p-3 md:p-4 text-left hover:shadow-lg transition-all rounded-xl md:rounded-2xl"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-2 md:mb-3`}>
                      <tool.icon size={18} className="md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs md:text-sm mb-1 line-clamp-1">
                      {tool.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">
                      {tool.subtitle}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Library & Calculators */}
          <div className="space-y-4 md:space-y-6">
            {/* Library Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 px-1">
                {t.tools.library}
              </h2>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {libraryTools.map((tool, index) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(tool.route)}
                    className="glass-card p-3 md:p-4 text-left hover:shadow-lg transition-all relative rounded-xl md:rounded-2xl"
                  >
                    {tool.badge && (
                      <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 bg-primary text-primary-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full font-bold">
                        {tool.badge}
                      </span>
                    )}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-2 md:mb-3`}>
                      <tool.icon size={18} className="md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs md:text-sm mb-1 line-clamp-1">
                      {tool.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2">
                      {tool.subtitle}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Calculators Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 px-1">
                {t.tools.calculators}
              </h2>
              <div className="space-y-2 md:space-y-3">
                {calculatorTools.map((tool, index) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(tool.route)}
                    className="glass-card p-3 md:p-4 w-full text-left hover:shadow-lg transition-all flex items-center gap-3 md:gap-4 relative rounded-xl md:rounded-2xl"
                  >
                    {tool.badge && (
                      <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 bg-primary text-primary-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full font-bold">
                        {tool.badge}
                      </span>
                    )}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0`}>
                      <tool.icon size={18} className="md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-xs md:text-sm mb-0.5 md:mb-1 truncate">
                        {tool.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-1 md:line-clamp-2">
                        {tool.subtitle}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
