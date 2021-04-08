# This is sample application to test iProov Biometrics SDK on react-native-webview
demo directory is copied from https://github.com/iProov/web/tree/master/demo

## Dependencies needed (not exhaustive list)
1. node
2. Xcode (with simulator and Xcode command line tools)
3. CocoaPods

## Installation
1. `npm ci`
2. `cd ios && pod install && cd ..`

## Things to do
1. Create `.env` inside `demo` directory (see `.env.example` for a template.)
2. `bash run.sh` inside `demo` directory to bring up the docker container for demo (default port number: 8080)
3. `npm run ios` to run application on iOS simulator
4. Select `Open WebView` button at Homepage to open up the webview and start your debugging
5. Validate the text below `CREATE TOKEN` button says 'Device supported: false; permission granted: true'
