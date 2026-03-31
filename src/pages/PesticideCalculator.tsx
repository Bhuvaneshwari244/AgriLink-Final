import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Sprout, Trees, Plus, Minus, Search, Info, Volume2, ChevronDown, Trash2 } from "lucide-react";

interface Calculation {
  id: string;
  totalProduct: number;
  dosePerRefill: number;
  pumpRefills: number;
  area: number;
  unit: string;
  productDosage: number;
  waterAmount: number;
  pumpSize: number;
  timestamp: Date;
}

export default function PesticideCalculator() {
  const navigate = useNavigate();
  const [cropType, setCropType] = useState<"field" | "trees" | null>(null);
  const [area, setArea] = useState(1.0);
  const [unit, setUnit] = useState<"acre" | "hectare" | "gunta">("acre");
  const [productDosage, setProductDosage] = useState(0);
  const [waterAmount, setWaterAmount] = useState(0);
  const [pumpSize, setPumpSize] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [recentCalculations, setRecentCalculations] = useState<Calculation[]>([]);

  const calculateResults = () => {
    const totalProduct = productDosage * area;
    const totalWater = waterAmount * area;
    const dosePerRefill = totalWater > 0 ? totalProduct / (totalWater / pumpSize) : 0;
    const pumpRefills = totalWater > 0 ? Math.ceil(totalWater / pumpSize) : 0;

    return {
      totalProduct: totalProduct,
      dosePerRefill: dosePerRefill,
      pumpRefills: pumpRefills
    };
  };

  const results = calculateResults();

  const handleCalculate = () => {
    if (productDosage > 0 && waterAmount > 0) {
      const newCalculation: Calculation = {
        id: Date.now().toString(),
        totalProduct: results.totalProduct,
        dosePerRefill: results.dosePerRefill,
        pumpRefills: results.pumpRefills,
        area,
        unit,
        productDosage,
        waterAmount,
        pumpSize,
        timestamp: new Date()
      };
      setRecentCalculations([newCalculation, ...recentCalculations.slice(0, 4)]);
    }
  };

  const deleteCalculation = (id: string) => {
    setRecentCalculations(recentCalculations.filter(calc => calc.id !== id));
  };

  if (!cropType) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-6 max-w-2xl">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/tools")}
            className="flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all"
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft size={18} />
            Back to Tools
          </motion.button>

          <h1 className="text-3xl font-bold text-foreground mb-8">
            Pesticide calculator
          </h1>

          <h2 className="text-xl font-semibold text-foreground mb-6">
            What type of crop do you want to calculate pesticide dosage for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCropType("field")}
              className="glass-card p-6 text-left hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Sprout size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Field crops
              </h3>
              <p className="text-sm text-muted-foreground">
                Calculate dosage based on area planted with field crops
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCropType("trees")}
              className="glass-card p-6 text-left hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <Trees size={24} className="text-success" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Trees
              </h3>
              <p className="text-sm text-muted-foreground">
                Calculate dosage based on amount of water for all trees to treat
              </p>
            </motion.button>
          </div>

          {/* Recent Calculations Section */}
          <div className="glass-card p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 opacity-50">
              <svg viewBox="0 0 100 100" className="text-muted-foreground">
                <rect x="20" y="40" width="15" height="40" fill="currentColor" opacity="0.3" />
                <rect x="42" y="30" width="15" height="50" fill="currentColor" opacity="0.5" />
                <circle cx="70" cy="50" r="8" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Recent calculations
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Your recent calculations will appear here. Compare them to see how changes in total product, dose per pump, and pump refills.
            </p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header with Back Button and Title */}
        <div className="sticky top-0 z-10 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center gap-3">
            <motion.button
              onClick={() => navigate("/tools")}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={24} />
            </motion.button>
            <h1 className="text-xl font-bold text-foreground">{cropType === "field" ? "Field crops" : "Trees"}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-2xl">
          <div className="space-y-6">
            {/* Per Application Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Per application
                </h3>
                <button className="flex items-center gap-2 text-primary font-medium">
                  <Volume2 size={18} />
                  Listen
                </button>
              </div>
              
              <div className="bg-primary/10 rounded-3xl p-6 mb-4">
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Total product</div>
                  <div className="text-5xl font-bold text-foreground">
                    {results.totalProduct > 0 ? Math.round(results.totalProduct) : "---"} <span className="text-2xl">ml</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Info size={14} className="text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">Dose per refill</div>
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      {results.dosePerRefill > 0 ? Math.round(results.dosePerRefill) : "---"} <span className="text-sm">ml</span>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Info size={14} className="text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">Pump refills</div>
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      {results.pumpRefills > 0 ? results.pumpRefills : "---"} <span className="text-sm">time{results.pumpRefills !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>

              {productDosage > 0 && waterAmount > 0 && (
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-primary font-medium mx-auto"
                >
                  Calculation details
                  <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* Area to Treat */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Area to treat
              </h3>
              
              <div className="bg-muted/30 rounded-3xl p-6 mb-4">
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button
                    onClick={() => setArea(Math.max(0.1, area - 0.1))}
                    className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Minus size={24} className="text-primary" />
                  </button>
                  <div className="text-center min-w-[120px]">
                    <div className="text-6xl font-bold text-foreground">{area.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground capitalize mt-1">{unit}</div>
                  </div>
                  <button
                    onClick={() => setArea(area + 0.1)}
                    className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Plus size={24} className="text-primary" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-foreground mb-3">Area unit</div>
                <div className="flex gap-3">
                  {(["acre", "hectare", "gunta"] as const).map((u) => (
                    <label
                      key={u}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="unit"
                        checked={unit === u}
                        onChange={() => setUnit(u)}
                        className="w-5 h-5 text-primary"
                      />
                      <span className="text-sm text-foreground capitalize">{u}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="bg-muted/30 rounded-3xl p-5">
              <h3 className="font-semibold text-foreground mb-2">
                Don't know dosage?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Search by formulation, crop and disease instead
              </p>
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search formulation"
                  className="w-full bg-background text-foreground pl-11 pr-4 py-3 rounded-full border border-border/50 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Product Dosage */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-foreground">Product dosage</h3>
                <Info size={16} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Product dosage needed per acre or hectare
              </p>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={productDosage || ""}
                  onChange={(e) => setProductDosage(Number(e.target.value))}
                  className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                  placeholder="0"
                />
                <select
                  className="bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 text-sm min-w-[100px]"
                  defaultValue="ml/ac"
                >
                  <option value="ml/ac">ml/ac</option>
                  <option value="l/ac">l/ac</option>
                  <option value="ml/ha">ml/ha</option>
                </select>
              </div>
            </div>

            {/* Water Amount */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-foreground">Water amount</h3>
                <Info size={16} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Water required to mix with product dosage
              </p>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={waterAmount || ""}
                  onChange={(e) => setWaterAmount(Number(e.target.value))}
                  className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                  placeholder="0"
                />
                <div className="bg-muted px-4 py-3 rounded-2xl border border-border/50 text-sm min-w-[100px] flex items-center justify-center">
                  l/ac
                </div>
              </div>
            </div>

            {/* Pump Size */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Pump size</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Volume of the pump
              </p>
              <select
                value={pumpSize}
                onChange={(e) => setPumpSize(Number(e.target.value))}
                className="w-full bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
              >
                <option value={10}>10 l</option>
                <option value={15}>15 l</option>
                <option value={20}>20 l</option>
                <option value={25}>25 l</option>
                <option value={30}>30 l</option>
              </select>
            </div>

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCalculate}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Calculate
            </motion.button>

            {/* Recent Calculations */}
            {recentCalculations.length > 0 && (
              <div className="bg-muted/30 rounded-3xl p-5">
                <h3 className="font-semibold text-foreground mb-4">
                  Recent calculations
                </h3>
                <div className="space-y-4">
                  {recentCalculations.map((calc) => (
                    <div key={calc.id} className="bg-background rounded-2xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="grid grid-cols-3 gap-4 flex-1">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Total product</div>
                            <div className="font-bold text-foreground">{Math.round(calc.totalProduct)} ml</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Dose per refill</div>
                            <div className="font-bold text-foreground">{Math.round(calc.dosePerRefill)} ml</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Pump refills</div>
                            <div className="font-bold text-foreground">{calc.pumpRefills} time{calc.pumpRefills !== 1 ? 's' : ''}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteCalculation(calc.id)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          <Trash2 size={18} className="text-muted-foreground" />
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-3 text-xs">
                        <div>
                          <div className="text-muted-foreground mb-1">Area to treat</div>
                          <div className="font-medium">{calc.area} {calc.unit}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">Product dosage</div>
                          <div className="font-medium">{calc.productDosage} ml/ac</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">Water amount</div>
                          <div className="font-medium">{calc.waterAmount} l/ac</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">Pump size</div>
                          <div className="font-medium">{calc.pumpSize} l</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
