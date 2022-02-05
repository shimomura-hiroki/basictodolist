import 'dotenv/config';

export default {
  "expo": {
    "name": "BasicTodoList",
    "slug": "BasicTodoList",
    "version": "1.0.0",
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
      "adaptiveIcon": {
        "package": "creationstack.second.BasicTodoList",
        "versionCode": 1,
        "permissions": [],
        "foregroundImage": "./assets/icon_adaptive_foreground.png",
        "backgroundImage": "./assets/icon_adaptive_background.png"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
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
