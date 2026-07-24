# CoolBlox Official App

**Package:** `com.coolblox.official`
**Name:** CoolBlox

## How to Build as Android App

1. Use **Capacitor** or **React Native Web** wrapper
2. Or Progressive Web App (PWA) → Trusted Web Activity (TWA)

```bash
# Example with Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init --web-dir=frontend/out --name="CoolBlox" --id="com.coolblox.official"
```

Add to `CoolBloxProject/android/` folder for native build.

The web version at `frontend/` is fully responsive and ready for mobile.