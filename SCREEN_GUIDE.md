# BlindWine Guest Interface - Screen Guide

## Screen Flow

```
1. JoinParty
   ↓ (Enter PARTY123)
2. SubmitWine
   ↓ (Choose bag, scan wine)
3. WineList
   ↓ (Tap wine to rate)
4. RatingScreen
   ↓ (Rate 1-5, save)
   Back to WineList
   ↓ (Once all rated)
5. RevealScreen
```

---

## 1. JoinParty Screen
**File:** `src/screens/JoinParty.jsx`

### What it shows:
- BlindWine logo (🍷)
- App title with gradient text
- "Taste. Rate. Reveal." tagline
- Party code input field
- "Pour In" button
- Feature pills (Anonymous Tasting, Rate & Compare, See Winner)

### Colors:
- Soft gradient background (cream/pink)
- Magenta/purple gradient on title
- White card with shadow

### Animations:
- Logo fades in
- Card slides up
- Pills stagger in

### To test:
- Type PARTY123 (any code works)
- Click "Pour In"

---

## 2. SubmitWine Screen
**File:** `src/screens/SubmitWine.jsx`

### What it shows:
- Purple gradient header with party name
- Step 1: Choose bag number (1-10 grid)
- Step 2: Scan bottle (camera button)
- Wine preview card (after selecting)
- "Cork It!" button

### Features:
- Used bags are grayed out
- Simulated barcode scanning (dropdown list)
- Selected bag highlights in magenta
- Step numbers in top-right corners

### Animations:
- Bag grid fades in with stagger
- Wine preview scales in
- Submit button slides up

### To test:
- Click any available bag (1-10)
- Click "Tap to Scan Barcode"
- Select any wine from modal
- Click "Cork It!"

---

## 3. WineList Screen
**File:** `src/screens/WineList.jsx`

### What it shows:
- Purple gradient header
- Progress bar (X of 7 wines rated)
- Grid of wine cards (numbered 1-7)
- Each card shows bag number and rating status
- Completion banner when all rated

### Card states:
- **Unrated:** Shows "Rate this Wine →" button
- **Rated:** Shows star rating + "Edit Rating" button
- **Your wine:** Shows "✨ Yours" badge

### Animations:
- Cards fade in with stagger
- Hover lift effect
- Completion banner slides up

### To test:
- Click any wine card to rate it
- See progress update after rating
- Once all rated, "Preview Results" button appears

---

## 4. RatingScreen
**File:** `src/screens/RatingScreen.jsx`

### What it shows:
- Floating wine bottle animation
- Bag number badge
- "Wine #X" title
- "How good is this wine?" heading
- Interactive slider (1-5)
- 5 clickable stars
- Rating description text
- "Save Rating" button

### Features:
- Slider fills with gradient as you move it
- Stars update when clicking or sliding
- Descriptive text changes per rating
- "Your wine" indicator if it's yours

### Rating descriptions:
1. "Not my style"
2. "Could be better"  
3. "Pretty good"
4. "Really enjoyed it"
5. "Absolutely stellar!"

### Animations:
- Bottle floats up and down
- Stars scale on hover/active
- Smooth slider transitions

### To test:
- Drag slider or click stars
- Click "Save Rating"
- Returns to wine list

---

## 5. RevealScreen
**File:** `src/screens/RevealScreen.jsx`

### What it shows:
- Dark background (dramatic!)
- "🍾 The Results Are In!" header
- Your wine result badge
- **Podium:** Top 3 wines with medals
- Complete rankings list below
- "Back to Wine List" button

### Podium features:
- 1st place (center): Gold medal, larger, special styling
- 2nd place (left): Silver medal
- 3rd place (right): Bronze medal
- Each shows wine name, producer, vintage, score

### Rankings list:
- All wines ranked 1-7
- Medal emojis for top 3
- Your wine highlighted in magenta
- Shows average score

### Animations:
- Medals bounce in
- Podium scales in with stagger
- Rankings fade in
- Floating winner bottle

### To test:
- Auto-loads with reveal
- Scroll to see all rankings
- Your wine (#2 Erath) is highlighted
- Click "Back to Wine List"

---

## Design System

### Typography:
- **Headers:** Cormorant Garamond (serif, elegant)
- **Body:** Work Sans (sans-serif, light/thin weights)
- Font weights: 200-600

### Colors:
- Primary Magenta: `#C71585`
- Primary Purple: `#8B4789`
- Wine Red: `#722F37`
- Accent Coral: `#FF6B9D`
- Background White: `#FAFAFA`
- Background Cream: `#F5F1ED`
- Text Dark: `#2D2D2D`
- Text Muted: `#6B6B6B`

### Spacing:
- Card padding: 24-40px
- Grid gaps: 12-16px
- Button padding: 18-20px
- Border radius: 12-24px (rounded)

### Shadows:
- Soft: `0 2px 20px rgba(199, 21, 133, 0.08)`
- Hover: `0 4px 30px rgba(199, 21, 133, 0.15)`

---

## Mobile Optimization

All screens designed mobile-first:
- Single column layouts
- Thumb-friendly tap targets
- Minimal scrolling
- Large, clear text
- Easy-to-use sliders/buttons

Breakpoint: 480px
- Smaller fonts on tiny screens
- Adjusted grid columns
- Tighter spacing

---

## Providing Feedback

Reference screens by name:

**Example:**
- "On **JoinParty**, make the logo bigger"
- "On **WineList**, cards too small on mobile"
- "On **RatingScreen**, slider hard to use"
- "On **RevealScreen**, podium doesn't fit on phone"

**For colors:**
- Reference by name (Primary Magenta, etc.)
- Or provide hex code

**For spacing:**
- "Too tight" / "Too loose"
- "Needs more padding"
- "Gap too large"

**For animations:**
- "Too fast" / "Too slow"
- "Remove animation on X"
- "Add animation to Y"

---

## Mock Data Used

**Party Details:**
- Name: "Friday Night Flight"
- Theme: "Pinot Noirs Under $30"
- 7 wines total

**Your Wine:**
- Bag #2: Erath Pinot Noir
- Ranks 6th in results

**Top 3:**
1. A to Z Pinot Noir (Bag #5) - 4.8
2. La Crema Pinot Noir (Bag #1) - 4.3
3. Belle Glos (Bag #6) - 4.1

---

## Files You Can Edit

All screen files are in `src/screens/`:
- JoinParty.jsx + JoinParty.css
- SubmitWine.jsx + SubmitWine.css
- WineList.jsx + WineList.css
- RatingScreen.jsx + RatingScreen.css
- RevealScreen.jsx + RevealScreen.css

Global styles: `src/index.css`
App config: `src/App.jsx`
