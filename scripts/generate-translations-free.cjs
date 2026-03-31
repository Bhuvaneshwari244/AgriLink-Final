const https = require('https');
const fs = require('fs');
const path = require('path');

// Free LibreTranslate API (no credit card needed!)
const LIBRETRANSLATE_API = 'https://libretranslate.com/translate';

const languages = ["en", "hi", "te", "ta", "kn", "ml", "mr", "bn", "gu", "pa", "or", "as", "ur"];

const englishStrings = {
  tools: {
    title: "Tools",
    subtitle: "AI-powered tools and resources for smart farming",
    takePicture: "Take a picture",
    detectionTools: "Detection Tools",
    library: "Library",
    calculators: "Calculators",
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
    estimatedProfitDesc: "How much profit you will make",
    requiredYield: "Required yield",
    requiredYieldDesc: "How much you need to harvest",
    noLossPrice: "No loss price",
    noLossPriceDesc: "The lowest price to avoid loss",
    recentCalculations: "Recent calculations",
    giveFeedback: "Give Feedback",
    backToTools: "Back to Tools",
    calculationDetails: "Calculation details",
    yield: "Yield",
    yieldDesc: "Your expected yield",
    sellingPrice: "Selling price",
    sellingPriceDesc: "Price per kg",
    expenses: "Expenses",
    expensesDesc: "Total money spent",
    calculate: "Calculate",
    expectedRevenue: "Expected Revenue",
    profitMargin: "Profit Margin",
    totalRevenue: "Total Revenue",
    totalExpenses: "Total Expenses",
    netProfit: "Net Profit",
    roi: "ROI",
    kg: "kg",
    quintal: "quintal",
    ton: "ton",
    perKg: "/kg",
    invalidInput: "Invalid Input",
    calculationComplete: "Calculation Complete",
    result: "Result",
  },
};

async function translateText(text, targetLang) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text'
    });

    const options = {
      hostname: 'libretranslate.com',
      port: 443,
      path: '/translate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result.translatedText || text);
        } catch (e) {
          resolve(text);
        }
      });
    });

    req.on('error', () => resolve(text));
    req.write(data);
    req.end();
  });
}

async function translateObject(obj, targetLang) {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      console.log(`  Translating: ${value.substring(0, 30)}...`);
      result[key] = await translateText(value, targetLang);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limit
    } else if (typeof value === 'object') {
      result[key] = await translateObject(value, targetLang);
    }
  }
  
  return result;
}

async function main() {
  console.log('FREE Translation Generator (No Credit Card Required!)');
  console.log('Using LibreTranslate API\n');
  
  const allTranslations = {};
  
  for (const lang of languages) {
    console.log(`\nTranslating to ${lang}...`);
    
    if (lang === 'en') {
      allTranslations[lang] = englishStrings;
      console.log('✓ English (source)');
    } else {
      try {
        allTranslations[lang] = await translateObject(englishStrings, lang);
        console.log(`✓ ${lang} completed`);
      } catch (error) {
        console.error(`✗ ${lang} failed`);
        allTranslations[lang] = englishStrings;
      }
    }
  }
  
  const outputPath = path.join(__dirname, '../src/data/calculatorTranslations.ts');
  const content = `export const calculatorTranslations = ${JSON.stringify(allTranslations, null, 2)};\n`;
  
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`\n✓ Translations saved to: ${outputPath}`);
}

main();
