const fs = require('fs');
const path = require('path');

// This is a simplified version that generates the structure
// You can manually add translations or use Google Translate later

const languages = ["en", "hi", "te", "ta", "kn", "ml", "mr", "bn", "gu", "pa", "or", "as", "ur", "sd", "ne", "mai", "sat", "ks", "doi", "kok", "mni", "bo", "sa", "raj", "bh", "chh", "gon", "tu", "kha", "miz", "nag"];

const englishStrings = {
  tools: {
    title: "🛠️ Tools",
    subtitle: "AI-powered tools and resources for smart farming",
    takePicture: "Take a picture",
    detectionTools: "🔍 Detection Tools",
    library: "📚 Library",
    calculators: "🧮 Calculators",
    plantDisease: "Plant Disease",
    plantDiseaseDesc: "Identify crop diseases",
    soilDetection: "Soil Detection",
    soilDetectionDesc: "Analyze soil quality",
    fertilizer: "Fertilizer",
    fertilizerDesc: "Identify fertilizers",
    weedDetection: "Weed Detection",
    weedDetectionDesc: "Identify weeds",
    crops: "Crops",
    cropsDesc: "Browse crop library",
    cultivationTips: "Cultivation Tips",
    cultivationTipsDesc: "Expert farming advice",
    cropHealth: "Crop Health",
    cropHealthDesc: "Monitor crop health",
    cropCalendar: "Crop Calendar",
    cropCalendarDesc: "Planting schedules",
    fertilizerCalculator: "Fertilizer Calculator",
    fertilizerCalculatorDesc: "Calculate NPK needs",
    pesticideCalculator: "Pesticide Calculator",
    pesticideCalculatorDesc: "Dosage calculator",
    farmingCalculator: "Farming Calculator",
    farmingCalculatorDesc: "Cost & yield calculator",
  },
  farmingCalculator: {
    title: "Farming calculator",
    whatToCalculate: "What do you want to calculate?",
    maxInputBudget: "Maximum input budget",
    maxInputBudgetDesc: "How much you can spend on inputs",
    estimatedProfit: "Estimated Profit",
    estimatedProfitDesc: "How much profit you will make after covering expenses",
    requiredYield: "Required yield",
    requiredYieldDesc: "How much you need to harvest to cover expenses",
    noLossPrice: "No loss price",
    noLossPriceDesc: "The lowest price you should sell at to avoid loss",
    recentCalculations: "Recent calculations",
    recentCalculationsDesc: "Your recent calculations will appear here",
    giveFeedback: "Give Feedback",
    whatElse: "What else would you like to calculate?",
    backToTools: "Back to Tools",
    calculationDetails: "Calculation details",
    yield: "Yield",
    yieldDesc: "Your expected yield",
    sellingPrice: "Selling price",
    sellingPriceDesc: "How much you expect to earn per kg",
    expenses: "Expenses",
    expensesDesc: "Total money spent on inputs",
    calculate: "Calculate",
    expectedRevenue: "Expected Revenue",
    profitMargin: "Profit Margin",
    totalRevenue: "Total Revenue",
    totalExpenses: "Total Expenses",
    netProfit: "Net Profit",
    roi: "ROI",
    breakEvenYield: "Break-even Yield",
    breakEvenPrice: "Break-even Price",
    breakEvenYieldDesc: "You need to harvest at least this amount",
    breakEvenPriceDesc: "Sell at or above this price to avoid losses",
    kg: "kg",
    quintal: "quintal",
    ton: "ton",
    perKg: "/kg",
    invalidInput: "Invalid Input",
    invalidInputDesc: "Please enter valid values",
    calculationComplete: "Calculation Complete",
    result: "Result",
  },
  pesticideCalculator: {
    title: "Pesticide calculator",
    whatCropType: "What type of crop?",
    fieldCrops: "Field crops",
    fieldCropsDesc: "Calculate dosage for field crops",
    trees: "Trees",
    treesDesc: "Calculate dosage for trees",
    perApplication: "Per application",
    listen: "Listen",
    totalProduct: "Total product",
    dosePerRefill: "Dose per refill",
    pumpRefills: "Pump refills",
    time: "time",
    times: "times",
    areaToTreat: "Area to treat",
    areaUnit: "Area unit",
    acre: "Acre",
    hectare: "Hectare",
    gunta: "Gunta",
    dontKnowDosage: "Don't know dosage?",
    searchFormulation: "Search formulation",
    searchFormulationDesc: "Search by formulation, crop and disease",
    productDosage: "Product dosage",
    productDosageDesc: "Product dosage needed per acre",
    waterAmount: "Water amount",
    waterAmountDesc: "Water required to mix",
    pumpSize: "Pump size",
    pumpSizeDesc: "Volume of the pump",
    calculate: "Calculate",
    calculationDetails: "Calculation details",
    recentCalculations: "Recent calculations",
    recentCalculationsDesc: "Your recent calculations",
    backToTools: "Back to Tools",
  },
  fertilizerCalculator: {
    title: "Fertilizer Calculator",
    selectCrop: "Select Crop",
    area: "Area",
    areaUnit: "Area Unit",
    acre: "Acre",
    hectare: "Hectare",
    gunta: "Gunta",
    npkRequirements: "NPK Requirements",
    nitrogen: "Nitrogen (N)",
    phosphorus: "Phosphorus (P)",
    potassium: "Potassium (K)",
    fertilizerCombinations: "Fertilizer Combinations",
    combination1: "Combination 1",
    combination2: "Combination 2",
    mop: "MOP",
    tsp: "TSP",
    urea: "Urea",
    dap: "DAP",
    calculate: "Calculate Another",
    backToTools: "Back to Tools",
  },
  cultivationTips: {
    title: "Cultivation Tips",
    search: "Search tips...",
    allCategories: "All Categories",
    watering: "Watering",
    pestControl: "Pest Control",
    planting: "Planting",
    soil: "Soil",
    weather: "Weather",
    climate: "Climate",
    backToTools: "Back to Tools",
  },
};

console.log('Generating calculator translations structure...\n');
console.log('This creates a template with English text.');
console.log('You can then:');
console.log('1. Use Google Translate API script for automatic translation');
console.log('2. Manually translate each language');
console.log('3. Hire professional translators\n');

const allTranslations = {};
languages.forEach(lang => {
  allTranslations[lang] = englishStrings;
  console.log(`✓ ${lang}`);
});

const outputPath = path.join(__dirname, '../src/data/calculatorTranslations.ts');
const content = `// Calculator translations - Generated template
// TODO: Add translations for each language

export type CalculatorTranslationKeys = typeof calculatorTranslations.en;

export const calculatorTranslations = ${JSON.stringify(allTranslations, null, 2)} as const;
`;

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`\n✓ File created: ${outputPath}`);
console.log('\nNext: Add translations for each language in the generated file');
