## Ionic 2 Demo

## Install & Start

```bash
git clone https://github.com/balakirevs/clicker.git
cd clicker
npm install appium@1.5.2 -g or npm install appium@latest -g  # selenium server for mobile devices
npm install       # or `npm run reinstall` if you get an error
npm start         # start the desktop application (ionic serve)
ionic serve -l    # To see the app rendered in all mobile platforms

ionic platform add android
ionic platform add ios

# Before emulating android device make sure you have created emulators based on platform 4.4.2 and API level 19.

ionic emulate android  # start android application
ionic emulate ios      # start ios application
```

## Build for specific enviroment
```bash
ENV=qa ionic build android    # copying the files from /config/qa enviroment
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Debug Unit tests
```bash
npm run karma    # start karma in debug mode: multi run Chrome, hit `debug` to get going.
```

## Run E2E, Android & IOS
```
android avd  # run android emulator
adb devices  # check what emulator devices are running

appium -U emulator-5554 -p 8888 -bp 33517 or node_modules/.bin/appium

npm run e2e
npm run e2e-android
npm run e2e-ios
npm run e2e-cucumber
```

## Dependencies

* **Angular:** 2.2.1
* **angular-cli**: 1.0.0-beta.25-5
* **Ionic:** 2.0.0-rc.5

## Note

* **Ionic 2** does not currently support **Firefox**.
