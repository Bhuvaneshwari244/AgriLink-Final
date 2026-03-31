# Translation Errors - Manual Fix Required

## Issue
8 languages are missing the complete `cropHealth` translation section.

## Languages Missing cropHealth Section:
Based on line numbers from diagnostics:
- Line 479: One language after Hindi
- Line 600: Tamil  
- Line 716: Kannada
- Line 832: Malayalam
- Line 928: Marathi
- Line 1046: Bengali
- Line 1164: Gujarati
- Line 1282: Punjabi

## What's Needed
Each language needs this section added after the `common` section:

```typescript
cropHealth: {
  title: "Crop Health Monitor",
  subtitle: "Monitor crop health using satellite imagery",
  locationAnalysis: "Farm Location",
  locationDesc: "Enter coordinates or use auto-detection",
  coordinates: "Coordinates",
  analyzeCrop: "Analyze Crop Health",
  analyzing: "Analyzing Satellite Data...",
  poweredBy: "Powered by NASA POWER Satellite Data",
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
  excellentRec1: "Excellent crop health detected",
  excellentRec2: "Continue current practices",
  goodRec1: "Good growing conditions",
  goodRec2: "Monitor regularly",
  moderateRec1: "Moderate conditions",
  moderateRec2: "Consider increasing irrigation",
  moderateRec3: "Apply fertilizer if needed",
  poorRec1: "Challenging conditions",
  poorRec2: "Increase irrigation",
  poorRec3: "Consult agricultural expert",
  analysisComplete: "Analysis Complete",
  satelliteDataProcessed: "Satellite data processed",
  satelliteData: "Real-time Satellite Data",
  satelliteDataDesc: "Up-to-date imagery and vegetation health",
  ndviAnalysis: "NDVI Analysis",
  ndviAnalysisDesc: "Normalized Difference Vegetation Index",
  actionable: "Actionable Insights",
  actionableDesc: "Recommendations based on analysis"
},
```

## Quick Fix
The translations.ts file is too large to fix automatically. Please:
1. Open `src/data/translations.ts`
2. Find each language at the line numbers above
3. Add the cropHealth section (translated to that language) after the `common` section
4. Save the file

## Temporary Workaround
For now, the Yield Prediction page should work if you:
1. Restart the dev server
2. Hard refresh the browser (Ctrl + Shift + R)
3. Use English language only

The cropHealth feature will work in English, Hindi, and Telugu which already have the translations.
