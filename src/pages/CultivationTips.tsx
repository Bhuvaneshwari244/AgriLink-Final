import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Search, Leaf, Droplets, Bug, Sprout, Sun, Wind, ThermometerSun, ArrowLeft } from "lucide-react";

export default function CultivationTips() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", name: "All Tips", icon: Leaf },
    { id: "Watering", name: "Watering", icon: Droplets },
    { id: "Pest Control", name: "Pest Control", icon: Bug },
    { id: "Planting", name: "Planting", icon: Sprout },
    { id: "Weather", name: "Weather", icon: Sun },
    { id: "Soil", name: "Soil Care", icon: Wind },
    { id: "Climate", name: "Climate", icon: ThermometerSun }
  ];

  const cultivationTips = [
    {
      id: 1,
      category: "Watering",
      title: "Proper Irrigation Timing",
      description: "Water crops early morning or late evening to minimize evaporation. Avoid watering during peak sunlight hours.",
      tips: [
        "Best time: 6-8 AM or 5-7 PM",
        "Check soil moisture before watering",
        "Use drip irrigation for water efficiency",
        "Avoid overwatering to prevent root rot"
      ]
    },
    {
      id: 2,
      category: "Pest Control",
      title: "Natural Pest Management",
      description: "Use organic methods to control pests without harmful chemicals. Neem oil and companion planting are effective.",
      tips: [
        "Spray neem oil solution weekly",
        "Plant marigolds to repel pests",
        "Use sticky traps for flying insects",
        "Encourage beneficial insects like ladybugs"
      ]
    },
    {
      id: 3,
      category: "Planting",
      title: "Seed Selection & Spacing",
      description: "Choose disease-resistant varieties and maintain proper spacing for healthy growth and air circulation.",
      tips: [
        "Use certified seeds from reliable sources",
        "Follow recommended spacing guidelines",
        "Plant at correct depth (2-3 times seed size)",
        "Rotate crops each season"
      ]
    },
    {
      id: 4,
      category: "Soil",
      title: "Soil Health Management",
      description: "Maintain soil fertility through organic matter addition and proper pH management.",
      tips: [
        "Add compost or FYM regularly",
        "Test soil pH annually",
        "Practice green manuring",
        "Avoid soil compaction"
      ]
    },
    {
      id: 5,
      category: "Weather",
      title: "Weather-Based Farming",
      description: "Monitor weather forecasts and adjust farming activities accordingly to protect crops.",
      tips: [
        "Check 7-day weather forecast daily",
        "Protect crops before heavy rain",
        "Provide shade during heat waves",
        "Harvest before predicted storms"
      ]
    },
    {
      id: 6,
      category: "Planting",
      title: "Transplanting Best Practices",
      description: "Proper transplanting techniques ensure better survival and faster establishment of seedlings.",
      tips: [
        "Transplant in evening or cloudy days",
        "Water seedlings before transplanting",
        "Handle roots carefully",
        "Provide shade for 2-3 days after transplanting"
      ]
    },
    {
      id: 7,
      category: "Pest Control",
      title: "Integrated Pest Management (IPM)",
      description: "Combine multiple pest control methods for effective and sustainable pest management.",
      tips: [
        "Monitor pest population regularly",
        "Use pheromone traps",
        "Apply pesticides only when threshold reached",
        "Maintain field hygiene"
      ]
    },
    {
      id: 8,
      category: "Watering",
      title: "Water Conservation Techniques",
      description: "Implement water-saving methods to reduce water usage while maintaining crop health.",
      tips: [
        "Use mulching to retain moisture",
        "Install drip irrigation system",
        "Collect rainwater for irrigation",
        "Group plants by water needs"
      ]
    },
    {
      id: 9,
      category: "Soil",
      title: "Organic Fertilization",
      description: "Use organic fertilizers to improve soil health and provide balanced nutrition to crops.",
      tips: [
        "Apply well-decomposed FYM",
        "Use vermicompost for better results",
        "Apply green manure crops",
        "Use bio-fertilizers like Rhizobium"
      ]
    },
    {
      id: 10,
      category: "Climate",
      title: "Season-Specific Care",
      description: "Adjust farming practices based on seasonal changes for optimal crop performance.",
      tips: [
        "Summer: Increase irrigation frequency",
        "Monsoon: Ensure proper drainage",
        "Winter: Protect from frost",
        "Spring: Focus on pest prevention"
      ]
    }
  ];

  const filtered = cultivationTips.filter(tip =>
    (selectedCategory === "All" || tip.category === selectedCategory) &&
    (tip.title.toLowerCase().includes(search.toLowerCase()) ||
     tip.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/tools")}
          className="flex items-center gap-2 text-primary mb-4 hover:gap-3 transition-all"
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft size={18} />
          Back to Tools
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-3">
            <Leaf size={32} className="text-primary" />
            🌱 Cultivation Tips
          </h1>
          <p className="text-muted-foreground">
            Expert farming advice for better crop management
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-4"
        >
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search cultivation tips..."
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "text-primary-foreground font-medium"
                  : "text-secondary-foreground hover:bg-muted"
              }`}
            >
              <cat.icon size={16} />
              <span className="relative z-10">{cat.name}</span>
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="category-bg"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tips Count */}
        <p className="text-sm text-muted-foreground mb-4">
          <span className="font-bold text-primary">{filtered.length}</span> tips found
        </p>

        {/* Tips Grid */}
        <div className="space-y-4">
          {filtered.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {categories.find(c => c.id === tip.category)?.icon && (
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
                    >
                      {(() => {
                        const Icon = categories.find(c => c.id === tip.category)!.icon;
                        return <Icon size={20} className="text-primary" />;
                      })()}
                    </motion.div>
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    {tip.category}
                  </span>
                  <h3 className="font-bold text-foreground text-lg mt-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tip.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {tip.tips.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="text-success mt-0.5">✓</span>
                    <span>{t}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No cultivation tips found. Try a different search or category.</p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
