# BlindWine Guest Interface - V2

Updated prototype with Modern Wine Bar aesthetic (Option 2 colors).

## ✨ What's New

**Design Updates:**
- Rich plum/magenta color palette (#9B1B5A, #7A1648)
- Warm gold accents (#D4AF37) instead of harsh yellow
- Dark, sophisticated wine bar theme
- No more bright pink Barbie vibes

**UX Improvements:**
- Removed "Yours" badge from WineList (cleaner)
- Added small ✨ sparkle on RatingScreen for your wine only
- Vertical list instead of card grid (less scrolling)
- Tighter, more focused layouts

## 📱 Screens Included

1. **JoinParty** - Enter party code
2. **SubmitWine** - Number grid + bottle scan
3. **WineList** - Vertical list with progress
4. **RatingScreen** - 1-5 stars with sparkle indicator

**NOT INCLUDED:** RevealScreen (will build with host screens)

## 🚀 Deploy to Vercel

### Step 1: Upload to GitHub

1. Go to https://github.com/ant2k2/bwV1
2. **Delete all old files first** (important!)
3. Click "Add file" → "Upload files"
4. Drag ALL files from blindwine-guest-v2 folder
5. Click "Commit changes"

### Step 2: Vercel Auto-Deploys

Vercel will automatically detect the changes and redeploy in ~30 seconds.

Your URL: https://blindwine-prototype.vercel.app (or whatever you named it)

## 🎨 Color Palette

**Primary Colors:**
- Plum: `#9B1B5A`
- Dark Plum: `#7A1648`
- Rose: `#B76E79`

**Accent Colors:**
- Warm Gold: `#D4AF37`
- Soft Gold: `#C9A961`

**Backgrounds:**
- Dark: `#0f0f0f`
- Darker: `#0a0a0a`

## 🧪 Test Flow

1. Open app → Type PARTY123 → Click "Pour In"
2. Choose number 3 → Click scan → Select Erath → Click "Cork It"
3. See wine list → Click any wine
4. Rate with stars → Click "Save Rating"
5. Repeat until all rated
6. See completion message

**Your Wine:** Bag #2 (Erath) has ✨ sparkle on rating screen

## 📁 Project Structure

```
blindwine-guest-v2/
├── src/
│   ├── screens/
│   │   ├── JoinParty.jsx/css
│   │   ├── SubmitWine.jsx/css
│   │   ├── WineList.jsx/css
│   │   └── RatingScreen.jsx/css
│   ├── App.jsx (routing + mock data)
│   ├── main.jsx
│   └── index.css (global styles + colors)
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 🔄 Making Updates

When I give you new files:
1. Replace files in GitHub
2. Vercel auto-deploys
3. Hard refresh browser (Cmd+Shift+R)

## 📝 Feedback Format

Reference screens by name:
- "On **JoinParty**, the logo is too small"
- "On **WineList**, make numbers bigger"
- "On **RatingScreen**, sparkle too small"
- "Change the plum color to be darker"

## ⚙️ Local Development (Optional)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🎯 Next Steps

After you approve these screens:
1. Build Host interface (create party, manage guests, trigger reveal)
2. Build Admin dashboard (metrics, wine data)
3. Build RevealScreen (dramatic results with host + guest views)
4. Connect real Firebase backend
5. Add real barcode scanning

## 🐛 Known Limitations

- Mock data only (no real backend)
- Simulated barcode scanning
- No real-time party updates
- No actual reveal functionality yet
- Single user testing only

---

**Ready to deploy!** Upload to GitHub and test on your phone. 🍷
