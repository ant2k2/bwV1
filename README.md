# BlindWine Guest Interface - Prototype

Modern wine party aesthetic with purple/magenta theme and thin sans-serif fonts.

## 🎨 Screens Included

1. **JoinParty** - Enter party code to join
2. **SubmitWine** - Choose bag number & scan wine bottle
3. **WineList** - View all wines and track rating progress
4. **RatingScreen** - Rate wine on 1-5 scale with slider
5. **RevealScreen** - Dramatic results reveal with podium display

## 🚀 Deployment to Vercel

### Prerequisites
- GitHub account (you have: ant2k2)
- Vercel account (connected to GitHub)
- Your repo: `ant2k2/bwV1`

### Step-by-Step Deployment

#### 1. Upload Files to GitHub

1. Go to https://github.com/ant2k2/bwV1
2. Click "Add file" → "Upload files"
3. Drag and drop ALL files from this project folder
4. Click "Commit changes"

**Files to upload:**
- package.json
- vite.config.js
- index.html
- src/ (entire folder with all files inside)

#### 2. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `ant2k2/bwV1`
4. Vercel will auto-detect React/Vite settings
5. Click "Deploy"
6. Wait ~60 seconds

#### 3. Get Your Live URL

Vercel will give you a URL like:
`https://blindwine-prototype.vercel.app`

Share this with anyone to test!

### Updating the App

When I give you new files:
1. Upload new files to GitHub (same process)
2. Vercel automatically redeploys in 30 seconds
3. Refresh your browser to see changes

## 📱 Testing the App

### Flow to Test:

1. **Join Party**
   - Open URL on phone/computer
   - Enter: PARTY123
   - Click "Pour In"

2. **Submit Your Wine**
   - Choose any available bag (1-10)
   - Click "Tap to Scan Barcode"
   - Select any wine from list
   - Click "Cork It!"

3. **Wine List**
   - See all 7 wines
   - Your wine is marked "✨ Yours"
   - Click any wine to rate it

4. **Rate Wines**
   - Use slider or tap stars
   - Slide 1-5 rating
   - Click "Save Rating"

5. **View Results**
   - Once all wines rated, click "Preview Results"
   - See podium with top 3
   - Scroll for complete rankings

### Test with Multiple People:

Everyone can open the same URL and test simultaneously!

## 🎨 Design Details

**Color Palette:**
- Primary Magenta: #C71585
- Primary Purple: #8B4789
- Wine Red: #722F37
- Accent Coral: #FF6B9D

**Fonts:**
- Headers: Cormorant Garamond (serif, elegant)
- Body: Work Sans (sans-serif, thin weights)

**Animations:**
- Fade in, slide up, scale in effects
- Staggered animations on lists
- Smooth hover states
- Floating bottle animations

## 📋 Mock Data

The app uses simulated party data:
- Party: "Friday Night Flight"
- Theme: "Pinot Noirs Under $30"
- 7 wines pre-loaded
- Bag #2 is marked as "your wine"

## 🔧 Local Development (Optional)

If you want to run locally:

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📸 Screenshots

(Screenshots will be added in next message)

## ✨ Features Implemented

✅ Mobile-first responsive design
✅ Modern wine party aesthetic
✅ Smooth animations & transitions
✅ Simulated barcode scanning
✅ 1-5 star rating system
✅ Dramatic reveal with podium
✅ "Your wine" tracking
✅ Progress indicators
✅ Rating progress tracking

## 🔮 Not Included (Phase 2)

- Real Firebase backend
- Actual barcode scanning
- Host controls
- Admin dashboard
- Wine cellar management
- Push notifications
- Multi-party support

## 🆘 Troubleshooting

**App doesn't load:**
- Check Vercel deployment status
- Clear browser cache
- Try incognito mode

**Looks broken on mobile:**
- Make sure viewport meta tag is in index.html
- Test on real device, not just dev tools

**Changes not showing:**
- Wait 30-60 seconds after GitHub upload
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Check Vercel deployment completed

## 📝 Providing Feedback

Reference screens by filename:
- **JoinParty** = JoinParty.jsx
- **SubmitWine** = SubmitWine.jsx
- **WineList** = WineList.jsx
- **RatingScreen** = RatingScreen.jsx
- **RevealScreen** = RevealScreen.jsx

Example feedback:
"On RatingScreen, make the slider bigger"
"On WineList, change the card background color"
"On RevealScreen, podium too small on mobile"
