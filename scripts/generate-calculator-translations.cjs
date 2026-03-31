const fs = require('fs');
const path = require('path');

// All 31 languages
const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "mr", name: "Marathi" },
  { code: "bn", name: "Bengali" },
  { code: "gu", name: "Gujarati" },
  { code: "pa", name: "Punjabi" },
  { code: "or", name: "Odia" },
  { code: "as", name: "Assamese" },
  { code: "ur", name: "Urdu" },
  { code: "sd", name: "Sindhi" },
  { code: "ne", name: "Nepali" },
  { code: "mai", name: "Maithili" },
  { code: "sat", name: "Santali" },
  { code: "ks", name: "Kashmiri" },
  { code: "doi", name: "Dogri" },
  { code: "kok", name: "Konkani" },
  { code: "mni", name: "Manipuri" },
  { code: "bo", name: "Bodo" },
  { code: "sa", name: "Sanskrit" },
  { code: "raj", name: "Rajasthani" },
  { code: "bh", name: "Bhojpuri" },
  { code: "chh", name: "Chhattisgarhi" },
  { code: "gon", name: "Gondi" },
  { code: "tu", name: "Tulu" },
  { code: "kha", name: "Khasi" },
  { code: "miz", name: "Mizo" },
  { code: "nag", name: "Nagamese" },
];

// English source strings for calculators
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
    recentCalculationsDesc: "Your recent calculations will appear here. Compare them to see how changes in yield, price, and expenses affect your results.",
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
    breakEvenYieldDesc: "You need to harvest at least this amount to cover your expenses",
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
    whatCropType: "What type of crop do you want to calculate pesticide dosage for?",
    fieldCrops: "Field crops",
    fieldCropsDesc: "Calculate dosage based on area planted with field crops",
    trees: "Trees",
    treesDesc: "Calculate dosage based on amount of water for all trees to treat",
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
    searchFormulationDesc: "Search by formulation, crop and disease instead",
    productDosage: "Product dosage",
    productDosageDesc: "Product dosage needed per acre or hectare",
    waterAmount: "Water amount",
    waterAmountDesc: "Water required to mix with product dosage",
    pumpSize: "Pump size",
    pumpSizeDesc: "Volume of the pump",
    calculate: "Calculate",
    calculationDetails: "Calculation details",
    recentCalculations: "Recent calculations",
    recentCalculationsDesc: "Your recent calculations will appear here. Compare them to see how changes in total product, dose per pump, and pump refills.",
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

// Google Translate API function (you'll need to install @google-cloud/translate)
async function translateText(text, targetLang) {
  // For now, return placeholder - you need to set up Google Translate API
  // Install: npm install @google-cloud/translate
  // Set up: https://cloud.google.com/translate/docs/setup
  
  try {
    const {Translate} = require('@google-cloud/translate').v2;
    const translate = new Translate({
      key: process.env.GOOGLE_TRANSLATE_API_KEY
    });

    const [translation] = await translate.translate(text, targetLang);
    return translation;
  } catch (error) {
    console.warn(`Translation failed for ${targetLang}: ${error.message}`);
    return text; // Fallback to English
  }
}

// Recursively translate an object
async function translateObject(obj, targetLang) {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      // Skip emojis and special characters
      if (/^[🛠️🔍📚🧮]+/.test(value)) {
        result[key] = value;
      } else {
        result[key] = await translateText(value, targetLang);
      }
    } else if (typeof value === 'object') {
      result[key] = await translateObject(value, targetLang);
    }
  }
  
  return result;
}

// Generate translations for all languages
async function generateAllTranslations() {
  console.log('Starting translation generation...');
  console.log(`Total languages: ${languages.length}`);
  console.log(`Total strings per language: ${JSON.stringify(englishStrings).match(/:/g).length}`);
  
  const allTranslations = {};
  
  for (const lang of languages) {
    console.log(`\nTranslating to ${lang.name} (${lang.code})...`);
    
    if (lang.code === 'en') {
      allTranslations[lang.code] = englishStrings;
      console.log('✓ English (source language)');
    } else {
      try {
        allTranslations[lang.code] = await translateObject(englishStrings, lang.code);
        console.log(`✓ ${lang.name} completed`);
      } catch (error) {
        console.error(`✗ ${lang.name} failed: ${error.message}`);
        allTranslations[lang.code] = englishStrings; // Fallback
      }
    }
  }
  
  return allTranslations;
}


