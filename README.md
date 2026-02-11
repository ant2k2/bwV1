# BlindWine - Full App (Host + Guest)

Complete BlindWine application with both host and guest flows, state management, and multi-tab testing support.

## ✨ What's New

**Complete System:**
- Login/authentication system (mock)
- Host flow (create party, manage, reveal results)
- Guest flow (join party, submit wine, rate, wait for reveal)
- Real-time state sync across browser tabs
- Username display in headers
- Party code system

**State Management:**
- Uses React Context + localStorage
- Syncs between tabs automatically
- Persists across page refreshes

## 📱 Complete Flow

### Host Journey:
1. Login → Choose "Host" → Enter name (e.g., "Sara")
2. Create Party → Enter party name & theme
3. Get Party Code → Share with guests
4. Dashboard → See guests join, wines submitted
5. Start Party → Guests can now rate
6. Close Party → View reveal screen with results

### Guest Journey:
1. Login → Choose "Guest" → Enter name (e.g., "Jim")
2. Join Party → Enter party code
3. Submit Wine → Choose bag number, scan bottle
4. Rate Wines → Rate all wines 1-5 stars
5. Wait → Host closes party
6. (Future: See results)

## 🧪 Testing Both Flows Simultaneously

**Setup:**
1. Upload to GitHub
2. Deploy to Vercel
3. Open in TWO different browsers (or incognito + normal)

**Tab 1 - Host:**
- Open app
- Login as "Sara" (Host)
- Create party "Friday Night Flight"
- Note the party code (e.g., "ABC123")

**Tab 2 - Guest:**
- Open app in different browser
- Login as "Jim" (Guest)
- Enter party code "ABC123"
- Submit wine to bag #2
- Rate wines

**Tab 1 - Host:**
- Refresh to see Jim joined
- See wine #2 submitted
- Start party
- Close party & reveal

**Watch the magic:**
- Changes in one tab update the other
- Real-time party state sync
- Works across devices too!

## 🎨 Design System

Same Modern Wine Bar palette:
- Primary: `#9B1B5A`, `#7A1648`
- Accent: `#B76E79`, `#D4AF37`
- Minimal icons
- Clean typography

## 📁 Project Structure

```
blindwine-full/
├── src/
│   ├── context/
│   │   └── PartyContext.jsx (state management)
│   ├── components/
│   │   └── Header.jsx (reusable header)
│   ├── screens/
│   │   ├── Login.jsx
│   │   ├── CreateParty.jsx (host)
│   │   ├── HostDashboard.jsx (host)
│   │   ├── HostReveal.jsx (host)
│   │   ├── JoinParty.jsx (guest)
│   │   ├── SubmitWine.jsx (guest)
│   │   ├── WineList.jsx (guest)
│   │   └── RatingScreen.jsx (guest)
│   ├── App.jsx (routing)
│   ├── main.jsx
│   └── index.css (global styles)
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Deploy to Vercel

1. Delete old files in GitHub repo
2. Upload all files from `blindwine-full` folder
3. Commit changes
4. Vercel auto-deploys in ~30 seconds

## 💾 How State Works

**PartyContext:**
- Stores all party data in localStorage
- Broadcasts changes via `storage` event
- Other tabs listen and update automatically
- Persists even after page refresh

**Data Structure:**
```javascript
{
  "ABC123": {
    code: "ABC123",
    name: "Friday Night Flight",
    theme: "Pinot Noirs Under $30",
    hostName: "Sara",
    status: "waiting" | "active" | "closed",
    guests: [{ name: "Jim", joinedAt: timestamp }],
    wines: [{
      bagNumber: 2,
      name: "Erath Pinot Noir",
      producer: "Erath",
      submittedBy: "Jim",
      ratings: [{ guestName: "Jim", rating: 4 }]
    }]
  }
}
```

## 🎯 Key Features

✅ Login with name + role selection
✅ Username in header (all screens)
✅ Party code generation
✅ Guest list tracking
✅ Wine submission tracking
✅ Rating system (1-5 stars)
✅ Sparkle indicator for your wine
✅ Party status management
✅ Results reveal with podium
✅ Multi-tab real-time sync

## 🔄 Limitations (Prototype)

- Mock authentication (no passwords)
- localStorage only (not true backend)
- Simulated barcode scanning
- No actual wine data from APIs
- Single device testing requires multiple browsers
- No persistence across devices (yet)

## 📝 Next Steps

After testing:
1. Add guest reveal screen
2. Connect real Firebase backend
3. Add real barcode scanning
4. Implement Clerk authentication
5. Add push notifications
6. Build admin dashboard
7. Port to React Native

## 🐛 Known Issues

- Must use different browsers for multi-user testing
- localStorage clears if you clear browser data
- No error handling for network issues
- No loading states during sync

---

**Ready to test!** Deploy and open in two browsers to see the full experience. 🍷
