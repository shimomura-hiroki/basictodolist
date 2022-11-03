import 'dotenv/config';

export default {
  "expo": {
    "name": "BasicTodoList",
    "slug": "BasicTodoList",
    "version": "1.0.0",
    "privacy": "unlisted",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "creationstack.second.BasicTodoList",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "creationstack.second.BasicTodoList",
      "googleServicesFile": "./google-services.json",
      "versionCode": 2,
      "permissions": [],
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon_adaptive_foreground.png",
        "backgroundImage": "./assets/icon_adaptive_background.png"
      }
    },
    "web": {
      "favicon": "./assets/images/favicon.png",
      "config": {
        "firebase": {
          apiKey: "AIzaSyCEKeMcQQtAxI1L6ai_AtM8ZQrKJWtaqvg",
          authDomain: "basictodolist-4b2b4.firebaseapp.com",
          projectId: "basictodolist-4b2b4",
          storageBucket: "basictodolist-4b2b4.appspot.com",
          messagingSenderId: "147427468386",
          appId: "1:147427468386:web:674271d82c46b441dc9d3b",
          measurementId: "G-GWX34C8PMB"
        }
      }
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
