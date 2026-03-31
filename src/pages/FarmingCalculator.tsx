import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, IndianRupee, TrendingUp, Target, Store, Calculator, Trash2, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { calculatorTranslations } from "@/data/calculatorTranslations";

type CalculatorType = "max-budget" | "profit" | "yield" | "no-loss" | null;

interface Calculation {
  id: string;
  type: CalculatorType;
  result: number;
  inputs: Record<string, number>;
  timestamp: Date;
}

export default function FarmingCalculator() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { lang } = useLanguage();
  const t = calculatorTranslations[lang]?.farmingCalculator || calculatorTranslations.en.farmingCalculator;
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(null);
  const [recentCalculations, setRecentCalculations] = useState<Calculation[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentResult, setCurrentResult] = useState(0);

  // Maximum Input Budget states
  const [maxBudgetYield, setMaxBudgetYield] = useState(1);
  const [maxBudgetYieldUnit, setMaxBudgetYieldUnit] = useState("kg");
  const [maxBudgetPrice, setMaxBudgetPrice] = useState(10);

  // Estimated Profit states
  const [profitYield, setProfitYield] = useState(1);
  const [profitYieldUnit, setProfitYieldUnit] = useState("kg");
  const [profitPrice, setProfitPrice] = useState(10);
  const [profitExpenses, setProfitExpenses] = useState(0);

  // Required Yield states
  const [requiredYieldExpenses, setRequiredYieldExpenses] = useState(0);
  const [requiredYieldPrice, setRequiredYieldPrice] = useState(0);
  const [requiredYieldUnit, setRequiredYieldUnit] = useState("kg");

  // No Loss Price states
  const [noLossExpenses, setNoLossExpenses] = useState(0);
  const [noLossYield, setNoLossYield] = useState(0);
  const [noLossYieldUnit, setNoLossYieldUnit] = useState("kg");

  // Unit conversion helper
  const convertToKg = (value: number, unit: string): number => {
    switch (unit) {
      case "quintal":
        return value * 100; // 1 quintal = 100 kg
      case "ton":
        return value * 1000; // 1 ton = 1000 kg
      default:
        return value; // kg
    }
  };

  const calculatorOptions = [
    {
      id: "max-budget",
      title: t.maxInputBudget,
      description: t.maxInputBudgetDesc,
      icon: IndianRupee,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "profit",
      title: t.estimatedProfit,
      description: t.estimatedProfitDesc,
      icon: TrendingUp,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "yield",
      title: t.requiredYield,
      description: t.requiredYieldDesc,
      icon: Target,
      color: "from-green-400 to-green-600"
    },
    {
      id: "no-loss",
      title: t.noLossPrice,
      description: t.noLossPriceDesc,
      icon: Store,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const calculateMaxBudget = () => {
    const yieldInKg = convertToKg(maxBudgetYield, maxBudgetYieldUnit);
    const totalRevenue = yieldInKg * maxBudgetPrice;
    // Assuming 30% profit margin, max budget = 70% of revenue
    return totalRevenue * 0.7;
  };

  const calculateProfit = () => {
    const yieldInKg = convertToKg(profitYield, profitYieldUnit);
    const totalRevenue = yieldInKg * profitPrice;
    return totalRevenue - profitExpenses;
  };

  const calculateProfitMargin = () => {
    const yieldInKg = convertToKg(profitYield, profitYieldUnit);
    const totalRevenue = yieldInKg * profitPrice;
    if (totalRevenue === 0) return 0;
    return ((totalRevenue - profitExpenses) / totalRevenue) * 100;
  };

  const calculateROI = () => {
    if (profitExpenses === 0) return 0;
    const profit = calculateProfit();
    return (profit / profitExpenses) * 100;
  };

  const calculateRequiredYield = () => {
    if (requiredYieldPrice === 0) return 0;
    return requiredYieldExpenses / requiredYieldPrice;
  };

  const calculateNoLossPrice = () => {
    const yieldInKg = convertToKg(noLossYield, noLossYieldUnit);
    if (yieldInKg === 0) return 0;
    return noLossExpenses / yieldInKg;
  };

  const handleCalculate = () => {
    // Validation
    let isValid = true;
    let errorMessage = "";

    switch (calculatorType) {
      case "max-budget":
        if (maxBudgetYield <= 0 || maxBudgetPrice <= 0) {
          isValid = false;
          errorMessage = "Please enter valid yield and selling price values.";
        }
        break;
      case "profit":
        if (profitYield <= 0 || profitPrice <= 0) {
          isValid = false;
          errorMessage = "Please enter valid yield and selling price values.";
        }
        break;
      case "yield":
        if (requiredYieldExpenses <= 0 || requiredYieldPrice <= 0) {
          isValid = false;
          errorMessage = "Please enter valid expenses and selling price values.";
        }
        break;
      case "no-loss":
        if (noLossExpenses <= 0 || noLossYield <= 0) {
          isValid = false;
          errorMessage = "Please enter valid expenses and yield values.";
        }
        break;
    }

    if (!isValid) {
      toast({
        title: t.invalidInput,
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    let result = 0;
    let inputs: Record<string, number> = {};

    switch (calculatorType) {
      case "max-budget":
        result = calculateMaxBudget();
        inputs = { yield: maxBudgetYield, price: maxBudgetPrice };
        break;
      case "profit":
        result = calculateProfit();
        inputs = { yield: profitYield, price: profitPrice, expenses: profitExpenses };
        break;
      case "yield":
        result = calculateRequiredYield();
        inputs = { expenses: requiredYieldExpenses, price: requiredYieldPrice };
        break;
      case "no-loss":
        result = calculateNoLossPrice();
        inputs = { expenses: noLossExpenses, yield: noLossYield };
        break;
    }

    setCurrentResult(result);
    setShowResult(true);

    const newCalculation: Calculation = {
      id: Date.now().toString(),
      type: calculatorType,
      result,
      inputs,
      timestamp: new Date()
    };

    setRecentCalculations([newCalculation, ...recentCalculations.slice(0, 4)]);
    
    toast({
      title: t.calculationComplete,
      description: `${t.result}: ₹${Math.round(result)}`,
    });

    // Scroll to result
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteCalculation = (id: string) => {
    setRecentCalculations(recentCalculations.filter(calc => calc.id !== id));
  };

  const getCalculationTitle = (type: CalculatorType) => {
    return calculatorOptions.find(opt => opt.id === type)?.title || "";
  };

  if (!calculatorType) {
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
            {t.backToTools}
          </motion.button>

          <h1 className="text-3xl font-bold text-foreground mb-8">
            {t.title}
          </h1>

          <h2 className="text-xl font-semibold text-foreground mb-6">
            {t.whatToCalculate}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {calculatorOptions.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCalculatorType(option.id as CalculatorType)}
                className="glass-card p-6 text-left hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}>
                  <option.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Recent Calculations on Main Page */}
          {recentCalculations.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t.recentCalculations}
              </h3>
              <div className="space-y-3">
                {recentCalculations.map((calc) => {
                  // Format result based on calculator type
                  let resultDisplay = "";
                  switch (calc.type) {
                    case "yield":
                      resultDisplay = `${Math.round(calc.result)} kg`;
                      break;
                    case "no-loss":
                      resultDisplay = `₹${Math.round(calc.result)}/kg`;
                      break;
                    default:
                      resultDisplay = `₹${Math.round(calc.result)}`;
                  }

                  return (
                    <div key={calc.id} className="glass-card p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calculator size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-foreground">
                          {resultDisplay}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {getCalculationTitle(calc.type)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  {t.whatToCalculate}
                </p>
                <button className="px-6 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors">
                  {t.giveFeedback}
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {recentCalculations.length === 0 && (
            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-4 opacity-50">
                <svg viewBox="0 0 100 100" className="text-muted-foreground">
                  <circle cx="30" cy="70" r="4" fill="currentColor" opacity="0.3" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.5" />
                  <path d="M 60 60 L 80 40" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                  <circle cx="80" cy="40" r="6" fill="currentColor" opacity="0.4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t.recentCalculations}
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Your recent calculations will appear here. Compare them to see how changes in yield, price, and expenses affect your results.
              </p>
            </div>
          )}
        </div>
      </PageTransition>
    );
  }

  // Calculator Detail Views
  const renderCalculatorContent = () => {
    switch (calculatorType) {
      case "max-budget":
        return (
          <>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 rounded-3xl p-6 mb-4"
              >
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{t.maxInputBudget}</div>
                  <div className="text-5xl font-bold text-foreground">
                    ₹{Math.round(currentResult)}
                  </div>
                </div>
              </motion.div>
            )}

            {showResult && currentResult > 0 && (
              <>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-primary font-medium mx-auto mb-6"
                >
                  {t.calculationDetails}
                  <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
                
                {showDetails && (
                  <div className="bg-muted/30 rounded-2xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.expectedRevenue}:</span>
                      <span className="font-semibold">₹{Math.round(convertToKg(maxBudgetYield, maxBudgetYieldUnit) * maxBudgetPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.profitMargin} (30%):</span>
                      <span className="font-semibold">₹{Math.round(convertToKg(maxBudgetYield, maxBudgetYieldUnit) * maxBudgetPrice * 0.3)}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <span className="text-muted-foreground">{t.maxInputBudget} (70%):</span>
                      <span className="font-bold text-primary">₹{Math.round(calculateMaxBudget())}</span>
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.yield}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.yieldDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={maxBudgetYield || ""}
                    onChange={(e) => setMaxBudgetYield(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="1"
                  />
                  <select
                    value={maxBudgetYieldUnit}
                    onChange={(e) => setMaxBudgetYieldUnit(e.target.value)}
                    className="bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 min-w-[100px]"
                  >
                    <option value="kg">{t.kg}</option>
                    <option value="quintal">{t.quintal}</option>
                    <option value="ton">{t.ton}</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.sellingPrice}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.sellingPriceDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={maxBudgetPrice || ""}
                    onChange={(e) => setMaxBudgetPrice(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="10"
                  />
                  <div className="bg-muted px-4 py-3 rounded-2xl border border-border/50 min-w-[100px] flex items-center justify-center">
                    {t.perKg}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "profit":
        return (
          <>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 rounded-3xl p-6 mb-4"
              >
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{t.estimatedProfit}</div>
                  <div className={`text-5xl font-bold ${currentResult >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{Math.round(currentResult)}
                  </div>
                </div>
              </motion.div>
            )}

            {showResult && currentResult !== 0 && (
              <>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-primary font-medium mx-auto mb-6"
                >
                  {t.calculationDetails}
                  <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
                
                {showDetails && (
                  <div className="bg-muted/30 rounded-2xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.totalRevenue}:</span>
                      <span className="font-semibold">₹{Math.round(convertToKg(profitYield, profitYieldUnit) * profitPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.totalExpenses}:</span>
                      <span className="font-semibold">₹{profitExpenses}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <span className="text-muted-foreground">{t.netProfit}:</span>
                      <span className={`font-bold ${calculateProfit() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{Math.round(calculateProfit())}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.profitMargin}:</span>
                      <span className={`font-semibold ${calculateProfitMargin() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {calculateProfitMargin().toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.roi}:</span>
                      <span className={`font-semibold ${calculateROI() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {calculateROI().toFixed(1)}%
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.yield}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.yieldDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={profitYield || ""}
                    onChange={(e) => setProfitYield(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="1"
                  />
                  <select
                    value={profitYieldUnit}
                    onChange={(e) => setProfitYieldUnit(e.target.value)}
                    className="bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 min-w-[100px]"
                  >
                    <option value="kg">{t.kg}</option>
                    <option value="quintal">{t.quintal}</option>
                    <option value="ton">{t.ton}</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.sellingPrice}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.sellingPriceDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={profitPrice || ""}
                    onChange={(e) => setProfitPrice(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="10"
                  />
                  <div className="bg-muted px-4 py-3 rounded-2xl border border-border/50 min-w-[100px] flex items-center justify-center">
                    {t.perKg}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.expenses}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.expensesDesc}</p>
                <input
                  type="number"
                  value={profitExpenses || ""}
                  onChange={(e) => setProfitExpenses(Number(e.target.value))}
                  className="w-full bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                  placeholder="₹ 0"
                />
              </div>
            </div>
          </>
        );

      case "yield":
        return (
          <>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 rounded-3xl p-6 mb-6"
              >
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{t.requiredYield}</div>
                  <div className="text-5xl font-bold text-foreground">
                    {Math.round(currentResult)} <span className="text-2xl">{requiredYieldUnit}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {showResult && currentResult > 0 && (
              <>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-primary font-medium mx-auto mb-6"
                >
                  {t.calculationDetails}
                  <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
                
                {showDetails && (
                  <div className="bg-muted/30 rounded-2xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.totalExpenses}:</span>
                      <span className="font-semibold">₹{requiredYieldExpenses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.sellingPrice}:</span>
                      <span className="font-semibold">₹{requiredYieldPrice}/{requiredYieldUnit}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <span className="text-muted-foreground">Break-even {t.yield}:</span>
                      <span className="font-bold text-primary">{Math.round(calculateRequiredYield())} {requiredYieldUnit}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      You need to harvest at least {Math.round(calculateRequiredYield())} {requiredYieldUnit} to cover your expenses.
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.expenses}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.expensesDesc}</p>
                <input
                  type="number"
                  value={requiredYieldExpenses || ""}
                  onChange={(e) => setRequiredYieldExpenses(Number(e.target.value))}
                  className="w-full bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                  placeholder="₹ 0"
                />
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.sellingPrice}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.sellingPriceDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={requiredYieldPrice || ""}
                    onChange={(e) => setRequiredYieldPrice(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="0"
                  />
                  <select
                    value={requiredYieldUnit}
                    onChange={(e) => setRequiredYieldUnit(e.target.value)}
                    className="bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 min-w-[100px]"
                  >
                    <option value="kg">{t.perKg}</option>
                    <option value="quintal">₹/{t.quintal}</option>
                    <option value="ton">₹/{t.ton}</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );

      case "no-loss":
        return (
          <>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 rounded-3xl p-6 mb-6"
              >
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{t.noLossPrice}</div>
                  <div className="text-5xl font-bold text-foreground">
                    ₹{Math.round(currentResult)} <span className="text-2xl">/kg</span>
                  </div>
                </div>
              </motion.div>
            )}

            {showResult && currentResult > 0 && (
              <>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-primary font-medium mx-auto mb-6"
                >
                  {t.calculationDetails}
                  <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
                
                {showDetails && (
                  <div className="bg-muted/30 rounded-2xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.totalExpenses}:</span>
                      <span className="font-semibold">₹{noLossExpenses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected {t.yield}:</span>
                      <span className="font-semibold">{noLossYield} {noLossYieldUnit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.yield} in kg:</span>
                      <span className="font-semibold">{Math.round(convertToKg(noLossYield, noLossYieldUnit))} kg</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <span className="text-muted-foreground">Break-even Price:</span>
                      <span className="font-bold text-primary">₹{Math.round(calculateNoLossPrice())}/kg</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Sell at or above ₹{Math.round(calculateNoLossPrice())}/kg to avoid losses.
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.expenses}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.expensesDesc}</p>
                <input
                  type="number"
                  value={noLossExpenses || ""}
                  onChange={(e) => setNoLossExpenses(Number(e.target.value))}
                  className="w-full bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                  placeholder="₹ 0"
                />
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.yield}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.yieldDesc}</p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={noLossYield || ""}
                    onChange={(e) => setNoLossYield(Number(e.target.value))}
                    className="flex-1 bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 focus:ring-2 focus:ring-primary outline-none text-lg"
                    placeholder="0"
                  />
                  <select
                    value={noLossYieldUnit}
                    onChange={(e) => setNoLossYieldUnit(e.target.value)}
                    className="bg-background text-foreground px-4 py-3 rounded-2xl border border-border/50 min-w-[100px]"
                  >
                    <option value="kg">{t.kg}</option>
                    <option value="quintal">{t.quintal}</option>
                    <option value="ton">{t.ton}</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center gap-3">
            <motion.button
              onClick={() => setCalculatorType(null)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={24} />
            </motion.button>
            <h1 className="text-xl font-bold text-foreground">
              {getCalculationTitle(calculatorType)}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-2xl">
          <div className="space-y-6">
            {renderCalculatorContent()}

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCalculate}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              {t.calculate}
            </motion.button>

            {/* Recent Calculations */}
            {recentCalculations.filter(c => c.type === calculatorType).length > 0 ? (
              <div className="bg-muted/30 rounded-3xl p-5">
                <h3 className="font-semibold text-foreground mb-4">
                  {t.recentCalculations}
                </h3>
                <div className="space-y-3">
                  {recentCalculations
                    .filter(c => c.type === calculatorType)
                    .map((calc) => {
                      // Format result based on calculator type
                      let resultDisplay = "";
                      switch (calc.type) {
                        case "yield":
                          resultDisplay = `${Math.round(calc.result)} kg`;
                          break;
                        case "no-loss":
                          resultDisplay = `₹${Math.round(calc.result)}/kg`;
                          break;
                        default:
                          resultDisplay = `₹${Math.round(calc.result)}`;
                      }

                      return (
                        <div key={calc.id} className="bg-background rounded-2xl p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="font-bold text-foreground text-lg">
                              {resultDisplay}
                            </div>
                            <button
                              onClick={() => deleteCalculation(calc.id)}
                              className="p-2 hover:bg-muted rounded-lg transition-colors"
                            >
                              <Trash2 size={18} className="text-muted-foreground" />
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            {Object.entries(calc.inputs).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-muted-foreground mb-1 capitalize">{key}</div>
                                <div className="font-medium">
                                  {key === "expenses" || key === "price" ? "₹" : ""}{value} {key === "yield" ? "kg" : key === "price" ? "/kg" : ""}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-3xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 opacity-50">
                  <svg viewBox="0 0 100 100" className="text-muted-foreground">
                    <circle cx="30" cy="70" r="4" fill="currentColor" opacity="0.3" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.5" />
                    <path d="M 60 60 L 80 40" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t.recentCalculations}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your recent calculations will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
