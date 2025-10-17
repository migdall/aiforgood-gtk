# Get To Know

> Explore cities like never before. Discover hidden gems, connect with local culture & fellow travelers, collect badges for real world prizes—all before you even visit IRL!

A GTA-style third-person walking simulator built with Three.js and Google's Photorealistic 3D Tiles. Explore Huntington Park, Los Angeles in stunning 3D detail, complete quests, collect badges, and connect with other players.

## 🌟 Features

- **🎮 3D City Exploration** - Navigate through a photorealistic 3D recreation of Huntington Park using Google's 3D Tiles
- **🗺️ Quest System** - Discover landmarks and points of interest across the city
- **🏆 Badge Collection** - Earn badges by completing quests and exploring locations
- **💬 Real-time Chat** - Connect with other players exploring the city
- **👥 Online Players Panel** - See who else is currently exploring
- **🎥 Video Content** - Watch curated YouTube videos about discovered locations
- **🔐 User Profiles** - Personalized profiles with badge collections and usernames
- **📱 Responsive Design** - Optimized for both desktop and mobile devices

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js with @googlemaps/three integration
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Lovable Cloud (Supabase)
- **Authentication**: Email/password with session management
- **Real-time Features**: Supabase Realtime for chat and player presence
- **Build Tool**: Vite
- **UI Components**: Radix UI with shadcn/ui

## 🎮 Gameplay

### Controls
- **W** - Move Forward
- **S** - Move Backward
- **A** - Move Left (Strafe)
- **D** - Move Right (Strafe)

### Quest Locations
Explore Huntington Park and discover these landmarks:
- 🏛️ **Huntington Park City Hall** - Historic government building and community center
- 🌳 **Salt Lake Park** - Community park with playground and sports facilities
- 🛍️ **Pacific Boulevard** - Main street with local shops and restaurants

Walk close to each location to discover it and earn badges!

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher) and npm installed
- A Google Maps API key with the following APIs enabled:
  - Maps JavaScript API
  - Map Tiles API
- A Map ID with 3D tiles enabled

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Google Maps**
   
   Update the following files with your credentials:
   
   **`src/components/GoogleMapsLoader.tsx`**
   ```tsx
   export const GoogleMapsLoader = ({ apiKey = 'YOUR_API_KEY_HERE', children }: GoogleMapsLoaderProps) => {
   ```
   
   **`src/components/GameWorld.tsx`**
   ```tsx
   const MAP_ID = 'YOUR_MAP_ID_HERE';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

## 🗺️ Getting Your Google Maps Credentials

### Step 1: Get API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable these APIs:
   - **Maps JavaScript API**
   - **Map Tiles API**
4. Create credentials → API Key
5. (Optional but recommended) Restrict your API key to:
   - HTTP referrers (websites)
   - Specific APIs (Maps JavaScript API, Map Tiles API)

### Step 2: Create Map ID with 3D Enabled
1. In Google Cloud Console, go to **Maps** → **Map Management**
2. Click **Create Map ID**
3. Name it (e.g., "LA Walker Map")
4. Under **Map type**, select **JavaScript**
5. Under **3D**, toggle it **ON**
6. Click **Save**
7. Copy your Map ID

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── GameWorld.tsx    # Main 3D game scene
│   │   ├── ChatPanel.tsx    # Real-time chat interface
│   │   ├── BadgeDisplay.tsx # Badge collection display
│   │   └── ui/              # Reusable UI components
│   ├── pages/
│   │   ├── Index.tsx        # Main game page
│   │   ├── Auth.tsx         # Authentication page
│   │   └── NotFound.tsx     # 404 page
│   ├── data/
│   │   └── questLocations.ts # Quest location definitions
│   ├── lib/
│   │   ├── soundEffects.ts  # Game sound effects
│   │   └── utils.ts         # Utility functions
│   ├── integrations/
│   │   └── supabase/        # Backend integration
│   └── index.css            # Design system & global styles
├── supabase/
│   └── functions/           # Edge functions
└── public/                  # Static assets
```

## 🎨 Customization

### Change the Location
Edit the coordinates in `src/components/GameWorld.tsx`:
```tsx
const HUNTINGTON_PARK = { lat: 33.982, lng: -118.225 };
```

### Add More Quest Locations
Add new locations to `src/data/questLocations.ts`:
```tsx
{
  id: 'unique-id',
  name: "Location Name",
  position: { lat: 33.xxx, lng: -118.xxx },
  description: "Description of the location",
  placeId: "Google_Place_ID",
  badge: "🎯",
  category: 'landmark',
  videoUrl: "https://youtube.com/..."
}
```

### Customize Character Movement
Adjust movement speed in `src/components/GameWorld.tsx`:
```tsx
const MOVEMENT_SPEED = 0.00005; // Decrease for slower movement
```

## 🔐 Authentication

The app includes a full authentication system with:
- Email/password sign up and login
- Secure session management
- User profiles with customizable usernames
- Badge collection persistence

First-time users will be prompted to create an account on the `/auth` page.

## 💬 Real-time Features

- **Chat System**: Send messages visible to all online players
- **Player Presence**: See who else is currently exploring the city
- **Badge Updates**: See badges in real-time as you discover locations

## 🚢 Deployment

Deploy your app directly from Lovable:
1. Click the **Publish** button in the top right
2. Your app will be deployed to a Lovable subdomain
3. (Optional) Connect a custom domain in Settings → Domains

## 🐛 Troubleshooting

**Gray/blank screen**
- Verify your Map ID has "3D" enabled in Google Cloud Console
- Check that both API key and Map ID are correctly configured

**"Configuration Required" error**
- Ensure you've replaced both `YOUR_API_KEY_HERE` and `YOUR_MAP_ID_HERE`

**Character falls through ground**
- The raycaster may need adjustment. Try increasing initial character height in `GameWorld.tsx`

**Slow loading/performance**
- Google 3D Tiles are large files. Try:
  - Reducing initial zoom level
  - Checking your internet connection
  - Moving to a less detailed area

**Authentication issues**
- Check browser console for errors
- Verify you're connected to the internet
- Try clearing browser cache and cookies

## 💰 API Usage & Costs

Google Maps Platform includes a monthly free tier of $200 credit:
- Map Tiles API: ~28,000 3D tile loads per month
- Maps JavaScript API: ~28,000 map loads per month

Monitor your usage in the Google Cloud Console to avoid unexpected charges.

## 🎯 Future Enhancements

- [ ] Add custom GLTF character models
- [ ] Implement character animations
- [ ] Add collision detection with buildings
- [ ] Create a mini-map overlay
- [ ] Add sound effects for discoveries
- [ ] Implement leaderboards
- [ ] Add more cities to explore
- [ ] Create mobile app versions

## 📚 Resources

- [Google 3D Tiles Documentation](https://developers.google.com/maps/documentation/tile/3d-tiles)
- [Three.js Documentation](https://threejs.org/docs/)
- [@googlemaps/three on npm](https://www.npmjs.com/package/@googlemaps/three)
- [Lovable Documentation](https://docs.lovable.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is built with Lovable and is available for personal and educational use.

---

**Project URL**: https://gettoknow.city

Built with 💚 using Lovable
