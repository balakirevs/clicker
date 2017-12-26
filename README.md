## Ionic 2 Demo

## Install & Start

```bash
git clone https://github.com/balakirevs/clicker.git
cd clicker
npm install appium@latest -g  # selenium server for mobile devices
npm install                   # or `npm run reinstall` if you get an error
npm start                     # start the desktop application (ionic serve)
ionic serve -l                # To see the app rendered in all mobile platforms

ionic cordova platform add android
ionic cordova platform add ios

# Before emulating android device make sure you have created emulators based on platform 4.4.2 and API level 19.

ionic cordova emulate android --target="Nexus_API_26"  # start android application
ionic cordova emulate ios                              # start ios application
```

## Build for specific enviroment
```bash
ENV=qa ionic build android    # copying the files from /config/qa enviroment
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Run E2E (specs)
```
npm run e2e
```

## Run E2E IOS (cucumber)
```
ionic cordova platform add ios
node_modules/.bin/appium-doctor
sudo node_modules/.bin/authorize-ios
ionic cordova build ios
node_modules/.bin/appium
npm run e2e-ios
```

## Run E2E Android (specs)

```
cd ~/library/Android/Sdk/tools/bin && ./avdmanager create avd --name 'Nexus_API_25' --package 'system-images;android-25;google_apis;x86_64'  # create avd
cd ~/library/Android/Sdk/tools/bin && ./avdmanager list avd     # check available devices
cd ~/Library/Android/Sdk/tools && ./emulator -avd Device_Name   # Optional run emulator

node_modules/.bin/appium         # or appium -U emulator-5554 -p 4723 -bp 33517                       

npm run e2e-android
```

## Run E2E Cucumber (Multi capabilities)
```  
npm run e2e-cucumber
```

## Dependencies

* **@angular:** 5.1.1
* **@angular-cli**: 1.6.1
* **@ionic-angular** 3.9.2
* **@cucumber** 3.2.0
