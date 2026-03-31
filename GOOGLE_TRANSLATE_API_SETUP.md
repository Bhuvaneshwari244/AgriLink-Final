# How to Get Google Translate API Key

## Step-by-Step Guide

### Step 1: Create Google Cloud Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (or create one if you don't have it)
3. Accept the Terms of Service

### Step 2: Create a New Project

1. Click on the project dropdown at the top of the page
2. Click "NEW PROJECT"
3. Enter project name: `AgriLink-Translations`
4. Click "CREATE"
5. Wait for the project to be created (takes a few seconds)
6. Select your new project from the dropdown

### Step 3: Enable Billing

⚠️ **Important**: Google Cloud requires a billing account, but they offer:
- **$300 free credit** for new users (valid for 90 days)
- **Free tier**: First 500,000 characters per month are FREE
- After free tier: $20 per 1 million characters

**To enable billing:**

1. Click on "Billing" in the left sidebar (or hamburger menu ☰)
2. Click "LINK A BILLING ACCOUNT"
3. Click "CREATE BILLING ACCOUNT"
4. Enter your billing information:
   - Country
   - Credit/Debit card details
   - Billing address
5. Click "START MY FREE TRIAL" or "SUBMIT AND ENABLE BILLING"

**Note**: You won't be charged unless you exceed the free tier or your free trial ends.

### Step 4: Enable Cloud Translation API

1. In the Google Cloud Console, click the hamburger menu (☰) at top left
2. Navigate to: **APIs & Services** → **Library**
3. In the search bar, type: `Cloud Translation API`
4. Click on "Cloud Translation API"
5. Click the blue "ENABLE" button
6. Wait for the API to be enabled (takes a few seconds)

### Step 5: Create API Key

1. Go to: **APIs & Services** → **Credentials**
2. Click "+ CREATE CREDENTIALS" at the top
3. Select "API key" from the dropdown
4. Your API key will be created and displayed in a popup
5. **COPY THE API KEY** - it looks like: `AIzaSyD...` (about 39 characters)
6. Click "CLOSE"

### Step 6: Restrict API Key (Recommended for Security)

1. Find your newly created API key in the list
2. Click the pencil icon (✏️) to edit
3. Under "API restrictions":
   - Select "Restrict key"
   - Check only "Cloud Translation API"
4. Under "Application restrictions" (optional):
   - Select "IP addresses" if you want to restrict to your IP
   - Or select "None" for development
5. Click "SAVE"

### Step 7: Set Up API Key in Your Project

**Option A: Environment Variable (Recommended)**

**Windows (PowerShell):**
```powershell
$env:GOOGLE_TRANSLATE_API_KEY="YOUR_API_KEY_HERE"
```

**Windows (CMD):**
```cmd
set GOOGLE_TRANSLATE_API_KEY=YOUR_API_KEY_HERE
```

**Linux/Mac:**
```bash
export GOOGLE_TRANSLATE_API_KEY=YOUR_API_KEY_HERE
```

**Option B: .env File (For permanent setup)**

1. Create a file named `.env` in your project root:
```
GOOGLE_TRANSLATE_API_KEY=YOUR_API_KEY_HERE
```

2. Add to `.gitignore`:
```
.env
```

3. Install dotenv:
```bash
npm install dotenv
```

4. Load in your script:
```javascript
require('dotenv').config();
```

### Step 8: Install Required Package

```bash
npm install @google-cloud/translate
```

### Step 9: Test Your API Key

Create a test file `test-translate.cjs`:

```javascript
const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({
  key: process.env.GOOGLE_TRANSLATE_API_KEY
});

async function testTranslation() {
  try {
    const text = 'Hello, World!';
    const target = 'hi'; // Hindi
    
    const [translation] = await translate.translate(text, target);
    console.log(`Original: ${text}`);
    console.log(`Translation: ${translation}`);
    console.log('✓ API key is working!');
  } catch (error) {
    console.error('✗ Error:', error.message);
  }
}

testTranslation();
```

Run it:
```bash
node test-translate.cjs
```

Expected output:
```
Original: Hello, World!
Translation: नमस्ते दुनिया!
✓ API key is working!
```

### Step 10: Run Translation Script

```bash
node scripts/generate-calculator-translations.cjs
```

## Cost Breakdown

### Free Tier
- **First 500,000 characters/month**: FREE
- Our script uses: ~76,500 characters
- **You can run it 6+ times per month for FREE**

### After Free Tier
- $20 per 1 million characters
- Our script cost: ~$0.0015 (less than 1 cent)

### New User Bonus
- $300 free credit (90 days)
- Enough for ~15 million characters
- Can run our script ~196 times

## Troubleshooting

### Error: "API key not valid"
- Check if you copied the full API key
- Verify the API key hasn't been deleted
- Make sure Cloud Translation API is enabled

### Error: "Billing must be enabled"
- Go to Billing section and add payment method
- You won't be charged within free tier

### Error: "API key restrictions"
- Go to Credentials → Edit your API key
- Make sure "Cloud Translation API" is checked under API restrictions

### Error: "Quota exceeded"
- You've used more than 500,000 characters this month
- Wait for next month or enable billing

### Error: "Permission denied"
- Make sure the API is enabled
- Check if your API key has proper restrictions

## Security Best Practices

1. **Never commit API keys to Git**
   - Add `.env` to `.gitignore`
   - Use environment variables

2. **Restrict your API key**
   - Limit to Cloud Translation API only
   - Add IP restrictions if possible

3. **Monitor usage**
   - Check Google Cloud Console regularly
   - Set up billing alerts

4. **Rotate keys periodically**
   - Create new key every few months
   - Delete old keys

## Alternative: Free Translation Options

If you don't want to use Google Cloud:

### Option 1: Manual Translation
- Use Google Translate website (free)
- Copy-paste each string
- Time-consuming but free

### Option 2: LibreTranslate (Free & Open Source)
```bash
npm install @libretranslate/client
```

### Option 3: Microsoft Translator (Free Tier)
- 2 million characters/month free
- Similar setup to Google

### Option 4: Hire Translators
- Fiverr, Upwork, or local translators
- Better quality than machine translation
- Cost: $5-20 per language

## Quick Start Checklist

- [ ] Create Google Cloud account
- [ ] Create new project
- [ ] Enable billing (free trial)
- [ ] Enable Cloud Translation API
- [ ] Create API key
- [ ] Restrict API key
- [ ] Set environment variable
- [ ] Install @google-cloud/translate
- [ ] Test API key
- [ ] Run translation script

## Support Links

- [Google Cloud Console](https://console.cloud.google.com/)
- [Translation API Documentation](https://cloud.google.com/translate/docs)
- [Pricing Calculator](https://cloud.google.com/products/calculator)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Review the troubleshooting section above
3. Check Google Cloud Console for quota/billing status
4. Verify API is enabled and key is correct