// Write translations to TypeScript file
function writeTranslationsFile(translations) {
  const outputPath = path.join(__dirname, '../src/data/calculatorTranslations.ts');
  
  let content = `// Auto-generated calculator translations
// Generated on: ${new Date().toISOString()}
// Total languages: ${Object.keys(translations).length}

export type CalculatorTranslationKeys = {
  tools: {
    title: string;
    subtitle: string;
    takePicture: string;
    detectionTools: string;
    library: string;
    calculators: string;
    plantDisease: string;
    plantDiseaseDesc: string;
    soilDetection: string;
    soilDetectionDesc: string;
    fertilizer: string;
    fertilizerDesc: string;
    weedDetection: string;
    weedDetectionDesc: string;
    crops: string;
    cropsDesc: string;
    cultivationTips: string;
    cultivationTipsDesc: string;
    cropHealth: string;
    cropHealthDesc: string;
    cropCalendar: string;
    cropCalendarDesc: string;
    fertilizerCalculator: string;
    fertilizerCalculatorDesc: string;
    pesticideCalculator: string;
    pesticideCalculatorDesc: string;
    farmingCalculator: string;
    farmingCalculatorDesc: string;
  };
  farmingCalculator: {
    title: string;
    whatToCalculate: string;
    maxInputBudget: string;
    maxInputBudgetDesc: string;
    estimatedProfit: string;
    estimatedProfitDesc: string;
    requiredYield: string;
    requiredYieldDesc: string;
    noLossPrice: string;
    noLossPriceDesc: string;
    recentCalculations: string;
    recentCalculationsDesc: string;
    giveFeedback: string;
    whatElse: string;
    backToTools: string;
    calculationDetails: string;
    yield: string;
    yieldDesc: string;
    sellingPrice: string;
    sellingPriceDesc: string;
    expenses: string;
    expensesDesc: string;
    calculate: string;
    expectedRevenue: string;
    profitMargin: string;
    totalRevenue: string;
    totalExpenses: string;
    netProfit: string;
    roi: string;
    breakEvenYield: string;
    breakEvenPrice: string;
    breakEvenYieldDesc: string;
    breakEvenPriceDesc: string;
    kg: string;
    quintal: string;
    ton: string;
    perKg: string;
    invalidInput: string;
    invalidInputDesc: string;
    calculationComplete: string;
    result: string;
  };
  pesticideCalculator: {
    title: string;
    whatCropType: string;
    fieldCrops: string;
    fieldCropsDesc: string;
    trees: string;
    treesDesc: string;
    perApplication: string;
    listen: string;
    totalProduct: string;
    dosePerRefill: string;
    pumpRefills: string;
    time: string;
    times: string;
    areaToTreat: string;
    areaUnit: string;
    acre: string;
    hectare: string;
    gunta: string;
    dontKnowDosage: string;
    searchFormulation: string;
    searchFormulationDesc: string;
    productDosage: string;
    productDosageDesc: string;
    waterAmount: string;
    waterAmountDesc: string;
    pumpSize: string;
    pumpSizeDesc: string;
    calculate: string;
    calculationDetails: string;
    recentCalculations: string;
    recentCalculationsDesc: string;
    backToTools: string;
  };
  fertilizerCalculator: {
    title: string;
    selectCrop: string;
    area: string;
    areaUnit: string;
    acre: string;
    hectare: string;
    gunta: string;
    npkRequirements: string;
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    fertilizerCombinations: string;
    combination1: string;
    combination2: string;
    mop: string;
    tsp: string;
    urea: string;
    dap: string;
    calculate: string;
    backToTools: string;
  };
  cultivationTips: {
    title: string;
    search: string;
    allCategories: string;
    watering: string;
    pestControl: string;
    planting: string;
    soil: string;
    weather: string;
    climate: string;
    backToTools: string;
  };
};

export const calculatorTranslations: Record<string, CalculatorTranslationKeys> = `;

  content += JSON.stringify(translations, null, 2);
  content += ';\n';
  
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`\n✓ Translations written to: ${outputPath}`);
}

// Main execution
async function main() {
  console.log('='.repeat(60));
  console.log('CALCULATOR TRANSLATIONS GENERATOR');
  console.log('='.repeat(60));
  
  if (!process.env.GOOGLE_TRANSLATE_API_KEY) {
    console.warn('\n⚠️  WARNING: GOOGLE_TRANSLATE_API_KEY not set!');
    console.warn('Translations will use English as fallback.');
    console.warn('To enable translation:');
    console.warn('1. Get API key from: https://cloud.google.com/translate');
    console.warn('2. Set environment variable: export GOOGLE_TRANSLATE_API_KEY=your_key');
    console.warn('3. Install package: npm install @google-cloud/translate\n');
  }
  
  try {
    const translations = await generateAllTranslations();
    writeTranslationsFile(translations);
    
    console.log('\n' + '='.repeat(60));
    console.log('✓ TRANSLATION GENERATION COMPLETE');
    console.log('='.repeat(60));
    console.log(`Total languages: ${Object.keys(translations).length}`);
    console.log(`Total translations: ${Object.keys(translations).length * JSON.stringify(englishStrings).match(/:/g).length}`);
    console.log('\nNext steps:');
    console.log('1. Review generated file: src/data/calculatorTranslations.ts');
    console.log('2. Update calculator pages to use translations');
    console.log('3. Test each language in the app');
  } catch (error) {
    console.error('\n✗ ERROR:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateAllTranslations, translateText };
