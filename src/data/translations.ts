export const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "as", name: "Assamese", native: "অসমীয়া" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "sd", name: "Sindhi", native: "سنڌي" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
  { code: "mai", name: "Maithili", native: "मैथिली" },
  { code: "sat", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "ks", name: "Kashmiri", native: "کٲشُر" },
  { code: "doi", name: "Dogri", native: "डोगरी" },
  { code: "kok", name: "Konkani", native: "कोंकणी" },
  { code: "mni", name: "Manipuri", native: "মৈতৈলোন্" },
  { code: "bo", name: "Bodo", native: "बड़ो" },
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  { code: "raj", name: "Rajasthani", native: "राजस्थानी" },
  { code: "bh", name: "Bhojpuri", native: "भोजपुरी" },
  { code: "chh", name: "Chhattisgarhi", native: "छत्तीसगढ़ी" },
  { code: "gon", name: "Gondi", native: "गोंडी" },
  { code: "tu", name: "Tulu", native: "ತುಳು" },
  { code: "kha", name: "Khasi", native: "Ka Ktien Khasi" },
  { code: "miz", name: "Mizo", native: "Mizo ṭawng" },
  { code: "nag", name: "Nagamese", native: "Nagamese" },
];

type TranslationKeys = {
  nav: { home: string; tools: string; crops: string; community: string; mandi: string; transport: string; diagnosis: string; yieldPrediction: string; cropCalendar: string; recommendations: string; cropHealth: string };
  hero: { title: string; subtitle: string; cta: string; badge: string; problemTitle: string; aiDiagnosis: string };
  stats: { cropsListed: string; languages: string; mandiMarkets: string; aiPowered: string; realtime: string };
  features: { cropsDesc: string; communityDesc: string; mandiDesc: string; transportDesc: string; diagnosisDesc: string; recommendationsDesc: string; yieldPredictionDesc: string; cropCalendarDesc: string; cropHealthDesc: string };
  problemItems: string[];
  crops: { title: string; search: string; allCategories: string; season: string; soil: string; irrigation: string; pests: string; fertilizer: string; bestPractices: string; cropsFound: string; askOnWhatsApp: string };
  community: { title: string; askQuestion: string; placeholder: string; post: string; answer: string; answers: string; share: string; upvote: string; category: string; reply: string };
  mandi: { title: string; search: string; state: string; commodity: string; minPrice: string; maxPrice: string; modalPrice: string; nearby: string; all: string; crop: string; crops: string; tapExpand: string; showingNearby: string; markets: string; rates: string; yesterday?: string; before?: string; vsYesterday?: string; vsBefore?: string; weeklyTrend?: string; weekAgo?: string; today?: string; showCharts?: string; priceAlerts?: string; alertsEnabled?: string; significantChanges?: string; showingAlerts?: string; sortDefault?: string; sortPriceLow?: string; sortPriceHigh?: string; byState?: string; perQuintal?: string; vegetables?: string; fruits?: string; cerealsGrains?: string; pulsesLegumes?: string; spices?: string; oilseeds?: string; cashCrops?: string };
  transport: { title: string; cropType: string; quantity: string; pickup: string; destination: string; submit: string; whatsapp: string; call: string; requestPickup: string; fillDetails: string; placeholderCrop: string; placeholderQty: string; placeholderPickup: string; placeholderDest: string; trackShipment?: string; trackingId?: string; placeholderTrackingId?: string; track?: string; statusBooked?: string; statusPickedUp?: string; statusInTransit?: string; statusDelivered?: string; estimatedArrival?: string; noTracking?: string; demoNote?: string };
  diagnosis: { title: string; upload: string; analyze: string; result: string; disease: string; treatment: string; prevention: string; severity: string; poweredBy: string; photoHint: string; photoHintSoil: string; photoHintFertilizer: string; photoHintWeed: string; remove: string; affectedPart: string; analyzing: string; affected: string; confidence: string; cause: string; symptoms: string; organicTreatment: string; askExpert: string; fileTooLarge: string; fileTooLargeDesc: string; analysisFailed: string; modePlant: string; modeSoil: string; modeFertilizer: string; modeWeed: string; uploadSoil: string; uploadFertilizer: string; uploadWeed: string; analyzeSoil: string; analyzeFertilizer: string; identifyWeed: string; weedReport: string; scientificName: string; family: string; weedType: string; origin: string; invasiveness: string; growthHabit: string; lifeCycle: string; characteristics: string; impactOnCrops: string; affectedCrops: string; controlMethods: string; organicControl: string; chemicalControl: string; preventionTips: string; bestTimeToControl: string; economicImpact: string; cultivationTipsTitle: string; cultivationTip1: string; cultivationTip2: string; cultivationTip3: string; cultivationTip4: string; cultivationTip5: string; cultivationTip6: string; moisture: string; phEstimate: string; organicMatter: string; fertility: string; waterRetention: string; drainage: string; fertilityMaintenance: string; soilMaintenance: string };
  yieldPrediction: { title: string; subtitle: string; cropEnvironmentalData: string; enterCropType: string; cropType: string; selectCropType: string; temperature: string; rainfall: string; humidity: string; soilPH: string; predictYield: string; analyzing: string; predictedYield: string; unit: string; confidence: string; smartSuggestions: string; yieldComparison: string; currentYield: string; optimalYield: string; lowRainfallWarning: string; highTemperatureWarning: string; acidicSoilInfo: string; lowHumidityWarning: string; optimalConditions: string };
  recommendations: { title: string; soilBased: string; locationBased: string; seasonBased: string; selectSoil: string; selectRegion: string; currentSeason: string; expertTips: string; source: string; climate: string; states: string };
  cropHealth: {
    title: string;
    subtitle: string;
    locationAnalysis: string;
    locationDesc: string;
    coordinates: string;
    analyzeCrop: string;
    analyzing: string;
    poweredBy: string;
    healthStatus: string;
    ndviIndex: string;
    recommendations: string;
    excellent: string;
    good: string;
    moderate: string;
    poor: string;
    improving: string;
    stable: string;
    declining: string;
    excellentRec1: string;
    excellentRec2: string;
    goodRec1: string;
    goodRec2: string;
    moderateRec1: string;
    moderateRec2: string;
    moderateRec3: string;
    poorRec1: string;
    poorRec2: string;
    poorRec3: string;
    analysisComplete: string;
    satelliteDataProcessed: string;
    satelliteData: string;
    satelliteDataDesc: string;
    ndviAnalysis: string;
    ndviAnalysisDesc: string;
    actionable: string;
    actionableDesc: string;
  };
  cropCalendar: {
    title: string;
    subtitle: string;
    defaultRoadmap: string;
    liveTracking: string;
    currentSeason: string;
    monsoonSeason: string;
    winterSeason: string;
    summerSeason: string;
    selectState: string;
    cropCategory: string;
    startLiveTracking: string;
    selectYourCrop: string;
    cultivationStartDate: string;
    chooseYourCrop: string;
    howLiveTrackingWorks: string;
    trackEachStage: string;
    markStagesComplete: string;
    getSolutions: string;
    monitorProgress: string;
    complete: string;
    started: string;
    completed: string;
    inProgress: string;
    pending: string;
    markComplete: string;
    needHelp: string;
    resetTracking: string;
    liveFarmingProgress: string;
    trackingProgress: string;
    stages: string;
    problemSolver: string;
    havingIssues: string;
    pestProblems: string;
    pestSolution: string;
    weatherIssues: string;
    weatherSolution: string;
    poorGrowth: string;
    poorGrowthSolution: string;
    problemSolved: string;
    close: string;
    completeRoadmap: string;
    viewCompleteRoadmap: string;
    farmingTips: string;
    temperature: string;
    rainfall: string;
    soilType: string;
    noCropsFound: string;
    adjustFilters: string;
    kharif: string;
    rabi: string;
    zaid: string;
    cereals: string;
    pulses: string;
    vegetables: string;
    fruits: string;
    cashCrops: string;
    oilseeds: string;
    spices: string;
  };
  chatbot: { 
    greeting: string[];
    crops: string[];
    community: string[];
    mandi: string[];
    transport: string[];
    diagnosis: string[];
    yieldPrediction: string[];
    cropCalendar: string[];
    recommendations: string[];
    agrilink: string[];
    default: string;
    typing: string;
    placeholder: string;
  };
  common: { loading: string; noResults: string; viewDetails: string; back: string; whatsappHelp: string; selectLanguage: string; all: string; weather: string; humidity: string; wind: string; condition: string; weatherSource: string };
};

