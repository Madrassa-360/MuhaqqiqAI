# Al-Turath NotebookLM Hub — GitHub Pages پر PWA Deploy کرنے کی مکمل ہدایات

## 1. فائلیں تیار
اس فولڈر میں یہ فائلیں دی گئی ہیں:

| فائل | مقصد |
|---|---|
| `alturath_hub_v33_fixed.html` | مکمل ایپ (اسے **`index.html`** کے نام سے اپلوڈ کریں) |
| `manifest.json` | PWA Manifest (Install کے لیے ضروری) |
| `sw.js` | Service Worker (Auto-Update اور Offline کے لیے) |
| `icon-192.png` | ایپ آئیکن (192×192) |
| `icon-512.png` | ایپ آئیکن (512×512) |
| `maskable-icon-512.png` | Android کے لیے Maskable آئیکن |
| `apple-touch-icon.png` | iPhone/iPad Home Screen آئیکن |
| `favicon-32.png` | Browser Tab آئیکن |

## 2. GitHub Pages پر اپلوڈ کیسے کریں

1. اپنے GitHub Repository میں یہ **تمام 8 فائلیں ایک ہی فولڈر (root یا `/docs`) میں** اپلوڈ کریں۔
2. **بہت ضروری:** `alturath_hub_v33_fixed.html` کا نام تبدیل کر کے **`index.html`** رکھیں — GitHub Pages صرف `index.html` کو خودکار طور پر کھولتا ہے۔
3. Repository کی Settings → Pages میں جا کر Publish کریں۔
4. تیار! اب آپ کا Link (مثلاً `https://username.github.io/repo-name/`) براہِ راست ایپ کھولے گا۔

## 3. نئی تبدیلی (Update) کیسے بھیجیں
- بس `index.html` میں تبدیلی کر کے دوبارہ GitHub پر Upload/Commit کر دیں — **کسی اور فائل کو چھیڑنے کی ضرورت نہیں**۔
- جیسے ہی کوئی صارف انٹرنیٹ کے ساتھ ایپ کھولے گا، نئی Version خودکار طور پر Background میں آ جائے گی اور ایپ خود بخود Refresh ہو کر نئی Version دکھائے گی — کوئی Manual Cache صاف کرنے کی ضرورت نہیں۔

## 4. Install کیسے ہوگا
- Android/Desktop (Chrome, Edge): Link کھلنے کے کچھ دیر بعد Header میں ⬇️ Install آئیکن خودکار ظاہر ہو جائے گا، یا Browser خود بھی Install کا Prompt دکھا سکتا ہے۔
- iPhone/iPad (Safari): Safari کی پابندیوں کی وجہ سے خودکار Prompt ممکن نہیں — اس لیے ایپ خود صارف کو "Share ← Add to Home Screen" کا پیغام دکھائے گی۔
- Install ہونے کے بعد ایپ کا آئیکن عام ایپ کی طرح Home Screen/Desktop پر آ جائے گا۔

## 5. اہم نوٹ
- یہ HTML فائل `file://` (کمپیوٹر پر براہ راست ڈبل کلک کر کے) کھولنے پر بھی بغیر کسی خرابی کے پہلے کی طرح چلتی رہے گی — صرف PWA Install/Auto-Update کی سہولت صرف اس وقت فعال ہوگی جب ایپ کسی ویب سرور (جیسے GitHub Pages) کے ذریعے `https://` لنک سے کھولی جائے، کیونکہ یہ Browser کی Security Policy کا حصہ ہے۔
