# Calculator Translations Generator

This script automatically generates translations for all calculator pages in 31 Indian languages.

## Features

- Translates all calculator UI strings (Tools, Farming Calculator, Pesticide Calculator, Fertilizer Calculator, Cultivation Tips)
- Supports 31 languages
- Uses Google Translate API for automatic translation
- Generates TypeScript file with type safety
- Fallback to English if translation fails

## Setup

### 1. Install Dependencies

```bash
npm install @google-cloud/translate
```

### 2. Get Google Translate API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Cloud Translation API"
4. Create credentials (API Key)
5. Copy your API key

### 3. Set Environment Variable

**Linux/Mac:**
```bash
export GOOGLE_TRANSLATE_API_KEY=your_api_key_here
```

**Windows (PowerShell):**
```powershell
$env:GOOGLE_TRANSLATE_API_KEY="your_api_key_here"
```

**Windows (CMD):**
```cmd
set GOOGLE_TRANSLATE_API_KEY=your_api_key_here
```

## Usage

### Run the Script

```bash
node scripts/generate-calculator-translations.js
```

### Output

The script will:
1. Translate all strings to 31 languages
2. Generate `src/data/calculatorTranslations.ts`
3. Show progress for each language
4. Display summary statistics

### Example Output

```
============================================================
CALCULATOR TRANSLATIONS GENERATOR
============================================================
Starting translation generation...
Total languages: 31
Total strings per language: 85

Translating to English (en)...
✓ English (source language)

Translating to Hindi (hi)...
✓ Hindi completed

Translating to Telugu (te)...
✓ Telugu completed

...

============================================================
✓ TRANSLATION GENERATION COMPLETE
============================================================
Total languages: 31
Total translations: 2635
```

## Languages Supported

1. English (en)
2. Hindi (hi)
3. Telugu (te)
4. Tamil (ta)
5. Kannada (kn)
6. Malayalam (ml)
7. Marathi (mr)
8. Bengali (bn)
9. Gujarati (gu)
10. Punjabi (pa)
11. Odia (or)
12. Assamese (as)
13. Urdu (ur)
14. Sindhi (sd)
15. Nepali (ne)
16. Maithili (mai)
17. Santali (sat)
18. Kashmiri (ks)
19. Dogri (doi)
20. Konkani (kok)
21. Manipuri (mni)
22. Bodo (bo)
23. Sanskrit (sa)
24. Rajasthani (raj)
25. Bhojpuri (bh)
26. Chhattisgarhi (chh)
27. Gondi (gon)
28. Tulu (tu)
29. Khasi (kha)
30. Mizo (miz)
31. Nagamese (nag)

## Translation Coverage

### Tools Page
- Title, subtitle, all tool names and descriptions
- Detection tools, Library, Calculators sections

### Farming Calculator
- All calculator types (Max Budget, Profit, Yield, No Loss Price)
- Input labels, descriptions, units
- Calculation details, results display

### Pesticide Calculator
- Crop type selection
- Area inputs, dosage calculations
- Recent calculations display

### Fertilizer Calculator
- Crop selection, NPK requirements
- Fertilizer combinations
- Area and unit inputs

### Cultivation Tips
- Category filters
- Search functionality

## Cost Estimation

Google Translate API pricing (as of 2024):
- $20 per 1 million characters
- This script: ~85 strings × 30 languages × 30 chars avg = ~76,500 characters
- Estimated cost: ~$0.0015 per run (less than 1 cent)

## Troubleshooting

### API Key Not Working
- Verify API key is correct
- Check if Translation API is enabled in Google Cloud Console
- Ensure billing is enabled on your project

### Translation Quality Issues
- Google Translate is good but not perfect
- Consider hiring professional translators for critical strings
- Review and edit generated translations manually

### Script Fails
- Check internet connection
- Verify Node.js version (14+ required)
- Check API quota limits

## Manual Translation

If you prefer manual translation or want to edit:

1. Run script to generate base file
2. Open `src/data/calculatorTranslations.ts`
3. Edit specific language translations
4. Save file

## Integration

After generating translations, update calculator pages:

```typescript
import { useLanguage } from "@/contexts/LanguageContext";
import { calculatorTranslations } from "@/data/calculatorTranslations";

function MyCalculator() {
  const { lang } = useLanguage();
  const t = calculatorTranslations[lang] || calculatorTranslations.en;
  
  return <h1>{t.farmingCalculator.title}</h1>;
}
```

## Next Steps

1. Run the script to generate translations
2. Review generated file for accuracy
3. Update calculator pages to use translations
4. Test each language in the application
5. Get feedback from native speakers
6. Refine translations as needed

## Support

For issues or questions:
- Check Google Translate API documentation
- Review script logs for error messages
- Test with a single language first
- Verify API key and permissions