export const translations: Record<string, TranslationKeys> = {
  en: {
    nav: { home: "Home", tools: "Tools", crops: "Crop Library", community: "Community", mandi: "Mandi Rates", transport: "Transport", diagnosis: "Diagnosis", yieldPrediction: "Yield Prediction", cropCalendar: "Crop Calendar", recommendations: "Recommendations", cropHealth: "Crop Health" },
    hero: { title: "AgriLink — Farmer Crop Intelligence", subtitle: "Your complete farming companion: crop info, community Q&A, mandi rates, transport, and AI-powered disease diagnosis", cta: "Explore Crops", badge: "AI-Powered Farming Intelligence", problemTitle: "Web Track: Farmer Crop Intelligence + Community Platform", aiDiagnosis: "AI Diagnosis" },
    stats: { cropsListed: "Crops Listed", languages: "Languages", mandiMarkets: "Mandi Markets", aiPowered: "AI Powered", realtime: "Real-time" },
    features: { cropsDesc: "Seasonality, soil, irrigation, pests, fertilizer schedules", communityDesc: "Q&A, local language support, expert answers", mandiDesc: "Live rates by district/market + nearby search", transportDesc: "Connect to logistics, request pickup flow", diagnosisDesc: "AI-powered disease detection from photos", recommendationsDesc: "Soil, location & season based crop advice", yieldPredictionDesc: "Predict crop yields with AI", cropCalendarDesc: "Complete farming roadmaps from seed to harvest", cropHealthDesc: "Satellite-based crop health monitoring with NDVI" },
    problemItems: [
      "Crop library: seasonality, soil, irrigation, pests, fertilizer schedules.",
      "Community: Q&A, local language support, expert answers.",
      "Live mandi rates by district/market + price trends.",
      "Transportation: connect to logistics providers or request pickup flow.",
      "AI Disease Detection: upload photo, get instant diagnosis & treatment.",
      "Recommendations: soil, location & season based expert crop advice.",
    ],
    crops: { title: "Crop Library", search: "Search crops...", allCategories: "All Categories", season: "Season", soil: "Soil Type", irrigation: "Irrigation", pests: "Common Pests", fertilizer: "Fertilizer Schedule", bestPractices: "Best Practices", cropsFound: "crops found", askOnWhatsApp: "Ask on WhatsApp" },
    community: { title: "Community Q&A", askQuestion: "Ask a Question", placeholder: "What's your farming question?", post: "Post Question", answer: "Write your answer...", answers: "Answers", share: "Share via WhatsApp", upvote: "Upvote", category: "Category", reply: "Reply" },
    mandi: { title: "Mandi Rates", search: "Search by village, district, or market...", state: "State", commodity: "Commodity", minPrice: "Min Price", maxPrice: "Max Price", modalPrice: "Modal Price", nearby: "My Surroundings", all: "All", crop: "crop", crops: "crops", tapExpand: "more crops — tap to expand", showingNearby: "Showing nearest markets based on your location", markets: "markets", rates: "rates", showCharts: "Charts", priceAlerts: "Alerts", alertsEnabled: "Price Alerts Enabled", significantChanges: "commodities with significant price changes (>10%)", showingAlerts: "Showing only commodities with >10% price change", sortDefault: "Sort: Default", sortPriceLow: "Price: Low → High", sortPriceHigh: "Price: High → Low", byState: "By State", perQuintal: "Per Quintal", vegetables: "Vegetables", fruits: "Fruits", cerealsGrains: "Cereals & Grains", pulsesLegumes: "Pulses & Legumes", spices: "Spices", oilseeds: "Oilseeds", cashCrops: "Cash Crops" },
    transport: { title: "Transport & Logistics", cropType: "Crop Type", quantity: "Quantity (Quintals)", pickup: "Pickup Location", destination: "Destination", submit: "Send via WhatsApp", whatsapp: "Chat on WhatsApp", call: "Call Now", requestPickup: "Request Pickup", fillDetails: "Fill details and send via WhatsApp", placeholderCrop: "e.g., Rice, Wheat, Cotton", placeholderQty: "e.g., 50", placeholderPickup: "Village/Town name", placeholderDest: "Market/City name", trackShipment: "Track Shipment", trackingId: "Tracking ID", placeholderTrackingId: "e.g., TRK-12345", track: "Track", statusBooked: "Booked", statusPickedUp: "Picked Up", statusInTransit: "In Transit", statusDelivered: "Delivered", estimatedArrival: "Estimated Arrival", noTracking: "Enter a tracking ID to see status", demoNote: "Demo tracking — real tracking coming soon" },
    diagnosis: { title: "Crop Disease Diagnosis", upload: "Upload Plant Photo", analyze: "Analyze with AI", result: "Diagnosis Result", disease: "Disease", treatment: "Treatment", prevention: "Prevention", severity: "Severity", poweredBy: "Powered by AI Vision Analysis", photoHint: "Take a photo or upload from gallery (max 10MB)", photoHintSoil: "Take a clear photo of your soil sample", photoHintFertilizer: "Take a photo of fertilizer bag or sample", photoHintWeed: "Take a clear photo of the weed plant", remove: "Remove", affectedPart: "Affected Plant Part", analyzing: "Analyzing with AI...", affected: "Affected", confidence: "Confidence", cause: "Cause", symptoms: "Symptoms", organicTreatment: "Organic Treatment", askExpert: "Ask Expert on WhatsApp", fileTooLarge: "File too large", fileTooLargeDesc: "Please upload an image under 10MB", analysisFailed: "Analysis Failed", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact", cultivationTipsTitle: "Cultivation Tips", cultivationTip1: "Maintain proper spacing between plants for good air circulation", cultivationTip2: "Monitor crops regularly for early disease detection", cultivationTip3: "Use disease-resistant varieties when available", cultivationTip4: "Practice crop rotation to prevent soil-borne diseases", cultivationTip5: "Ensure proper drainage to avoid waterlogging", cultivationTip6: "Apply organic mulch to retain soil moisture", moisture: "Moisture", phEstimate: "pH Estimate", organicMatter: "Organic Matter", fertility: "Fertility", waterRetention: "Water Retention", drainage: "Drainage", fertilityMaintenance: "Fertility Maintenance", soilMaintenance: "Soil Maintenance" },
    yieldPrediction: { title: "Crop Yield Prediction", subtitle: "AI-powered yield estimation based on environmental inputs", cropEnvironmentalData: "Crop & Environmental Data", enterCropType: "Enter your crop type and current field conditions", cropType: "Crop Type", selectCropType: "Select crop type", temperature: "Temperature (°C)", rainfall: "Rainfall (mm)", humidity: "Humidity (%)", soilPH: "Soil pH", predictYield: "Predict Yield", analyzing: "Analyzing...", predictedYield: "Predicted Yield", unit: "tons/hectare", confidence: "Confidence", smartSuggestions: "Smart Suggestions", yieldComparison: "Yield Comparison by Crop", currentYield: "Current Yield", optimalYield: "Optimal Yield", lowRainfallWarning: "Low rainfall detected. Consider drip or sprinkler irrigation to maintain soil moisture.", highTemperatureWarning: "High temperature alert. Use shade nets, mulching, or heat-tolerant crop varieties.", acidicSoilInfo: "Acidic soil detected. Apply lime (calcium carbonate) to raise pH for better nutrient absorption.", lowHumidityWarning: "Low humidity can cause moisture stress. Increase irrigation frequency and use mulch.", optimalConditions: "Optimal growing conditions detected! Maintain current practices for best results." },
    recommendations: { title: "Crop Recommendations", soilBased: "Soil-Based", locationBased: "Location-Based", seasonBased: "Season-Based", selectSoil: "Select Soil Type", selectRegion: "Select Region", currentSeason: "Current Season", expertTips: "Expert Tips", source: "Source", climate: "Climate", states: "States" },
    cropCalendar: {
      title: "Crop Calendar",
      subtitle: "Complete farming roadmaps with step-by-step guidance from seed preparation to harvest and post-harvest activities",
      defaultRoadmap: "Default Roadmap",
      liveTracking: "Live Tracking",
      currentSeason: "Current Season",
      monsoonSeason: "Monsoon season (June-September) - Focus on rain-fed crops",
      winterSeason: "Winter season (October-March) - Focus on irrigated crops",
      summerSeason: "Summer season (April-May) - Focus on irrigated crops with high water availability",
      selectState: "Select State/Region",
      cropCategory: "Crop Category",
      startLiveTracking: "Start Live Crop Tracking",
      selectYourCrop: "Select Your Crop",
      cultivationStartDate: "Cultivation Start Date",
      chooseYourCrop: "Choose your crop",
      howLiveTrackingWorks: "How Live Tracking Works:",
      trackEachStage: "Track each farming stage with real dates",
      markStagesComplete: "Mark stages complete when finished",
      getSolutions: "Get solutions if something goes wrong",
      monitorProgress: "Monitor overall progress percentage",
      complete: "Complete",
      started: "Started",
      completed: "COMPLETED",
      inProgress: "IN PROGRESS",
      pending: "PENDING",
      markComplete: "Mark Complete",
      needHelp: "Need Help?",
      resetTracking: "Reset Tracking",
      liveFarmingProgress: "Live Farming Progress",
      trackingProgress: "Tracking Progress",
      stages: "stages",
      problemSolver: "Problem Solver",
      havingIssues: "Having issues with this stage? Here are common problems and solutions:",
      pestProblems: "Pest Problems",
      pestSolution: "Apply organic neem oil spray or consult local agricultural officer for pest identification and treatment.",
      weatherIssues: "Weather Issues",
      weatherSolution: "Adjust irrigation schedule based on rainfall. Provide drainage if waterlogged or extra watering if drought.",
      poorGrowth: "Poor Growth",
      poorGrowthSolution: "Check soil nutrients, apply balanced fertilizer, ensure proper spacing and sunlight exposure.",
      problemSolved: "Problem Solved - Continue",
      close: "Close",
      completeRoadmap: "Complete Farming Roadmap - Seed to Harvest",
      viewCompleteRoadmap: "View Complete Roadmap",
      farmingTips: "Farming Tips",
      temperature: "Temperature",
      rainfall: "Rainfall",
      soilType: "Soil Type",
      noCropsFound: "No crops found",
      adjustFilters: "Try adjusting your filters to see more crop calendar information.",
      kharif: "Kharif",
      rabi: "Rabi",
      zaid: "Zaid",
      cereals: "Cereals",
      pulses: "Pulses",
      vegetables: "Vegetables",
      fruits: "Fruits",
      cashCrops: "Cash Crops",
      oilseeds: "Oilseeds",
      spices: "Spices"
    },
    chatbot: {
      greeting: [
        "Hello! I'm AgriBot, your AI farming assistant. I can help you with all AgriLink features: Crop Library (102+ crops), Community Q&A, Live Mandi Rates (500+ markets), Transport Services, AI Diagnosis, Yield Prediction, Crop Calendar, and Recommendations. 📍 Use the top menu to navigate. What would you like to know?",
        "Hi there! Welcome to AgriLink - your complete farming companion. I can guide you through our comprehensive features and answer any agricultural questions. 📍 Click on any section in the top menu to access that feature directly. How can I assist you today?",
        "Welcome! I'm your AI farming expert. AgriLink offers comprehensive tools for modern farming - from crop selection to seasonal planning to market prices. 📍 Use the navigation menu above to explore each feature. What farming challenge can I help you solve?"
      ],
      crops: [
        "Our Crop Library contains 102+ crops with detailed information including seasonality, soil requirements, irrigation needs, pest management, fertilizer schedules, and best practices. 📍 Go to 'Crop Library' in the top menu → Use the search bar to find specific crops → Filter by categories (Cereals, Pulses, Vegetables, Fruits, Oilseeds, Spices, Commercial crops, Plantation crops) → Click on any crop card to get complete growing details → For expert advice, click the WhatsApp button to connect with agricultural specialists.",
        "The Crop Library is your complete crop encyclopedia with 102+ varieties. 📍 Click 'Crop Library' above → Search by crop name or browse categories → Each crop shows scientific name, growing seasons, soil types, water needs, common pests, and cultivation advice → Click 'Ask Expert on WhatsApp' button for personalized guidance from agricultural professionals."
      ],
      community: [
        "Our Community section is a Q&A platform where farmers share knowledge and get expert answers. Categories include Pest Control, Irrigation, Soil Management, Market Trends, Seeds, Fertilizers, Organic Farming, Equipment, and Weather. Available in 30+ languages. 📍 Go to 'Community' in the menu → Browse existing questions by category → Click 'Ask Question' to post your farming problem → Vote on helpful answers → Use WhatsApp button to get direct expert consultation."
      ],
      mandi: [
        "Mandi Rates provides live market prices from 500+ markets across India. Check current rates for all major commodities, view price trends, compare markets, and find the best selling opportunities near you. 📍 Go to 'Mandi Rates' in the top menu → Select your state from dropdown → Choose commodity type → View today's prices, yesterday's rates, and weekly trends → Click on any market for detailed price analysis → Use WhatsApp button to connect with local traders and get selling assistance."
      ],
      transport: [
        "Transport & Logistics helps you connect with logistics providers for moving your produce from farm to market. Fill out pickup details and get connected with transporters via WhatsApp. 📍 Go to 'Transport' in the menu → Fill the request form with crop type, quantity, pickup location, and destination → Click 'Submit Request' → Get connected with verified transporters through WhatsApp → Compare quotes and book the best service for your needs."
      ],
      diagnosis: [
        "AI Diagnosis offers 3 powerful modes: 1) Plant Disease Detection - identify diseases, pests, and deficiencies from plant photos, 2) Soil Analysis - analyze soil type, fertility, pH, and moisture from soil photos, 3) Fertilizer Detection - identify fertilizer types, composition, and quality from fertilizer photos. 📍 Go to 'Diagnosis' in the menu → Choose analysis mode (Plant/Soil/Fertilizer) → Upload clear photo (max 10MB) → Click 'Analyze with AI' → Get instant results with confidence scores and treatment recommendations → Click 'Ask Expert on WhatsApp' for personalized consultation and detailed treatment plans."
      ],
      yieldPrediction: [
        "Yield Prediction uses AI to estimate crop yields based on environmental factors like temperature (°C), rainfall (mm), humidity (%), and soil pH. Input your conditions and get yield forecasts with optimization suggestions. 📍 Go to 'Yield Prediction' in the menu → Select your crop from dropdown → Enter current temperature, expected rainfall, humidity levels, and soil pH → Click 'Predict Yield' → Get AI-powered yield forecast in tons/hectare → Review smart suggestions for improving production → Use WhatsApp button to discuss results with agricultural experts."
      ],
      cropCalendar: [
        "Crop Calendar provides complete farming roadmaps from seed to harvest for major crops across India. Choose between two modes: 📖 Default Roadmap for predefined step-by-step guidance, or 🔄 Live Tracking to monitor your actual farming progress in real-time. Get detailed stage-wise activities including pre-sowing preparation, sowing, vegetative growth, flowering, harvesting, and post-harvest activities with precise timing and expert tips. 📍 Go to 'Crop Calendar' in the menu → Choose 'Default Roadmap' or 'Live Tracking' mode → Filter by your state/region → Select crop category → For Live Tracking: Click 'Start Tracking' on your crop → Mark stages as complete when finished → Monitor progress with completion percentage → Use WhatsApp button for personalized farming guidance and stage-specific advice from agricultural specialists."
      ],
      recommendations: [
        "Recommendations provides personalized crop suggestions based on your soil type, location, current season, and local climate conditions. Get expert advice tailored to your specific farming situation. 📍 Go to 'Recommendations' in the menu → Select your soil type (Clay, Loamy, Sandy, etc.) → Choose your region/state → View current season recommendations → Get crop suggestions with profitability analysis → Review expert tips for your area → Click WhatsApp button to discuss personalized farming plans with agricultural consultants."
      ],
      agrilink: [
        "AgriLink is your complete farming companion with 8 main features: Crop Library, Community Q&A, Live Mandi Rates, Transport Services, AI Diagnosis, Yield Prediction, Crop Calendar, and Personalized Recommendations. 📍 Use the top menu to navigate to any feature you need.",
        "AgriLink offers comprehensive agricultural intelligence covering the entire farming cycle - from crop selection to market sales. All features work together for complete farming support. 📍 Explore each section using the navigation menu above to access all tools."
      ],
      default: "I understand you're asking about farming. AgriLink offers 8 comprehensive features: Crop Library, Community Q&A, Live Mandi Rates, Transport Services, AI Diagnosis, Yield Prediction, Crop Calendar, and Personalized Recommendations. 📍 Use the top navigation menu to access any feature you need. Which feature interests you most?",
      typing: "AgriBot is typing...",
      placeholder: "Ask about farming, crops, diseases..."
    },
    cropHealth: {
      title: "Crop Health Monitor",
      subtitle: "Monitor your crop health using satellite imagery and NDVI analysis",
      locationAnalysis: "Location Analysis",
      locationDesc: "Enable location to analyze your farm's crop health",
      coordinates: "Coordinates",
      analyzeCrop: "Analyze Crop Health",
      analyzing: "Analyzing satellite data...",
      poweredBy: "Powered by Sentinel-2 Satellite Data",
      healthStatus: "Health Status",
      ndviIndex: "NDVI Index",
      recommendations: "Recommendations",
      excellent: "Excellent",
      good: "Good",
      moderate: "Moderate",
      poor: "Poor",
      improving: "Improving",
      stable: "Stable",
      declining: "Declining",
      excellentRec1: "Crops are thriving! Continue current irrigation and fertilization practices.",
      excellentRec2: "Monitor for pests regularly to maintain this excellent health status.",
      goodRec1: "Crop health is good. Maintain regular watering schedule.",
      goodRec2: "Consider applying balanced NPK fertilizer for optimal growth.",
      moderateRec1: "Increase irrigation frequency to improve soil moisture levels.",
      moderateRec2: "Check for nutrient deficiencies and apply appropriate fertilizers.",
      moderateRec3: "Inspect crops for early signs of pest or disease problems.",
      poorRec1: "Immediate action required! Check for water stress or disease.",
      poorRec2: "Consult agricultural expert for detailed field assessment.",
      poorRec3: "Consider soil testing and apply corrective measures urgently.",
      analysisComplete: "Analysis Complete",
      satelliteDataProcessed: "Satellite data has been processed successfully",
      satelliteData: "Satellite Imagery",
      satelliteDataDesc: "Real-time data from Sentinel-2 satellites",
      ndviAnalysis: "NDVI Analysis",
      ndviAnalysisDesc: "Vegetation health index calculation",
      actionable: "Actionable Insights",
      actionableDesc: "Get specific recommendations for your crops"
    },
    common: { loading: "Loading...", noResults: "No results found", viewDetails: "View Details", back: "Back", whatsappHelp: "Need help? Chat on WhatsApp", selectLanguage: "Select Language", all: "All", weather: "Weather", humidity: "Humidity", wind: "Wind", condition: "Condition", weatherSource: "Data from Open-Meteo" },
  },
  hi: {
    nav: { home: "होम", tools: "उपकरण", crops: "फसल पुस्तकालय", community: "समुदाय", mandi: "मंडी भाव", transport: "परिवहन", diagnosis: "रोग निदान", yieldPrediction: "उत्पादन पूर्वानुमान", cropCalendar: "फसल कैलेंडर", recommendations: "सिफारिशें", cropHealth: "फसल स्वास्थ्य" },
    hero: { title: "एग्रीलिंक — किसान फसल बुद्धिमत्ता", subtitle: "आपका पूर्ण कृषि साथी: फसल जानकारी, समुदाय प्रश्नोत्तर, मंडी भाव, परिवहन, और AI रोग निदान", cta: "फसलें देखें", badge: "AI-संचालित कृषि बुद्धिमत्ता", problemTitle: "वेब ट्रैक: किसान फसल बुद्धिमत्ता + समुदाय मंच", aiDiagnosis: "AI निदान" },
    stats: { cropsListed: "फसलें सूचीबद्ध", languages: "भाषाएं", mandiMarkets: "मंडी बाज़ार", aiPowered: "AI संचालित", realtime: "रीयल-टाइम" },
    features: { cropsDesc: "मौसम, मिट्टी, सिंचाई, कीट, उर्वरक अनुसूची", communityDesc: "प्रश्नोत्तर, स्थानीय भाषा, विशेषज्ञ उत्तर", mandiDesc: "जिला/बाज़ार के अनुसार भाव + आसपास खोजें", transportDesc: "लॉजिस्टिक्स से जुड़ें, पिकअप अनुरोध", diagnosisDesc: "फोटो से AI रोग पहचान", recommendationsDesc: "मिट्टी, स्थान और मौसम आधारित फसल सलाह", yieldPredictionDesc: "AI से फसल उत्पादन का अनुमान", cropCalendarDesc: "बीज से कटाई तक पूर्ण कृषि रोडमैप", cropHealthDesc: "NDVI के साथ उपग्रह आधारित फसल स्वास्थ्य निगरानी" },
    problemItems: [
      "फसल पुस्तकालय: मौसम, मिट्टी, सिंचाई, कीट, उर्वरक अनुसूची।",
      "समुदाय: प्रश्नोत्तर, स्थानीय भाषा समर्थन, विशेषज्ञ उत्तर।",
      "जिला/बाज़ार के अनुसार मंडी भाव + मूल्य रुझान।",
      "परिवहन: लॉजिस्टिक्स से जुड़ें या पिकअप अनुरोध करें।",
      "AI रोग पहचान: फोटो अपलोड करें, तुरंत निदान और उपचार पाएं।",
      "सिफारिशें: मिट्टी, स्थान और मौसम आधारित विशेषज्ञ फसल सलाह।",
    ],
    crops: { title: "फसल पुस्तकालय", search: "फसल खोजें...", allCategories: "सभी श्रेणियाँ", season: "मौसम", soil: "मिट्टी का प्रकार", irrigation: "सिंचाई", pests: "प्रमुख कीट", fertilizer: "उर्वरक अनुसूची", bestPractices: "सर्वोत्तम अभ्यास", cropsFound: "फसलें मिलीं", askOnWhatsApp: "WhatsApp पर पूछें" },
    community: { title: "समुदाय प्रश्नोत्तर", askQuestion: "प्रश्न पूछें", placeholder: "आपका कृषि प्रश्न क्या है?", post: "प्रश्न पोस्ट करें", answer: "अपना उत्तर लिखें...", answers: "उत्तर", share: "WhatsApp पर शेयर करें", upvote: "अपवोट", category: "श्रेणी", reply: "जवाब दें" },
    mandi: { title: "मंडी भाव", search: "गाँव, जिला, या मंडी खोजें...", state: "राज्य", commodity: "फसल", minPrice: "न्यूनतम मूल्य", maxPrice: "अधिकतम मूल्य", modalPrice: "मॉडल मूल्य", nearby: "मेरे आसपास", all: "सभी", crop: "फसल", crops: "फसलें", tapExpand: "और फसलें — विस्तार करें", showingNearby: "आपके स्थान के निकटतम बाज़ार", markets: "बाज़ार", rates: "भाव", showCharts: "चार्ट", priceAlerts: "अलर्ट", alertsEnabled: "मूल्य अलर्ट सक्षम", significantChanges: "महत्वपूर्ण मूल्य परिवर्तन वाली वस्तुएं (>10%)", showingAlerts: "केवल >10% मूल्य परिवर्तन वाली वस्तुएं दिखा रहे हैं" },
    transport: { title: "परिवहन और लॉजिस्टिक्स", cropType: "फसल का प्रकार", quantity: "मात्रा (क्विंटल)", pickup: "पिकअप स्थान", destination: "गंतव्य", submit: "WhatsApp पर भेजें", whatsapp: "WhatsApp पर बात करें", call: "अभी कॉल करें", requestPickup: "पिकअप अनुरोध", fillDetails: "विवरण भरें और WhatsApp पर भेजें", placeholderCrop: "जैसे, चावल, गेहूं, कपास", placeholderQty: "जैसे, 50", placeholderPickup: "गाँव/शहर का नाम", placeholderDest: "बाज़ार/शहर का नाम" },
    diagnosis: { title: "फसल रोग निदान", upload: "पौधे की फोटो अपलोड करें", analyze: "AI से विश्लेषण करें", result: "निदान परिणाम", disease: "रोग", treatment: "उपचार", prevention: "रोकथाम", severity: "गंभीरता", poweredBy: "AI विज़न विश्लेषण द्वारा संचालित", photoHint: "फोटो लें या गैलरी से अपलोड करें (अधिकतम 10MB)", photoHintSoil: "Take a clear photo of your soil sample", photoHintFertilizer: "Take a photo of fertilizer bag or sample", photoHintWeed: "Take a clear photo of the weed plant", remove: "हटाएं", affectedPart: "प्रभावित पौधे का हिस्सा", analyzing: "AI से विश्लेषण हो रहा है...", affected: "प्रभावित", confidence: "विश्वसनीयता", cause: "कारण", symptoms: "लक्षण", organicTreatment: "जैविक उपचार", askExpert: "WhatsApp पर विशेषज्ञ से पूछें", fileTooLarge: "फ़ाइल बहुत बड़ी है", fileTooLargeDesc: "कृपया 10MB से कम की छवि अपलोड करें", analysisFailed: "विश्लेषण विफल", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact", cultivationTipsTitle: "Cultivation Tips", cultivationTip1: "Maintain proper spacing between plants for good air circulation", cultivationTip2: "Monitor crops regularly for early disease detection", cultivationTip3: "Use disease-resistant varieties when available", cultivationTip4: "Practice crop rotation to prevent soil-borne diseases", cultivationTip5: "Ensure proper drainage to avoid waterlogging", cultivationTip6: "Apply organic mulch to retain soil moisture", moisture: "नमी", phEstimate: "pH अनुमान", organicMatter: "जैविक पदार्थ", fertility: "उर्वरता", waterRetention: "जल धारण", drainage: "जल निकासी", fertilityMaintenance: "उर्वरता रखरखाव", soilMaintenance: "मिट्टी रखरखाव" },
    yieldPrediction: { title: "फसल उत्पादन पूर्वानुमान", subtitle: "पर्यावरणीय इनपुट के आधार पर AI-संचालित उत्पादन अनुमान", cropEnvironmentalData: "फसल और पर्यावरणीय डेटा", enterCropType: "अपना फसल प्रकार और वर्तमान खेत की स्थिति दर्ज करें", cropType: "फसल प्रकार", selectCropType: "फसल प्रकार चुनें", temperature: "तापमान (°C)", rainfall: "वर्षा (mm)", humidity: "आर्द्रता (%)", soilPH: "मिट्टी pH", predictYield: "उत्पादन पूर्वानुमान", analyzing: "विश्लेषण हो रहा है...", predictedYield: "अनुमानित उत्पादन", unit: "टन/हेक्टेयर", confidence: "विश्वसनीयता", smartSuggestions: "स्मार्ट सुझाव", yieldComparison: "फसल के अनुसार उत्पादन तुलना", currentYield: "वर्तमान उत्पादन", optimalYield: "इष्टतम उत्पादन", lowRainfallWarning: "कम वर्षा का पता चला। मिट्टी की नमी बनाए रखने के लिए ड्रिप या स्प्रिंकलर सिंचाई पर विचार करें।", highTemperatureWarning: "उच्च तापमान चेतावनी। छाया जाल, मल्चिंग, या गर्मी प्रतिरोधी फसल किस्मों का उपयोग करें।", acidicSoilInfo: "अम्लीय मिट्टी का पता चला। बेहतर पोषक तत्व अवशोषण के लिए pH बढ़ाने हेतु चूना (कैल्शियम कार्बोनेट) लगाएं।", lowHumidityWarning: "कम आर्द्रता से नमी तनाव हो सकता है। सिंचाई की आवृत्ति बढ़ाएं और मल्च का उपयोग करें।", optimalConditions: "इष्टतम बढ़ने की स्थिति का पता चला! सर्वोत्तम परिणामों के लिए वर्तमान प्रथाओं को बनाए रखें।" },
    recommendations: { title: "फसल सिफारिशें", soilBased: "मिट्टी आधारित", locationBased: "स्थान आधारित", seasonBased: "मौसम आधारित", selectSoil: "मिट्टी का प्रकार चुनें", selectRegion: "क्षेत्र चुनें", currentSeason: "वर्तमान मौसम", expertTips: "विशेषज्ञ सुझाव", source: "स्रोत", climate: "जलवायु", states: "राज्य" },
    cropCalendar: {
      title: "फसल कैलेंडर",
      subtitle: "बीज तैयारी से कटाई और कटाई के बाद की गतिविधियों तक चरणबद्ध मार्गदर्शन के साथ पूर्ण कृषि रोडमैप",
      defaultRoadmap: "डिफ़ॉल्ट रोडमैप",
      liveTracking: "लाइव ट्रैकिंग",
      currentSeason: "वर्तमान मौसम",
      monsoonSeason: "मानसून मौसम (जून-सितंबर) - वर्षा आधारित फसलों पर ध्यान दें",
      winterSeason: "शीत मौसम (अक्टूबर-मार्च) - सिंचित फसलों पर ध्यान दें",
      summerSeason: "ग्रीष्म मौसम (अप्रैल-मई) - उच्च जल उपलब्धता के साथ सिंचित फसलों पर ध्यान दें",
      selectState: "राज्य/क्षेत्र चुनें",
      cropCategory: "फसल श्रेणी",
      startLiveTracking: "लाइव फसल ट्रैकिंग शुरू करें",
      selectYourCrop: "अपनी फसल चुनें",
      cultivationStartDate: "खेती शुरू करने की तारीख",
      chooseYourCrop: "अपनी फसल चुनें",
      howLiveTrackingWorks: "लाइव ट्रैकिंग कैसे काम करता है:",
      trackEachStage: "वास्तविक तारीखों के साथ प्रत्येक कृषि चरण को ट्रैक करें",
      markStagesComplete: "समाप्त होने पर चरणों को पूर्ण के रूप में चिह्नित करें",
      getSolutions: "यदि कुछ गलत हो जाए तो समाधान प्राप्त करें",
      monitorProgress: "समग्र प्रगति प्रतिशत की निगरानी करें",
      complete: "पूर्ण",
      started: "शुरू किया गया",
      completed: "पूर्ण",
      inProgress: "प्रगति में",
      pending: "लंबित",
      markComplete: "पूर्ण चिह्नित करें",
      needHelp: "मदद चाहिए?",
      resetTracking: "ट्रैकिंग रीसेट करें",
      liveFarmingProgress: "लाइव कृषि प्रगति",
      trackingProgress: "ट्रैकिंग प्रगति",
      stages: "चरण",
      problemSolver: "समस्या समाधानकर्ता",
      havingIssues: "इस चरण में समस्या हो रही है? यहाँ सामान्य समस्याएं और समाधान हैं:",
      pestProblems: "कीट समस्याएं",
      pestSolution: "जैविक नीम तेल स्प्रे लगाएं या कीट पहचान और उपचार के लिए स्थानीय कृषि अधिकारी से सलाह लें।",
      weatherIssues: "मौसम संबंधी समस्याएं",
      weatherSolution: "वर्षा के आधार पर सिंचाई कार्यक्रम समायोजित करें। जलभराव होने पर जल निकासी या सूखे में अतिरिक्त पानी प्रदान करें।",
      poorGrowth: "खराब वृद्धि",
      poorGrowthSolution: "मिट्टी के पोषक तत्वों की जांच करें, संतुलित उर्वरक लगाएं, उचित दूरी और धूप सुनिश्चित करें।",
      problemSolved: "समस्या हल हो गई - जारी रखें",
      close: "बंद करें",
      completeRoadmap: "पूर्ण कृषि रोडमैप - बीज से कटाई तक",
      viewCompleteRoadmap: "पूर्ण रोडमैप देखें",
      farmingTips: "कृषि सुझाव",
      temperature: "तापमान",
      rainfall: "वर्षा",
      soilType: "मिट्टी का प्रकार",
      noCropsFound: "कोई फसल नहीं मिली",
      adjustFilters: "अधिक फसल कैलेंडर जानकारी देखने के लिए अपने फ़िल्टर समायोजित करने का प्रयास करें।",
      kharif: "खरीफ",
      rabi: "रबी",
      zaid: "जायद",
      cereals: "अनाज",
      pulses: "दालें",
      vegetables: "सब्जियां",
      fruits: "फल",
      cashCrops: "नकदी फसलें",
      oilseeds: "तिलहन",
      spices: "मसाले"
    },
    chatbot: {
      greeting: [
        "नमस्ते! मैं एग्रीबॉट हूं, आपका AI कृषि सहायक। मैं सभी एग्रीलिंक सुविधाओं में मदद कर सकता हूं: फसल पुस्तकालय (102+ फसलें), समुदाय Q&A, लाइव मंडी भाव (500+ बाजार), परिवहन सेवाएं, AI निदान, उत्पादन पूर्वानुमान, फसल कैलेंडर, और सिफारिशें। 📍 किसी भी सुविधा पर जाने के लिए ऊपरी मेनू का उपयोग करें। आप क्या जानना चाहते हैं?",
        "नमस्कार! एग्रीलिंक में आपका स्वागत है - आपका पूर्ण कृषि साथी। मैं हमारी व्यापक सुविधाओं के माध्यम से आपका मार्गदर्शन कर सकता हूं और किसी भी कृषि प्रश्न का उत्तर दे सकता हूं। 📍 उस सुविधा तक सीधे पहुंचने के लिए ऊपरी मेनू में किसी भी अनुभाग पर क्लिक करें। आज मैं आपकी कैसे सहायता कर सकता हूं?"
      ],
      crops: [
        "हमारी फसल पुस्तकालय में 102+ फसलों की विस्तृत जानकारी है जिसमें मौसमी, मिट्टी की आवश्यकताएं, सिंचाई की जरूरतें, कीट प्रबंधन, उर्वरक कार्यक्रम और सर्वोत्तम प्रथाएं शामिल हैं। 📍 ऊपरी मेनू में 'फसल पुस्तकालय' पर जाएं → खोज बार का उपयोग करके विशिष्ट फसलें खोजें → श्रेणियों द्वारा फ़िल्टर करें (अनाज, दालें, सब्जियां, फल, तिलहन, मसाले, व्यावसायिक फसलें, बागान फसलें) → पूरी खेती की जानकारी के लिए किसी भी फसल कार्ड पर क्लिक करें → विशेषज्ञ सलाह के लिए WhatsApp बटन पर क्लिक करके कृषि विशेषज्ञों से जुड़ें।"
      ],
      community: [
        "हमारा समुदाय अनुभाग एक Q&A प्लेटफॉर्म है जहां किसान ज्ञान साझा करते हैं और विशेषज्ञ उत्तर प्राप्त करते हैं। 30+ भाषाओं में उपलब्ध। 📍 मेनू में 'समुदाय' पर जाएं → श्रेणी के अनुसार मौजूदा प्रश्न ब्राउज़ करें → अपनी कृषि समस्या पोस्ट करने के लिए 'प्रश्न पूछें' पर क्लिक करें → सहायक उत्तरों पर वोट करें → सीधे विशेषज्ञ परामर्श के लिए WhatsApp बटन का उपयोग करें।"
      ],
      mandi: [
        "मंडी भाव भारत भर के 500+ बाजारों से लाइव बाजार मूल्य प्रदान करता है। सभी प्रमुख वस्तुओं की वर्तमान दरें देखें। 📍 ऊपरी मेनू में 'मंडी भाव' पर जाएं → ड्रॉपडाउन से अपना राज्य चुनें → कमोडिटी प्रकार चुनें → आज की कीमतें, कल की दरें, और साप्ताहिक रुझान देखें → विस्तृत मूल्य विश्लेषण के लिए किसी भी बाजार पर क्लिक करें → स्थानीय व्यापारियों से जुड़ने और बिक्री सहायता के लिए WhatsApp बटन का उपयोग करें।"
      ],
      transport: [
        "परिवहन और रसद आपको अपनी उपज को खेत से बाजार तक ले जाने के लिए रसद प्रदाताओं से जोड़ने में मदद करता है। 📍 विश्वसनीय परिवहनकर्ताओं से जुड़ने के लिए मेनू में 'परिवहन' पर जाएं।"
      ],
      diagnosis: [
        "AI निदान 3 शक्तिशाली मोड प्रदान करता है: 1) पौधों की बीमारी का पता लगाना, 2) मिट्टी विश्लेषण, 3) उर्वरक का पता लगाना। 📍 तत्काल AI विश्लेषण के लिए मेनू में 'निदान' पर जाएं।"
      ],
      yieldPrediction: [
        "उत्पादन पूर्वानुमान तापमान, वर्षा, आर्द्रता और मिट्टी के pH जैसे पर्यावरणीय कारकों के आधार पर फसल की पैदावार का अनुमान लगाने के लिए AI का उपयोग करता है। 📍 AI-संचालित उत्पादन पूर्वानुमान के लिए मेनू में 'उत्पादन पूर्वानुमान' पर जाएं।"
      ],
      cropCalendar: [
        "फसल कैलेंडर भारत भर की प्रमुख फसलों के लिए बीज से कटाई तक पूर्ण कृषि रोडमैप प्रदान करता है। दो मोड में से चुनें: 📖 डिफ़ॉल्ट रोडमैप पूर्वनिर्धारित चरणबद्ध मार्गदर्शन के लिए, या 🔄 लाइव ट्रैकिंग अपनी वास्तविक कृषि प्रगति को रियल-टाइम में मॉनिटर करने के लिए। प्रत्येक चरण के लिए विस्तृत गतिविधियां प्राप्त करें जिसमें बुवाई पूर्व तैयारी, बुवाई, वानस्पतिक वृद्धि, फूल आना, कटाई और कटाई के बाद की गतिविधियां शामिल हैं। 📍 मेनू में 'फसल कैलेंडर' पर जाएं → 'डिफ़ॉल्ट रोडमैप' या 'लाइव ट्रैकिंग' मोड चुनें → लाइव ट्रैकिंग के लिए: अपनी फसल पर 'ट्रैकिंग शुरू करें' क्लिक करें → पूर्ण होने पर चरणों को चिह्नित करें → पूर्णता प्रतिशत के साथ प्रगति मॉनिटर करें → व्यक्तिगत कृषि मार्गदर्शन के लिए WhatsApp बटन का उपयोग करें।"
      ],
      recommendations: [
        "सिफारिशें आपकी मिट्टी के प्रकार, स्थान, वर्तमान मौसम और स्थानीय जलवायु परिस्थितियों के आधार पर व्यक्तिगत फसल सुझाव प्रदान करती हैं। 📍 व्यक्तिगत फसल सुझावों के लिए मेनू में 'सिफारिशें' पर जाएं।"
      ],
      agrilink: [
        "एग्रीलिंक 8 मुख्य सुविधाओं के साथ आपका पूर्ण कृषि साथी है: फसल पुस्तकालय, समुदाय Q&A, लाइव मंडी भाव, परिवहन सेवाएं, AI निदान, उत्पादन पूर्वानुमान, फसल कैलेंडर, और व्यक्तिगत सिफारिशें। 📍 आपको आवश्यक किसी भी सुविधा पर जाने के लिए ऊपरी मेनू का उपयोग करें।"
      ],
      default: "मैं समझता हूं कि आप कृषि के बारे में पूछ रहे हैं। एग्रीलिंक 8 व्यापक सुविधाएं प्रदान करता है। 📍 आपको आवश्यक किसी भी सुविधा तक पहुंचने के लिए ऊपरी नेवीगेशन मेनू का उपयोग करें। कौन सी सुविधा आपकी रुचि है?",
      typing: "एग्रीबॉट टाइप कर रहा है...",
      placeholder: "कृषि, फसलों, बीमारियों के बारे में पूछें..."
    },
    cropHealth: {
      title: "फसल स्वास्थ्य मॉनिटर",
      subtitle: "उपग्रह इमेजरी और NDVI विश्लेषण का उपयोग करके अपनी फसल के स्वास्थ्य की निगरानी करें",
      locationAnalysis: "स्थान विश्लेषण",
      locationDesc: "अपने खेत की फसल स्वास्थ्य का विश्लेषण करने के लिए स्थान सक्षम करें",
      coordinates: "निर्देशांक",
      analyzeCrop: "फसल स्वास्थ्य का विश्लेषण करें",
      analyzing: "उपग्रह डेटा का विश्लेषण हो रहा है...",
      poweredBy: "Sentinel-2 उपग्रह डेटा द्वारा संचालित",
      healthStatus: "स्वास्थ्य स्थिति",
      ndviIndex: "NDVI सूचकांक",
      recommendations: "सिफारिशें",
      excellent: "उत्कृष्ट",
      good: "अच्छा",
      moderate: "मध्यम",
      poor: "खराब",
      improving: "सुधार हो रहा है",
      stable: "स्थिर",
      declining: "गिरावट",
      excellentRec1: "फसलें फल-फूल रही हैं! वर्तमान सिंचाई और उर्वरक प्रथाओं को जारी रखें।",
      excellentRec2: "इस उत्कृष्ट स्वास्थ्य स्थिति को बनाए रखने के लिए नियमित रूप से कीटों की निगरानी करें।",
      goodRec1: "फसल का स्वास्थ्य अच्छा है। नियमित पानी देने का कार्यक्रम बनाए रखें।",
      goodRec2: "इष्टतम वृद्धि के लिए संतुलित NPK उर्वरक लगाने पर विचार करें।",
      moderateRec1: "मिट्टी की नमी के स्तर में सुधार के लिए सिंचाई की आवृत्ति बढ़ाएं।",
      moderateRec2: "पोषक तत्वों की कमी की जांच करें और उपयुक्त उर्वरक लगाएं।",
      moderateRec3: "कीट या रोग की समस्याओं के शुरुआती संकेतों के लिए फसलों का निरीक्षण करें।",
      poorRec1: "तत्काल कार्रवाई आवश्यक! पानी के तनाव या बीमारी की जांच करें।",
      poorRec2: "विस्तृत क्षेत्र मूल्यांकन के लिए कृषि विशेषज्ञ से परामर्श लें।",
      poorRec3: "मिट्टी परीक्षण पर विचार करें और तुरंत सुधारात्मक उपाय लागू करें।",
      analysisComplete: "विश्लेषण पूर्ण",
      satelliteDataProcessed: "उपग्रह डेटा सफलतापूर्वक संसाधित किया गया है",
      satelliteData: "उपग्रह इमेजरी",
      satelliteDataDesc: "Sentinel-2 उपग्रहों से रीयल-टाइम डेटा",
      ndviAnalysis: "NDVI विश्लेषण",
      ndviAnalysisDesc: "वनस्पति स्वास्थ्य सूचकांक गणना",
      actionable: "कार्रवाई योग्य अंतर्दृष्टि",
      actionableDesc: "अपनी फसलों के लिए विशिष्ट सिफारिशें प्राप्त करें"
    },
    common: { loading: "लोड हो रहा है...", noResults: "कोई परिणाम नहीं मिला", viewDetails: "विवरण देखें", back: "वापस", whatsappHelp: "मदद चाहिए? WhatsApp पर बात करें", selectLanguage: "भाषा चुनें", all: "सभी", weather: "मौसम", humidity: "आर्द्रता", wind: "हवा", condition: "स्थिति", weatherSource: "Open-Meteo से डेटा" },
  },
  te: {
    nav: { home: "హోమ్", tools: "సాధనాలు", crops: "పంట గ్రంథాలయం", community: "సమాజం", mandi: "మండి ధరలు", transport: "రవాణా", diagnosis: "రోగ నిర్ధారణ", yieldPrediction: "దిగుబడి అంచనా", cropCalendar: "పంట క్యాలెండర్", recommendations: "సిఫార్సులు", cropHealth: "పంట ఆరోగ్యం" },
    hero: { title: "ఆగ్రీలింక్ — రైతు పంట మేధస్సు", subtitle: "మీ పూర్తి వ్యవసాయ సహచరుడు: పంట సమాచారం, సమాజ Q&A, మండి ధరలు, రవాణా, మరియు AI రోగ నిర్ధారణ", cta: "పంటలు చూడండి", badge: "AI-ఆధారిత వ్యవసాయ మేధస్సు", problemTitle: "వెబ్ ట్రాక్: రైతు పంట మేధస్సు + సమాజ వేదిక", aiDiagnosis: "AI నిర్ధారణ" },
    stats: { cropsListed: "పంటలు జాబితా", languages: "భాషలు", mandiMarkets: "మండి మార్కెట్లు", aiPowered: "AI ఆధారిత", realtime: "రియల్-టైమ్" },
    features: { cropsDesc: "సీజన్, నేల, నీటిపారుదల, పురుగులు, ఎరువుల షెడ్యూల్", communityDesc: "Q&A, స్థానిక భాష, నిపుణుల సమాధానాలు", mandiDesc: "జిల్లా/మార్కెట్ ధరలు + సమీపంలో వెతకండి", transportDesc: "లాజిస్టిక్స్‌కు కనెక్ట్, పికప్ అభ్యర్థన", diagnosisDesc: "ఫోటోల నుండి AI రోగ గుర్తింపు", recommendationsDesc: "నేల, ప్రదేశం & సీజన్ ఆధారిత పంట సలహా", yieldPredictionDesc: "AI తో పంట దిగుబడిని అంచనా వేయండి", cropCalendarDesc: "విత్తనం నుండి కోత వరకు పూర్తి వ్యవసాయ రోడ్‌మ్యాప్‌లు", cropHealthDesc: "NDVI తో ఉపగ్రహ ఆధారిత పంట ఆరోగ్య పర్యవేక్షణ" },
    problemItems: [
      "పంట గ్రంథాలయం: సీజన్, నేల, నీటిపారుదల, పురుగులు, ఎరువుల షెడ్యూల్.",
      "సమాజం: Q&A, స్థానిక భాష మద్దతు, నిపుణుల సమాధానాలు.",
      "జిల్లా/మార్కెట్ వారీగా మండి ధరలు + ధర ట్రెండ్‌లు.",
      "రవాణా: లాజిస్టిక్స్ ప్రొవైడర్లకు కనెక్ట్ లేదా పికప్ అభ్యర్థన.",
      "AI రోగ గుర్తింపు: ఫోటో అప్‌లోడ్ చేయండి, తక్షణ నిర్ధారణ & చికిత్స పొందండి.",
      "సిఫార్సులు: నేల, ప్రదేశం & సీజన్ ఆధారిత నిపుణుల పంట సలహా.",
    ],
    crops: { title: "పంట గ్రంథాలయం", search: "పంటలు వెతకండి...", allCategories: "అన్ని వర్గాలు", season: "సీజన్", soil: "నేల రకం", irrigation: "నీటిపారుదల", pests: "ప్రధాన పురుగులు", fertilizer: "ఎరువుల షెడ్యూల్", bestPractices: "ఉత్తమ పద్ధతులు", cropsFound: "పంటలు కనుగొనబడ్డాయి", askOnWhatsApp: "WhatsApp లో అడగండి" },
    community: { title: "సమాజ Q&A", askQuestion: "ప్రశ్న అడగండి", placeholder: "మీ వ్యవసాయ ప్రశ్న ఏమిటి?", post: "ప్రశ్న పోస్ట్ చేయండి", answer: "మీ సమాధానం రాయండి...", answers: "సమాధానాలు", share: "WhatsApp ద్వారా షేర్ చేయండి", upvote: "అప్‌వోట్", category: "వర్గం", reply: "జవాబు" },
    mandi: { title: "మండి ధరలు", search: "గ్రామం, జిల్లా, లేదా మార్కెట్ వెతకండి...", state: "రాష్ట్రం", commodity: "పంట", minPrice: "కనిష్ట ధర", maxPrice: "గరిష్ట ధర", modalPrice: "మోడల్ ధర", nearby: "నా చుట్టుపక్కల", all: "అన్ని", crop: "పంట", crops: "పంటలు", tapExpand: "మరిన్ని పంటలు — విస్తరించండి", showingNearby: "మీ స్థానం ఆధారంగా సమీప మార్కెట్లు", markets: "మార్కెట్లు", rates: "ధరలు", sortDefault: "క్రమం: డిఫాల్ట్", sortPriceLow: "ధర: తక్కువ → ఎక్కువ", sortPriceHigh: "ధర: ఎక్కువ → తక్కువ", byState: "రాష్ట్రం వారీగా", perQuintal: "క్వింటాల్ కు", vegetables: "కూరగాయలు", fruits: "పండ్లు", cerealsGrains: "ధాన్యాలు & గింజలు", pulsesLegumes: "పప్పులు & కాయధాన్యాలు", spices: "మసాలాలు", oilseeds: "నూనె గింజలు", cashCrops: "నగదు పంటలు" },
    transport: { title: "రవాణా & లాజిస్టిక్స్", cropType: "పంట రకం", quantity: "పరిమాణం (క్వింటాళ్లు)", pickup: "పికప్ స్థానం", destination: "గమ్యస్థానం", submit: "WhatsApp ద్వారా పంపండి", whatsapp: "WhatsApp లో చాట్ చేయండి", call: "ఇప్పుడు కాల్ చేయండి", requestPickup: "పికప్ అభ్యర్థన", fillDetails: "వివరాలు నింపి WhatsApp ద్వారా పంపండి", placeholderCrop: "ఉదా., వరి, గోధుమ, పత్తి", placeholderQty: "ఉదా., 50", placeholderPickup: "గ్రామం/పట్టణం పేరు", placeholderDest: "మార్కెట్/నగరం పేరు" },
    diagnosis: { title: "పంట రోగ నిర్ధారణ", upload: "మొక్క ఫోటో అప్‌లోడ్ చేయండి", analyze: "AI తో విశ్లేషించండి", result: "నిర్ధారణ ఫలితం", disease: "రోగం", treatment: "చికిత్స", prevention: "నివారణ", severity: "తీవ్రత", poweredBy: "AI విజన్ విశ్లేషణ ద్వారా", photoHint: "ఫోటో తీయండి లేదా గ్యాలరీ నుండి అప్‌లోడ్ చేయండి (గరిష్టం 10MB)", photoHintSoil: "మీ మట్టి నమూనా యొక్క స్పష్టమైన ఫోటో తీయండి", photoHintFertilizer: "ఎరువు సంచి లేదా నమూనా ఫోటో తీయండి", photoHintWeed: "కలుపు మొక్క యొక్క స్పష్టమైన ఫోటో తీయండి", remove: "తొలగించు", affectedPart: "ప్రభావిత మొక్క భాగం", analyzing: "AI తో విశ్లేషిస్తోంది...", affected: "ప్రభావితం", confidence: "విశ్వాసం", cause: "కారణం", symptoms: "లక్షణాలు", organicTreatment: "సేంద్రియ చికిత్స", askExpert: "WhatsApp లో నిపుణుడిని అడగండి", fileTooLarge: "ఫైల్ చాలా పెద్దది", fileTooLargeDesc: "దయచేసి 10MB కంటే తక్కువ చిత్రాన్ని అప్‌లోడ్ చేయండి", analysisFailed: "విశ్లేషణ విఫలమైంది", modePlant: "మొక్క రోగం", modeSoil: "మట్టి గుర్తింపు", modeFertilizer: "ఎరువు", modeWeed: "కలుపు గుర్తింపు", uploadSoil: "మట్టి ఫోటో అప్‌లోడ్ చేయండి", uploadFertilizer: "ఎరువు ఫోటో అప్‌లోడ్ చేయండి", uploadWeed: "కలుపు ఫోటో అప్‌లోడ్ చేయండి", analyzeSoil: "మట్టిని విశ్లేషించండి", analyzeFertilizer: "ఎరువును విశ్లేషించండి", identifyWeed: "కలుపును గుర్తించండి", weedReport: "కలుపు గుర్తింపు నివేదిక", scientificName: "శాస్త్రీయ నామం", family: "కుటుంబం", weedType: "రకం", origin: "మూలం", invasiveness: "దురాక్రమణ", growthHabit: "పెరుగుదల అలవాటు", lifeCycle: "జీవిత చక్రం", characteristics: "లక్షణాలు", impactOnCrops: "పంటలపై ప్రభావం", affectedCrops: "ప్రభావిత పంటలు", controlMethods: "నియంత్రణ పద్ధతులు", organicControl: "సేంద్రియ నియంత్రణ", chemicalControl: "రసాయన నియంత్రణ", preventionTips: "నివారణ చిట్కాలు", bestTimeToControl: "నియంత్రించడానికి ఉత్తమ సమయం", economicImpact: "ఆర్థిక ప్రభావం", cultivationTipsTitle: "సాగు చిట్కాలు", cultivationTip1: "మంచి గాలి ప్రసరణ కోసం మొక్కల మధ్య సరైన అంతరం నిర్వహించండి", cultivationTip2: "ముందస్తు రోగ గుర్తింపు కోసం పంటలను క్రమం తప్పకుండా పర్యవేక్షించండి", cultivationTip3: "అందుబాటులో ఉన్నప్పుడు రోగ-నిరోధక రకాలను ఉపయోగించండి", cultivationTip4: "మట్టి-వ్యాధులను నివారించడానికి పంట మార్పిడిని అభ్యసించండి", cultivationTip5: "నీటి నిలుపుదలని నివారించడానికి సరైన నీటి పారుదల నిర్ధారించండి", cultivationTip6: "మట్టి తేమను నిలుపుకోవడానికి సేంద్రియ మల్చ్ వర్తించండి", moisture: "తేమ", phEstimate: "pH అంచనా", organicMatter: "సేంద్రియ పదార్థం", fertility: "సారవంతత", waterRetention: "నీటి నిలుపుదల", drainage: "నీటి పారుదల", fertilityMaintenance: "సారవంతత నిర్వహణ", soilMaintenance: "మట్టి నిర్వహణ" },
    yieldPrediction: { title: "పంట దిగుబడి అంచనా", subtitle: "పర్యావరణ ఇన్‌పుట్‌ల ఆధారంగా AI-శక్తితో దిగుబడి అంచనా", cropEnvironmentalData: "పంట & పర్యావరణ డేటా", enterCropType: "మీ పంట రకం మరియు ప్రస్తుత పొలం పరిస్థితులను నమోదు చేయండి", cropType: "పంట రకం", selectCropType: "పంట రకాన్ని ఎంచుకోండి", temperature: "ఉష్ణోగ్రత (°C)", rainfall: "వర్షపాతం (mm)", humidity: "తేమ (%)", soilPH: "మట్టి pH", predictYield: "దిగుబడి అంచనా", analyzing: "విశ్లేషిస్తోంది...", predictedYield: "అంచనా దిగుబడి", unit: "టన్నులు/హెక్టార్", confidence: "విశ్వసనీయత", smartSuggestions: "స్మార్ట్ సూచనలు", yieldComparison: "పంట వారీగా దిగుబడి పోలిక", currentYield: "ప్రస్తుత దిగుబడి", optimalYield: "అనుకూల దిగుబడి", lowRainfallWarning: "తక్కువ వర్షపాతం గుర్తించబడింది.", highTemperatureWarning: "అధిక ఉష్ణోగ్రత హెచ్చరిక.", acidicSoilInfo: "ఆమ్ల మట్టి గుర్తించబడింది.", lowHumidityWarning: "తక్కువ తేమ గుర్తించబడింది.", optimalConditions: "అనుకూల పరిస్థితులు గుర్తించబడ్డాయి!" },
    recommendations: { title: "పంట సిఫార్సులు", soilBased: "నేల ఆధారిత", locationBased: "ప్రదేశ ఆధారిత", seasonBased: "సీజన్ ఆధారిత", selectSoil: "నేల రకం ఎంచుకోండి", selectRegion: "ప్రాంతం ఎంచుకోండి", currentSeason: "ప్రస్తుత సీజన్", expertTips: "నిపుణుల సూచనలు", source: "మూలం", climate: "వాతావరణం", states: "రాష్ట్రాలు" },
    cropCalendar: {
      title: "పంట క్యాలెండర్",
      subtitle: "విత్తనాల తయారీ నుండి కోత మరియు కోత అనంతర కార్యకలాపాల వరకు దశల వారీ మార్గదర్శకత్వంతో పూర్తి వ్యవసాయ రోడ్‌మ్యాప్",
      defaultRoadmap: "డిఫాల్ట్ రోడ్‌మ్యాప్",
      liveTracking: "లైవ్ ట్రాకింగ్",
      currentSeason: "ప్రస్తుత సీజన్",
      monsoonSeason: "వర్షాకాలం (జూన్-సెప్టెంబర్) - వర్షం ఆధారిత పంటలపై దృష్టి పెట్టండి",
      winterSeason: "శీతాకాలం (అక్టోబర్-మార్చి) - నీటిపారుదల పంటలపై దృష్టి పెట్టండి",
      summerSeason: "వేసవికాలం (ఏప్రిల్-మే) - అధిక నీటి లభ్యతతో నీటిపారుదల పంటలపై దృష్టి పెట్టండి",
      selectState: "రాష్ట్రం/ప్రాంతం ఎంచుకోండి",
      cropCategory: "పంట వర్గం",
      startLiveTracking: "లైవ్ పంట ట్రాకింగ్ ప్రారంభించండి",
      selectYourCrop: "మీ పంటను ఎంచుకోండి",
      cultivationStartDate: "సాగు ప్రారంభ తేదీ",
      chooseYourCrop: "మీ పంటను ఎంచుకోండి",
      howLiveTrackingWorks: "లైవ్ ట్రాకింగ్ ఎలా పనిచేస్తుంది:",
      trackEachStage: "వాస్తవ తేదీలతో ప్రతి వ్యవసాయ దశను ట్రాక్ చేయండి",
      markStagesComplete: "పూర్తయినప్పుడు దశలను పూర్తిగా గుర్తించండి",
      getSolutions: "ఏదైనా తప్పు జరిగితే పరిష్కారాలు పొందండి",
      monitorProgress: "మొత్తం పురోగతి శాతాన్ని పర్యవేక్షించండి",
      complete: "పూర్తి",
      started: "ప్రారంభించబడింది",
      completed: "పూర్తయింది",
      inProgress: "పురోగతిలో",
      pending: "పెండింగ్",
      markComplete: "పూర్తిగా గుర్తించండి",
      needHelp: "సహాయం కావాలా?",
      resetTracking: "ట్రాకింగ్ రీసెట్ చేయండి",
      liveFarmingProgress: "లైవ్ వ్యవసాయ పురోగతి",
      trackingProgress: "ట్రాకింగ్ పురోగతి",
      stages: "దశలు",
      problemSolver: "సమస్య పరిష్కర్త",
      havingIssues: "ఈ దశలో సమస్యలు ఉన్నాయా? ఇక్కడ సాధారణ సమస్యలు మరియు పరిష్కారాలు ఉన్నాయి:",
      pestProblems: "పురుగుల సమస్యలు",
      pestSolution: "సేంద్రియ వేప నూనె స్ప్రే వేయండి లేదా పురుగుల గుర్తింపు మరియు చికిత్స కోసం స్థానిక వ్యవసాయ అధికారిని సంప్రదించండి.",
      weatherIssues: "వాతావరణ సమస్యలు",
      weatherSolution: "వర్షపాతం ఆధారంగా నీటిపారుదల షెడ్యూల్‌ను సర్దుబాటు చేయండి. నీరు నిలిచిపోతే డ్రైనేజీ లేదా కరువులో అదనపు నీరు అందించండి.",
      poorGrowth: "దృష్టిలేని వృద్ధి",
      poorGrowthSolution: "నేల పోషకాలను తనిఖీ చేయండి, సమతుల్య ఎరువులు వేయండి, సరైన దూరం మరియు సూర్యకాంతిని నిర్ధారించండి.",
      problemSolved: "సమస్య పరిష్కరించబడింది - కొనసాగించండి",
      close: "మూసివేయండి",
      completeRoadmap: "పూర్తి వ్యవసాయ రోడ్‌మ్యాప్ - విత్తనం నుండి కోత వరకు",
      viewCompleteRoadmap: "పూర్తి రోడ్‌మ్యాప్ చూడండి",
      farmingTips: "వ్యవసాయ చిట్కాలు",
      temperature: "ఉష్ణోగ్రత",
      rainfall: "వర్షపాతం",
      soilType: "నేల రకం",
      noCropsFound: "పంటలు కనుగొనబడలేదు",
      adjustFilters: "మరిన్ని పంట క్యాలెండర్ సమాచారాన్ని చూడటానికి మీ ఫిల్టర్‌లను సర్దుబాటు చేయడానికి ప్రయత్నించండి.",
      kharif: "ఖరీఫ్",
      rabi: "రబీ",
      zaid: "జాయిద్",
      cereals: "ధాన్యాలు",
      pulses: "పప్పుధాన్యాలు",
      vegetables: "కూరగాయలు",
      fruits: "పండ్లు",
      cashCrops: "నగదు పంటలు",
      oilseeds: "నూనె గింజలు",
      spices: "మసాలాలు"
    },
    chatbot: {
      greeting: [
        "నమస్కారం! నేను ఆగ్రీబాట్, మీ AI వ్యవసాయ సహాయకుడిని. నేను అన్ని ఆగ్రీలింక్ సేవలలో సహాయం చేయగలను: పంట గ్రంథాలయం (102+ పంటలు), కమ్యూనిటీ Q&A, లైవ్ మండి రేట్లు (500+ మార్కెట్లు), రవాణా సేవలు, AI నిర్ధారణ, దిగుబడి అంచనా, పంట క్యాలెండర్, మరియు సిఫార్సులు. 📍 ఏదైనా సేవకు వెళ్లడానికి టాప్ మెనూ ఉపయోగించండి. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
        "హలో! ఆగ్రీలింక్‌కు స్వాగతం - మీ పూర్తి వ్యవసాయ సహచరుడు. నేను మా సమగ్ర సేవల ద్వారా మీకు మార్గదర్శనం చేయగలను మరియు ఏదైనా వ్యవసాయ ప్రశ్నలకు సమాధానం ఇవ్వగలను. 📍 ఆ సేవను నేరుగా యాక్సెస్ చేయడానికి టాప్ మెనూలోని ఏదైనా విభాగంపై క్లిక్ చేయండి. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
        "స్వాగతం! నేను మీ AI వ్యవసాయ నిపుణుడిని. ఆగ్రీలింక్ ఆధునిక వ్యవసాయం కోసం సమగ్ర సాధనాలను అందిస్తుంది - పంట ఎంపిక నుండి కాలానుగుణ ప్రణాళిక వరకు మార్కెట్ ధరల వరకు. 📍 ప్రతి సేవను అన్వేషించడానికి పైన ఉన్న నావిగేషన్ మెనూని ఉపయోగించండి. నేను ఏ వ్యవసాయ సవాలును పరిష్కరించడంలో సహాయం చేయగలను?"
      ],
      crops: [
        "మా పంట గ్రంథాలయంలో 102+ పంటల వివరణాత్మక సమాచారం ఉంది, ఇందులో కాలానుగుణత, నేల అవసరాలు, నీటిపారుదల అవసరాలు, కీటక నిర్వహణ, ఎరువుల షెడ్యూల్ మరియు ఉత్తమ పద్ధతులు ఉన్నాయి. 📍 టాప్ మెనూలో 'పంట గ్రంథాలయం'కు వెళ్లండి → నిర్దిష్ట పంటలను కనుగొనడానికి సెర్చ్ బార్ ఉపయోగించండి → వర్గాల ద్వారా ఫిల్టర్ చేయండి (ధాన్యాలు, పప్పులు, కూరగాయలు, పండ్లు, నూనె గింజలు, మసాలాలు, వాణిజ్య పంటలు, తోట పంటలు) → పూర్తి సాగు వివరాల కోసం ఏదైనా పంట కార్డ్‌పై క్లిక్ చేయండి → నిపుణుల సలహా కోసం WhatsApp బటన్‌పై క్లిక్ చేసి వ్యవసాయ నిపుణులతో కనెక్ట్ అవ్వండి.",
        "పంట గ్రంథాలయం మీ పూర్తి పంట ఎన్సైక్లోపీడియా 102+ రకాలతో. 📍 పైన 'పంట గ్రంథాలయం' క్లిక్ చేయండి → పంట పేరుతో సెర్చ్ చేయండి లేదా వర్గాలను బ్రౌజ్ చేయండి → ప్రతి పంట శాస్త్రీయ పేరు, పెరుగుతున్న సీజన్లు, నేల రకాలు, నీటి అవసరాలు, సాధారణ కీటకాలు మరియు సాగు సలహాలను చూపిస్తుంది → వ్యవసాయ నిపుణుల నుండి వ్యక్తిగత మార్గదర్శనం కోసం 'WhatsAppలో నిపుణుడిని అడగండి' బటన్ క్లిక్ చేయండి."
      ],
      community: [
        "మా కమ్యూనిటీ విభాగం రైతులు జ్ఞానాన్ని పంచుకునే మరియు నిపుణుల సమాధానాలు పొందే Q&A ప్లాట్‌ఫారమ్. వర్గాలలో కీటక నియంత్రణ, నీటిపారుదల, నేల నిర్వహణ, మార్కెట్ ట్రెండ్‌లు, విత్తనాలు, ఎరువులు, సేంద్రీయ వ్యవసాయం, పరికరాలు మరియు వాతావరణం ఉన్నాయి. 30+ భాషలలో అందుబాటులో ఉంది. 📍 మెనూలో 'కమ్యూనిటీ'కు వెళ్లండి → వర్గం ద్వారా ఇప్పటికే ఉన్న ప్రశ్నలను బ్రౌజ్ చేయండి → మీ వ్యవసాయ సమస్యను పోస్ట్ చేయడానికి 'ప్రశ్న అడగండి' క్లిక్ చేయండి → సహాయకరమైన సమాధానాలపై వోట్ చేయండి → ప్రత్యక్ష నిపుణుల సంప్రదింపుల కోసం WhatsApp బటన్ ఉపయోగించండి."
      ],
      mandi: [
        "మండి రేట్లు భారతదేశంలోని 500+ మార్కెట్ల నుండి లైవ్ మార్కెట్ ధరలను అందిస్తుంది. అన్ని ప్రధాన వస్తువుల ప్రస్తుత రేట్లను చూడండి, ధర ట్రెండ్‌లను వీక్షించండి, మార్కెట్లను పోల్చండి మరియు మీ దగ్గర ఉన్న ఉత్తమ అమ్మకపు అవకాశాలను కనుగొనండి. 📍 టాప్ మెనూలో 'మండి రేట్లు'కు వెళ్లండి → డ్రాప్‌డౌన్ నుండి మీ రాష్ట్రాన్ని ఎంచుకోండి → కమోడిటీ రకాన్ని ఎంచుకోండి → నేటి ధరలు, నిన్నటి రేట్లు మరియు వారపు ట్రెండ్‌లను చూడండి → వివరణాత్మక ధర విశ్లేషణ కోసం ఏదైనా మార్కెట్‌పై క్లిక్ చేయండి → స్థానిక వ్యాపారులతో కనెక్ట్ అవ్వడానికి మరియు అమ్మకపు సహాయం పొందడానికి WhatsApp బటన్ ఉపయోగించండి."
      ],
      transport: [
        "రవాణా మరియు లాజిస్టిక్స్ మీ ఉత్పత్తులను పొలం నుండి మార్కెట్‌కు తరలించడానికి లాజిస్టిక్స్ ప్రొవైడర్లతో మిమ్మల్ని కనెక్ట్ చేయడంలో సహాయపడుతుంది. పికప్ వివరాలను పూరించండి మరియు WhatsApp ద్వారా రవాణాదారులతో కనెక్ట్ అవ్వండి. 📍 మెనూలో 'రవాణా'కు వెళ్లండి → పంట రకం, పరిమాణం, పికప్ స్థానం మరియు గమ్యస్థానంతో అభ్యర్థన ఫారమ్ పూరించండి → 'అభ్యర్థన సమర్పించు' క్లిక్ చేయండి → WhatsApp ద్వారా ధృవీకరించబడిన రవాణాదారులతో కనెక్ట్ అవ్వండి → కోట్‌లను పోల్చండి మరియు మీ అవసరాలకు ఉత్తమ సేవను బుక్ చేయండి."
      ],
      diagnosis: [
        "AI నిర్ధారణ 3 శక్తివంతమైన మోడ్‌లను అందిస్తుంది: 1) మొక్కల వ్యాధి గుర్తింపు - మొక్కల ఫోటోల నుండి వ్యాధులు, కీటకాలు మరియు లోపాలను గుర్తించండి, 2) నేల విశ్లేషణ - నేల ఫోటోల నుండి నేల రకం, సంతానోత్పత్తి, pH మరియు తేమను విశ్లేషించండి, 3) ఎరువుల గుర్తింపు - ఎరువుల ఫోటోల నుండి ఎరువుల రకాలు, కూర్పు మరియు నాణ్యతను గుర్తించండి. 📍 మెనూలో 'నిర్ధారణ'కు వెళ్లండి → విశ్లేషణ మోడ్ ఎంచుకోండి (మొక్క/నేల/ఎరువులు) → స్పష్టమైన ఫోటో అప్‌లోడ్ చేయండి (గరిష్టం 10MB) → 'AI తో విశ్లేషించండి' క్లిక్ చేయండి → విశ్వాస స్కోర్లు మరియు చికిత్స సిఫార్సులతో తక్షణ ఫలితాలను పొందండి → వ్యక్తిగత సంప్రదింపుల మరియు వివరణాత్మక చికిత్స ప్రణాళికల కోసం 'WhatsAppలో నిపుణుడిని అడగండి' క్లిక్ చేయండి."
      ],
      yieldPrediction: [
        "దిగుబడి అంచనా ఉష్ణోగ్రత (°C), వర్షపాతం (mm), తేమ (%) మరియు నేల pH వంటి పర్యావరణ కారకాల ఆధారంగా పంట దిగుబడిని అంచనా వేయడానికి AIని ఉపయోగిస్తుంది. మీ పరిస్థితులను ఇన్‌పుట్ చేయండి మరియు ఆప్టిమైజేషన్ సూచనలతో దిగుబడి అంచనాలను పొందండి. 📍 మెనూలో 'దిగుబడి అంచనా'కు వెళ్లండి → డ్రాప్‌డౌన్ నుండి మీ పంటను ఎంచుకోండి → ప్రస్తుత ఉష్ణోగ్రత, ఆశించిన వర్షపాతం, తేమ స్థాయిలు మరియు నేల pH ఎంటర్ చేయండి → 'దిగుబడిని అంచనా వేయండి' క్లిక్ చేయండి → టన్నులు/హెక్టార్‌లో AI-శక్తితో కూడిన దిగుబడి అంచనాను పొందండి → ఉత్పాదనను మెరుగుపరచడానికి స్మార్ట్ సూచనలను సమీక్షించండి → వ్యవసాయ నిపుణులతో ఫలితాలను చర్చించడానికి WhatsApp బటన్ ఉపయోగించండి."
      ],
      cropCalendar: [
        "పంట క్యాలెండర్ భారతదేశంలోని ప్రధాన పంటలకు విత్తనం నుండి కోత వరకు పూర్తి వ్యవసాయ రోడ్‌మ్యాప్‌ను అందిస్తుంది। రెండు మోడ్‌లలో ఎంచుకోండి: 📖 డిఫాల్ట్ రోడ్‌మ్యాప్ ముందుగా నిర్వచించిన దశల వారీ మార్గదర్శకత్వం కోసం, లేదా 🔄 లైవ్ ట్రాకింగ్ మీ వాస్తవ వ్యవసాయ పురోగతిని రియల్-టైమ్‌లో పర్యవేక్షించడానికి। విత్తనాల పూర్వ తయారీ, విత్తనాలు, వృక్షసంపద వృద్ధి, పుష్పించడం, కోత మరియు కోత అనంతర కార్యకలాపాలతో సహా ప్రతి దశకు వివరణాత్మక కార్యకలాపాలను పొందండి। 📍 మెనూలో 'పంట క్యాలెండర్'కు వెళ్లండి → 'డిఫాల్ట్ రోడ్‌మ్యాప్' లేదా 'లైవ్ ట్రాకింగ్' మోడ్ ఎంచుకోండి → లైవ్ ట్రాకింగ్ కోసం: మీ పంటపై 'ట్రాకింగ్ ప్రారంభించండి' క్లిక్ చేయండి → పూర్తయినప్పుడు దశలను గుర్తించండి → పూర్తి శాతంతో పురోగతిని పర్యవేక్షించండి → వ్యక్తిగత వ్యవసాయ మార్గదర్శనం కోసం WhatsApp బటన్ ఉపయోగించండి."
      ],
      recommendations: [
        "సిఫార్సులు మీ నేల రకం, స్థానం, ప్రస్తుత సీజన్ మరియు స్థానిక వాతావరణ పరిస్థితుల ఆధారంగా వ్యక్తిగత పంట సూచనలను అందిస్తాయి. మీ నిర్దిష్ట వ్యవసాయ పరిస్థితికి అనుకూలమైన నిపుణుల సలహాలను పొందండి. 📍 మెనూలో 'సిఫార్సులు'కు వెళ్లండి → మీ నేల రకాన్ని ఎంచుకోండి (మట్టి, లోమీ, ఇసుక మొదలైనవి) → మీ ప్రాంతం/రాష్ట్రాన్ని ఎంచుకోండి → ప్రస్తుత సీజన్ సిఫార్సులను చూడండి → లాభదాయకత విశ్లేషణతో పంట సూచనలను పొందండి → మీ ప్రాంతానికి నిపుణుల చిట్కాలను సమీక్షించండి → వ్యవసాయ సలహాదారులతో వ్యక్తిగత వ్యవసాయ ప్రణాళికలను చర్చించడానికి WhatsApp బటన్ క్లిక్ చేయండి."
      ],
      agrilink: [
        "ఆగ్రీలింక్ 8 ప్రధాన సేవలతో మీ పూర్తి వ్యవసాయ సహచరుడు: పంట గ్రంథాలయం, కమ్యూనిటీ Q&A, లైవ్ మండి రేట్లు, రవాణా సేవలు, AI నిర్ధారణ, దిగుబడి అంచనా, పంట క్యాలెండర్, మరియు వ్యక్తిగత సిఫార్సులు. 📍 మీకు అవసరమైన ఏదైనా సేవకు వెళ్లడానికి టాప్ మెనూ ఉపయోగించండి.",
        "ఆగ్రీలింక్ పంట ఎంపిక నుండి మార్కెట్ అమ్మకాల వరకు మొత్తం వ్యవసాయ చక్రాన్ని కవర్ చేసే సమగ్ర వ్యవసాయ మేధస్సును అందిస్తుంది. అన్ని సేవలు పూర్తి వ్యవసాయ మద్దతు కోసం కలిసి పని చేస్తాయి. 📍 అన్ని సాధనాలను యాక్సెస్ చేయడానికి పైన ఉన్న నావిగేషన్ మెనూని ఉపయోగించి ప్రతి విభాగాన్ని అన్వేషించండి."
      ],
      default: "మీరు వ్యవసాయం గురించి అడుగుతున్నారని నేను అర్థం చేసుకున్నాను. ఆగ్రీలింక్ 8 సమగ్ర సేవలను అందిస్తుంది. 📍 మీకు అవసరమైన ఏదైనా సేవను యాక్సెస్ చేయడానికి టాప్ నావిగేషన్ మెనూ ఉపయోగించండి. ఏ సేవ మీకు ఆసక్తిగా ఉంది?",
      typing: "ఆగ్రీబాట్ టైప్ చేస్తోంది...",
      placeholder: "వ్యవసాయం, పంటలు, వ్యాధుల గురించి అడగండి..."
    },
    cropHealth: {
      title: "పంట ఆరోగ్య మానిటర్",
      subtitle: "ఉపగ్రహ చిత్రాలు మరియు NDVI విశ్లేషణను ఉపయోగించి మీ పంట ఆరోగ్యాన్ని పర్యవేక్షించండి",
      locationAnalysis: "స్థాన విశ్లేషణ",
      locationDesc: "మీ పొలం యొక్క పంట ఆరోగ్యాన్ని విశ్లేషించడానికి స్థానాన్ని ప్రారంభించండి",
      coordinates: "కోఆర్డినేట్లు",
      analyzeCrop: "పంట ఆరోగ్యాన్ని విశ్లేషించండి",
      analyzing: "ఉపగ్రహ డేటాను విశ్లేషిస్తోంది...",
      poweredBy: "Sentinel-2 ఉపగ్రహ డేటా ద్వారా శక్తివంతం",
      healthStatus: "ఆరోగ్య స్థితి",
      ndviIndex: "NDVI సూచిక",
      recommendations: "సిఫార్సులు",
      excellent: "అద్భుతమైన",
      good: "మంచి",
      moderate: "మధ్యస్థ",
      poor: "పేద",
      improving: "మెరుగుపడుతోంది",
      stable: "స్థిరమైన",
      declining: "క్షీణిస్తోంది",
      excellentRec1: "పంటలు అభివృద్ధి చెందుతున్నాయి! ప్రస్తుత నీటిపారుదల మరియు ఎరువుల పద్ధతులను కొనసాగించండి.",
      excellentRec2: "ఈ అద్భుతమైన ఆరోగ్య స్థితిని నిర్వహించడానికి క్రమం తప్పకుండా కీటకాల కోసం పర్యవేక్షించండి.",
      goodRec1: "పంట ఆరోగ్యం మంచిది. క్రమం తప్పకుండా నీటి పారుదల షెడ్యూల్‌ను నిర్వహించండి.",
      goodRec2: "సరైన వృద్ధి కోసం సమతుల్య NPK ఎరువులను వర్తింపజేయడాన్ని పరిగణించండి.",
      moderateRec1: "నేల తేమ స్థాయిలను మెరుగుపరచడానికి నీటిపారుదల ఫ్రీక్వెన్సీని పెంచండి.",
      moderateRec2: "పోషక లోపాల కోసం తనిఖీ చేయండి మరియు తగిన ఎరువులను వర్తింపజేయండి.",
      moderateRec3: "కీటక లేదా వ్యాధి సమస్యల ప్రారంభ సంకేతాల కోసం పంటలను తనిఖీ చేయండి.",
      poorRec1: "తక్షణ చర్య అవసరం! నీటి ఒత్తిడి లేదా వ్యాధి కోసం తనిఖీ చేయండి.",
      poorRec2: "వివరణాత్మక క్షేత్ర అంచనా కోసం వ్యవసాయ నిపుణుడిని సంప్రదించండి.",
      poorRec3: "నేల పరీక్షను పరిగణించండి మరియు తక్షణమే సరిదిద్దే చర్యలను వర్తింపజేయండి.",
      analysisComplete: "విశ్లేషణ పూర్తయింది",
      satelliteDataProcessed: "ఉపగ్రహ డేటా విజయవంతంగా ప్రాసెస్ చేయబడింది",
      satelliteData: "ఉపగ్రహ చిత్రాలు",
      satelliteDataDesc: "Sentinel-2 ఉపగ్రహాల నుండి రియల్-టైమ్ డేటా",
      ndviAnalysis: "NDVI విశ్లేషణ",
      ndviAnalysisDesc: "వృక్షసంపద ఆరోగ్య సూచిక గణన",
      actionable: "చర్య తీసుకోదగిన అంతర్దృష్టులు",
      actionableDesc: "మీ పంటల కోసం నిర్దిష్ట సిఫార్సులను పొందండి"
    },
    common: { loading: "లోడ్ అవుతోంది...", noResults: "ఫలితాలు కనుగొనబడలేదు", viewDetails: "వివరాలు చూడండి", back: "వెనక్కి", whatsappHelp: "సహాయం కావాలా? WhatsApp లో చాట్ చేయండి", selectLanguage: "భాష ఎంచుకోండి", all: "అన్ని", weather: "వాతావరణం", humidity: "తేమ", wind: "గాలి", condition: "స్థితి", weatherSource: "Open-Meteo నుండి డేటా" },
  },
  ta: {
    nav: { home: "முகப்பு", tools: "கருவிகள்", crops: "பயிர் நூலகம்", community: "சமூகம்", mandi: "மண்டி விலைகள்", transport: "போக்குவரத்து", diagnosis: "நோய் கண்டறிதல்", yieldPrediction: "விளைச்சல் கணிப்பு", cropCalendar: "பயிர் நாட்காட்டி", recommendations: "பரிந்துரைகள்", cropHealth: "பயிர் ஆரோக்கியம்" },
    hero: { title: "அக்ரிலிங்க் — விவசாயி பயிர் நுண்ணறிவு", subtitle: "உங்கள் முழுமையான விவசாய தோழன்", cta: "பயிர்களைக் காண", badge: "AI-இயக்கப்படும் விவசாய நுண்ணறிவு", problemTitle: "வெப் ட்ராக்: விவசாயி பயிர் நுண்ணறிவு + சமூக தளம்", aiDiagnosis: "AI கண்டறிதல்" },
    stats: { cropsListed: "பயிர்கள் பட்டியல்", languages: "மொழிகள்", mandiMarkets: "மண்டி சந்தைகள்", aiPowered: "AI இயக்கம்", realtime: "நிகழ்நேரம்" },
    features: { cropsDesc: "பருவம், மண், நீர்ப்பாசனம், பூச்சிகள், உரம்", communityDesc: "Q&A, உள்ளூர் மொழி, நிபுணர் பதில்கள்", mandiDesc: "மாவட்ட/சந்தை விலைகள் + அருகில் தேடல்", transportDesc: "போக்குவரத்து இணைப்பு, பிக்அப் கோரிக்கை", diagnosisDesc: "புகைப்படங்களிலிருந்து AI நோய் கண்டறிதல்", recommendationsDesc: "மண், இடம் & பருவ அடிப்படை பயிர் ஆலோசனை", yieldPredictionDesc: "AI மூலம் பயிர் விளைச்சல் கணிப்பு", cropCalendarDesc: "விதை முதல் அறுவடை வரை முழுமையான வேளாண் வழிகாட்டி", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "பயிர் நூலகம்: பருவம், மண், நீர்ப்பாசனம், பூச்சிகள், உர அட்டவணை.",
      "சமூகம்: Q&A, உள்ளூர் மொழி ஆதரவு, நிபுணர் பதில்கள்.",
      "மாவட்ட/சந்தை வாரியாக மண்டி விலைகள் + விலை போக்குகள்.",
      "போக்குவரத்து: தளவாட வழங்குநர்களுடன் இணையுங்கள் அல்லது பிக்அப் கோரிக்கை.",
      "AI நோய் கண்டறிதல்: புகைப்படம் பதிவேற்றி, உடனடி நோய் & சிகிச்சை பெறுங்கள்.",
      "பரிந்துரைகள்: மண், இடம் & பருவ அடிப்படை நிபுணர் பயிர் ஆலோசனை.",
    ],
    crops: { title: "பயிர் நூலகம்", search: "பயிர்களைத் தேடு...", allCategories: "அனைத்து வகைகள்", season: "பருவம்", soil: "மண் வகை", irrigation: "நீர்ப்பாசனம்", pests: "பூச்சிகள்", fertilizer: "உரம் அட்டவணை", bestPractices: "சிறந்த நடைமுறைகள்", cropsFound: "பயிர்கள் கண்டுபிடிக்கப்பட்டன", askOnWhatsApp: "WhatsApp இல் கேளுங்கள்" },
    community: { title: "சமூக கேள்வி பதில்", askQuestion: "கேள்வி கேளுங்கள்", placeholder: "உங்கள் விவசாய கேள்வி என்ன?", post: "கேள்வி இடு", answer: "உங்கள் பதிலை எழுதுங்கள்...", answers: "பதில்கள்", share: "WhatsApp இல் பகிர்", upvote: "அப்வோட்", category: "வகை", reply: "பதில்" },
    mandi: { title: "மண்டி விலைகள்", search: "கிராமம், மாவட்டம் தேடு...", state: "மாநிலம்", commodity: "பொருள்", minPrice: "குறைந்த விலை", maxPrice: "அதிக விலை", modalPrice: "சராசரி விலை", nearby: "அருகிலுள்ள", all: "அனைத்தும்", crop: "பயிர்", crops: "பயிர்கள்", tapExpand: "மேலும் பயிர்கள் — விரிவாக்கு", showingNearby: "உங்கள் இருப்பிடத்தின் அருகிலுள்ள சந்தைகள்", markets: "சந்தைகள்", rates: "விலைகள்" },
    transport: { title: "போக்குவரத்து", cropType: "பயிர் வகை", quantity: "அளவு", pickup: "பிக்அப்", destination: "இலக்கு", submit: "WhatsApp இல் அனுப்பு", whatsapp: "WhatsApp அரட்டை", call: "இப்போது அழை", requestPickup: "பிக்அப் கோரிக்கை", fillDetails: "விவரங்களை நிரப்பி WhatsApp வழியாக அனுப்புங்கள்", placeholderCrop: "எ.கா., அரிசி, கோதுமை, பருத்தி", placeholderQty: "எ.கா., 50", placeholderPickup: "கிராமம்/நகரம் பெயர்", placeholderDest: "சந்தை/நகரம் பெயர்" },
    diagnosis: { title: "பயிர் நோய் கண்டறிதல்", upload: "தாவர புகைப்படம் பதிவேற்று", analyze: "AI உடன் பகுப்பாய்வு", result: "முடிவு", disease: "நோய்", treatment: "சிகிச்சை", prevention: "தடுப்பு", severity: "தீவிரம்", poweredBy: "AI பார்வை பகுப்பாய்வு மூலம்", photoHint: "புகைப்படம் எடுக்கவும் அல்லது கேலரியிலிருந்து பதிவேற்றவும் (அதிகபட்சம் 10MB)", remove: "நீக்கு", affectedPart: "பாதிக்கப்பட்ட தாவர பகுதி", analyzing: "AI உடன் பகுப்பாய்வு செய்கிறது...", affected: "பாதிக்கப்பட்ட", confidence: "நம்பகத்தன்மை", cause: "காரணம்", symptoms: "அறிகுறிகள்", organicTreatment: "இயற்கை சிகிச்சை", askExpert: "WhatsApp இல் நிபுணரிடம் கேளுங்கள்", fileTooLarge: "கோப்பு மிகப் பெரியது", fileTooLargeDesc: "10MB க்கு குறைவான படத்தை பதிவேற்றவும்", analysisFailed: "பகுப்பாய்வு தோல்வி", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    recommendations: { title: "பயிர் பரிந்துரைகள்", soilBased: "மண் அடிப்படை", locationBased: "இடம் அடிப்படை", seasonBased: "பருவம் அடிப்படை", selectSoil: "மண் தேர்வு", selectRegion: "பகுதி தேர்வு", currentSeason: "நடப்பு பருவம்", expertTips: "நிபுணர் குறிப்புகள்", source: "ஆதாரம்", climate: "காலநிலை", states: "மாநிலங்கள்" },
    cropCalendar: {
      title: "பயிர் நாட்காட்டி",
      subtitle: "விதை தயாரிப்பு முதல் அறுவடை மற்றும் அறுவடைக்கு பிந்தைய நடவடிக்கைகள் வரை படிப்படியான வழிகாட்டுதலுடன் முழுமையான விவசாய வழித்தட்டு",
      defaultRoadmap: "இயல்புநிலை வழித்தட்டு",
      liveTracking: "நேரடி கண்காணிப்பு",
      currentSeason: "நடப்பு பருவம்",
      monsoonSeason: "பருவமழை காலம் (ஜூன்-செப்டம்பர்) - மழை சார்ந்த பயிர்களில் கவனம் செலுத்துங்கள்",
      winterSeason: "குளிர்காலம் (அக்டோபர்-மார்ச்) - நீர்ப்பாசன பயிர்களில் கவனம் செலுத்துங்கள்",
      summerSeason: "கோடைகாலம் (ஏப்ரல்-மே) - அதிக நீர் கிடைக்கும் நீர்ப்பாசன பயிர்களில் கவனம் செலுத்துங்கள்",
      selectState: "மாநிலம்/பகுதி தேர்ந்தெடுக்கவும்",
      cropCategory: "பயிர் வகை",
      startLiveTracking: "நேரடி பயிர் கண்காணிப்பைத் தொடங்கவும்",
      selectYourCrop: "உங்கள் பயிரைத் தேர்ந்தெடுக்கவும்",
      cultivationStartDate: "சாகுபடி தொடக்க தேதி",
      chooseYourCrop: "உங்கள் பயிரைத் தேர்ந்தெடுக்கவும்",
      howLiveTrackingWorks: "நேரடி கண்காணிப்பு எவ்வாறு செயல்படுகிறது:",
      trackEachStage: "உண்மையான தேதிகளுடன் ஒவ்வொரு விவசாய கட்டத்தையும் கண்காணிக்கவும்",
      markStagesComplete: "முடிந்ததும் கட்டங்களை முழுமையாகக் குறிக்கவும்",
      getSolutions: "ஏதேனும் தவறு நடந்தால் தீர்வுகளைப் பெறுங்கள்",
      monitorProgress: "ஒட்டுமொத்த முன்னேற்ற சதவீதத்தைக் கண்காணிக்கவும்",
      complete: "முழுமை",
      started: "தொடங்கப்பட்டது",
      completed: "முடிந்தது",
      inProgress: "முன்னேற்றத்தில்",
      pending: "நிலுவையில்",
      markComplete: "முழுமையாகக் குறிக்கவும்",
      needHelp: "உதவி தேவையா?",
      resetTracking: "கண்காணிப்பை மீட்டமைக்கவும்",
      liveFarmingProgress: "நேரடி விவசாய முன்னேற்றம்",
      trackingProgress: "கண்காணிப்பு முன்னேற்றம்",
      stages: "கட்டங்கள்",
      problemSolver: "சிக்கல் தீர்வாளர்",
      havingIssues: "இந்த கட்டத்தில் சிக்கல்கள் உள்ளதா? இங்கே பொதுவான சிக்கல்கள் மற்றும் தீர்வுகள் உள்ளன:",
      pestProblems: "பூச்சி சிக்கல்கள்",
      pestSolution: "இயற்கை வேப்ப எண்ணெய் தெளிப்பு அல்லது பூச்சி அடையாளம் மற்றும் சிகிச்சைக்காக உள்ளூர் விவசாய அதிகாரியை அணுகவும்.",
      weatherIssues: "வானிலை சிக்கல்கள்",
      weatherSolution: "மழைப்பொழிவின் அடிப்படையில் நீர்ப்பாசன அட்டவணையை சரிசெய்யவும். நீர் தேங்கினால் வடிகால் அல்லது வறட்சியில் கூடுதல் நீர் வழங்கவும்.",
      poorGrowth: "மோசமான வளர்ச்சி",
      poorGrowthSolution: "மண் ஊட்டச்சத்துக்களைச் சரிபார்க்கவும், சமச்சீர் உரம் பயன்படுத்தவும், சரியான இடைவெளி மற்றும் சூரிய ஒளியை உறுதிப்படுத்தவும்.",
      problemSolved: "சிக்கல் தீர்க்கப்பட்டது - தொடரவும்",
      close: "மூடு",
      completeRoadmap: "முழுமையான விவசாய வழித்தட்டு - விதை முதல் அறுவடை வரை",
      viewCompleteRoadmap: "முழுமையான வழித்தட்டைப் பார்க்கவும்",
      farmingTips: "விவசாய குறிப்புகள்",
      temperature: "வெப்பநிலை",
      rainfall: "மழைப்பொழிவு",
      soilType: "மண் வகை",
      noCropsFound: "பயிர்கள் கிடைக்கவில்லை",
      adjustFilters: "மேலும் பயிர் நாட்காட்டி தகவல்களைப் பார்க்க உங்கள் வடிப்பான்களை சரிசெய்ய முயற்சிக்கவும்.",
      kharif: "கரீஃப்",
      rabi: "ரபி",
      zaid: "ஜாயித்",
      cereals: "தானியங்கள்",
      pulses: "பருப்பு வகைகள்",
      vegetables: "காய்கறிகள்",
      fruits: "பழங்கள்",
      cashCrops: "பணப் பயிர்கள்",
      oilseeds: "எண்ணெய் விதைகள்",
      spices: "மசாலாப் பொருட்கள்"
    },
    chatbot: {
      greeting: [
        "வணக்கம்! நான் ஆக்ரிபாட், உங்கள் AI விவசாய உதவியாளர். நான் அனைத்து ஆக்ரிலிங்க் அம்சங்களிலும் உதவ முடியும்: பயிர் நூலகம் (102+ பயிர்கள்), சமூக Q&A, நேரடி மண்டி விலைகள் (500+ சந்தைகள்), போக்குவரத்து சேவைகள், AI நோய் கண்டறிதல், விளைச்சல் முன்னறிவிப்பு, பயிர் நாட்காட்டி, மற்றும் பரிந்துரைகள். 📍 எந்த அம்சத்திற்கும் செல்ல மேல் மெனுவைப் பயன்படுத்துங்கள். நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?"
      ],
      crops: [
        "எங்கள் பயிர் நூலகத்தில் 102+ பயிர்களின் விரிவான தகவல்கள் உள்ளன. 📍 மேல் மெனுவில் 'பயிர் நூலகம்' என்பதற்குச் செல்லுங்கள் → குறிப்பிட்ட பயிர்களைக் கண்டறிய தேடல் பட்டியைப் பயன்படுத்துங்கள் → வகைகளின் அடிப்படையில் வடிகட்டுங்கள் → முழுமையான வளர்ச்சி விவரங்களுக்கு எந்த பயிர் அட்டையிலும் கிளிக் செய்யுங்கள் → நிபுணர் ஆலோசனைக்கு WhatsApp பொத்தானைக் கிளிக் செய்யுங்கள்."
      ],
      community: [
        "எங்கள் சமூகப் பிரிவு ஒரு Q&A தளமாகும், அங்கு விவசாயிகள் அறிவைப் பகிர்ந்து கொள்கிறார்கள். 📍 மெனுவில் 'சமூகம்' என்பதற்குச் செல்லுங்கள் → வகையின் அடிப்படையில் ஏற்கனவே உள்ள கேள்விகளை உலாவுங்கள் → உங்கள் விவசாய சிக்கலை இடுகையிட 'கேள்வி கேளுங்கள்' என்பதைக் கிளிக் செய்யுங்கள்."
      ],
      mandi: [
        "மண்டி விலைகள் இந்தியா முழுவதும் 500+ சந்தைகளில் இருந்து நேரடி சந்தை விலைகளை வழங்குகிறது. 📍 மேல் மெனுவில் 'மண்டி விலைகள்' என்பதற்குச் செல்லுங்கள் → உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும் → பொருள் வகையைத் தேர்வு செய்யுங்கள் → இன்றைய விலைகள், நேற்றைய விலைகள் மற்றும் வாராந்திர போக்குகளைப் பார்க்கவும்."
      ],
      transport: [
        "போக்குவரத்து மற்றும் லாஜிஸ்டிக்ஸ் உங்கள் விளைபொருட்களை பண்ணையில் இருந்து சந்தைக்கு நகர்த்த லாஜிஸ்டிக்ஸ் வழங்குநர்களுடன் இணைக்க உதவுகிறது. 📍 மெனுவில் 'போக்குவரத்து' என்பதற்குச் செல்லுங்கள் → கோரிக்கை படிவத்தை நிரப்புங்கள் → WhatsApp மூலம் சரிபார்க்கப்பட்ட போக்குவரத்து நிறுவனங்களுடன் இணைக்கப்படுங்கள்."
      ],
      diagnosis: [
        "AI நோய் கண்டறிதல் 3 சக்திவாய்ந்த முறைகளை வழங்குகிறது: 1) தாவர நோய் கண்டறிதல், 2) மண் பகுப்பாய்வு, 3) உர கண்டறிதல். 📍 மெனுவில் 'நோய் கண்டறிதல்' என்பதற்குச் செல்லுங்கள் → பகுப்பாய்வு முறையைத் தேர்வு செய்யுங்கள் → தெளிவான புகைப்படத்தை பதிவேற்றுங்கள் → 'AI உடன் பகுப்பாய்வு' என்பதைக் கிளிக் செய்யுங்கள்."
      ],
      yieldPrediction: [
        "விளைச்சல் முன்னறிவிப்பு சுற்றுச்சூழல் காரணிகளின் அடிப்படையில் பயிர் விளைச்சலை மதிப்பிட AI ஐப் பயன்படுத்துகிறது. 📍 மெனுவில் 'விளைச்சல் முன்னறிவிப்பு' என்பதற்குச் செல்லுங்கள் → உங்கள் பயிரைத் தேர்ந்தெடுக்கவும் → தற்போதைய வெப்பநிலை, எதிர்பார்க்கப்படும் மழைப்பொழிவு, ஈரப்பதம் மற்றும் மண் pH ஐ உள்ளிடுங்கள்."
      ],
      cropCalendar: [
        "பயிர் நாட்காட்டி இந்தியா முழுவதும் முக்கிய பயிர்களுக்கு விதை முதல் அறுவடை வரை முழுமையான விவசாய வழித்தட்டுகளை வழங்குகிறது. 📍 மெனுவில் 'பயிர் நாட்காட்டி' என்பதற்குச் செல்லுங்கள் → 'இயல்புநிலை வழித்தட்டு' அல்லது 'நேரடி கண்காணிப்பு' முறையைத் தேர்வு செய்யுங்கள் → உங்கள் மாநிலம்/பகுதியின் அடிப்படையில் வடிகட்டுங்கள்."
      ],
      recommendations: [
        "பரிந்துரைகள் உங்கள் மண் வகை, இடம், தற்போதைய பருவம் மற்றும் உள்ளூர் காலநிலை நிலைமைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகளை வழங்குகிறது. 📍 மெனுவில் 'பரிந்துரைகள்' என்பதற்குச் செல்லுங்கள் → உங்கள் மண் வகையைத் தேர்ந்தெடுக்கவும் → உங்கள் பகுதி/மாநிலத்தைத் தேர்வு செய்யுங்கள்."
      ],
      agrilink: [
        "ஆக்ரிலிங்க் 8 முக்கிய அம்சங்களுடன் உங்கள் முழுமையான விவசாய துணையாகும்: பயிர் நூலகம், சமூக Q&A, நேரடி மண்டி விலைகள், போக்குவரத்து சேவைகள், AI நோய் கண்டறிதல், விளைச்சல் முன்னறிவிப்பு, பயிர் நாட்காட்டி, மற்றும் தனிப்பயனாக்கப்பட்ட பரிந்துரைகள். 📍 உங்களுக்குத் தேவையான எந்த அம்சத்திற்கும் செல்ல மேல் மெனுவைப் பயன்படுத்துங்கள்."
      ],
      default: "நான் நீங்கள் விவசாயத்தைப் பற்றி கேட்கிறீர்கள் என்பதை புரிந்துகொள்கிறேன். ஆக்ரிலிங்க் 8 விரிவான அம்சங்களை வழங்குகிறது: பயிர் நூலகம், சமூக Q&A, நேரடி மண்டி விலைகள், போக்குவரத்து சேவைகள், AI நோய் கண்டறிதல், விளைச்சல் முன்னறிவிப்பு, பயிர் நாட்காட்டி, மற்றும் தனிப்பயனாக்கப்பட்ட பரிந்துரைகள். 📍 உங்களுக்குத் தேவையான எந்த அம்சத்தையும் அணுக மேல் வழிசெலுத்தல் மெனுவைப் பயன்படுத்துங்கள். எந்த அம்சம் உங்களுக்கு மிகவும் ஆர்வமாக உள்ளது?",
      typing: "ஆக்ரிபாட் தட்டச்சு செய்கிறது...",
      placeholder: "விவசாயம், பயிர்கள், நோய்கள் பற்றி கேளுங்கள்..."
    },
    cropHealth: {
      title: "பயிர் ஆரோக்கிய கண்காணிப்பு",
      subtitle: "செயற்கைக்கோள் படங்கள் மற்றும் NDVI பகுப்பாய்வைப் பயன்படுத்தி உங்கள் பயிர் ஆரோக்கியத்தைக் கண்காணிக்கவும்",
      locationAnalysis: "இடம் பகுப்பாய்வு",
      locationDesc: "உங்கள் பண்ணையின் பயிர் ஆரோக்கியத்தை பகுப்பாய்வு செய்ய இடத்தை இயக்கவும்",
      coordinates: "ஆயத்தொலைவுகள்",
      analyzeCrop: "பயிர் ஆரோக்கியத்தை பகுப்பாய்வு செய்யுங்கள்",
      analyzing: "செயற்கைக்கோள் தரவை பகுப்பாய்வு செய்கிறது...",
      poweredBy: "Sentinel-2 செயற்கைக்கோள் தரவால் இயக்கப்படுகிறது",
      healthStatus: "ஆரோக்கிய நிலை",
      ndviIndex: "NDVI குறியீடு",
      recommendations: "பரிந்துரைகள்",
      excellent: "சிறந்த",
      good: "நல்ல",
      moderate: "மிதமான",
      poor: "மோசமான",
      improving: "மேம்படுகிறது",
      stable: "நிலையான",
      declining: "குறைகிறது",
      excellentRec1: "பயிர்கள் செழித்து வளர்கின்றன! தற்போதைய நீர்ப்பாசனம் மற்றும் உரமிடுதல் நடைமுறைகளைத் தொடரவும்.",
      excellentRec2: "இந்த சிறந்த ஆரோக்கிய நிலையை பராமரிக்க தொடர்ந்து பூச்சிகளை கண்காணிக்கவும்.",
      goodRec1: "பயிர் ஆரோக்கியம் நன்றாக உள்ளது. வழக்கமான நீர்ப்பாசன அட்டவணையை பராமரிக்கவும்.",
      goodRec2: "உகந்த வளர்ச்சிக்கு சமச்சீர் NPK உரத்தைப் பயன்படுத்துவதைக் கருத்தில் கொள்ளுங்கள்.",
      moderateRec1: "மண் ஈரப்பத அளவை மேம்படுத்த நீர்ப்பாசன அதிர்வெண்ணை அதிகரிக்கவும்.",
      moderateRec2: "ஊட்டச்சத்து குறைபாடுகளை சரிபார்த்து பொருத்தமான உரங்களைப் பயன்படுத்துங்கள்.",
      moderateRec3: "பூச்சி அல்லது நோய் பிரச்சனைகளின் ஆரம்ப அறிகுறிகளுக்கு பயிர்களை ஆய்வு செய்யுங்கள்.",
      poorRec1: "உடனடி நடவடிக்கை தேவை! நீர் அழுத்தம் அல்லது நோய்க்கு சரிபார்க்கவும்.",
      poorRec2: "விரிவான வயல் மதிப்பீட்டிற்கு விவசாய நிபுணரை அணுகவும்.",
      poorRec3: "மண் பரிசோதனையைக் கருத்தில் கொண்டு உடனடியாக சரிசெய்யும் நடவடிக்கைகளைப் பயன்படுத்துங்கள்.",
      analysisComplete: "பகுப்பாய்வு முடிந்தது",
      satelliteDataProcessed: "செயற்கைக்கோள் தரவு வெற்றிகரமாக செயலாக்கப்பட்டது",
      satelliteData: "செயற்கைக்கோள் படங்கள்",
      satelliteDataDesc: "Sentinel-2 செயற்கைக்கோள்களிலிருந்து நேரடி தரவு",
      ndviAnalysis: "NDVI பகுப்பாய்வு",
      ndviAnalysisDesc: "தாவர ஆரோக்கிய குறியீடு கணக்கீடு",
      actionable: "செயல்படக்கூடிய நுண்ணறிவுகள்",
      actionableDesc: "உங்கள் பயிர்களுக்கான குறிப்பிட்ட பரிந்துரைகளைப் பெறுங்கள்"
    },
    yieldPrediction: { title: "பயிர் விளைச்சல் கணிப்பு", subtitle: "சுற்றுச்சூழல் உள்ளீடுகளின் அடிப்படையில் AI-இயக்கப்படும் விளைச்சல் மதிப்பீடு", cropEnvironmentalData: "பயிர் மற்றும் சுற்றுச்சூழல் தரவு", enterCropType: "உங்கள் பயிர் வகை மற்றும் தற்போதைய வயல் நிலைமைகளை உள்ளிடுங்கள்", cropType: "பயிர் வகை", selectCropType: "பயிர் வகையைத் தேர்ந்தெடுக்கவும்", temperature: "வெப்பநிலை (°C)", rainfall: "மழைப்பொழிவு (mm)", humidity: "ஈரப்பதம் (%)", soilPH: "மண் pH", predictYield: "விளைச்சல் கணிப்பு", analyzing: "பகுப்பாய்வு செய்கிறது...", predictedYield: "கணிக்கப்பட்ட விளைச்சல்", unit: "டன்/ஹெக்டேர்", confidence: "நம்பகத்தன்மை", smartSuggestions: "ஸ்மார்ட் பரிந்துரைகள்", yieldComparison: "பயிர் வாரியாக விளைச்சல் ஒப்பீடு", currentYield: "தற்போதைய விளைச்சல்", optimalYield: "உகந்த விளைச்சல்", lowRainfallWarning: "குறைந்த மழைப்பொழிவு கண்டறியப்பட்டது. மண் ஈரப்பதத்தை பராமரிக்க சொட்டு அல்லது தெளிப்பு நீர்ப்பாசனத்தைக் கருத்தில் கொள்ளுங்கள்.", highTemperatureWarning: "அதிக வெப்பநிலை எச்சரிக்கை. நிழல் வலைகள், மல்ச்சிங் அல்லது வெப்ப-எதிர்ப்பு பயிர் வகைகளைப் பயன்படுத்துங்கள்.", acidicSoilInfo: "அமில மண் கண்டறியப்பட்டது. சிறந்த ஊட்டச்சத்து உறிஞ்சுதலுக்காக pH ஐ உயர்த்த சுண்ணாம்பு (கால்சியம் கார்பனேட்) பயன்படுத்துங்கள்.", lowHumidityWarning: "குறைந்த ஈரப்பதம் ஈரப்பத அழுத்தத்தை ஏற்படுத்தலாம். நீர்ப்பாசன அதிர்வெண்ணை அதிகரித்து மல்ச் பயன்படுத்துங்கள்.", optimalConditions: "உகந்த வளரும் நிலைமைகள் கண்டறியப்பட்டன! சிறந்த முடிவுகளுக்கு தற்போதைய நடைமுறைகளை பராமரிக்கவும்." },
    common: { loading: "ஏற்றுகிறது...", noResults: "முடிவுகள் இல்லை", viewDetails: "விவரங்கள்", back: "பின்", whatsappHelp: "உதவி? WhatsApp", selectLanguage: "மொழி தேர்வு", all: "அனைத்தும்", weather: "வானிலை", humidity: "ஈரப்பதம்", wind: "காற்று", condition: "நிலை", weatherSource: "Open-Meteo இலிருந்து தரவு" },
  },
  kn: {
    nav: { home: "ಮುಖಪುಟ", tools: "ಉಪಕರಣಗಳು", crops: "ಬೆಳೆ ಗ್ರಂಥಾಲಯ", community: "ಸಮುದಾಯ", mandi: "ಮಂಡಿ ದರಗಳು", transport: "ಸಾರಿಗೆ", diagnosis: "ರೋಗ ನಿರ್ಣಯ", yieldPrediction: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", cropCalendar: "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್", recommendations: "ಶಿಫಾರಸುಗಳು", cropHealth: "ಬೆಳೆ ಆರೋಗ್ಯ" },
    hero: { title: "ಆಗ್ರಿಲಿಂಕ್ — ರೈತ ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ", subtitle: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಕೃಷಿ ಸಂಗಾತಿ", cta: "ಬೆಳೆಗಳನ್ನು ನೋಡಿ", badge: "AI-ಚಾಲಿತ ಕೃಷಿ ಬುದ್ಧಿಮತ್ತೆ", problemTitle: "ವೆಬ್ ಟ್ರ್ಯಾಕ್: ರೈತ ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ + ಸಮುದಾಯ ವೇದಿಕೆ", aiDiagnosis: "AI ನಿರ್ಣಯ" },
    stats: { cropsListed: "ಬೆಳೆಗಳ ಪಟ್ಟಿ", languages: "ಭಾಷೆಗಳು", mandiMarkets: "ಮಂಡಿ ಮಾರುಕಟ್ಟೆಗಳು", aiPowered: "AI ಚಾಲಿತ", realtime: "ರಿಯಲ್-ಟೈಮ್" },
    features: { cropsDesc: "ಋತು, ಮಣ್ಣು, ನೀರಾವರಿ, ಕೀಟ, ಗೊಬ್ಬರ", communityDesc: "Q&A, ಸ್ಥಳೀಯ ಭಾಷೆ, ತಜ್ಞರ ಉತ್ತರ", mandiDesc: "ಜಿಲ್ಲೆ/ಮಾರುಕಟ್ಟೆ ದರ + ಹತ್ತಿರ ಹುಡುಕಿ", transportDesc: "ಸಾರಿಗೆಗೆ ಸಂಪರ್ಕ, ಪಿಕಪ್ ವಿನಂತಿ", diagnosisDesc: "ಫೋಟೋಗಳಿಂದ AI ರೋಗ ಗುರುತಿಸುವಿಕೆ", recommendationsDesc: "ಮಣ್ಣು, ಸ್ಥಳ & ಋತು ಆಧಾರಿತ ಬೆಳೆ ಸಲಹೆ", yieldPredictionDesc: "AI ಮೂಲಕ ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", cropCalendarDesc: "ಬೀಜದಿಂದ ಕೊಯ್ಲಿಗೆ ಸಂಪೂರ್ಣ ಕೃಷಿ ಮಾರ್ಗಸೂಚಿ", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "ಬೆಳೆ ಗ್ರಂಥಾಲಯ: ಋತು, ಮಣ್ಣು, ನೀರಾವರಿ, ಕೀಟ, ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿ.",
      "ಸಮುದಾಯ: Q&A, ಸ್ಥಳೀಯ ಭಾಷೆ ಬೆಂಬಲ, ತಜ್ಞರ ಉತ್ತರಗಳು.",
      "ಜಿಲ್ಲೆ/ಮಾರುಕಟ್ಟೆ ಮಂಡಿ ದರಗಳು + ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳು.",
      "ಸಾರಿಗೆ: ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಪೂರೈಕೆದಾರರಿಗೆ ಸಂಪರ್ಕ ಅಥವಾ ಪಿಕಪ್ ವಿನಂತಿ.",
      "AI ರೋಗ ಗುರುತಿಸುವಿಕೆ: ಫೋಟೋ ಅಪ್‌ಲೋಡ್, ತಕ್ಷಣ ನಿರ್ಣಯ & ಚಿಕಿತ್ಸೆ.",
      "ಶಿಫಾರಸುಗಳು: ಮಣ್ಣು, ಸ್ಥಳ & ಋತು ಆಧಾರಿತ ತಜ್ಞ ಬೆಳೆ ಸಲಹೆ.",
    ],
    crops: { title: "ಬೆಳೆ ಗ್ರಂಥಾಲಯ", search: "ಬೆಳೆಗಳನ್ನು ಹುಡುಕಿ...", allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು", season: "ಋತು", soil: "ಮಣ್ಣಿನ ಪ್ರಕಾರ", irrigation: "ನೀರಾವರಿ", pests: "ಕೀಟಗಳು", fertilizer: "ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿ", bestPractices: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು", cropsFound: "ಬೆಳೆಗಳು ಕಂಡುಬಂದವು", askOnWhatsApp: "WhatsApp ನಲ್ಲಿ ಕೇಳಿ" },
    community: { title: "ಸಮುದಾಯ Q&A", askQuestion: "ಪ್ರಶ್ನೆ ಕೇಳಿ", placeholder: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆ?", post: "ಪೋಸ್ಟ್", answer: "ಉತ್ತರ ಬರೆಯಿರಿ...", answers: "ಉತ್ತರಗಳು", share: "WhatsApp ನಲ್ಲಿ ಹಂಚಿ", upvote: "ಅಪ್‌ವೋಟ್", category: "ವರ್ಗ", reply: "ಉತ್ತರ" },
    mandi: { title: "ಮಂಡಿ ದರಗಳು", search: "ಹಳ್ಳಿ, ಜಿಲ್ಲೆ ಹುಡುಕಿ...", state: "ರಾಜ್ಯ", commodity: "ಸರಕು", minPrice: "ಕನಿಷ್ಠ ಬೆಲೆ", maxPrice: "ಗರಿಷ್ಠ ಬೆಲೆ", modalPrice: "ಸರಾಸರಿ ಬೆಲೆ", nearby: "ಹತ್ತಿರದ", all: "ಎಲ್ಲಾ", crop: "ಬೆಳೆ", crops: "ಬೆಳೆಗಳು", tapExpand: "ಹೆಚ್ಚಿನ ಬೆಳೆಗಳು — ವಿಸ್ತರಿಸಿ", showingNearby: "ನಿಮ್ಮ ಸ್ಥಳದ ಆಧಾರದಲ್ಲಿ ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳು", markets: "ಮಾರುಕಟ್ಟೆಗಳು", rates: "ದರಗಳು" },
    transport: { title: "ಸಾರಿಗೆ", cropType: "ಬೆಳೆ ಪ್ರಕಾರ", quantity: "ಪ್ರಮಾಣ", pickup: "ಪಿಕಪ್", destination: "ಗಮ್ಯಸ್ಥಾನ", submit: "WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ", whatsapp: "WhatsApp ಚಾಟ್", call: "ಈಗ ಕರೆ ಮಾಡಿ", requestPickup: "ಪಿಕಪ್ ವಿನಂತಿ", fillDetails: "ವಿವರ ಭರ್ತಿ ಮಾಡಿ WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ", placeholderCrop: "ಉದಾ., ಭತ್ತ, ಗೋಧಿ, ಹತ್ತಿ", placeholderQty: "ಉದಾ., 50", placeholderPickup: "ಹಳ್ಳಿ/ಪಟ್ಟಣ ಹೆಸರು", placeholderDest: "ಮಾರುಕಟ್ಟೆ/ನಗರ ಹೆಸರು" },
    diagnosis: { title: "ಬೆಳೆ ರೋಗ ನಿರ್ಣಯ", upload: "ಸಸ್ಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್", analyze: "AI ವಿಶ್ಲೇಷಣೆ", result: "ಫಲಿತಾಂಶ", disease: "ರೋಗ", treatment: "ಚಿಕಿತ್ಸೆ", prevention: "ತಡೆಗಟ್ಟುವಿಕೆ", severity: "ತೀವ್ರತೆ", poweredBy: "AI ದೃಷ್ಟಿ ವಿಶ್ಲೇಷಣೆ", photoHint: "ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಗ್ಯಾಲರಿಯಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಗರಿಷ್ಠ 10MB)", remove: "ತೆಗೆದುಹಾಕಿ", affectedPart: "ಪ್ರಭಾವಿತ ಸಸ್ಯ ಭಾಗ", analyzing: "AI ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", affected: "ಪ್ರಭಾವಿತ", confidence: "ವಿಶ್ವಾಸ", cause: "ಕಾರಣ", symptoms: "ರೋಗಲಕ್ಷಣಗಳು", organicTreatment: "ಸಾವಯವ ಚಿಕಿತ್ಸೆ", askExpert: "WhatsApp ನಲ್ಲಿ ತಜ್ಞರನ್ನು ಕೇಳಿ", fileTooLarge: "ಫೈಲ್ ತುಂಬಾ ದೊಡ್ಡದು", fileTooLargeDesc: "10MB ಕ್ಕಿಂತ ಕಡಿಮೆ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", analysisFailed: "ವಿಶ್ಲೇಷಣೆ ವಿಫಲ", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", subtitle: "ಪರಿಸರ ಒಳಹರಿವಿನ ಆಧಾರದ ಮೇಲೆ AI-ಚಾಲಿತ ಇಳುವರಿ ಅಂದಾಜು", cropEnvironmentalData: "ಬೆಳೆ ಮತ್ತು ಪರಿಸರ ಡೇಟಾ", enterCropType: "ನಿಮ್ಮ ಬೆಳೆ ಪ್ರಕಾರ ಮತ್ತು ಪ್ರಸ್ತುತ ಹೊಲದ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಮೂದಿಸಿ", cropType: "ಬೆಳೆ ಪ್ರಕಾರ", selectCropType: "ಬೆಳೆ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ", temperature: "ತಾಪಮಾನ (°C)", rainfall: "ಮಳೆ (mm)", humidity: "ಆರ್ದ್ರತೆ (%)", soilPH: "ಮಣ್ಣಿನ pH", predictYield: "ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", predictedYield: "ಮುನ್ಸೂಚಿತ ಇಳುವರಿ", unit: "ಟನ್/ಹೆಕ್ಟೇರ್", confidence: "ವಿಶ್ವಾಸ", smartSuggestions: "ಸ್ಮಾರ್ಟ್ ಸಲಹೆಗಳು", yieldComparison: "ಬೆಳೆ ಪ್ರಕಾರ ಇಳುವರಿ ಹೋಲಿಕೆ", currentYield: "ಪ್ರಸ್ತುತ ಇಳುವರಿ", optimalYield: "ಅತ್ಯುತ್ತಮ ಇಳುವರಿ", lowRainfallWarning: "ಕಡಿಮೆ ಮಳೆ ಪತ್ತೆಯಾಗಿದೆ. ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಕಾಪಾಡಲು ಡ್ರಿಪ್ ಅಥವಾ ಸ್ಪ್ರಿಂಕ್ಲರ್ ನೀರಾವರಿಯನ್ನು ಪರಿಗಣಿಸಿ.", highTemperatureWarning: "ಹೆಚ್ಚಿನ ತಾಪಮಾನ ಎಚ್ಚರಿಕೆ. ನೆರಳು ಜಾಲಗಳು, ಮಲ್ಚಿಂಗ್ ಅಥವಾ ಶಾಖ-ಸಹನೀಯ ಬೆಳೆ ಪ್ರಭೇದಗಳನ್ನು ಬಳಸಿ.", acidicSoilInfo: "ಆಮ್ಲೀಯ ಮಣ್ಣು ಪತ್ತೆಯಾಗಿದೆ. ಉತ್ತಮ ಪೋಷಕಾಂಶ ಹೀರಿಕೊಳ್ಳುವಿಕೆಗಾಗಿ pH ಹೆಚ್ಚಿಸಲು ಸುಣ್ಣ (ಕ್ಯಾಲ್ಸಿಯಂ ಕಾರ್ಬೋನೇಟ್) ಅನ್ವಯಿಸಿ.", lowHumidityWarning: "ಕಡಿಮೆ ಆರ್ದ್ರತೆಯು ತೇವಾಂಶದ ಒತ್ತಡವನ್ನು ಉಂಟುಮಾಡಬಹುದು. ನೀರಾವರಿ ಆವರ್ತನವನ್ನು ಹೆಚ್ಚಿಸಿ ಮತ್ತು ಮಲ್ಚ್ ಬಳಸಿ.", optimalConditions: "ಅತ್ಯುತ್ತಮ ಬೆಳವಣಿಗೆಯ ಪರಿಸ್ಥಿತಿಗಳು ಪತ್ತೆಯಾಗಿವೆ! ಉತ್ತಮ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ ಪ್ರಸ್ತುತ ಅಭ್ಯಾಸಗಳನ್ನು ನಿರ್ವಹಿಸಿ." },
    recommendations: { title: "ಬೆಳೆ ಶಿಫಾರಸುಗಳು", soilBased: "ಮಣ್ಣು ಆಧಾರಿತ", locationBased: "ಸ್ಥಳ ಆಧಾರಿತ", seasonBased: "ಋತು ಆಧಾರಿತ", selectSoil: "ಮಣ್ಣು ಆಯ್ಕೆ", selectRegion: "ಪ್ರದೇಶ ಆಯ್ಕೆ", currentSeason: "ಪ್ರಸ್ತುತ ಋತು", expertTips: "ತಜ್ಞರ ಸಲಹೆ", source: "ಮೂಲ", climate: "ಹವಾಮಾನ", states: "ರಾಜ್ಯಗಳು" },
    cropCalendar: {
      title: "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್",
      subtitle: "ಬೀಜ ತಯಾರಿಕೆಯಿಂದ ಕೊಯ್ಲು ಮತ್ತು ಕೊಯ್ಲು ನಂತರದ ಚಟುವಟಿಕೆಗಳವರೆಗೆ ಹಂತ ಹಂತದ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಕೃಷಿ ರೋಡ್‌ಮ್ಯಾಪ್",
      defaultRoadmap: "ಡಿಫಾಲ್ಟ್ ರೋಡ್‌ಮ್ಯಾಪ್",
      liveTracking: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್",
      currentSeason: "ಪ್ರಸ್ತುತ ಋತು",
      monsoonSeason: "ಮಾನ್ಸೂನ್ ಋತು (ಜೂನ್-ಸೆಪ್ಟೆಂಬರ್) - ಮಳೆ ಆಧಾರಿತ ಬೆಳೆಗಳ ಮೇಲೆ ಗಮನ ಹರಿಸಿ",
      winterSeason: "ಚಳಿಗಾಲ (ಅಕ್ಟೋಬರ್-ಮಾರ್ಚ್) - ನೀರಾವರಿ ಬೆಳೆಗಳ ಮೇಲೆ ಗಮನ ಹರಿಸಿ",
      summerSeason: "ಬೇಸಿಗೆ ಋತು (ಏಪ್ರಿಲ್-ಮೇ) - ಹೆಚ್ಚಿನ ನೀರಿನ ಲಭ್ಯತೆಯೊಂದಿಗೆ ನೀರಾವರಿ ಬೆಳೆಗಳ ಮೇಲೆ ಗಮನ ಹರಿಸಿ",
      selectState: "ರಾಜ್ಯ/ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      cropCategory: "ಬೆಳೆ ವರ್ಗ",
      startLiveTracking: "ಲೈವ್ ಬೆಳೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
      selectYourCrop: "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      cultivationStartDate: "ಕೃಷಿ ಪ್ರಾರಂಭ ದಿನಾಂಕ",
      chooseYourCrop: "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      howLiveTrackingWorks: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ:",
      trackEachStage: "ನಿಜವಾದ ದಿನಾಂಕಗಳೊಂದಿಗೆ ಪ್ರತಿ ಕೃಷಿ ಹಂತವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
      markStagesComplete: "ಮುಗಿದಾಗ ಹಂತಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಎಂದು ಗುರುತಿಸಿ",
      getSolutions: "ಏನಾದರೂ ತಪ್ಪಾದರೆ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ",
      monitorProgress: "ಒಟ್ಟಾರೆ ಪ್ರಗತಿ ಶೇಕಡಾವಾರು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
      complete: "ಪೂರ್ಣ",
      started: "ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ",
      completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
      inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
      pending: "ಬಾಕಿ ಇದೆ",
      markComplete: "ಪೂರ್ಣಗೊಳಿಸಿ ಎಂದು ಗುರುತಿಸಿ",
      needHelp: "ಸಹಾಯ ಬೇಕೇ?",
      resetTracking: "ಟ್ರ್ಯಾಕಿಂಗ್ ಮರುಹೊಂದಿಸಿ",
      liveFarmingProgress: "ಲೈವ್ ಕೃಷಿ ಪ್ರಗತಿ",
      trackingProgress: "ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಗತಿ",
      stages: "ಹಂತಗಳು",
      problemSolver: "ಸಮಸ್ಯೆ ಪರಿಹಾರಕ",
      havingIssues: "ಈ ಹಂತದಲ್ಲಿ ಸಮಸ್ಯೆಗಳಿವೆಯೇ? ಇಲ್ಲಿ ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಪರಿಹಾರಗಳಿವೆ:",
      pestProblems: "ಕೀಟ ಸಮಸ್ಯೆಗಳು",
      pestSolution: "ಸಾವಯವ ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ ಅಥವಾ ಕೀಟ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಸ್ಥಳೀಯ ಕೃಷಿ ಅಧಿಕಾರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      weatherIssues: "ಹವಾಮಾನ ಸಮಸ್ಯೆಗಳು",
      weatherSolution: "ಮಳೆಯ ಆಧಾರದ ಮೇಲೆ ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಸರಿಹೊಂದಿಸಿ. ನೀರು ನಿಂತರೆ ಒಳಚರಂಡಿ ಅಥವಾ ಬರಗಾಲದಲ್ಲಿ ಹೆಚ್ಚುವರಿ ನೀರು ಒದಗಿಸಿ.",
      poorGrowth: "ಕಳಪೆ ಬೆಳವಣಿಗೆ",
      poorGrowthSolution: "ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಸಮತೋಲಿತ ಗೊಬ್ಬರವನ್ನು ಅನ್ವಯಿಸಿ, ಸರಿಯಾದ ಅಂತರ ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
      problemSolved: "ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲಾಗಿದೆ - ಮುಂದುವರಿಸಿ",
      close: "ಮುಚ್ಚಿ",
      completeRoadmap: "ಸಂಪೂರ್ಣ ಕೃಷಿ ರೋಡ್‌ಮ್ಯಾಪ್ - ಬೀಜದಿಂದ ಕೊಯ್ಲುವರೆಗೆ",
      viewCompleteRoadmap: "ಸಂಪೂರ್ಣ ರೋಡ್‌ಮ್ಯಾಪ್ ವೀಕ್ಷಿಸಿ",
      farmingTips: "ಕೃಷಿ ಸಲಹೆಗಳು",
      temperature: "ತಾಪಮಾನ",
      rainfall: "ಮಳೆ",
      soilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
      noCropsFound: "ಬೆಳೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      adjustFilters: "ಹೆಚ್ಚಿನ ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್ ಮಾಹಿತಿಯನ್ನು ನೋಡಲು ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಸರಿಹೊಂದಿಸಲು ಪ್ರಯತ್ನಿಸಿ.",
      kharif: "ಖರೀಫ್",
      rabi: "ರಬಿ",
      zaid: "ಜಾಯಿದ್",
      cereals: "ಧಾನ್ಯಗಳು",
      pulses: "ದಾಲ್‌ಗಳು",
      vegetables: "ತರಕಾರಿಗಳು",
      fruits: "ಹಣ್ಣುಗಳು",
      cashCrops: "ನಗದು ಬೆಳೆಗಳು",
      oilseeds: "ಎಣ್ಣೆ ಬೀಜಗಳು",
      spices: "ಮಸಾಲೆಗಳು"
    },
    chatbot: {
      greeting: [
        "ನಮಸ್ಕಾರ! ನಾನು ಆಗ್ರಿಬಾಟ್, ನಿಮ್ಮ AI ಕೃಷಿ ಸಹಾಯಕ. ನಾನು ಎಲ್ಲಾ ಆಗ್ರಿಲಿಂಕ್ ವೈಶಿಷ್ಟ್ಯಗಳಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ: ಬೆಳೆ ಗ್ರಂಥಾಲಯ (102+ ಬೆಳೆಗಳು), ಸಮುದಾಯ Q&A, ಲೈವ್ ಮಂಡಿ ದರಗಳು (500+ ಮಾರುಕಟ್ಟೆಗಳು), ಸಾರಿಗೆ ಸೇವೆಗಳು, AI ರೋಗನಿರ್ಣಯ, ಇಳುವರಿ ಮುನ್ಸೂಚನೆ, ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್, ಮತ್ತು ಶಿಫಾರಸುಗಳು. 📍 ಯಾವುದೇ ವೈಶಿಷ್ಟ್ಯಕ್ಕೆ ಹೋಗಲು ಮೇಲಿನ ಮೆನುವನ್ನು ಬಳಸಿ. ನೀವು ಏನು ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ?"
      ],
      crops: [
        "ನಮ್ಮ ಬೆಳೆ ಗ್ರಂಥಾಲಯದಲ್ಲಿ 102+ ಬೆಳೆಗಳ ವಿವರವಾದ ಮಾಹಿತಿ ಇದೆ. 📍 ಮೇಲಿನ ಮೆನುವಿನಲ್ಲಿ 'ಬೆಳೆ ಗ್ರಂಥಾಲಯ'ಕ್ಕೆ ಹೋಗಿ → ನಿರ್ದಿಷ್ಟ ಬೆಳೆಗಳನ್ನು ಹುಡುಕಲು ಹುಡುಕಾಟ ಪಟ್ಟಿಯನ್ನು ಬಳಸಿ → ವರ್ಗಗಳ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ → ಸಂಪೂರ್ಣ ಬೆಳವಣಿಗೆಯ ವಿವರಗಳಿಗಾಗಿ ಯಾವುದೇ ಬೆಳೆ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ → ತಜ್ಞರ ಸಲಹೆಗಾಗಿ WhatsApp ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
      ],
      community: [
        "ನಮ್ಮ ಸಮುದಾಯ ವಿಭಾಗವು Q&A ವೇದಿಕೆಯಾಗಿದ್ದು, ಅಲ್ಲಿ ರೈತರು ಜ್ಞಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ಸಮುದಾಯ'ಕ್ಕೆ ಹೋಗಿ → ವರ್ಗದ ಆಧಾರದ ಮೇಲೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಪ್ರಶ್ನೆಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ → ನಿಮ್ಮ ಕೃಷಿ ಸಮಸ್ಯೆಯನ್ನು ಪೋಸ್ಟ್ ಮಾಡಲು 'ಪ್ರಶ್ನೆ ಕೇಳಿ' ಕ್ಲಿಕ್ ಮಾಡಿ."
      ],
      mandi: [
        "ಮಂಡಿ ದರಗಳು ಭಾರತದಾದ್ಯಂತ 500+ ಮಾರುಕಟ್ಟೆಗಳಿಂದ ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. 📍 ಮೇಲಿನ ಮೆನುವಿನಲ್ಲಿ 'ಮಂಡಿ ದರಗಳು'ಗೆ ಹೋಗಿ → ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ → ಸರಕು ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ → ಇಂದಿನ ಬೆಲೆಗಳು, ನಿನ್ನೆಯ ದರಗಳು ಮತ್ತು ಸಾಪ್ತಾಹಿಕ ಪ್ರವೃತ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ."
      ],
      transport: [
        "ಸಾರಿಗೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಫಾರ್ಮ್‌ನಿಂದ ಮಾರುಕಟ್ಟೆಗೆ ಸಾಗಿಸಲು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ಸಾರಿಗೆ'ಗೆ ಹೋಗಿ → ವಿನಂತಿ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ → WhatsApp ಮೂಲಕ ಪರಿಶೀಲಿಸಿದ ಸಾರಿಗೆದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ."
      ],
      diagnosis: [
        "AI ರೋಗನಿರ್ಣಯವು 3 ಶಕ್ತಿಶಾಲಿ ವಿಧಾನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ: 1) ಸಸ್ಯ ರೋಗ ಪತ್ತೆ, 2) ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ, 3) ಗೊಬ್ಬರ ಪತ್ತೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ರೋಗನಿರ್ಣಯ'ಕ್ಕೆ ಹೋಗಿ → ವಿಶ್ಲೇಷಣೆ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ → ಸ್ಪಷ್ಟ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ → 'AI ವಿಶ್ಲೇಷಣೆ' ಕ್ಲಿಕ್ ಮಾಡಿ."
      ],
      yieldPrediction: [
        "ಇಳುವರಿ ಮುನ್ಸೂಚನೆಯು ಪರಿಸರ ಅಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಅಂದಾಜು ಮಾಡಲು AI ಅನ್ನು ಬಳಸುತ್ತದೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ಇಳುವರಿ ಮುನ್ಸೂಚನೆ'ಗೆ ಹೋಗಿ → ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ → ಪ್ರಸ್ತುತ ತಾಪಮಾನ, ನಿರೀಕ್ಷಿತ ಮಳೆ, ಆರ್ದ್ರತೆ ಮತ್ತು ಮಣ್ಣಿನ pH ಅನ್ನು ನಮೂದಿಸಿ."
      ],
      cropCalendar: [
        "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್ ಭಾರತದಾದ್ಯಂತ ಪ್ರಮುಖ ಬೆಳೆಗಳಿಗೆ ಬೀಜದಿಂದ ಕೊಯ್ಲುವರೆಗೆ ಸಂಪೂರ್ಣ ಕೃಷಿ ರೋಡ್‌ಮ್ಯಾಪ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್'ಗೆ ಹೋಗಿ → 'ಡಿಫಾಲ್ಟ್ ರೋಡ್‌ಮ್ಯಾಪ್' ಅಥವಾ 'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್' ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ → ನಿಮ್ಮ ರಾಜ್ಯ/ಪ್ರದೇಶದ ಆಧಾರದ ಮೇಲೆ ಫಿಲ್ಟರ್ ಮಾಡಿ."
      ],
      recommendations: [
        "ಶಿಫಾರಸುಗಳು ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಸ್ಥಳ, ಪ್ರಸ್ತುತ ಋತು ಮತ್ತು ಸ್ಥಳೀಯ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಬೆಳೆ ಸಲಹೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. 📍 ಮೆನುವಿನಲ್ಲಿ 'ಶಿಫಾರಸುಗಳು'ಗೆ ಹೋಗಿ → ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ → ನಿಮ್ಮ ಪ್ರದೇಶ/ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ."
      ],
      agrilink: [
        "ಆಗ್ರಿಲಿಂಕ್ 8 ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಕೃಷಿ ಸಹಚರವಾಗಿದೆ: ಬೆಳೆ ಗ್ರಂಥಾಲಯ, ಸಮುದಾಯ Q&A, ಲೈವ್ ಮಂಡಿ ದರಗಳು, ಸಾರಿಗೆ ಸೇವೆಗಳು, AI ರೋಗನಿರ್ಣಯ, ಇಳುವರಿ ಮುನ್ಸೂಚನೆ, ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್, ಮತ್ತು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಶಿಫಾರಸುಗಳು. 📍 ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ಯಾವುದೇ ವೈಶಿಷ್ಟ್ಯಕ್ಕೆ ಹೋಗಲು ಮೇಲಿನ ಮೆನುವನ್ನು ಬಳಸಿ."
      ],
      default: "ನೀವು ಕೃಷಿಯ ಬಗ್ಗೆ ಕೇಳುತ್ತಿದ್ದೀರಿ ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಆಗ್ರಿಲಿಂಕ್ 8 ವ್ಯಾಪಕ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ: ಬೆಳೆ ಗ್ರಂಥಾಲಯ, ಸಮುದಾಯ Q&A, ಲೈವ್ ಮಂಡಿ ದರಗಳು, ಸಾರಿಗೆ ಸೇವೆಗಳು, AI ರೋಗನಿರ್ಣಯ, ಇಳುವರಿ ಮುನ್ಸೂಚನೆ, ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್, ಮತ್ತು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಶಿಫಾರಸುಗಳು. 📍 ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ಯಾವುದೇ ವೈಶಿಷ್ಟ್ಯವನ್ನು ಪ್ರವೇಶಿಸಲು ಮೇಲಿನ ನ್ಯಾವಿಗೇಶನ್ ಮೆನುವನ್ನು ಬಳಸಿ. ಯಾವ ವೈಶಿಷ್ಟ್ಯವು ನಿಮಗೆ ಹೆಚ್ಚು ಆಸಕ್ತಿದಾಯಕವಾಗಿದೆ?",
      typing: "ಆಗ್ರಿಬಾಟ್ ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...",
      placeholder: "ಕೃಷಿ, ಬೆಳೆಗಳು, ರೋಗಗಳ ಬಗ್ಗೆ ಕೇಳಿ..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...", noResults: "ಫಲಿತಾಂಶ ಸಿಗಲಿಲ್ಲ", viewDetails: "ವಿವರಗಳು", back: "ಹಿಂದೆ", whatsappHelp: "ಸಹಾಯ? WhatsApp", selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆ", all: "ಎಲ್ಲಾ", weather: "ಹವಾಮಾನ", humidity: "ತೇವಾಂಶ", wind: "ಗಾಳಿ", condition: "ಸ್ಥಿತಿ", weatherSource: "Open-Meteo ನಿಂದ ಡೇಟಾ" },
  },
  ml: {
    nav: { home: "ഹോം", tools: "ഉപകരണങ്ങൾ", crops: "വിള ലൈബ്രറി", community: "സമൂഹം", mandi: "മണ്ടി വിലകൾ", transport: "ഗതാഗതം", diagnosis: "രോഗ നിർണയം", yieldPrediction: "വിളവ് പ്രവചനം", cropCalendar: "വിള കലണ്ടർ", recommendations: "ശുപാർശകൾ", cropHealth: "വിള ആരോഗ്യം" },
    hero: { title: "ആഗ്രിലിങ്ക് — കർഷക വിള ബുദ്ധിമത്ത", subtitle: "നിങ്ങളുടെ സമ്പൂർണ കൃഷി സഹായി", cta: "വിളകൾ കാണുക", badge: "AI-പ്രവർത്തിത കൃഷി ബുദ്ധിമത്ത", problemTitle: "വെബ് ട്രാക്ക്: കർഷക വിള ബുദ്ധിമത്ത + സമൂഹ വേദിക", aiDiagnosis: "AI നിർണയം" },
    stats: { cropsListed: "വിളകൾ ലിസ്റ്റ്", languages: "ഭാഷകൾ", mandiMarkets: "മണ്ടി മാർക്കറ്റുകൾ", aiPowered: "AI പ്രവർത്തിത", realtime: "തത്സമയം" },
    features: { cropsDesc: "സീസൺ, മണ്ണ്, ജലസേചനം, കീടങ്ങൾ, വളം", communityDesc: "Q&A, പ്രാദേശിക ഭാഷ, വിദഗ്ധ ഉത്തരങ്ങൾ", mandiDesc: "ജില്ല/മാർക്കറ്റ് വിലകൾ + സമീപം തിരയുക", transportDesc: "ഗതാഗത ബന്ധം, പിക്കപ്പ് അഭ്യർഥന", diagnosisDesc: "ഫോട്ടോകളിൽ നിന്ന് AI രോഗ കണ്ടെത്തൽ", recommendationsDesc: "മണ്ണ്, സ്ഥലം & സീസൺ അടിസ്ഥാന വിള ഉപദേശം", yieldPredictionDesc: "AI ഉപയോഗിച്ച് വിള വിളവ് പ്രവചനം", cropCalendarDesc: "വിത്ത് മുതൽ വിളവെടുപ്പ് വരെ സമ്പൂർണ കൃഷി മാർഗ്ഗനിർദ്ദേശം", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "വിള ലൈബ്രറി: സീസൺ, മണ്ണ്, ജലസേചനം, കീടങ്ങൾ, വളം ഷെഡ്യൂൾ.",
      "സമൂഹം: Q&A, പ്രാദേശിക ഭാഷ പിന്തുണ, വിദഗ്ധ ഉത്തരങ്ങൾ.",
      "ജില്ല/മാർക്കറ്റ് മണ്ടി വിലകൾ + വില ട്രെൻഡുകൾ.",
      "ഗതാഗതം: ലോജിസ്റ്റിക്സ് പ്രൊവൈഡർമാരുമായി ബന്ധപ്പെടുക അല്ലെങ്കിൽ പിക്കപ്പ് അഭ്യർഥന.",
      "AI രോഗ കണ്ടെത്തൽ: ഫോട്ടോ അപ്‌ലോഡ്, തൽക്ഷണ നിർണയം & ചികിത്സ.",
      "ശുപാർശകൾ: മണ്ണ്, സ്ഥലം & സീസൺ അടിസ്ഥാന വിദഗ്ധ വിള ഉപദേശം.",
    ],
    crops: { title: "വിള ലൈബ്രറി", search: "വിളകൾ തിരയുക...", allCategories: "എല്ലാ വിഭാഗങ്ങളും", season: "സീസൺ", soil: "മണ്ണ് തരം", irrigation: "ജലസേചനം", pests: "കീടങ്ങൾ", fertilizer: "വളം ഷെഡ്യൂൾ", bestPractices: "മികച്ച രീതികൾ", cropsFound: "വിളകൾ കണ്ടെത്തി", askOnWhatsApp: "WhatsApp ൽ ചോദിക്കുക" },
    community: { title: "സമൂഹ Q&A", askQuestion: "ചോദ്യം ചോദിക്കുക", placeholder: "നിങ്ങളുടെ കൃഷി ചോദ്യം?", post: "പോസ്റ്റ്", answer: "ഉത്തരം എഴുതുക...", answers: "ഉത്തരങ്ങൾ", share: "WhatsApp ഷെയർ", upvote: "അപ്‌വോട്ട്", category: "വിഭാഗം", reply: "മറുപടി" },
    mandi: { title: "മണ്ടി വിലകൾ", search: "ഗ്രാമം, ജില്ല തിരയുക...", state: "സംസ്ഥാനം", commodity: "ചരക്ക്", minPrice: "കുറഞ്ഞ വില", maxPrice: "കൂടിയ വില", modalPrice: "ശരാശരി വില", nearby: "സമീപത്ത്", all: "എല്ലാം", crop: "വിള", crops: "വിളകൾ", tapExpand: "കൂടുതൽ വിളകൾ — വിപുലീകരിക്കുക", showingNearby: "നിങ്ങളുടെ സ്ഥാനം അടിസ്ഥാനമാക്കി സമീപ മാർക്കറ്റുകൾ", markets: "മാർക്കറ്റുകൾ", rates: "വിലകൾ" },
    transport: { title: "ഗതാഗതം", cropType: "വിള തരം", quantity: "അളവ്", pickup: "പിക്കപ്പ്", destination: "ലക്ഷ്യസ്ഥാനം", submit: "WhatsApp അയയ്ക്കുക", whatsapp: "WhatsApp ചാറ്റ്", call: "ഇപ്പോൾ വിളിക്കുക", requestPickup: "പിക്കപ്പ് അഭ്യർഥന", fillDetails: "വിശദാംശങ്ങൾ പൂരിപ്പിച്ച് WhatsApp വഴി അയയ്ക്കുക", placeholderCrop: "ഉദാ., അരി, ഗോതമ്പ്, പരുത്തി", placeholderQty: "ഉദാ., 50", placeholderPickup: "ഗ്രാമം/പട്ടണം പേര്", placeholderDest: "മാർക്കറ്റ്/നഗരം പേര്" },
    diagnosis: { title: "വിള രോഗ നിർണയം", upload: "സസ്യ ഫോട്ടോ അപ്‌ലോഡ്", analyze: "AI വിശകലനം", result: "ഫലം", disease: "രോഗം", treatment: "ചികിത്സ", prevention: "പ്രതിരോധം", severity: "തീവ്രത", poweredBy: "AI ദൃശ്യ വിശകലനം", photoHint: "ഫോട്ടോ എടുക്കുക അല്ലെങ്കിൽ ഗാലറിയിൽ നിന്ന് അപ്‌ലോഡ് (പരമാവധി 10MB)", remove: "നീക്കം ചെയ്യുക", affectedPart: "ബാധിത സസ്യ ഭാഗം", analyzing: "AI വിശകലനം ചെയ്യുന്നു...", affected: "ബാധിത", confidence: "വിശ്വാസ്യത", cause: "കാരണം", symptoms: "ലക്ഷണങ്ങൾ", organicTreatment: "ജൈവ ചികിത്സ", askExpert: "WhatsApp ൽ വിദഗ്ധനോട് ചോദിക്കുക", fileTooLarge: "ഫയൽ വളരെ വലുതാണ്", fileTooLargeDesc: "10MB ൽ താഴെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക", analysisFailed: "വിശകലനം പരാജയപ്പെട്ടു", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "വിള വിളവ് പ്രവചനം", subtitle: "പാരിസ്ഥിതിക ഇൻപുട്ടുകളുടെ അടിസ്ഥാനത്തിൽ AI-പ്രവർത്തിത വിളവ് കണക്കാക്കൽ", cropEnvironmentalData: "വിളയും പാരിസ്ഥിതിക ഡാറ്റയും", enterCropType: "നിങ്ങളുടെ വിള തരവും നിലവിലെ വയൽ അവസ്ഥകളും നൽകുക", cropType: "വിള തരം", selectCropType: "വിള തരം തിരഞ്ഞെടുക്കുക", temperature: "താപനില (°C)", rainfall: "മഴ (mm)", humidity: "ആർദ്രത (%)", soilPH: "മണ്ണിന്റെ pH", predictYield: "വിളവ് പ്രവചിക്കുക", analyzing: "വിശകലനം ചെയ്യുന്നു...", predictedYield: "പ്രവചിച്ച വിളവ്", unit: "ടൺ/ഹെക്ടർ", confidence: "വിശ്വാസ്യത", smartSuggestions: "സ്മാർട്ട് നിർദ്ദേശങ്ങൾ", yieldComparison: "വിള അനുസരിച്ച് വിളവ് താരതമ്യം", currentYield: "നിലവിലെ വിളവ്", optimalYield: "ഒപ്റ്റിമൽ വിളവ്", lowRainfallWarning: "കുറഞ്ഞ മഴ കണ്ടെത്തി. മണ്ണിന്റെ ഈർപ്പം നിലനിർത്താൻ ഡ്രിപ്പ് അല്ലെങ്കിൽ സ്പ്രിങ്ക്ലർ ജലസേചനം പരിഗണിക്കുക.", highTemperatureWarning: "ഉയർന്ന താപനില മുന്നറിയിപ്പ്. ഷേഡ് നെറ്റുകൾ, മൾച്ചിംഗ് അല്ലെങ്കിൽ ചൂട്-സഹിഷ്ണുതയുള്ള വിള ഇനങ്ങൾ ഉപയോഗിക്കുക.", acidicSoilInfo: "അസിഡിക് മണ്ണ് കണ്ടെത്തി. മെച്ചപ്പെട്ട പോഷക ആഗിരണത്തിനായി pH വർദ്ധിപ്പിക്കാൻ കുമ്മായം (കാൽസ്യം കാർബണേറ്റ്) പ്രയോഗിക്കുക.", lowHumidityWarning: "കുറഞ്ഞ ആർദ്രത ഈർപ്പം സമ്മർദ്ദത്തിന് കാരണമാകും. ജലസേചന ആവൃത്തി വർദ്ധിപ്പിച്ച് മൾച്ച് ഉപയോഗിക്കുക.", optimalConditions: "ഒപ്റ്റിമൽ വളർച്ചാ സാഹചര്യങ്ങൾ കണ്ടെത്തി! മികച്ച ഫലങ്ങൾക്കായി നിലവിലെ രീതികൾ നിലനിർത്തുക." },
    recommendations: { title: "വിള ശുപാർശകൾ", soilBased: "മണ്ണ് അടിസ്ഥാനം", locationBased: "സ്ഥലം അടിസ്ഥാനം", seasonBased: "സീസൺ അടിസ്ഥാനം", selectSoil: "മണ്ണ് തിരഞ്ഞെടുക്കുക", selectRegion: "പ്രദേശം തിരഞ്ഞെടുക്കുക", currentSeason: "നിലവിലെ സീസൺ", expertTips: "വിദഗ്ധ നിർദ്ദേശങ്ങൾ", source: "ഉറവിടം", climate: "കാലാവസ്ഥ", states: "സംസ്ഥാനങ്ങൾ" },
    cropCalendar: {
      title: "വിള കലണ്ടർ",
      subtitle: "വിത്ത് തയ്യാറാക്കൽ മുതൽ വിളവെടുപ്പും വിളവെടുപ്പിനു ശേഷമുള്ള പ്രവർത്തനങ്ങളും വരെ ഘട്ടം ഘട്ടമായുള്ള മാർഗ്ഗനിർദ്ദേശത്തോടുകൂടിയ പൂർണ്ണമായ കൃഷി റോഡ്മാപ്പ്",
      defaultRoadmap: "ഡിഫോൾട്ട് റോഡ്മാപ്പ്",
      liveTracking: "ലൈവ് ട്രാക്കിംഗ്",
      currentSeason: "നിലവിലെ സീസൺ",
      monsoonSeason: "മൺസൂൺ സീസൺ (ജൂൺ-സെപ്റ്റംബർ) - മഴയെ ആശ്രയിച്ചുള്ള വിളകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക",
      winterSeason: "ശീതകാലം (ഒക്ടോബർ-മാർച്ച്) - ജലസേചന വിളകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക",
      summerSeason: "വേനൽക്കാലം (ഏപ്രിൽ-മെയ്) - ഉയർന്ന ജല ലഭ്യതയുള്ള ജലസേചന വിളകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക",
      selectState: "സംസ്ഥാനം/പ്രദേശം തിരഞ്ഞെടുക്കുക",
      cropCategory: "വിള വിഭാഗം",
      startLiveTracking: "ലൈവ് വിള ട്രാക്കിംഗ് ആരംഭിക്കുക",
      selectYourCrop: "നിങ്ങളുടെ വിള തിരഞ്ഞെടുക്കുക",
      cultivationStartDate: "കൃഷി ആരംഭ തീയതി",
      chooseYourCrop: "നിങ്ങളുടെ വിള തിരഞ്ഞെടുക്കുക",
      howLiveTrackingWorks: "ലൈവ് ട്രാക്കിംഗ് എങ്ങനെ പ്രവർത്തിക്കുന്നു:",
      trackEachStage: "യഥാർത്ഥ തീയതികളോടെ ഓരോ കൃഷി ഘട്ടവും ട്രാക്ക് ചെയ്യുക",
      markStagesComplete: "പൂർത്തിയാകുമ്പോൾ ഘട്ടങ്ങൾ പൂർത്തിയായി എന്ന് അടയാളപ്പെടുത്തുക",
      getSolutions: "എന്തെങ്കിലും തെറ്റ് സംഭവിച്ചാൽ പരിഹാരങ്ങൾ നേടുക",
      monitorProgress: "മൊത്തത്തിലുള്ള പുരോഗതി ശതമാനം നിരീക്ഷിക്കുക",
      complete: "പൂർണ്ണം",
      started: "ആരംഭിച്ചു",
      completed: "പൂർത്തിയായി",
      inProgress: "പുരോഗതിയിൽ",
      pending: "തീർപ്പുകൽപ്പിക്കാത്ത",
      markComplete: "പൂർത്തിയായി എന്ന് അടയാളപ്പെടുത്തുക",
      needHelp: "സഹായം വേണോ?",
      resetTracking: "ട്രാക്കിംഗ് പുനഃസജ്ജമാക്കുക",
      liveFarmingProgress: "ലൈവ് കൃഷി പുരോഗതി",
      trackingProgress: "ട്രാക്കിംഗ് പുരോഗതി",
      stages: "ഘട്ടങ്ങൾ",
      problemSolver: "പ്രശ്ന പരിഹാരി",
      havingIssues: "ഈ ഘട്ടത്തിൽ പ്രശ്നങ്ങൾ ഉണ്ടോ? ഇവിടെ സാധാരണ പ്രശ്നങ്ങളും പരിഹാരങ്ങളും ഉണ്ട്:",
      pestProblems: "കീട പ്രശ്നങ്ങൾ",
      pestSolution: "ഓർഗാനിക് വേപ്പെണ്ണ സ്പ്രേ പ്രയോഗിക്കുക അല്ലെങ്കിൽ കീട തിരിച്ചറിയലിനും ചികിത്സയ്ക്കുമായി പ്രാദേശിക കൃഷി ഉദ്യോഗസ്ഥനെ സമീപിക്കുക.",
      weatherIssues: "കാലാവസ്ഥാ പ്രശ്നങ്ങൾ",
      weatherSolution: "മഴയുടെ അടിസ്ഥാനത്തിൽ ജലസേചന ഷെഡ്യൂൾ ക്രമീകരിക്കുക. വെള്ളം കെട്ടിനിന്നാൽ ഡ്രെയിനേജ് അല്ലെങ്കിൽ വരൾച്ചയിൽ അധിക വെള്ളം നൽകുക.",
      poorGrowth: "മോശം വളർച്ച",
      poorGrowthSolution: "മണ്ണിലെ പോഷകങ്ങൾ പരിശോധിക്കുക, സമതുലിതമായ വളം പ്രയോഗിക്കുക, ശരിയായ അകലവും സൂര്യപ്രകാശവും ഉറപ്പാക്കുക.",
      problemSolved: "പ്രശ്നം പരിഹരിച്ചു - തുടരുക",
      close: "അടയ്ക്കുക",
      completeRoadmap: "പൂർണ്ണമായ കൃഷി റോഡ്മാപ്പ് - വിത്ത് മുതൽ വിളവെടുപ്പ് വരെ",
      viewCompleteRoadmap: "പൂർണ്ണമായ റോഡ്മാപ്പ് കാണുക",
      farmingTips: "കൃഷി നുറുങ്ങുകൾ",
      temperature: "താപനില",
      rainfall: "മഴ",
      soilType: "മണ്ണിന്റെ തരം",
      noCropsFound: "വിളകൾ കണ്ടെത്തിയില്ല",
      adjustFilters: "കൂടുതൽ വിള കലണ്ടർ വിവരങ്ങൾ കാണാൻ നിങ്ങളുടെ ഫിൽട്ടറുകൾ ക്രമീകരിക്കാൻ ശ്രമിക്കുക.",
      kharif: "ഖരീഫ്",
      rabi: "റബി",
      zaid: "സായിദ്",
      cereals: "ധാന്യങ്ങൾ",
      pulses: "പയർവർഗ്ഗങ്ങൾ",
      vegetables: "പച്ചക്കറികൾ",
      fruits: "പഴങ്ങൾ",
      cashCrops: "പണവിളകൾ",
      oilseeds: "എണ്ണക്കുരുകൾ",
      spices: "സുഗന്ധവ്യഞ്ജനങ്ങൾ"
    },
    chatbot: {
      greeting: ["നമസ്കാരം! ഞാൻ അഗ്രിബോട്ട്, നിങ്ങളുടെ AI കൃഷി സഹായി. എനിക്ക് എല്ലാ അഗ്രിലിങ്ക് സവിശേഷതകളിലും സഹായിക്കാൻ കഴിയും. 📍 ഏതെങ്കിലും സവിശേഷതയിലേക്ക് പോകാൻ മുകളിലെ മെനു ഉപയോഗിക്കുക."],
      crops: ["ഞങ്ങളുടെ വിള ലൈബ്രറിയിൽ 102+ വിളകളുടെ വിശദമായ വിവരങ്ങൾ അടങ്ങിയിരിക്കുന്നു. 📍 മുകളിലെ മെനുവിൽ 'വിള ലൈബ്രറി'യിലേക്ക് പോകുക."],
      community: ["ഞങ്ങളുടെ കമ്മ്യൂണിറ്റി വിഭാഗം കർഷകർ അറിവ് പങ്കിടുന്ന ഒരു Q&A പ്ലാറ്റ്ഫോമാണ്. 📍 മെനുവിൽ 'കമ്മ്യൂണിറ്റി'യിലേക്ക് പോകുക."],
      mandi: ["മണ്ഡി നിരക്കുകൾ ഇന്ത്യയിലുടനീളം 500+ വിപണികളിൽ നിന്ന് തത്സമയ വിപണി വിലകൾ നൽകുന്നു. 📍 മുകളിലെ മെനുവിൽ 'മണ്ഡി നിരക്കുകൾ'ലേക്ക് പോകുക."],
      transport: ["ഗതാഗതവും ലോജിസ്റ്റിക്സും നിങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ ഫാമിൽ നിന്ന് വിപണിയിലേക്ക് മാറ്റാൻ സഹായിക്കുന്നു. 📍 മെനുവിൽ 'ഗതാഗതം'ത്തിലേക്ക് പോകുക."],
      diagnosis: ["AI രോഗനിർണയം 3 ശക്തമായ രീതികൾ നൽകുന്നു: സസ്യ രോഗ കണ്ടെത്തൽ, മണ്ണ് വിശകലനം, വളം കണ്ടെത്തൽ. 📍 മെനുവിൽ 'രോഗനിർണയം'ത്തിലേക്ക് പോകുക."],
      yieldPrediction: ["വിളവ് പ്രവചനം പാരിസ്ഥിതിക ഘടകങ്ങളുടെ അടിസ്ഥാനത്തിൽ വിള വിളവ് കണക്കാക്കാൻ AI ഉപയോഗിക്കുന്നു. 📍 മെനുവിൽ 'വിളവ് പ്രവചനം'ത്തിലേക്ക് പോകുക."],
      cropCalendar: ["വിള കലണ്ടർ ഇന്ത്യയിലുടനീളമുള്ള പ്രധാന വിളകൾക്ക് വിത്ത് മുതൽ വിളവെടുപ്പ് വരെ പൂർണ്ണമായ കൃഷി റോഡ്മാപ്പുകൾ നൽകുന്നു. 📍 മെനുവിൽ 'വിള കലണ്ടർ'ലേക്ക് പോകുക."],
      recommendations: ["ശുപാർശകൾ നിങ്ങളുടെ മണ്ണിന്റെ തരം, സ്ഥലം, നിലവിലെ സീസൺ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ വ്യക്തിഗതമാക്കിയ വിള നിർദ്ദേശങ്ങൾ നൽകുന്നു. 📍 മെനുവിൽ 'ശുപാർശകൾ'ലേക്ക് പോകുക."],
      agrilink: ["അഗ്രിലിങ്ക് 8 പ്രധാന സവിശേഷതകളുള്ള നിങ്ങളുടെ പൂർണ്ണമായ കൃഷി കൂട്ടാളിയാണ്. 📍 നിങ്ങൾക്ക് ആവശ്യമുള്ള ഏതെങ്കിലും സവിശേഷതയിലേക്ക് പോകാൻ മുകളിലെ മെനു ഉപയോഗിക്കുക."],
      default: "നിങ്ങൾ കൃഷിയെക്കുറിച്ച് ചോദിക്കുന്നുവെന്ന് ഞാൻ മനസ്സിലാക്കുന്നു. അഗ്രിലിങ്ക് 8 സമഗ്ര സവിശേഷതകൾ വാഗ്ദാനം ചെയ്യുന്നു. 📍 നിങ്ങൾക്ക് ആവശ്യമുള്ള ഏതെങ്കിലും സവിശേഷത ആക്സസ് ചെയ്യാൻ മുകളിലെ നാവിഗേഷൻ മെനു ഉപയോഗിക്കുക.",
      typing: "അഗ്രിബോട്ട് ടൈപ്പ് ചെയ്യുന്നു...",
      placeholder: "കൃഷി, വിളകൾ, രോഗങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "ലോഡ് ചെയ്യുന്നു...", noResults: "ഫലങ്ങൾ ഇല്ല", viewDetails: "വിശദാംശങ്ങൾ", back: "മടങ്ങുക", whatsappHelp: "സഹായം? WhatsApp", selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക", all: "എല്ലാം", weather: "കാലാവസ്ഥ", humidity: "ഈർപ്പം", wind: "കാറ്റ്", condition: "അവസ്ഥ", weatherSource: "Open-Meteo-ൽ നിന്നുള്ള ഡാറ്റ" },
  },
  mr: {
    nav: { home: "मुखपृष्ठ", tools: "साधने", crops: "पीक ग्रंथालय", community: "समुदाय", mandi: "मंडी भाव", transport: "वाहतूक", diagnosis: "रोग निदान", yieldPrediction: "उत्पादन अंदाज", cropCalendar: "पीक कॅलेंडर", recommendations: "शिफारसी", cropHealth: "पीक आरोग्य" },
    hero: { title: "अॅग्रीलिंक — शेतकरी पीक बुद्धिमत्ता", subtitle: "तुमचा पूर्ण शेती सोबती", cta: "पिके पहा", badge: "AI-चालित शेती बुद्धिमत्ता", problemTitle: "वेब ट्रॅक: शेतकरी पीक बुद्धिमत्ता + समुदाय व्यासपीठ", aiDiagnosis: "AI निदान" },
    stats: { cropsListed: "पिके सूचीबद्ध", languages: "भाषा", mandiMarkets: "मंडी बाजार", aiPowered: "AI चालित", realtime: "रिअल-टाइम" },
    features: { cropsDesc: "हंगाम, जमीन, सिंचन, किडी, खत", communityDesc: "Q&A, स्थानिक भाषा, तज्ञ उत्तरे", mandiDesc: "जिल्हा/बाजार भाव + जवळ शोधा", transportDesc: "वाहतूक जोडणी, पिकअप विनंती", diagnosisDesc: "फोटोंमधून AI रोग ओळख", recommendationsDesc: "माती, ठिकाण & हंगाम आधारित पीक सल्ला", yieldPredictionDesc: "AI सह पीक उत्पादन अंदाज", cropCalendarDesc: "बियाणे ते कापणी पर्यंत संपूर्ण शेती मार्गदर्शक", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "पीक ग्रंथालय: हंगाम, जमीन, सिंचन, किडी, खत वेळापत्रक.",
      "समुदाय: Q&A, स्थानिक भाषा समर्थन, तज्ञ उत्तरे.",
      "जिल्हा/बाजार मंडी भाव + भाव कल.",
      "वाहतूक: लॉजिस्टिक्स प्रदात्यांशी जोडा किंवा पिकअप विनंती.",
      "AI रोग ओळख: फोटो अपलोड, तात्काळ निदान & उपचार.",
      "शिफारसी: माती, ठिकाण & हंगाम आधारित तज्ञ पीक सल्ला.",
    ],
    crops: { title: "पीक ग्रंथालय", search: "पिके शोधा...", allCategories: "सर्व वर्ग", season: "हंगाम", soil: "जमिनीचा प्रकार", irrigation: "सिंचन", pests: "किडी", fertilizer: "खत वेळापत्रक", bestPractices: "सर्वोत्तम पद्धती", cropsFound: "पिके आढळली", askOnWhatsApp: "WhatsApp वर विचारा" },
    community: { title: "समुदाय प्रश्नोत्तर", askQuestion: "प्रश्न विचारा", placeholder: "तुमचा शेती प्रश्न?", post: "पोस्ट करा", answer: "उत्तर लिहा...", answers: "उत्तरे", share: "WhatsApp वर शेअर", upvote: "अपवोट", category: "वर्ग", reply: "उत्तर द्या" },
    mandi: { title: "मंडी भाव", search: "गाव, जिल्हा शोधा...", state: "राज्य", commodity: "माल", minPrice: "किमान भाव", maxPrice: "कमाल भाव", modalPrice: "सरासरी भाव", nearby: "जवळचे", all: "सर्व", crop: "पीक", crops: "पिके", tapExpand: "आणखी पिके — विस्तारित करा", showingNearby: "तुमच्या स्थानावर आधारित जवळचे बाजार", markets: "बाजार", rates: "भाव" },
    transport: { title: "वाहतूक", cropType: "पीक प्रकार", quantity: "प्रमाण", pickup: "पिकअप", destination: "गंतव्य", submit: "WhatsApp वर पाठवा", whatsapp: "WhatsApp चॅट", call: "आता कॉल करा", requestPickup: "पिकअप विनंती", fillDetails: "तपशील भरा आणि WhatsApp वर पाठवा", placeholderCrop: "उदा., तांदूळ, गहू, कापूस", placeholderQty: "उदा., 50", placeholderPickup: "गाव/शहर नाव", placeholderDest: "बाजार/शहर नाव" },
    diagnosis: { title: "पीक रोग निदान", upload: "वनस्पती फोटो अपलोड", analyze: "AI विश्लेषण", result: "निकाल", disease: "रोग", treatment: "उपचार", prevention: "प्रतिबंध", severity: "तीव्रता", poweredBy: "AI दृष्टी विश्लेषण", photoHint: "फोटो काढा किंवा गॅलरीतून अपलोड करा (कमाल 10MB)", remove: "काढा", affectedPart: "प्रभावित वनस्पती भाग", analyzing: "AI विश्लेषण करत आहे...", affected: "प्रभावित", confidence: "विश्वासार्हता", cause: "कारण", symptoms: "लक्षणे", organicTreatment: "सेंद्रिय उपचार", askExpert: "WhatsApp वर तज्ञांना विचारा", fileTooLarge: "फाइल खूप मोठी", fileTooLargeDesc: "कृपया 10MB पेक्षा कमी प्रतिमा अपलोड करा", analysisFailed: "विश्लेषण अयशस्वी", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "पीक उत्पादन अंदाज", subtitle: "पर्यावरणीय इनपुटवर आधारित AI-चालित उत्पादन अंदाज", cropEnvironmentalData: "पीक आणि पर्यावरणीय डेटा", enterCropType: "तुमचा पीक प्रकार आणि सध्याच्या शेताची परिस्थिती प्रविष्ट करा", cropType: "पीक प्रकार", selectCropType: "पीक प्रकार निवडा", temperature: "तापमान (°C)", rainfall: "पाऊस (mm)", humidity: "आर्द्रता (%)", soilPH: "माती pH", predictYield: "उत्पादन अंदाज", analyzing: "विश्लेषण करत आहे...", predictedYield: "अंदाजित उत्पादन", unit: "टन/हेक्टर", confidence: "विश्वासार्हता", smartSuggestions: "स्मार्ट सूचना", yieldComparison: "पीक नुसार उत्पादन तुलना", currentYield: "सध्याचे उत्पादन", optimalYield: "इष्टतम उत्पादन", lowRainfallWarning: "कमी पाऊस आढळला. मातीची ओलावा टिकवून ठेवण्यासाठी ठिबक किंवा फवारा सिंचन विचारात घ्या.", highTemperatureWarning: "उच्च तापमान सावधगिरी. सावली जाळी, मल्चिंग किंवा उष्णता-सहनशील पीक जाती वापरा.", acidicSoilInfo: "आम्लयुक्त माती आढळली. चांगल्या पोषक शोषणासाठी pH वाढवण्यासाठी चुना (कॅल्शियम कार्बोनेट) लावा.", lowHumidityWarning: "कमी आर्द्रतेमुळे ओलावा ताण होऊ शकतो. सिंचन वारंवारता वाढवा आणि मल्च वापरा.", optimalConditions: "इष्टतम वाढीच्या परिस्थिती आढळल्या! सर्वोत्तम परिणामांसाठी सध्याच्या पद्धती चालू ठेवा." },
    recommendations: { title: "पीक शिफारसी", soilBased: "माती आधारित", locationBased: "ठिकाण आधारित", seasonBased: "हंगाम आधारित", selectSoil: "माती निवडा", selectRegion: "प्रदेश निवडा", currentSeason: "सध्याचा हंगाम", expertTips: "तज्ञ टिप्स", source: "स्रोत", climate: "हवामान", states: "राज्ये" },
    cropCalendar: {
      title: "पीक कॅलेंडर",
      subtitle: "बीज तयारी पासून कापणी आणि कापणी नंतरच्या क्रियाकलापांपर्यंत टप्प्याटप्प्याने मार्गदर्शनासह संपूर्ण शेती रोडमॅप",
      defaultRoadmap: "डिफॉल्ट रोडमॅप",
      liveTracking: "लाइव्ह ट्रॅकिंग",
      currentSeason: "सध्याचा हंगाम",
      monsoonSeason: "पावसाळी हंगाम (जून-सप्टेंबर) - पावसावर अवलंबून असलेल्या पिकांवर लक्ष केंद्रित करा",
      winterSeason: "हिवाळी हंगाम (ऑक्टोबर-मार्च) - सिंचित पिकांवर लक्ष केंद्रित करा",
      summerSeason: "उन्हाळी हंगाम (एप्रिल-मे) - जास्त पाणी उपलब्धतेसह सिंचित पिकांवर लक्ष केंद्रित करा",
      selectState: "राज्य/प्रदेश निवडा",
      cropCategory: "पीक श्रेणी",
      startLiveTracking: "लाइव्ह पीक ट्रॅकिंग सुरू करा",
      selectYourCrop: "तुमचे पीक निवडा",
      cultivationStartDate: "लागवड सुरुवातीची तारीख",
      chooseYourCrop: "तुमचे पीक निवडा",
      howLiveTrackingWorks: "लाइव्ह ट्रॅकिंग कसे काम करते:",
      trackEachStage: "वास्तविक तारखांसह प्रत्येक शेती टप्प्याचा मागोवा घ्या",
      markStagesComplete: "पूर्ण झाल्यावर टप्पे पूर्ण म्हणून चिन्हांकित करा",
      getSolutions: "काही चूक झाल्यास उपाय मिळवा",
      monitorProgress: "एकूण प्रगती टक्केवारीचे निरीक्षण करा",
      complete: "पूर्ण",
      started: "सुरू केले",
      completed: "पूर्ण झाले",
      inProgress: "प्रगतीत आहे",
      pending: "प्रलंबित",
      markComplete: "पूर्ण म्हणून चिन्हांकित करा",
      needHelp: "मदत हवी आहे?",
      resetTracking: "ट्रॅकिंग रीसेट करा",
      liveFarmingProgress: "लाइव्ह शेती प्रगती",
      trackingProgress: "ट्रॅकिंग प्रगती",
      stages: "टप्पे",
      problemSolver: "समस्या निराकरणकर्ता",
      havingIssues: "या टप्प्यात समस्या आहेत? येथे सामान्य समस्या आणि उपाय आहेत:",
      pestProblems: "कीड समस्या",
      pestSolution: "सेंद्रिय कडुनिंब तेल फवारणी करा किंवा कीड ओळख आणि उपचारासाठी स्थानिक कृषी अधिकाऱ्याशी संपर्क साधा.",
      weatherIssues: "हवामान समस्या",
      weatherSolution: "पावसाच्या आधारे सिंचन वेळापत्रक समायोजित करा. पाणी साचल्यास निचरा किंवा दुष्काळात अतिरिक्त पाणी पुरवा.",
      poorGrowth: "खराब वाढ",
      poorGrowthSolution: "मातीतील पोषक तत्वे तपासा, संतुलित खत घाला, योग्य अंतर आणि सूर्यप्रकाश सुनिश्चित करा.",
      problemSolved: "समस्या सोडवली - पुढे चला",
      close: "बंद करा",
      completeRoadmap: "संपूर्ण शेती रोडमॅप - बीजापासून कापणीपर्यंत",
      viewCompleteRoadmap: "संपूर्ण रोडमॅप पहा",
      farmingTips: "शेती टिप्स",
      temperature: "तापमान",
      rainfall: "पाऊस",
      soilType: "मातीचा प्रकार",
      noCropsFound: "पिके सापडली नाहीत",
      adjustFilters: "अधिक पीक कॅलेंडर माहिती पाहण्यासाठी तुमचे फिल्टर समायोजित करण्याचा प्रयत्न करा.",
      kharif: "खरीप",
      rabi: "रब्बी",
      zaid: "जायद",
      cereals: "धान्य",
      pulses: "डाळी",
      vegetables: "भाज्या",
      fruits: "फळे",
      cashCrops: "नगदी पिके",
      oilseeds: "तेलबिया",
      spices: "मसाले"
    },
    chatbot: {
      greeting: [
        "नमस्कार! मी अॅग्रीबॉट आहे, तुमचा AI शेती सहाय्यक. मी सर्व अॅग्रीलिंक वैशिष्ट्यांमध्ये मदत करू शकतो: पीक ग्रंथालय (102+ पिके), समुदाय Q&A, लाइव्ह मंडी भाव (500+ बाजार), वाहतूक सेवा, AI निदान, उत्पादन अंदाज, पीक कॅलेंडर, आणि शिफारसी. 📍 कोणत्याही वैशिष्ट्यावर जाण्यासाठी वरचा मेनू वापरा. तुम्हाला काय जाणून घ्यायचे आहे?",
        "नमस्कार! अॅग्रीलिंकमध्ये आपले स्वागत आहे - तुमचा संपूर्ण शेती साथी. मी आमच्या व्यापक वैशिष्ट्यांमधून तुमचे मार्गदर्शन करू शकतो आणि कोणत्याही कृषी प्रश्नाचे उत्तर देऊ शकतो. 📍 त्या वैशिष्ट्यावर थेट जाण्यासाठी वरच्या मेनूमधील कोणत्याही विभागावर क्लिक करा. आज मी तुमची कशी मदत करू शकतो?"
      ],
      crops: [
        "आमच्या पीक ग्रंथालयात 102+ पिकांची तपशीलवार माहिती आहे ज्यामध्ये हंगामी, मातीची आवश्यकता, सिंचनाची गरज, कीड व्यवस्थापन, खत कार्यक्रम आणि सर्वोत्तम पद्धती समाविष्ट आहेत. 📍 वरच्या मेनूमध्ये 'पीक ग्रंथालय'वर जा → विशिष्ट पिके शोधण्यासाठी शोध बार वापरा → श्रेणींनुसार फिल्टर करा (धान्य, डाळी, भाज्या, फळे, तेलबिया, मसाले, व्यावसायिक पिके, लागवड पिके) → संपूर्ण वाढीची माहिती मिळविण्यासाठी कोणत्याही पीक कार्डवर क्लिक करा → तज्ञ सल्ल्यासाठी WhatsApp बटणावर क्लिक करून कृषी तज्ञांशी जुडा."
      ],
      community: [
        "आमचा समुदाय विभाग हा एक Q&A प्लॅटफॉर्म आहे जेथे शेतकरी ज्ञान सामायिक करतात आणि तज्ञ उत्तरे मिळवतात. 30+ भाषांमध्ये उपलब्ध. 📍 मेनूमध्ये 'समुदाय'वर जा → श्रेणीनुसार विद्यमान प्रश्न ब्राउझ करा → तुमची शेती समस्या पोस्ट करण्यासाठी 'प्रश्न विचारा'वर क्लिक करा → उपयुक्त उत्तरांवर मत द्या → थेट तज्ञ सल्ल्यासाठी WhatsApp बटण वापरा."
      ],
      mandi: [
        "मंडी भाव भारतातील 500+ बाजारांमधून थेट बाजार भाव प्रदान करते. सर्व प्रमुख वस्तूंचे सध्याचे दर तपासा, भाव ट्रेंड पहा, बाजारांची तुलना करा आणि तुमच्या जवळ सर्वोत्तम विक्री संधी शोधा. 📍 वरच्या मेनूमध्ये 'मंडी भाव'वर जा → ड्रॉपडाउनमधून तुमचे राज्य निवडा → वस्तूचा प्रकार निवडा → आजचे भाव, कालचे दर आणि साप्ताहिक ट्रेंड पहा → तपशीलवार भाव विश्लेषणासाठी कोणत्याही बाजारावर क्लिक करा → स्थानिक व्यापाऱ्यांशी जोडण्यासाठी आणि विक्री सहाय्य मिळविण्यासाठी WhatsApp बटण वापरा."
      ],
      transport: [
        "वाहतूक आणि लॉजिस्टिक्स तुम्हाला तुमचे उत्पादन शेतातून बाजारात नेण्यासाठी लॉजिस्टिक्स प्रदात्यांशी जोडण्यास मदत करते. पिकअप तपशील भरा आणि WhatsApp द्वारे वाहतुकदारांशी जुडा. 📍 मेनूमध्ये 'वाहतूक'वर जा → पीक प्रकार, प्रमाण, पिकअप स्थान आणि गंतव्यासह विनंती फॉर्म भरा → 'विनंती सबमिट करा'वर क्लिक करा → WhatsApp द्वारे सत्यापित वाहतुकदारांशी जुडा → कोट्सची तुलना करा आणि तुमच्या गरजांसाठी सर्वोत्तम सेवा बुक करा."
      ],
      diagnosis: [
        "AI निदान 3 शक्तिशाली मोड ऑफर करते: 1) वनस्पती रोग शोध - वनस्पतींच्या फोटोंवरून रोग, कीड आणि कमतरता ओळखा, 2) माती विश्लेषण - मातीच्या फोटोंवरून माती प्रकार, सुपीकता, pH आणि आर्द्रता विश्लेषण करा, 3) खत शोध - खताच्या फोटोंवरून खत प्रकार, रचना आणि गुणवत्ता ओळखा. 📍 मेनूमध्ये 'निदान'वर जा → विश्लेषण मोड निवडा (वनस्पती/माती/खत) → स्पष्ट फोटो अपलोड करा (कमाल 10MB) → 'AI सह विश्लेषण करा'वर क्लिक करा → आत्मविश्वास स्कोअर आणि उपचार शिफारशींसह तत्काळ परिणाम मिळवा → व्यक्तिगत सल्ला आणि तपशीलवार उपचार योजनांसाठी 'WhatsApp वर तज्ञांना विचारा'वर क्लिक करा."
      ],
      yieldPrediction: [
        "उत्पादन अंदाज तापमान (°C), पाऊस (mm), आर्द्रता (%), आणि माती pH यासारख्या पर्यावरणीय घटकांच्या आधारे पीक उत्पादनाचा अंदाज लावण्यासाठी AI वापरते. तुमच्या परिस्थिती इनपुट करा आणि ऑप्टिमायझेशन सूचनांसह उत्पादन अंदाज मिळवा. 📍 मेनूमध्ये 'उत्पादन अंदाज'वर जा → ड्रॉपडाउनमधून तुमचे पीक निवडा → सध्याचे तापमान, अपेक्षित पाऊस, आर्द्रता पातळी आणि माती pH प्रविष्ट करा → 'उत्पादन अंदाज'वर क्लिक करा → टन/हेक्टरमध्ये AI-संचालित उत्पादन अंदाज मिळवा → उत्पादन सुधारण्यासाठी स्मार्ट सूचनांचे पुनरावलोकन करा → कृषी तज्ञांसह परिणामांवर चर्चा करण्यासाठी WhatsApp बटण वापरा."
      ],
      cropCalendar: [
        "पीक कॅलेंडर भारतातील प्रमुख पिकांसाठी बीजापासून कापणीपर्यंत संपूर्ण शेती रोडमॅप प्रदान करते. दोन मोडमधून निवडा: 📖 पूर्वनिर्धारित चरणबद्ध मार्गदर्शनासाठी डिफॉल्ट रोडमॅप, किंवा 🔄 तुमच्या वास्तविक शेती प्रगतीचे रिअल-टाइममध्ये निरीक्षण करण्यासाठी लाइव्ह ट्रॅकिंग. अचूक वेळ आणि तज्ञ टिप्ससह पूर्व-पेरणी तयारी, पेरणी, वनस्पति वाढ, फुलणे, कापणी आणि कापणी नंतरच्या क्रियाकलापांसह तपशीलवार टप्प्याटप्प्याने क्रियाकलाप मिळवा. 📍 मेनूमध्ये 'पीक कॅलेंडर'वर जा → 'डिफॉल्ट रोडमॅप' किंवा 'लाइव्ह ट्रॅकिंग' मोड निवडा → तुमच्या राज्य/प्रदेशानुसार फिल्टर करा → पीक श्रेणी निवडा → लाइव्ह ट्रॅकिंगसाठी: तुमच्या पिकावर 'ट्रॅकिंग सुरू करा'वर क्लिक करा → पूर्ण झाल्यावर टप्पे पूर्ण म्हणून चिन्हांकित करा → पूर्णता टक्केवारीसह प्रगतीचे निरीक्षण करा → कृषी तज्ञांकडून व्यक्तिगत शेती मार्गदर्शन आणि टप्प्याटप्प्याने सल्ल्यासाठी WhatsApp बटण वापरा."
      ],
      recommendations: [
        "शिफारसी तुमच्या माती प्रकार, स्थान, सध्याचा हंगाम आणि स्थानिक हवामान परिस्थितीच्या आधारे व्यक्तिगत पीक सूचना प्रदान करतात. तुमच्या विशिष्ट शेती परिस्थितीनुसार तयार केलेला तज्ञ सल्ला मिळवा. 📍 मेनूमध्ये 'शिफारसी'वर जा → तुमचा माती प्रकार निवडा (चिकणमाती, दुमट, वालुकामय, इ.) → तुमचा प्रदेश/राज्य निवडा → सध्याच्या हंगामाच्या शिफारसी पहा → नफा विश्लेषणासह पीक सूचना मिळवा → तुमच्या क्षेत्रासाठी तज्ञ टिप्सचे पुनरावलोकन करा → कृषी सल्लागारांसह व्यक्तिगत शेती योजनांवर चर्चा करण्यासाठी WhatsApp बटणावर क्लिक करा."
      ],
      agrilink: [
        "अॅग्रीलिंक 8 मुख्य वैशिष्ट्यांसह तुमचा संपूर्ण शेती साथी आहे: पीक ग्रंथालय, समुदाय Q&A, लाइव्ह मंडी भाव, वाहतूक सेवा, AI निदान, उत्पादन अंदाज, पीक कॅलेंडर आणि व्यक्तिगत शिफारसी. 📍 तुम्हाला आवश्यक असलेल्या कोणत्याही वैशिष्ट्यावर जाण्यासाठी वरचा मेनू वापरा.",
        "अॅग्रीलिंक संपूर्ण शेती चक्र कव्हर करणारी व्यापक कृषी बुद्धिमत्ता ऑफर करते - पीक निवडीपासून बाजार विक्रीपर्यंत. संपूर्ण शेती समर्थनासाठी सर्व वैशिष्ट्ये एकत्र काम करतात. 📍 सर्व साधने ऍक्सेस करण्यासाठी वरील नेव्हिगेशन मेनू वापरून प्रत्येक विभाग एक्सप्लोर करा."
      ],
      default: "मला समजते की तुम्ही शेतीबद्दल विचारत आहात. अॅग्रीलिंक 8 व्यापक वैशिष्ट्ये ऑफर करते: पीक ग्रंथालय, समुदाय Q&A, लाइव्ह मंडी भाव, वाहतूक सेवा, AI निदान, उत्पादन अंदाज, पीक कॅलेंडर आणि व्यक्तिगत शिफारसी. 📍 तुम्हाला आवश्यक असलेले कोणतेही वैशिष्ट्य ऍक्सेस करण्यासाठी वरचा नेव्हिगेशन मेनू वापरा. कोणते वैशिष्ट्य तुम्हाला सर्वात जास्त आवडते?",
      typing: "अॅग्रीबॉट टाइप करत आहे...",
      placeholder: "शेती, पिके, रोगांबद्दल विचारा..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "लोड होत आहे...", noResults: "निकाल सापडले नाहीत", viewDetails: "तपशील पहा", back: "मागे", whatsappHelp: "मदत? WhatsApp", selectLanguage: "भाषा निवडा", all: "सर्व", weather: "हवामान", humidity: "आर्द्रता", wind: "वारा", condition: "स्थिती", weatherSource: "Open-Meteo कडून डेटा" },
  },
  bn: {
    nav: { home: "হোম", tools: "সরঞ্জাম", crops: "ফসল গ্রন্থাগার", community: "সম্প্রদায়", mandi: "মান্ডি দর", transport: "পরিবহন", diagnosis: "রোগ নির্ণয়", yieldPrediction: "ফলন পূর্বাভাস", cropCalendar: "ফসল ক্যালেন্ডার", recommendations: "সুপারিশ", cropHealth: "ফসল স্বাস্থ্য" },
    hero: { title: "অ্যাগ্রিলিংক — কৃষক ফসল বুদ্ধিমত্তা", subtitle: "আপনার সম্পূর্ণ কৃষি সঙ্গী", cta: "ফসল দেখুন", badge: "AI-চালিত কৃষি বুদ্ধিমত্তা", problemTitle: "ওয়েব ট্র্যাক: কৃষক ফসল বুদ্ধিমত্তা + সম্প্রদায় মঞ্চ", aiDiagnosis: "AI নির্ণয়" },
    stats: { cropsListed: "ফসল তালিকাভুক্ত", languages: "ভাষা", mandiMarkets: "মান্ডি বাজার", aiPowered: "AI চালিত", realtime: "রিয়েল-টাইম" },
    features: { cropsDesc: "মৌসুম, মাটি, সেচ, কীটপতঙ্গ, সার", communityDesc: "Q&A, স্থানীয় ভাষা, বিশেষজ্ঞ উত্তর", mandiDesc: "জেলা/বাজার দর + কাছাকাছি খুঁজুন", transportDesc: "পরিবহন সংযোগ, পিকআপ অনুরোধ", diagnosisDesc: "ছবি থেকে AI রোগ সনাক্তকরণ", recommendationsDesc: "মাটি, অবস্থান & মৌসুম ভিত্তিক ফসল পরামর্শ", yieldPredictionDesc: "AI দিয়ে ফসল ফলন পূর্বাভাস", cropCalendarDesc: "বীজ থেকে ফসল কাটা পর্যন্ত সম্পূর্ণ কৃষি নির্দেশিকা", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "ফসল গ্রন্থাগার: মৌসুম, মাটি, সেচ, কীটপতঙ্গ, সার তালিকা.",
      "সম্প্রদায়: Q&A, স্থানীয় ভাষা সমর্থন, বিশেষজ্ঞ উত্তর.",
      "জেলা/বাজার মান্ডি দর + দামের প্রবণতা.",
      "পরিবহন: লজিস্টিক্স প্রদানকারীদের সাথে সংযোগ বা পিকআপ অনুরোধ.",
      "AI রোগ সনাক্তকরণ: ছবি আপলোড, তাৎক্ষণিক নির্ণয় & চিকিৎসা.",
      "সুপারিশ: মাটি, অবস্থান & মৌসুম ভিত্তিক বিশেষজ্ঞ ফসল পরামর্শ.",
    ],
    crops: { title: "ফসল গ্রন্থাগার", search: "ফসল খুঁজুন...", allCategories: "সমস্ত বিভাগ", season: "মৌসুম", soil: "মাটির ধরন", irrigation: "সেচ", pests: "কীটপতঙ্গ", fertilizer: "সার তালিকা", bestPractices: "সর্বোত্তম পদ্ধতি", cropsFound: "ফসল পাওয়া গেছে", askOnWhatsApp: "WhatsApp এ জিজ্ঞাসা করুন" },
    community: { title: "সম্প্রদায় প্রশ্নোত্তর", askQuestion: "প্রশ্ন করুন", placeholder: "আপনার কৃষি প্রশ্ন?", post: "পোস্ট", answer: "উত্তর লিখুন...", answers: "উত্তর", share: "WhatsApp শেয়ার", upvote: "আপভোট", category: "বিভাগ", reply: "উত্তর দিন" },
    mandi: { title: "মান্ডি দর", search: "গ্রাম, জেলা খুঁজুন...", state: "রাজ্য", commodity: "পণ্য", minPrice: "সর্বনিম্ন দাম", maxPrice: "সর্বোচ্চ দাম", modalPrice: "গড় দাম", nearby: "কাছাকাছি", all: "সব", crop: "ফসল", crops: "ফসল", tapExpand: "আরও ফসল — বিস্তারিত দেখুন", showingNearby: "আপনার অবস্থানের নিকটতম বাজার", markets: "বাজার", rates: "দর" },
    transport: { title: "পরিবহন", cropType: "ফসলের ধরন", quantity: "পরিমাণ", pickup: "পিকআপ", destination: "গন্তব্য", submit: "WhatsApp পাঠান", whatsapp: "WhatsApp চ্যাট", call: "এখন কল করুন", requestPickup: "পিকআপ অনুরোধ", fillDetails: "বিবরণ পূরণ করুন এবং WhatsApp এ পাঠান", placeholderCrop: "যেমন, ধান, গম, তুলা", placeholderQty: "যেমন, 50", placeholderPickup: "গ্রাম/শহর নাম", placeholderDest: "বাজার/শহর নাম" },
    diagnosis: { title: "ফসল রোগ নির্ণয়", upload: "গাছের ছবি আপলোড", analyze: "AI বিশ্লেষণ", result: "ফলাফল", disease: "রোগ", treatment: "চিকিৎসা", prevention: "প্রতিরোধ", severity: "তীব্রতা", poweredBy: "AI দৃষ্টি বিশ্লেষণ", photoHint: "ছবি তুলুন বা গ্যালারি থেকে আপলোড করুন (সর্বোচ্চ 10MB)", remove: "সরান", affectedPart: "আক্রান্ত উদ্ভিদ অংশ", analyzing: "AI বিশ্লেষণ করছে...", affected: "আক্রান্ত", confidence: "বিশ্বাসযোগ্যতা", cause: "কারণ", symptoms: "উপসর্গ", organicTreatment: "জৈব চিকিৎসা", askExpert: "WhatsApp এ বিশেষজ্ঞকে জিজ্ঞাসা করুন", fileTooLarge: "ফাইল অনেক বড়", fileTooLargeDesc: "10MB এর কম ছবি আপলোড করুন", analysisFailed: "বিশ্লেষণ ব্যর্থ", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "ফসল ফলন পূর্বাভাস", subtitle: "পরিবেশগত ইনপুটের উপর ভিত্তি করে AI-চালিত ফলন অনুমান", cropEnvironmentalData: "ফসল এবং পরিবেশগত তথ্য", enterCropType: "আপনার ফসলের ধরন এবং বর্তমান ক্ষেতের অবস্থা প্রবেশ করান", cropType: "ফসলের ধরন", selectCropType: "ফসলের ধরন নির্বাচন করুন", temperature: "তাপমাত্রা (°C)", rainfall: "বৃষ্টিপাত (mm)", humidity: "আর্দ্রতা (%)", soilPH: "মাটির pH", predictYield: "ফলন পূর্বাভাস", analyzing: "বিশ্লেষণ করছে...", predictedYield: "পূর্বাভাসিত ফলন", unit: "টন/হেক্টর", confidence: "বিশ্বাসযোগ্যতা", smartSuggestions: "স্মার্ট পরামর্শ", yieldComparison: "ফসল অনুযায়ী ফলন তুলনা", currentYield: "বর্তমান ফলন", optimalYield: "সর্বোত্তম ফলন", lowRainfallWarning: "কম বৃষ্টিপাত সনাক্ত করা হয়েছে। মাটির আর্দ্রতা বজায় রাখতে ড্রিপ বা স্প্রিংকলার সেচ বিবেচনা করুন।", highTemperatureWarning: "উচ্চ তাপমাত্রা সতর্কতা। ছায়া জাল, মালচিং বা তাপ-সহনশীল ফসলের জাত ব্যবহার করুন।", acidicSoilInfo: "অম্লীয় মাটি সনাক্ত করা হয়েছে। ভাল পুষ্টি শোষণের জন্য pH বাড়াতে চুন (ক্যালসিয়াম কার্বনেট) প্রয়োগ করুন।", lowHumidityWarning: "কম আর্দ্রতা আর্দ্রতা চাপ সৃষ্টি করতে পারে। সেচের ফ্রিকোয়েন্সি বাড়ান এবং মালচ ব্যবহার করুন।", optimalConditions: "সর্বোত্তম বৃদ্ধির অবস্থা সনাক্ত করা হয়েছে! সর্বোত্তম ফলাফলের জন্য বর্তমান অনুশীলন বজায় রাখুন।" },
    recommendations: { title: "ফসল সুপারিশ", soilBased: "মাটি ভিত্তিক", locationBased: "অবস্থান ভিত্তিক", seasonBased: "মৌসুম ভিত্তিক", selectSoil: "মাটি নির্বাচন", selectRegion: "অঞ্চল নির্বাচন", currentSeason: "বর্তমান মৌসুম", expertTips: "বিশেষজ্ঞ পরামর্শ", source: "উৎস", climate: "জলবায়ু", states: "রাজ্যসমূহ" },
    cropCalendar: {
      title: "ফসল ক্যালেন্ডার",
      subtitle: "বীজ প্রস্তুতি থেকে ফসল কাটা এবং ফসল কাটার পরবর্তী কার্যক্রম পর্যন্ত ধাপে ধাপে নির্দেশনা সহ সম্পূর্ণ কৃষি রোডম্যাপ",
      defaultRoadmap: "ডিফল্ট রোডম্যাপ",
      liveTracking: "লাইভ ট্র্যাকিং",
      currentSeason: "বর্তমান মৌসুম",
      monsoonSeason: "বর্ষা মৌসুম (জুন-সেপ্টেম্বর) - বৃষ্টি নির্ভর ফসলের উপর মনোযোগ দিন",
      winterSeason: "শীত মৌসুম (অক্টোবর-মার্চ) - সেচ নির্ভর ফসলের উপর মনোযোগ দিন",
      summerSeason: "গ্রীষ্ম মৌসুম (এপ্রিল-মে) - উচ্চ পানি প্রাপ্যতা সহ সেচ নির্ভর ফসলের উপর মনোযোগ দিন",
      selectState: "রাজ্য/অঞ্চল নির্বাচন করুন",
      cropCategory: "ফসলের শ্রেণী",
      startLiveTracking: "লাইভ ফসল ট্র্যাকিং শুরু করুন",
      selectYourCrop: "আপনার ফসল নির্বাচন করুন",
      cultivationStartDate: "চাষাবাদ শুরুর তারিখ",
      chooseYourCrop: "আপনার ফসল বেছে নিন",
      howLiveTrackingWorks: "লাইভ ট্র্যাকিং কীভাবে কাজ করে:",
      trackEachStage: "প্রকৃত তারিখ সহ প্রতিটি কৃষি পর্যায় ট্র্যাক করুন",
      markStagesComplete: "শেষ হলে পর্যায়গুলি সম্পূর্ণ হিসাবে চিহ্নিত করুন",
      getSolutions: "কিছু ভুল হলে সমাধান পান",
      monitorProgress: "সামগ্রিক অগ্রগতির শতাংশ নিরীক্ষণ করুন",
      complete: "সম্পূর্ণ",
      started: "শুরু হয়েছে",
      completed: "সম্পন্ন",
      inProgress: "অগ্রগতিতে",
      pending: "অপেক্ষমাণ",
      markComplete: "সম্পূর্ণ হিসাবে চিহ্নিত করুন",
      needHelp: "সাহায্য প্রয়োজন?",
      resetTracking: "ট্র্যাকিং রিসেট করুন",
      liveFarmingProgress: "লাইভ কৃষি অগ্রগতি",
      trackingProgress: "ট্র্যাকিং অগ্রগতি",
      stages: "পর্যায়সমূহ",
      problemSolver: "সমস্যা সমাধানকারী",
      havingIssues: "এই পর্যায়ে সমস্যা হচ্ছে? এখানে সাধারণ সমস্যা এবং সমাধান রয়েছে:",
      pestProblems: "পোকামাকড়ের সমস্যা",
      pestSolution: "জৈব নিম তেল স্প্রে প্রয়োগ করুন বা পোকামাকড় চিহ্নিতকরণ এবং চিকিৎসার জন্য স্থানীয় কৃষি কর্মকর্তার সাথে যোগাযোগ করুন।",
      weatherIssues: "আবহাওয়া সমস্যা",
      weatherSolution: "বৃষ্টিপাতের ভিত্তিতে সেচের সময়সূচী সামঞ্জস্য করুন। জল জমে থাকলে নিষ্কাশন বা খরায় অতিরিক্ত পানি সরবরাহ করুন।",
      poorGrowth: "দুর্বল বৃদ্ধি",
      poorGrowthSolution: "মাটির পুষ্টি উপাদান পরীক্ষা করুন, সুষম সার প্রয়োগ করুন, সঠিক দূরত্ব এবং সূর্যালোক নিশ্চিত করুন।",
      problemSolved: "সমস্যা সমাধান হয়েছে - চালিয়ে যান",
      close: "বন্ধ করুন",
      completeRoadmap: "সম্পূর্ণ কৃষি রোডম্যাপ - বীজ থেকে ফসল কাটা পর্যন্ত",
      viewCompleteRoadmap: "সম্পূর্ণ রোডম্যাপ দেখুন",
      farmingTips: "কৃষি টিপস",
      temperature: "তাপমাত্রা",
      rainfall: "বৃষ্টিপাত",
      soilType: "মাটির ধরন",
      noCropsFound: "কোন ফসল পাওয়া যায়নি",
      adjustFilters: "আরও ফসল ক্যালেন্ডার তথ্য দেখতে আপনার ফিল্টার সামঞ্জস্য করার চেষ্টা করুন।",
      kharif: "খরিফ",
      rabi: "রবি",
      zaid: "জায়িদ",
      cereals: "শস্য",
      pulses: "ডাল",
      vegetables: "সবজি",
      fruits: "ফল",
      cashCrops: "অর্থকরী ফসল",
      oilseeds: "তেল বীজ",
      spices: "মসলা"
    },
    chatbot: {
      greeting: [
        "নমস্কার! আমি অ্যাগ্রিবট, আপনার AI কৃষি সহায়ক। আমি সমস্ত অ্যাগ্রিলিংক বৈশিষ্ট্যে সাহায্য করতে পারি: ফসল গ্রন্থাগার (102+ ফসল), সম্প্রদায় Q&A, লাইভ মান্ডি দর (500+ বাজার), পরিবহন সেবা, AI নির্ণয়, ফলন পূর্বাভাস, ফসল ক্যালেন্ডার, এবং সুপারিশ। 📍 যেকোনো বৈশিষ্ট্যে যেতে উপরের মেনু ব্যবহার করুন। আপনি কী জানতে চান?",
        "নমস্কার! অ্যাগ্রিলিংকে আপনাকে স্বাগতম - আপনার সম্পূর্ণ কৃষি সঙ্গী। আমি আমাদের ব্যাপক বৈশিষ্ট্যগুলির মাধ্যমে আপনাকে গাইড করতে পারি এবং যেকোনো কৃষি প্রশ্নের উত্তর দিতে পারি। 📍 সেই বৈশিষ্ট্যে সরাসরি যেতে উপরের মেনুতে যেকোনো বিভাগে ক্লিক করুন। আজ আমি কীভাবে আপনাকে সাহায্য করতে পারি?"
      ],
      crops: [
        "আমাদের ফসল গ্রন্থাগারে 102+ ফসলের বিস্তারিত তথ্য রয়েছে যার মধ্যে রয়েছে মৌসুমী, মাটির প্রয়োজনীয়তা, সেচের চাহিদা, কীটপতঙ্গ ব্যবস্থাপনা, সার কর্মসূচি এবং সর্বোত্তম অনুশীলন। 📍 উপরের মেনুতে 'ফসল গ্রন্থাগার'-এ যান → নির্দিষ্ট ফসল খুঁজতে অনুসন্ধান বার ব্যবহার করুন → বিভাগ অনুযায়ী ফিল্টার করুন (শস্য, ডাল, সবজি, ফল, তেল বীজ, মসলা, বাণিজ্যিক ফসল, বাগান ফসল) → সম্পূর্ণ চাষের বিবরণের জন্য যেকোনো ফসল কার্ডে ক্লিক করুন → বিশেষজ্ঞ পরামর্শের জন্য WhatsApp বোতামে ক্লিক করে কৃষি বিশেষজ্ঞদের সাথে সংযুক্ত হন।"
      ],
      community: [
        "আমাদের সম্প্রদায় বিভাগ একটি Q&A প্ল্যাটফর্ম যেখানে কৃষকরা জ্ঞান ভাগাভাগি করেন এবং বিশেষজ্ঞ উত্তর পান। 30+ ভাষায় উপলব্ধ। 📍 মেনুতে 'সম্প্রদায়'-এ যান → বিভাগ অনুযায়ী বিদ্যমান প্রশ্ন ব্রাউজ করুন → আপনার কৃষি সমস্যা পোস্ট করতে 'প্রশ্ন করুন'-এ ক্লিক করুন → সহায়ক উত্তরে ভোট দিন → সরাসরি বিশেষজ্ঞ পরামর্শের জন্য WhatsApp বোতাম ব্যবহার করুন।"
      ],
      mandi: [
        "মান্ডি দর ভারতের 500+ বাজার থেকে লাইভ বাজার দাম প্রদান করে। সমস্ত প্রধান পণ্যের বর্তমান দর পরীক্ষা করুন, দামের প্রবণতা দেখুন, বাজার তুলনা করুন এবং আপনার কাছে সেরা বিক্রয় সুযোগ খুঁজুন। 📍 উপরের মেনুতে 'মান্ডি দর'-এ যান → ড্রপডাউন থেকে আপনার রাজ্য নির্বাচন করুন → পণ্যের ধরন বেছে নিন → আজকের দাম, গতকালের হার এবং সাপ্তাহিক প্রবণতা দেখুন → বিস্তারিত দাম বিশ্লেষণের জন্য যেকোনো বাজারে ক্লিক করুন → স্থানীয় ব্যবসায়ীদের সাথে সংযোগ করতে এবং বিক্রয় সহায়তা পেতে WhatsApp বোতাম ব্যবহার করুন।"
      ],
      transport: [
        "পরিবহন ও লজিস্টিকস আপনাকে আপনার পণ্য খামার থেকে বাজারে নিয়ে যেতে লজিস্টিকস প্রদানকারীদের সাথে সংযুক্ত করতে সাহায্য করে। পিকআপের বিবরণ পূরণ করুন এবং WhatsApp এর মাধ্যমে পরিবহনকারীদের সাথে সংযুক্ত হন। 📍 মেনুতে 'পরিবহন'-এ যান → ফসলের ধরন, পরিমাণ, পিকআপ অবস্থান এবং গন্তব্য সহ অনুরোধ ফর্ম পূরণ করুন → 'অনুরোধ জমা দিন'-এ ক্লিক করুন → WhatsApp এর মাধ্যমে যাচাইকৃত পরিবহনকারীদের সাথে সংযুক্ত হন → উদ্ধৃতি তুলনা করুন এবং আপনার প্রয়োজনের জন্য সেরা সেবা বুক করুন।"
      ],
      diagnosis: [
        "AI নির্ণয় 3টি শক্তিশালী মোড অফার করে: 1) উদ্ভিদ রোগ সনাক্তকরণ - উদ্ভিদের ছবি থেকে রোগ, কীটপতঙ্গ এবং ঘাটতি চিহ্নিত করুন, 2) মাটি বিশ্লেষণ - মাটির ছবি থেকে মাটির ধরন, উর্বরতা, pH এবং আর্দ্রতা বিশ্লেষণ করুন, 3) সার সনাক্তকরণ - সারের ছবি থেকে সারের ধরন, গঠন এবং গুণমান চিহ্নিত করুন। 📍 মেনুতে 'নির্ণয়'-এ যান → বিশ্লেষণ মোড বেছে নিন (উদ্ভিদ/মাটি/সার) → স্পষ্ট ছবি আপলোড করুন (সর্বোচ্চ 10MB) → 'AI দিয়ে বিশ্লেষণ করুন'-এ ক্লিক করুন → আত্মবিশ্বাসের স্কোর এবং চিকিৎসার সুপারিশ সহ তাৎক্ষণিক ফলাফল পান → ব্যক্তিগত পরামর্শ এবং বিস্তারিত চিকিৎসা পরিকল্পনার জন্য 'WhatsApp এ বিশেষজ্ঞকে জিজ্ঞাসা করুন'-এ ক্লিক করুন।"
      ],
      yieldPrediction: [
        "ফলন পূর্বাভাস তাপমাত্রা (°C), বৃষ্টিপাত (mm), আর্দ্রতা (%), এবং মাটির pH এর মতো পরিবেশগত কারণের ভিত্তিতে ফসলের ফলন অনুমান করতে AI ব্যবহার করে। আপনার অবস্থা ইনপুট করুন এবং অপ্টিমাইজেশন পরামর্শ সহ ফলন পূর্বাভাস পান। 📍 মেনুতে 'ফলন পূর্বাভাস'-এ যান → ড্রপডাউন থেকে আপনার ফসল নির্বাচন করুন → বর্তমান তাপমাত্রা, প্রত্যাশিত বৃষ্টিপাত, আর্দ্রতার মাত্রা এবং মাটির pH প্রবেশ করান → 'ফলন পূর্বাভাস'-এ ক্লিক করুন → টন/হেক্টরে AI-চালিত ফলন পূর্বাভাস পান → উৎপাদন উন্নতির জন্য স্মার্ট পরামর্শ পর্যালোচনা করুন → কৃষি বিশেষজ্ঞদের সাথে ফলাফল নিয়ে আলোচনা করতে WhatsApp বোতাম ব্যবহার করুন।"
      ],
      cropCalendar: [
        "ফসল ক্যালেন্ডার ভারত জুড়ে প্রধান ফসলের জন্য বীজ থেকে ফসল কাটা পর্যন্ত সম্পূর্ণ কৃষি রোডম্যাপ প্রদান করে। দুটি মোড থেকে বেছে নিন: 📖 পূর্বনির্ধারিত ধাপে ধাপে নির্দেশনার জন্য ডিফল্ট রোডম্যাপ, অথবা 🔄 আপনার প্রকৃত কৃষি অগ্রগতি রিয়েল-টাইমে নিরীক্ষণ করতে লাইভ ট্র্যাকিং। নির্ভুল সময় এবং বিশেষজ্ঞ টিপস সহ প্রাক-বপন প্রস্তুতি, বপন, উদ্ভিজ্জ বৃদ্ধি, ফুল ফোটা, ফসল কাটা এবং ফসল কাটার পরবর্তী কার্যক্রম সহ বিস্তারিত পর্যায়ভিত্তিক কার্যক্রম পান। 📍 মেনুতে 'ফসল ক্যালেন্ডার'-এ যান → 'ডিফল্ট রোডম্যাপ' বা 'লাইভ ট্র্যাকিং' মোড বেছে নিন → আপনার রাজ্য/অঞ্চল অনুযায়ী ফিল্টার করুন → ফসলের বিভাগ নির্বাচন করুন → লাইভ ট্র্যাকিংয়ের জন্য: আপনার ফসলে 'ট্র্যাকিং শুরু করুন'-এ ক্লিক করুন → শেষ হলে পর্যায়গুলি সম্পূর্ণ হিসাবে চিহ্নিত করুন → সমাপ্তির শতাংশ সহ অগ্রগতি নিরীক্ষণ করুন → কৃষি বিশেষজ্ঞদের কাছ থেকে ব্যক্তিগত কৃষি নির্দেশনা এবং পর্যায়-নির্দিষ্ট পরামর্শের জন্য WhatsApp বোতাম ব্যবহার করুন।"
      ],
      recommendations: [
        "সুপারিশ আপনার মাটির ধরন, অবস্থান, বর্তমান মৌসুম এবং স্থানীয় জলবায়ু অবস্থার ভিত্তিতে ব্যক্তিগতকৃত ফসলের পরামর্শ প্রদান করে। আপনার নির্দিষ্ট কৃষি পরিস্থিতির জন্য তৈরি বিশেষজ্ঞ পরামর্শ পান। 📍 মেনুতে 'সুপারিশ'-এ যান → আপনার মাটির ধরন নির্বাচন করুন (কাদামাটি, দোআঁশ, বালুকাময়, ইত্যাদি) → আপনার অঞ্চল/রাজ্য বেছে নিন → বর্তমান মৌসুমের সুপারিশ দেখুন → লাভজনকতা বিশ্লেষণ সহ ফসলের পরামর্শ পান → আপনার এলাকার জন্য বিশেষজ্ঞ টিপস পর্যালোচনা করুন → কৃষি পরামর্শদাতাদের সাথে ব্যক্তিগত কৃষি পরিকল্পনা নিয়ে আলোচনা করতে WhatsApp বোতামে ক্লিক করুন।"
      ],
      agrilink: [
        "অ্যাগ্রিলিংক 8টি প্রধান বৈশিষ্ট্য সহ আপনার সম্পূর্ণ কৃষি সঙ্গী: ফসল গ্রন্থাগার, সম্প্রদায় Q&A, লাইভ মান্ডি দর, পরিবহন সেবা, AI নির্ণয়, ফলন পূর্বাভাস, ফসল ক্যালেন্ডার এবং ব্যক্তিগত সুপারিশ। 📍 আপনার প্রয়োজনীয় যেকোনো বৈশিষ্ট্যে যেতে উপরের মেনু ব্যবহার করুন।",
        "অ্যাগ্রিলিংক সম্পূর্ণ কৃষি চক্র কভার করে ব্যাপক কৃষি বুদ্ধিমত্তা অফার করে - ফসল নির্বাচন থেকে বাজার বিক্রয় পর্যন্ত। সম্পূর্ণ কৃষি সহায়তার জন্য সমস্ত বৈশিষ্ট্য একসাথে কাজ করে। 📍 সমস্ত সরঞ্জাম অ্যাক্সেস করতে উপরের নেভিগেশন মেনু ব্যবহার করে প্রতিটি বিভাগ অন্বেষণ করুন।"
      ],
      default: "আমি বুঝতে পারছি আপনি কৃষি সম্পর্কে জিজ্ঞাসা করছেন। অ্যাগ্রিলিংক 8টি ব্যাপক বৈশিষ্ট্য অফার করে: ফসল গ্রন্থাগার, সম্প্রদায় Q&A, লাইভ মান্ডি দর, পরিবহন সেবা, AI নির্ণয়, ফলন পূর্বাভাস, ফসল ক্যালেন্ডার এবং ব্যক্তিগত সুপারিশ। 📍 আপনার প্রয়োজনীয় যেকোনো বৈশিষ্ট্য অ্যাক্সেস করতে উপরের নেভিগেশন মেনু ব্যবহার করুন। কোন বৈশিষ্ট্য আপনার সবচেয়ে বেশি আগ্রহের?",
      typing: "অ্যাগ্রিবট টাইপ করছে...",
      placeholder: "কৃষি, ফসল, রোগ সম্পর্কে জিজ্ঞাসা করুন..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "লোড হচ্ছে...", noResults: "ফলাফল নেই", viewDetails: "বিস্তারিত", back: "পিছনে", whatsappHelp: "সাহায্য? WhatsApp", selectLanguage: "ভাষা নির্বাচন", all: "সব", weather: "আবহাওয়া", humidity: "আর্দ্রতা", wind: "বাতাস", condition: "অবস্থা", weatherSource: "Open-Meteo থেকে ডেটা" },
  },
  gu: {
    nav: { home: "હોમ", tools: "સાધનો", crops: "પાક પુસ્તકાલય", community: "સમુદાય", mandi: "મંડી ભાવ", transport: "પરિવહન", diagnosis: "રોગ નિદાન", yieldPrediction: "ઉત્પાદન આગાહી", cropCalendar: "પાક કેલેન્ડર", recommendations: "ભલામણો", cropHealth: "પાક આરોગ્ય" },
    hero: { title: "એગ્રીલિંક — ખેડૂત પાક બુદ્ધિમત્તા", subtitle: "તમારો સંપૂર્ણ ખેતી સાથી", cta: "પાક જુઓ", badge: "AI-સંચાલિત ખેતી બુદ્ધિમત્તા", problemTitle: "વેબ ટ્રેક: ખેડૂત પાક બુદ્ધિમત્તા + સમુદાય પ્લેટફોર્મ", aiDiagnosis: "AI નિદાન" },
    stats: { cropsListed: "પાક સૂચિ", languages: "ભાષાઓ", mandiMarkets: "મંડી બજાર", aiPowered: "AI સંચાલિત", realtime: "રીઅલ-ટાઈમ" },
    features: { cropsDesc: "ઋતુ, માટી, સિંચાઈ, જીવાત, ખાતર", communityDesc: "Q&A, સ્થાનિક ભાષા, નિષ્ણાત જવાબ", mandiDesc: "જિલ્લા/બજાર ભાવ + નજીકમાં શોધો", transportDesc: "પરિવહન જોડાણ, પિકઅપ વિનંતી", diagnosisDesc: "ફોટોમાંથી AI રોગ ઓળખ", recommendationsDesc: "માટી, સ્થાન & ઋતુ આધારિત પાક સલાહ", yieldPredictionDesc: "AI સાથે પાક ઉપજ અનુમાન", cropCalendarDesc: "બીજથી લણણી સુધી સંપૂર્ણ ખેતી માર્ગદર્શિકા", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "પાક પુસ્તકાલય: ઋતુ, માટી, સિંચાઈ, જીવાત, ખાતર શેડ્યુલ.",
      "સમુદાય: Q&A, સ્થાનિક ભાષા સહાય, નિષ્ણાત જવાબો.",
      "જિલ્લા/બજાર મંડી ભાવ + ભાવ ટ્રેન્ડ.",
      "પરિવહન: લોજિસ્ટિક્સ પ્રોવાઈડર સાથે જોડાઓ અથવા પિકઅપ વિનંતી.",
      "AI રોગ ઓળખ: ફોટો અપલોડ, તાત્કાલિક નિદાન & સારવાર.",
      "ભલામણો: માટી, સ્થાન & ઋતુ આધારિત નિષ્ણાત પાક સલાહ.",
    ],
    crops: { title: "પાક પુસ્તકાલય", search: "પાક શોધો...", allCategories: "બધી શ્રેણીઓ", season: "ઋતુ", soil: "માટીનો પ્રકાર", irrigation: "સિંચાઈ", pests: "જીવાતો", fertilizer: "ખાતર", bestPractices: "શ્રેષ્ઠ પદ્ધતિઓ", cropsFound: "પાક મળ્યા", askOnWhatsApp: "WhatsApp પર પૂછો" },
    community: { title: "સમુદાય Q&A", askQuestion: "પ્રશ્ન પૂછો", placeholder: "તમારો ખેતી પ્રશ્ન?", post: "પોસ્ટ", answer: "જવાબ લખો...", answers: "જવાબો", share: "WhatsApp શેર", upvote: "અપવોટ", category: "શ્રેણી", reply: "જવાબ" },
    mandi: { title: "મંડી ભાવ", search: "ગામ, જિલ્લો શોધો...", state: "રાજ્ય", commodity: "માલ", minPrice: "ન્યૂનતમ ભાવ", maxPrice: "મહત્તમ ભાવ", modalPrice: "સરેરાશ ભાવ", nearby: "નજીકના", all: "બધા", crop: "પાક", crops: "પાક", tapExpand: "વધુ પાક — વિસ્તૃત કરો", showingNearby: "તમારા સ્થાન આધારિત નજીકના બજાર", markets: "બજાર", rates: "ભાવ" },
    transport: { title: "પરિવહન", cropType: "પાક પ્રકાર", quantity: "જથ્થો", pickup: "પિકઅપ", destination: "ગંતવ્ય", submit: "WhatsApp મોકલો", whatsapp: "WhatsApp ચેટ", call: "હવે કૉલ કરો", requestPickup: "પિકઅપ વિનંતી", fillDetails: "વિગતો ભરો અને WhatsApp દ્વારા મોકલો", placeholderCrop: "ઉદા., ચોખા, ઘઉં, કપાસ", placeholderQty: "ઉદા., 50", placeholderPickup: "ગામ/શહેર નામ", placeholderDest: "બજાર/શહેર નામ" },
    diagnosis: { title: "પાક રોગ નિદાન", upload: "છોડનો ફોટો અપલોડ", analyze: "AI વિશ્લેષણ", result: "પરિણામ", disease: "રોગ", treatment: "સારવાર", prevention: "નિવારણ", severity: "ગંભીરતા", poweredBy: "AI દૃષ્ટિ વિશ્લેષણ", photoHint: "ફોટો લો અથવા ગેલેરીમાંથી અપલોડ કરો (મહત્તમ 10MB)", remove: "દૂર કરો", affectedPart: "અસરગ્રસ્ત છોડનો ભાગ", analyzing: "AI વિશ્લેષણ કરી રહ્યું છે...", affected: "અસરગ્રસ્ત", confidence: "વિશ્વસનીયતા", cause: "કારણ", symptoms: "લક્ષણો", organicTreatment: "જૈવિક સારવાર", askExpert: "WhatsApp પર નિષ્ણાતને પૂછો", fileTooLarge: "ફાઈલ ખૂબ મોટી", fileTooLargeDesc: "10MB કરતાં ઓછી છબી અપલોડ કરો", analysisFailed: "વિશ્લેષણ નિષ્ફળ", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "પાક ઉત્પાદન આગાહી", subtitle: "પર્યાવરણીય ઇનપુટ્સ પર આધારિત AI-સંચાલિત ઉત્પાદન અંદાજ", cropEnvironmentalData: "પાક અને પર્યાવરણીય ડેટા", enterCropType: "તમારો પાક પ્રકાર અને વર્તમાન ખેતરની સ્થિતિ દાખલ કરો", cropType: "પાક પ્રકાર", selectCropType: "પાક પ્રકાર પસંદ કરો", temperature: "તાપમાન (°C)", rainfall: "વરસાદ (mm)", humidity: "ભેજ (%)", soilPH: "માટી pH", predictYield: "ઉત્પાદન આગાહી", analyzing: "વિશ્લેષણ કરી રહ્યું છે...", predictedYield: "અનુમાનિત ઉત્પાદન", unit: "ટન/હેક્ટર", confidence: "વિશ્વસનીયતા", smartSuggestions: "સ્માર્ટ સૂચનો", yieldComparison: "પાક પ્રમાણે ઉત્પાદન તુલના", currentYield: "વર્તમાન ઉત્પાદન", optimalYield: "શ્રેષ્ઠ ઉત્પાદન", lowRainfallWarning: "ઓછો વરસાદ શોધાયો. માટીની ભેજ જાળવવા માટે ડ્રિપ અથવા સ્પ્રિંકલર સિંચાઈ ધ્યાનમાં લો.", highTemperatureWarning: "ઊંચા તાપમાનની ચેતવણી. છાયા જાળી, મલ્ચિંગ અથવા ગરમી-સહનશીલ પાક જાતો વાપરો.", acidicSoilInfo: "એસિડિક માટી શોધાયી. સારા પોષક શોષણ માટે pH વધારવા ચૂનો (કેલ્શિયમ કાર્બોનેટ) લાગુ કરો.", lowHumidityWarning: "ઓછી ભેજ ભેજ તણાવ પેદા કરી શકે છે. સિંચાઈની આવર્તન વધારો અને મલ્ચ વાપરો.", optimalConditions: "શ્રેષ્ઠ વૃદ્ધિની સ્થિતિ શોધાઈ! શ્રેષ્ઠ પરિણામો માટે વર્તમાન પદ્ધતિઓ જાળવો." },
    recommendations: { title: "પાક ભલામણો", soilBased: "માટી આધારિત", locationBased: "સ્થાન આધારિત", seasonBased: "ઋતુ આધારિત", selectSoil: "માટી પસંદ કરો", selectRegion: "પ્રદેશ પસંદ કરો", currentSeason: "વર્તમાન ઋતુ", expertTips: "નિષ્ણાત ટિપ્સ", source: "સ્ત્રોત", climate: "આબોહવા", states: "રાજ્યો" },
    cropCalendar: {
      title: "પાક કેલેન્ડર",
      subtitle: "બીજ તૈયારીથી લણણી અને લણણી પછીની પ્રવૃત્તિઓ સુધી પગલાં દ્વારા માર્ગદર્શન સાથે સંપૂર્ણ ખેતી રોડમેપ",
      defaultRoadmap: "ડિફોલ્ટ રોડમેપ",
      liveTracking: "લાઇવ ટ્રેકિંગ",
      currentSeason: "વર્તમાન ઋતુ",
      monsoonSeason: "ચોમાસાની ઋતુ (જૂન-સપ્ટેમ્બર) - વરસાદ આધારિત પાકો પર ધ્યાન આપો",
      winterSeason: "શિયાળાની ઋતુ (ઓક્ટોબર-માર્ચ) - સિંચાઈ આધારિત પાકો પર ધ્યાન આપો",
      summerSeason: "ઉનાળાની ઋતુ (એપ્રિલ-મે) - વધુ પાણીની ઉપલબ્ધતા સાથે સિંચાઈ આધારિત પાકો પર ધ્યાન આપો",
      selectState: "રાજ્ય/પ્રદેશ પસંદ કરો",
      cropCategory: "પાક શ્રેણી",
      startLiveTracking: "લાઇવ પાક ટ્રેકિંગ શરૂ કરો",
      selectYourCrop: "તમારો પાક પસંદ કરો",
      cultivationStartDate: "ખેતી શરૂઆતની તારીખ",
      chooseYourCrop: "તમારો પાક પસંદ કરો",
      howLiveTrackingWorks: "લાઇવ ટ્રેકિંગ કેવી રીતે કામ કરે છે:",
      trackEachStage: "વાસ્તવિક તારીખો સાથે દરેક ખેતી તબક્કાને ટ્રેક કરો",
      markStagesComplete: "પૂર્ણ થયા પછી તબક્કાઓને પૂર્ણ તરીકે ચિહ્નિત કરો",
      getSolutions: "કંઈ ખોટું થાય તો ઉકેલો મેળવો",
      monitorProgress: "એકંદર પ્રગતિ ટકાવારીનું નિરીક્ષણ કરો",
      complete: "પૂર્ણ",
      started: "શરૂ કર્યું",
      completed: "પૂર્ણ થયું",
      inProgress: "પ્રગતિમાં",
      pending: "બાકી",
      markComplete: "પૂર્ણ તરીકે ચિહ્નિત કરો",
      needHelp: "મદદ જોઈએ છે?",
      resetTracking: "ટ્રેકિંગ રીસેટ કરો",
      liveFarmingProgress: "લાઇવ ખેતી પ્રગતિ",
      trackingProgress: "ટ્રેકિંગ પ્રગતિ",
      stages: "તબક્કાઓ",
      problemSolver: "સમસ્યા નિવારક",
      havingIssues: "આ તબક્કામાં સમસ્યાઓ છે? અહીં સામાન્ય સમસ્યાઓ અને ઉકેલો છે:",
      pestProblems: "જીવાત સમસ્યાઓ",
      pestSolution: "કાર્બનિક લીમડાનું તેલ છાંટો અથવા જીવાત ઓળખ અને સારવાર માટે સ્થાનિક કૃષિ અધિકારીનો સંપર્ક કરો.",
      weatherIssues: "હવામાન સમસ્યાઓ",
      weatherSolution: "વરસાદના આધારે સિંચાઈ સમયપત્રક ગોઠવો. પાણી ભરાઈ જાય તો ડ્રેનેજ અથવા દુષ્કાળમાં વધારાનું પાણી પૂરું પાડો.",
      poorGrowth: "નબળી વૃદ્ધિ",
      poorGrowthSolution: "માટીના પોષક તત્વો તપાસો, સંતુલિત ખાતર લગાવો, યોગ્ય અંતર અને સૂર્યપ્રકાશ સુનિશ્ચિત કરો.",
      problemSolved: "સમસ્યા હલ થઈ - આગળ વધો",
      close: "બંધ કરો",
      completeRoadmap: "સંપૂર્ણ ખેતી રોડમેપ - બીજથી લણણી સુધી",
      viewCompleteRoadmap: "સંપૂર્ણ રોડમેપ જુઓ",
      farmingTips: "ખેતી ટિપ્સ",
      temperature: "તાપમાન",
      rainfall: "વરસાદ",
      soilType: "માટીનો પ્રકાર",
      noCropsFound: "કોઈ પાક મળ્યો નથી",
      adjustFilters: "વધુ પાક કેલેન્ડર માહિતી જોવા માટે તમારા ફિલ્ટર ગોઠવવાનો પ્રયાસ કરો.",
      kharif: "ખરીફ",
      rabi: "રબી",
      zaid: "ઝાયદ",
      cereals: "અનાજ",
      pulses: "દાળ",
      vegetables: "શાકભાજી",
      fruits: "ફળો",
      cashCrops: "રોકડિયા પાકો",
      oilseeds: "તેલીબિયાં",
      spices: "મસાલા"
    },
    chatbot: {
      greeting: [
        "નમસ્તે! હું એગ્રીબોટ છું, તમારો AI કૃષિ સહાયક. હું બધી એગ્રીલિંક સુવિધાઓમાં મદદ કરી શકું છું: પાક પુસ્તકાલય (102+ પાકો), સમુદાય Q&A, લાઇવ મંડી ભાવ (500+ બજારો), પરિવહન સેવાઓ, AI નિદાન, ઉત્પાદન આગાહી, પાક કેલેન્ડર, અને ભલામણો. 📍 કોઈપણ સુવિધા પર જવા માટે ઉપરનો મેનૂ વાપરો. તમે શું જાણવા માંગો છો?",
        "નમસ્કાર! એગ્રીલિંકમાં તમારું સ્વાગત છે - તમારો સંપૂર્ણ કૃષિ સાથી. હું અમારી વ્યાપક સુવિધાઓ દ્વારા તમારું માર્ગદર્શન કરી શકું છું અને કોઈપણ કૃષિ પ્રશ્નનો જવાબ આપી શકું છું. 📍 તે સુવિધા પર સીધા જવા માટે ઉપરના મેનૂમાં કોઈપણ વિભાગ પર ક્લિક કરો. આજે હું તમારી કેવી રીતે મદદ કરી શકું?"
      ],
      crops: [
        "અમારી પાક પુસ્તકાલયમાં 102+ પાકોની વિગતવાર માહિતી છે જેમાં મોસમી, માટીની જરૂરિયાતો, સિંચાઈની જરૂર, જીવાત વ્યવસ્થાપન, ખાતર કાર્યક્રમ અને શ્રેષ્ઠ પ્રથાઓ સામેલ છે. 📍 ઉપરના મેનૂમાં 'પાક પુસ્તકાલય' પર જાઓ → વિશિષ્ટ પાકો શોધવા માટે સર્ચ બાર વાપરો → શ્રેણીઓ દ્વારા ફિલ્ટર કરો (અનાજ, દાળ, શાકભાજી, ફળો, તેલીબિયાં, મસાલા, વ્યાવસાયિક પાકો, વાવેતર પાકો) → સંપૂર્ણ વૃદ્ધિની વિગતો માટે કોઈપણ પાક કાર્ડ પર ક્લિક કરો → નિષ્ણાત સલાહ માટે WhatsApp બટન પર ક્લિક કરીને કૃષિ નિષ્ણાતો સાથે જોડાઓ."
      ],
      community: [
        "અમારો સમુદાય વિભાગ એક Q&A પ્લેટફોર્મ છે જ્યાં ખેડૂતો જ્ઞાન શેર કરે છે અને નિષ્ણાત જવાબો મેળવે છે. 30+ ભાષાઓમાં ઉપલબ્ધ. 📍 મેનૂમાં 'સમુદાય' પર જાઓ → શ્રેણી દ્વારા વર્તમાન પ્રશ્નો બ્રાઉઝ કરો → તમારી ખેતી સમસ્યા પોસ્ટ કરવા માટે 'પ્રશ્ન પૂછો' પર ક્લિક કરો → ઉપયોગી જવાબો પર વોટ કરો → સીધી નિષ્ણાત સલાહ માટે WhatsApp બટન વાપરો."
      ],
      mandi: [
        "મંડી ભાવ ભારતના 500+ બજારોમાંથી લાઇવ બજાર ભાવ પ્રદાન કરે છે. બધી મુખ્ય વસ્તુઓના વર્તમાન દરો તપાસો, ભાવ ટ્રેન્ડ જુઓ, બજારોની તુલના કરો અને તમારી નજીક શ્રેષ્ઠ વેચાણ તકો શોધો. 📍 ઉપરના મેનૂમાં 'મંડી ભાવ' પર જાઓ → ડ્રોપડાઉનમાંથી તમારું રાજ્ય પસંદ કરો → વસ્તુનો પ્રકાર પસંદ કરો → આજના ભાવ, ગઈકાલના દરો અને સાપ્તાહિક ટ્રેન્ડ જુઓ → વિગતવાર ભાવ વિશ્લેષણ માટે કોઈપણ બજાર પર ક્લિક કરો → સ્થાનિક વેપારીઓ સાથે જોડાવા અને વેચાણ સહાય મેળવવા માટે WhatsApp બટન વાપરો."
      ],
      transport: [
        "પરિવહન અને લોજિસ્ટિક્સ તમને તમારા ઉત્પાદનને ખેતરમાંથી બજારમાં લઈ જવા માટે લોજિસ્ટિક્સ પ્રદાતાઓ સાથે જોડવામાં મદદ કરે છે. પિકઅપ વિગતો ભરો અને WhatsApp દ્વારા પરિવહનકર્તાઓ સાથે જોડાઓ. 📍 મેનૂમાં 'પરિવહન' પર જાઓ → પાક પ્રકાર, જથ્થો, પિકઅપ સ્થાન અને ગંતવ્ય સાથે વિનંતી ફોર્મ ભરો → 'વિનંતી સબમિટ કરો' પર ક્લિક કરો → WhatsApp દ્વારા ચકાસાયેલ પરિવહનકર્તાઓ સાથે જોડાઓ → કોટ્સની તુલના કરો અને તમારી જરૂરિયાતો માટે શ્રેષ્ઠ સેવા બુક કરો."
      ],
      diagnosis: [
        "AI નિદાન 3 શક્તિશાળી મોડ ઓફર કરે છે: 1) છોડના રોગ શોધ - છોડના ફોટોમાંથી રોગ, જીવાત અને ઉણપ ઓળખો, 2) માટી વિશ્લેષણ - માટીના ફોટોમાંથી માટીનો પ્રકાર, ફળદ્રુપતા, pH અને ભેજ વિશ્લેષણ કરો, 3) ખાતર શોધ - ખાતરના ફોટોમાંથી ખાતરનો પ્રકાર, રચના અને ગુણવત્તા ઓળખો. 📍 મેનૂમાં 'નિદાન' પર જાઓ → વિશ્લેષણ મોડ પસંદ કરો (છોડ/માટી/ખાતર) → સ્પષ્ટ ફોટો અપલોડ કરો (મહત્તમ 10MB) → 'AI સાથે વિશ્લેષણ કરો' પર ક્લિક કરો → વિશ્વાસ સ્કોર અને સારવાર ભલામણો સાથે તાત્કાલિક પરિણામો મેળવો → વ્યક્તિગત સલાહ અને વિગતવાર સારવાર યોજનાઓ માટે 'WhatsApp પર નિષ્ણાતને પૂછો' પર ક્લિક કરો."
      ],
      yieldPrediction: [
        "ઉત્પાદન આગાહી તાપમાન (°C), વરસાદ (mm), ભેજ (%), અને માટી pH જેવા પર્યાવરણીય પરિબળોના આધારે પાક ઉત્પાદનનો અંદાજ લગાવવા માટે AI વાપરે છે. તમારી પરિસ્થિતિઓ ઇનપુટ કરો અને ઓપ્ટિમાઇઝેશન સૂચનો સાથે ઉત્પાદન આગાહી મેળવો. 📍 મેનૂમાં 'ઉત્પાદન આગાહી' પર જાઓ → ડ્રોપડાઉનમાંથી તમારો પાક પસંદ કરો → વર્તમાન તાપમાન, અપેક્ષિત વરસાદ, ભેજનું સ્તર અને માટી pH દાખલ કરો → 'ઉત્પાદન આગાહી' પર ક્લિક કરો → ટન/હેક્ટરમાં AI-સંચાલિત ઉત્પાદન આગાહી મેળવો → ઉત્પાદન સુધારવા માટે સ્માર્ટ સૂચનોની સમીક્ષા કરો → કૃષિ નિષ્ણાતો સાથે પરિણામોની ચર્ચા કરવા માટે WhatsApp બટન વાપરો."
      ],
      cropCalendar: [
        "પાક કેલેન્ડર ભારતભરના મુખ્ય પાકો માટે બીજથી લણણી સુધી સંપૂર્ણ કૃષિ રોડમેપ પ્રદાન કરે છે. બે મોડમાંથી પસંદ કરો: 📖 પૂર્વનિર્ધારિત પગલાં દ્વારા માર્ગદર્શન માટે ડિફોલ્ટ રોડમેપ, અથવા 🔄 તમારી વાસ્તવિક કૃષિ પ્રગતિને રીઅલ-ટાઇમમાં મોનિટર કરવા માટે લાઇવ ટ્રેકિંગ. ચોક્કસ સમય અને નિષ્ણાત ટિપ્સ સાથે પૂર્વ-વાવણી તૈયારી, વાવણી, વનસ્પતિ વૃદ્ધિ, ફૂલ આવવું, લણણી અને લણણી પછીની પ્રવૃત્તિઓ સહિત વિગતવાર તબક્કાવાર પ્રવૃત્તિઓ મેળવો. 📍 મેનૂમાં 'પાક કેલેન્ડર' પર જાઓ → 'ડિફોલ્ટ રોડમેપ' અથવા 'લાઇવ ટ્રેકિંગ' મોડ પસંદ કરો → તમારા રાજ્ય/પ્રદેશ દ્વારા ફિલ્ટર કરો → પાક શ્રેણી પસંદ કરો → લાઇવ ટ્રેકિંગ માટે: તમારા પાક પર 'ટ્રેકિંગ શરૂ કરો' પર ક્લિક કરો → પૂર્ણ થયા પછી તબક્કાઓને પૂર્ણ તરીકે ચિહ્નિત કરો → પૂર્ણતા ટકાવારી સાથે પ્રગતિનું નિરીક્ષણ કરો → કૃષિ નિષ્ણાતો પાસેથી વ્યક્તિગત કૃષિ માર્ગદર્શન અને તબક્કા-વિશિષ્ટ સલાહ માટે WhatsApp બટન વાપરો."
      ],
      recommendations: [
        "ભલામણો તમારા માટીના પ્રકાર, સ્થાન, વર્તમાન મોસમ અને સ્થાનિક આબોહવા પરિસ્થિતિઓના આધારે વ્યક્તિગત પાક સૂચનો પ્રદાન કરે છે. તમારી વિશિષ્ટ કૃષિ પરિસ્થિતિ માટે તૈયાર કરેલી નિષ્ણાત સલાહ મેળવો. 📍 મેનૂમાં 'ભલામણો' પર જાઓ → તમારા માટીનો પ્રકાર પસંદ કરો (માટી, દુમટ, રેતાળ, વગેરે) → તમારો પ્રદેશ/રાજ્ય પસંદ કરો → વર્તમાન મોસમની ભલામણો જુઓ → નફાકારકતા વિશ્લેષણ સાથે પાક સૂચનો મેળવો → તમારા વિસ્તાર માટે નિષ્ણાત ટિપ્સની સમીક્ષા કરો → કૃષિ સલાહકારો સાથે વ્યક્તિગત કૃષિ યોજનાઓની ચર્ચા કરવા માટે WhatsApp બટન પર ક્લિક કરો."
      ],
      agrilink: [
        "એગ્રીલિંક 8 મુખ્ય સુવિધાઓ સાથે તમારો સંપૂર્ણ કૃષિ સાથી છે: પાક પુસ્તકાલય, સમુદાય Q&A, લાઇવ મંડી ભાવ, પરિવહન સેવાઓ, AI નિદાન, ઉત્પાદન આગાહી, પાક કેલેન્ડર અને વ્યક્તિગત ભલામણો. 📍 તમને જોઈતી કોઈપણ સુવિધા પર જવા માટે ઉપરનો મેનૂ વાપરો.",
        "એગ્રીલિંક સંપૂર્ણ કૃષિ ચક્રને આવરી લેતી વ્યાપક કૃષિ બુદ્ધિમત્તા ઓફર કરે છે - પાક પસંદગીથી બજાર વેચાણ સુધી. સંપૂર્ણ કૃષિ સહાય માટે બધી સુવિધાઓ એકસાથે કામ કરે છે. 📍 બધા સાધનોને ઍક્સેસ કરવા માટે ઉપરના નેવિગેશન મેનૂ વાપરીને દરેક વિભાગનું અન્વેષણ કરો."
      ],
      default: "હું સમજું છું કે તમે કૃષિ વિશે પૂછી રહ્યા છો. એગ્રીલિંક 8 વ્યાપક સુવિધાઓ ઓફર કરે છે: પાક પુસ્તકાલય, સમુદાય Q&A, લાઇવ મંડી ભાવ, પરિવહન સેવાઓ, AI નિદાન, ઉત્પાદન આગાહી, પાક કેલેન્ડર અને વ્યક્તિગત ભલામણો. 📍 તમને જોઈતી કોઈપણ સુવિધાને ઍક્સેસ કરવા માટે ઉપરનો નેવિગેશન મેનૂ વાપરો. કઈ સુવિધા તમને સૌથી વધુ રસ પડે છે?",
      typing: "એગ્રીબોટ ટાઇપ કરી રહ્યું છે...",
      placeholder: "કૃષિ, પાકો, રોગો વિશે પૂછો..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "લોડ થઈ રહ્યું છે...", noResults: "પરિણામ મળ્યા નથી", viewDetails: "વિગતો", back: "પાછળ", whatsappHelp: "મદદ? WhatsApp", selectLanguage: "ભાષા પસંદ કરો", all: "બધા", weather: "હવામાન", humidity: "ભેજ", wind: "પવન", condition: "સ્થિતિ", weatherSource: "Open-Meteo થી ડેટા" },
  },
  pa: {
    nav: { home: "ਹੋਮ", tools: "ਸਾਧਨ", crops: "ਫਸਲ ਲਾਇਬ੍ਰੇਰੀ", community: "ਭਾਈਚਾਰਾ", mandi: "ਮੰਡੀ ਰੇਟ", transport: "ਟ੍ਰਾਂਸਪੋਰਟ", diagnosis: "ਰੋਗ ਨਿਦਾਨ", yieldPrediction: "ਪੈਦਾਵਾਰ ਪੂਰਵ-ਅਨੁਮਾਨ", cropCalendar: "ਫਸਲ ਕੈਲੰਡਰ", recommendations: "ਸਿਫਾਰਸ਼ਾਂ", cropHealth: "ਫਸਲ ਸਿਹਤ" },
    hero: { title: "ਐਗਰੀਲਿੰਕ — ਕਿਸਾਨ ਫਸਲ ਬੁੱਧੀ", subtitle: "ਤੁਹਾਡਾ ਪੂਰਾ ਖੇਤੀ ਸਾਥੀ", cta: "ਫਸਲਾਂ ਵੇਖੋ", badge: "AI-ਸੰਚਾਲਿਤ ਖੇਤੀ ਬੁੱਧੀ", problemTitle: "ਵੈੱਬ ਟ੍ਰੈਕ: ਕਿਸਾਨ ਫਸਲ ਬੁੱਧੀ + ਭਾਈਚਾਰਾ ਪਲੇਟਫਾਰਮ", aiDiagnosis: "AI ਨਿਦਾਨ" },
    stats: { cropsListed: "ਫਸਲਾਂ ਸੂਚੀਬੱਧ", languages: "ਭਾਸ਼ਾਵਾਂ", mandiMarkets: "ਮੰਡੀ ਬਜ਼ਾਰ", aiPowered: "AI ਸੰਚਾਲਿਤ", realtime: "ਰੀਅਲ-ਟਾਈਮ" },
    features: { cropsDesc: "ਮੌਸਮ, ਮਿੱਟੀ, ਸਿੰਚਾਈ, ਕੀੜੇ, ਖਾਦ", communityDesc: "Q&A, ਸਥਾਨਕ ਭਾਸ਼ਾ, ਮਾਹਿਰ ਜਵਾਬ", mandiDesc: "ਜ਼ਿਲ੍ਹਾ/ਬਜ਼ਾਰ ਰੇਟ + ਨੇੜੇ ਲੱਭੋ", transportDesc: "ਟ੍ਰਾਂਸਪੋਰਟ ਕਨੈਕਸ਼ਨ, ਪਿੱਕਅੱਪ ਬੇਨਤੀ", diagnosisDesc: "ਫੋਟੋਆਂ ਤੋਂ AI ਰੋਗ ਪਛਾਣ", recommendationsDesc: "ਮਿੱਟੀ, ਥਾਂ & ਮੌਸਮ ਅਧਾਰਿਤ ਫਸਲ ਸਲਾਹ", yieldPredictionDesc: "AI ਨਾਲ ਫਸਲ ਉਪਜ ਦਾ ਅਨੁਮਾਨ", cropCalendarDesc: "ਬੀਜ ਤੋਂ ਵਾਢੀ ਤੱਕ ਪੂਰੀ ਖੇਤੀ ਮਾਰਗਦਰਸ਼ਕ", cropHealthDesc: "Satellite crop health monitoring" }, problemItems: [
      "ਫਸਲ ਲਾਇਬ੍ਰੇਰੀ: ਮੌਸਮ, ਮਿੱਟੀ, ਸਿੰਚਾਈ, ਕੀੜੇ, ਖਾਦ ਸ਼ੈਡਿਊਲ.",
      "ਭਾਈਚਾਰਾ: Q&A, ਸਥਾਨਕ ਭਾਸ਼ਾ ਸਹਾਇਤਾ, ਮਾਹਿਰ ਜਵਾਬ.",
      "ਜ਼ਿਲ੍ਹਾ/ਬਜ਼ਾਰ ਮੰਡੀ ਰੇਟ + ਕੀਮਤ ਰੁਝਾਨ.",
      "ਟ੍ਰਾਂਸਪੋਰਟ: ਲੌਜਿਸਟਿਕਸ ਪ੍ਰੋਵਾਈਡਰਾਂ ਨਾਲ ਜੁੜੋ ਜਾਂ ਪਿੱਕਅੱਪ ਬੇਨਤੀ.",
      "AI ਰੋਗ ਪਛਾਣ: ਫੋਟੋ ਅੱਪਲੋਡ, ਤੁਰੰਤ ਨਿਦਾਨ & ਇਲਾਜ.",
      "ਸਿਫਾਰਸ਼ਾਂ: ਮਿੱਟੀ, ਥਾਂ & ਮੌਸਮ ਅਧਾਰਿਤ ਮਾਹਿਰ ਫਸਲ ਸਲਾਹ.",
    ],
    crops: { title: "ਫਸਲ ਲਾਇਬ੍ਰੇਰੀ", search: "ਫਸਲਾਂ ਖੋਜੋ...", allCategories: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ", season: "ਮੌਸਮ", soil: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ", irrigation: "ਸਿੰਚਾਈ", pests: "ਕੀੜੇ", fertilizer: "ਖਾਦ", bestPractices: "ਵਧੀਆ ਤਰੀਕੇ", cropsFound: "ਫਸਲਾਂ ਮਿਲੀਆਂ", askOnWhatsApp: "WhatsApp ਤੇ ਪੁੱਛੋ" },
    community: { title: "ਭਾਈਚਾਰਾ Q&A", askQuestion: "ਸਵਾਲ ਪੁੱਛੋ", placeholder: "ਤੁਹਾਡਾ ਖੇਤੀ ਸਵਾਲ?", post: "ਪੋਸਟ", answer: "ਜਵਾਬ ਲਿਖੋ...", answers: "ਜਵਾਬ", share: "WhatsApp ਸ਼ੇਅਰ", upvote: "ਅਪਵੋਟ", category: "ਸ਼੍ਰੇਣੀ", reply: "ਜਵਾਬ ਦਿਓ" },
    mandi: { title: "ਮੰਡੀ ਰੇਟ", search: "ਪਿੰਡ, ਜ਼ਿਲ੍ਹਾ ਖੋਜੋ...", state: "ਰਾਜ", commodity: "ਫਸਲ", minPrice: "ਘੱਟੋ-ਘੱਟ ਕੀਮਤ", maxPrice: "ਵੱਧ ਤੋਂ ਵੱਧ ਕੀਮਤ", modalPrice: "ਔਸਤ ਕੀਮਤ", nearby: "ਨੇੜੇ ਦੇ", all: "ਸਾਰੇ", crop: "ਫਸਲ", crops: "ਫਸਲਾਂ", tapExpand: "ਹੋਰ ਫਸਲਾਂ — ਵਿਸਤਾਰ ਕਰੋ", showingNearby: "ਤੁਹਾਡੇ ਸਥਾਨ ਦੇ ਨੇੜੇ ਦੇ ਬਜ਼ਾਰ", markets: "ਬਜ਼ਾਰ", rates: "ਰੇਟ" },
    transport: { title: "ਟ੍ਰਾਂਸਪੋਰਟ", cropType: "ਫਸਲ ਕਿਸਮ", quantity: "ਮਾਤਰਾ", pickup: "ਪਿੱਕਅੱਪ", destination: "ਮੰਜ਼ਿਲ", submit: "WhatsApp ਭੇਜੋ", whatsapp: "WhatsApp ਚੈਟ", call: "ਹੁਣ ਕਾਲ ਕਰੋ", requestPickup: "ਪਿੱਕਅੱਪ ਬੇਨਤੀ", fillDetails: "ਵੇਰਵੇ ਭਰੋ ਅਤੇ WhatsApp ਰਾਹੀਂ ਭੇਜੋ", placeholderCrop: "ਜਿਵੇਂ, ਚਾਵਲ, ਕਣਕ, ਕਪਾਹ", placeholderQty: "ਜਿਵੇਂ, 50", placeholderPickup: "ਪਿੰਡ/ਸ਼ਹਿਰ ਨਾਮ", placeholderDest: "ਬਜ਼ਾਰ/ਸ਼ਹਿਰ ਨਾਮ" },
    diagnosis: { title: "ਫਸਲ ਰੋਗ ਨਿਦਾਨ", upload: "ਪੌਦੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ", analyze: "AI ਵਿਸ਼ਲੇਸ਼ਣ", result: "ਨਤੀਜਾ", disease: "ਰੋਗ", treatment: "ਇਲਾਜ", prevention: "ਰੋਕਥਾਮ", severity: "ਗੰਭੀਰਤਾ", poweredBy: "AI ਵਿਜ਼ਨ ਵਿਸ਼ਲੇਸ਼ਣ", photoHint: "ਫੋਟੋ ਖਿੱਚੋ ਜਾਂ ਗੈਲਰੀ ਤੋਂ ਅੱਪਲੋਡ ਕਰੋ (ਵੱਧ ਤੋਂ ਵੱਧ 10MB)", remove: "ਹਟਾਓ", affectedPart: "ਪ੍ਰਭਾਵਿਤ ਪੌਦੇ ਦਾ ਹਿੱਸਾ", analyzing: "AI ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...", affected: "ਪ੍ਰਭਾਵਿਤ", confidence: "ਭਰੋਸੇਯੋਗਤਾ", cause: "ਕਾਰਨ", symptoms: "ਲੱਛਣ", organicTreatment: "ਜੈਵਿਕ ਇਲਾਜ", askExpert: "WhatsApp ਤੇ ਮਾਹਿਰ ਨੂੰ ਪੁੱਛੋ", fileTooLarge: "ਫਾਈਲ ਬਹੁਤ ਵੱਡੀ", fileTooLargeDesc: "10MB ਤੋਂ ਘੱਟ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ", analysisFailed: "ਵਿਸ਼ਲੇਸ਼ਣ ਅਸਫਲ", modePlant: "Plant Disease", modeSoil: "Soil Detection", modeFertilizer: "Fertilizer", modeWeed: "Weed Detection", uploadSoil: "Upload Soil Photo", uploadFertilizer: "Upload Fertilizer Photo", uploadWeed: "Upload Weed Photo", analyzeSoil: "Analyze Soil", analyzeFertilizer: "Analyze Fertilizer", identifyWeed: "Identify Weed", weedReport: "Weed Identification Report", scientificName: "Scientific Name", family: "Family", weedType: "Type", origin: "Origin", invasiveness: "Invasiveness", growthHabit: "Growth Habit", lifeCycle: "Life Cycle", characteristics: "Characteristics", impactOnCrops: "Impact on Crops", affectedCrops: "Affected Crops", controlMethods: "Control Methods", organicControl: "Organic Control", chemicalControl: "Chemical Control", preventionTips: "Prevention Tips", bestTimeToControl: "Best Time to Control", economicImpact: "Economic Impact" },
    yieldPrediction: { title: "ਫਸਲ ਪੈਦਾਵਾਰ ਪੂਰਵ-ਅਨੁਮਾਨ", subtitle: "ਵਾਤਾਵਰਣ ਸੰਬੰਧੀ ਇਨਪੁੱਟਾਂ ਦੇ ਆਧਾਰ 'ਤੇ AI-ਸੰਚਾਲਿਤ ਪੈਦਾਵਾਰ ਅਨੁਮਾਨ", cropEnvironmentalData: "ਫਸਲ ਅਤੇ ਵਾਤਾਵਰਣ ਡੇਟਾ", enterCropType: "ਆਪਣੀ ਫਸਲ ਦੀ ਕਿਸਮ ਅਤੇ ਮੌਜੂਦਾ ਖੇਤ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦਾਖਲ ਕਰੋ", cropType: "ਫਸਲ ਕਿਸਮ", selectCropType: "ਫਸਲ ਕਿਸਮ ਚੁਣੋ", temperature: "ਤਾਪਮਾਨ (°C)", rainfall: "ਬਾਰਿਸ਼ (mm)", humidity: "ਨਮੀ (%)", soilPH: "ਮਿੱਟੀ pH", predictYield: "ਪੈਦਾਵਾਰ ਪੂਰਵ-ਅਨੁਮਾਨ", analyzing: "ਵਿਸ਼ਲੇਸ਼ਣ ਕਰ ਰਿਹਾ ਹੈ...", predictedYield: "ਅਨੁਮਾਨਿਤ ਪੈਦਾਵਾਰ", unit: "ਟਨ/ਹੈਕਟੇਅਰ", confidence: "ਭਰੋਸੇਯੋਗਤਾ", smartSuggestions: "ਸਮਾਰਟ ਸੁਝਾਅ", yieldComparison: "ਫਸਲ ਅਨੁਸਾਰ ਪੈਦਾਵਾਰ ਤੁਲਨਾ", currentYield: "ਮੌਜੂਦਾ ਪੈਦਾਵਾਰ", optimalYield: "ਸਰਵੋਤਮ ਪੈਦਾਵਾਰ", lowRainfallWarning: "ਘੱਟ ਬਾਰਿਸ਼ ਦਾ ਪਤਾ ਲੱਗਾ। ਮਿੱਟੀ ਦੀ ਨਮੀ ਬਣਾਈ ਰੱਖਣ ਲਈ ਡ੍ਰਿਪ ਜਾਂ ਸਪ੍ਰਿੰਕਲਰ ਸਿੰਚਾਈ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।", highTemperatureWarning: "ਉੱਚ ਤਾਪਮਾਨ ਚੇਤਾਵਨੀ। ਛਾਂ ਦੇ ਜਾਲ, ਮਲਚਿੰਗ ਜਾਂ ਗਰਮੀ-ਸਹਿਣਸ਼ੀਲ ਫਸਲ ਦੀਆਂ ਕਿਸਮਾਂ ਵਰਤੋ।", acidicSoilInfo: "ਤੇਜ਼ਾਬੀ ਮਿੱਟੀ ਦਾ ਪਤਾ ਲੱਗਾ। ਬਿਹਤਰ ਪੋਸ਼ਕ ਤੱਤ ਸੋਖਣ ਲਈ pH ਵਧਾਉਣ ਲਈ ਚੂਨਾ (ਕੈਲਸ਼ੀਅਮ ਕਾਰਬੋਨੇਟ) ਲਾਗੂ ਕਰੋ।", lowHumidityWarning: "ਘੱਟ ਨਮੀ ਨਮੀ ਦਾ ਤਣਾਅ ਪੈਦਾ ਕਰ ਸਕਦੀ ਹੈ। ਸਿੰਚਾਈ ਦੀ ਬਾਰੰਬਾਰਤਾ ਵਧਾਓ ਅਤੇ ਮਲਚ ਵਰਤੋ।", optimalConditions: "ਸਰਵੋਤਮ ਵਿਕਾਸ ਸਥਿਤੀਆਂ ਦਾ ਪਤਾ ਲੱਗਾ! ਸਰਵੋਤਮ ਨਤੀਜਿਆਂ ਲਈ ਮੌਜੂਦਾ ਅਭਿਆਸਾਂ ਨੂੰ ਬਣਾਈ ਰੱਖੋ।" },
    recommendations: { title: "ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ", soilBased: "ਮਿੱਟੀ ਅਧਾਰਿਤ", locationBased: "ਸਥਾਨ ਅਧਾਰਿਤ", seasonBased: "ਮੌਸਮ ਅਧਾਰਿਤ", selectSoil: "ਮਿੱਟੀ ਚੁਣੋ", selectRegion: "ਖੇਤਰ ਚੁਣੋ", currentSeason: "ਮੌਜੂਦਾ ਮੌਸਮ", expertTips: "ਮਾਹਿਰ ਸੁਝਾਅ", source: "ਸ੍ਰੋਤ", climate: "ਜਲਵਾਯੂ", states: "ਰਾਜ" },
    cropCalendar: {
      title: "ਫਸਲ ਕੈਲੰਡਰ",
      subtitle: "ਬੀਜ ਤਿਆਰੀ ਤੋਂ ਕਟਾਈ ਅਤੇ ਕਟਾਈ ਤੋਂ ਬਾਅਦ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਤੱਕ ਕਦਮ-ਦਰ-ਕਦਮ ਮਾਰਗਦਰਸ਼ਨ ਦੇ ਨਾਲ ਪੂਰਾ ਖੇਤੀ ਰੋਡਮੈਪ",
      defaultRoadmap: "ਡਿਫਾਲਟ ਰੋਡਮੈਪ",
      liveTracking: "ਲਾਈਵ ਟਰੈਕਿੰਗ",
      currentSeason: "ਮੌਜੂਦਾ ਮੌਸਮ",
      monsoonSeason: "ਮਾਨਸੂਨ ਮੌਸਮ (ਜੂਨ-ਸਤੰਬਰ) - ਬਰਸਾਤ 'ਤੇ ਨਿਰਭਰ ਫਸਲਾਂ 'ਤੇ ਧਿਆਨ ਦਿਓ",
      winterSeason: "ਸਰਦੀਆਂ ਦਾ ਮੌਸਮ (ਅਕਤੂਬਰ-ਮਾਰਚ) - ਸਿੰਚਾਈ ਵਾਲੀਆਂ ਫਸਲਾਂ 'ਤੇ ਧਿਆਨ ਦਿਓ",
      summerSeason: "ਗਰਮੀਆਂ ਦਾ ਮੌਸਮ (ਅਪ੍ਰੈਲ-ਮਈ) - ਜ਼ਿਆਦਾ ਪਾਣੀ ਦੀ ਉਪਲਬਧਤਾ ਨਾਲ ਸਿੰਚਾਈ ਵਾਲੀਆਂ ਫਸਲਾਂ 'ਤੇ ਧਿਆਨ ਦਿਓ",
      selectState: "ਰਾਜ/ਖੇਤਰ ਚੁਣੋ",
      cropCategory: "ਫਸਲ ਸ਼੍ਰੇਣੀ",
      startLiveTracking: "ਲਾਈਵ ਫਸਲ ਟਰੈਕਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",
      selectYourCrop: "ਆਪਣੀ ਫਸਲ ਚੁਣੋ",
      cultivationStartDate: "ਖੇਤੀ ਸ਼ੁਰੂਆਤ ਦੀ ਤਾਰੀਖ",
      chooseYourCrop: "ਆਪਣੀ ਫਸਲ ਚੁਣੋ",
      howLiveTrackingWorks: "ਲਾਈਵ ਟਰੈਕਿੰਗ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ:",
      trackEachStage: "ਅਸਲ ਤਾਰੀਖਾਂ ਨਾਲ ਹਰ ਖੇਤੀ ਪੜਾਅ ਨੂੰ ਟਰੈਕ ਕਰੋ",
      markStagesComplete: "ਪੂਰਾ ਹੋਣ 'ਤੇ ਪੜਾਵਾਂ ਨੂੰ ਪੂਰਾ ਮਾਰਕ ਕਰੋ",
      getSolutions: "ਜੇ ਕੁਝ ਗਲਤ ਹੋ ਜਾਵੇ ਤਾਂ ਹੱਲ ਪ੍ਰਾਪਤ ਕਰੋ",
      monitorProgress: "ਸਮੁੱਚੀ ਪ੍ਰਗਤੀ ਪ੍ਰਤੀਸ਼ਤ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ",
      complete: "ਪੂਰਾ",
      started: "ਸ਼ੁਰੂ ਕੀਤਾ",
      completed: "ਪੂਰਾ ਹੋਇਆ",
      inProgress: "ਪ੍ਰਗਤੀ ਵਿੱਚ",
      pending: "ਬਾਕੀ",
      markComplete: "ਪੂਰਾ ਮਾਰਕ ਕਰੋ",
      needHelp: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
      resetTracking: "ਟਰੈਕਿੰਗ ਰੀਸੈਟ ਕਰੋ",
      liveFarmingProgress: "ਲਾਈਵ ਖੇਤੀ ਪ੍ਰਗਤੀ",
      trackingProgress: "ਟਰੈਕਿੰਗ ਪ੍ਰਗਤੀ",
      stages: "ਪੜਾਅ",
      problemSolver: "ਸਮੱਸਿਆ ਹੱਲਕਰਤਾ",
      havingIssues: "ਇਸ ਪੜਾਅ ਵਿੱਚ ਸਮੱਸਿਆਵਾਂ ਹਨ? ਇੱਥੇ ਆਮ ਸਮੱਸਿਆਵਾਂ ਅਤੇ ਹੱਲ ਹਨ:",
      pestProblems: "ਕੀੜੇ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ",
      pestSolution: "ਜੈਵਿਕ ਨਿੰਮ ਦਾ ਤੇਲ ਸਪਰੇ ਕਰੋ ਜਾਂ ਕੀੜੇ ਦੀ ਪਛਾਣ ਅਤੇ ਇਲਾਜ ਲਈ ਸਥਾਨਕ ਖੇਤੀ ਅਧਿਕਾਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
      weatherIssues: "ਮੌਸਮ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ",
      weatherSolution: "ਬਰਸਾਤ ਦੇ ਆਧਾਰ 'ਤੇ ਸਿੰਚਾਈ ਦਾ ਸਮਾਂ ਸਾਰਣੀ ਅਨੁਕੂਲ ਕਰੋ। ਪਾਣੀ ਭਰਨ 'ਤੇ ਨਿਕਾਸ ਜਾਂ ਸੋਕੇ ਵਿੱਚ ਵਾਧੂ ਪਾਣੀ ਪ੍ਰਦਾਨ ਕਰੋ।",
      poorGrowth: "ਮਾੜੀ ਵਾਧਾ",
      poorGrowthSolution: "ਮਿੱਟੀ ਦੇ ਪੋਸ਼ਕ ਤੱਤਾਂ ਦੀ ਜਾਂਚ ਕਰੋ, ਸੰਤੁਲਿਤ ਖਾਦ ਲਗਾਓ, ਸਹੀ ਦੂਰੀ ਅਤੇ ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ ਯਕੀਨੀ ਬਣਾਓ।",
      problemSolved: "ਸਮੱਸਿਆ ਹੱਲ ਹੋ ਗਈ - ਜਾਰੀ ਰੱਖੋ",
      close: "ਬੰਦ ਕਰੋ",
      completeRoadmap: "ਪੂਰਾ ਖੇਤੀ ਰੋਡਮੈਪ - ਬੀਜ ਤੋਂ ਕਟਾਈ ਤੱਕ",
      viewCompleteRoadmap: "ਪੂਰਾ ਰੋਡਮੈਪ ਵੇਖੋ",
      farmingTips: "ਖੇਤੀ ਟਿਪਸ",
      temperature: "ਤਾਪਮਾਨ",
      rainfall: "ਬਰਸਾਤ",
      soilType: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
      noCropsFound: "ਕੋਈ ਫਸਲ ਨਹੀਂ ਮਿਲੀ",
      adjustFilters: "ਹੋਰ ਫਸਲ ਕੈਲੰਡਰ ਜਾਣਕਾਰੀ ਵੇਖਣ ਲਈ ਆਪਣੇ ਫਿਲਟਰ ਅਨੁਕੂਲ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
      kharif: "ਖਰੀਫ",
      rabi: "ਰਬੀ",
      zaid: "ਜ਼ਾਇਦ",
      cereals: "ਅਨਾਜ",
      pulses: "ਦਾਲਾਂ",
      vegetables: "ਸਬਜ਼ੀਆਂ",
      fruits: "ਫਲ",
      cashCrops: "ਨਕਦੀ ਫਸਲਾਂ",
      oilseeds: "ਤੇਲ ਬੀਜ",
      spices: "ਮਸਾਲੇ"
    },
    chatbot: {
      greeting: ["ਨਮਸਕਾਰ! ਮੈਂ ਐਗਰੀਬੋਟ ਹਾਂ, ਤੁਹਾਡਾ AI ਖੇਤੀ ਸਹਾਇਕ।"],
      crops: ["ਸਾਡੀ ਫਸਲ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ 102+ ਫਸਲਾਂ ਹਨ।"],
      community: ["ਸਾਡਾ ਭਾਈਚਾਰਾ ਵਿਭਾਗ ਇੱਕ Q&A ਪਲੇਟਫਾਰਮ ਹੈ।"],
      mandi: ["ਮੰਡੀ ਰੇਟ ਭਾਰਤ ਦੇ 500+ ਬਜ਼ਾਰਾਂ ਤੋਂ ਲਾਈਵ ਭਾਅ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।"],
      transport: ["ਟ੍ਰਾਂਸਪੋਰਟ ਅਤੇ ਲੌਜਿਸਟਿਕਸ ਤੁਹਾਨੂੰ ਲੌਜਿਸਟਿਕਸ ਪ੍ਰਦਾਤਾਵਾਂ ਨਾਲ ਜੋੜਦਾ ਹੈ।"],
      diagnosis: ["AI ਨਿਦਾਨ 3 ਸ਼ਕਤੀਸ਼ਾਲੀ ਮੋਡ ਪੇਸ਼ ਕਰਦਾ ਹੈ।"],
      yieldPrediction: ["ਪੈਦਾਵਾਰ ਪੂਰਵ-ਅਨੁਮਾਨ AI ਵਰਤਦਾ ਹੈ।"],
      cropCalendar: ["ਫਸਲ ਕੈਲੰਡਰ ਸੰਪੂਰਨ ਖੇਤੀ ਰੋਡਮੈਪ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।"],
      recommendations: ["ਸਿਫਾਰਸ਼ਾਂ ਵਿਅਕਤੀਗਤ ਫਸਲ ਸੁਝਾਅ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।"],
      agrilink: ["ਐਗਰੀਲਿੰਕ ਤੁਹਾਡਾ ਸੰਪੂਰਨ ਖੇਤੀ ਸਾਥੀ ਹੈ।"],
      default: "ਮੈਂ ਸਮਝਦਾ ਹਾਂ ਕਿ ਤੁਸੀਂ ਖੇਤੀ ਬਾਰੇ ਪੁੱਛ ਰਹੇ ਹੋ।",
      typing: "ਐਗਰੀਬੋਟ ਟਾਈਪ ਕਰ ਰਿਹਾ ਹੈ...",
      placeholder: "ਖੇਤੀ, ਫਸਲਾਂ, ਰੋਗਾਂ ਬਾਰੇ ਪੁੱਛੋ..."
    },
    cropHealth: {
      title: "Crop Health Monitor", subtitle: "Monitor your crop health using satellite imagery", locationAnalysis: "Location Analysis", locationDesc: "Enable location to analyze crop health", coordinates: "Coordinates", analyzeCrop: "Analyze Crop Health", analyzing: "Analyzing satellite data...", poweredBy: "Powered by Sentinel-2", healthStatus: "Health Status", ndviIndex: "NDVI Index", recommendations: "Recommendations", excellent: "Excellent", good: "Good", moderate: "Moderate", poor: "Poor", improving: "Improving", stable: "Stable", declining: "Declining", excellentRec1: "Crops are thriving! Continue current practices.", excellentRec2: "Monitor for pests regularly.", goodRec1: "Crop health is good. Maintain watering schedule.", goodRec2: "Consider applying balanced fertilizer.", moderateRec1: "Increase irrigation frequency.", moderateRec2: "Check for nutrient deficiencies.", moderateRec3: "Inspect crops for pest problems.", poorRec1: "Immediate action required! Check for water stress.", poorRec2: "Consult agricultural expert.", poorRec3: "Consider soil testing urgently.", analysisComplete: "Analysis Complete", satelliteDataProcessed: "Satellite data processed successfully", satelliteData: "Satellite Imagery", satelliteDataDesc: "Real-time data from Sentinel-2", ndviAnalysis: "NDVI Analysis", ndviAnalysisDesc: "Vegetation health index", actionable: "Actionable Insights", actionableDesc: "Get specific recommendations"
    },
    common: { loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...", noResults: "ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ", viewDetails: "ਵੇਰਵੇ", back: "ਵਾਪਸ", whatsappHelp: "ਮਦਦ? WhatsApp", selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ", all: "ਸਾਰੇ", weather: "ਮੌਸਮ", humidity: "ਨਮੀ", wind: "ਹਵਾ", condition: "ਸਥਿਤੀ", weatherSource: "Open-Meteo ਤੋਂ ਡੇਟਾ" },
  },
};

// For languages without full translations, fallback to English
export function getTranslation(lang: string): TranslationKeys {
  return translations[lang] || translations.en;
}



