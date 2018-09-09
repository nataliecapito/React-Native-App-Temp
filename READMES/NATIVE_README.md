# General
## React-Native-App-Temp
- React Native - native application blank start template.

# Implementation
## react-native setup
### Make sure you install or have previously installed node && watchman && yarn.
- `brew install node` + get node.js -> https://nodejs.org/en/download/.
- `brew install watchman`
- `yarn install`

### Install the react-native command line interface.
- `npm install -g react-native-cli`

### IOS
#### Install and open Xcode.
- Note: You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

### Android
#### Install and open Android Studio.
- Note: Install Android Studio && open && choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
- `Android SDK`
- `Android SDK Platform`
- `Performance (Intel ® HAXM)`
- `Android Virtual Device`

#### Install the Android SDK.
- Note: Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 6.0 `Marshmallow` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

- Note: Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 6.0 `Marshmallow` entry, then make sure the following items are all checked:
- `Google APIs`
- `Android SDK Platform 23`
- `Intel x86 Atom_64 System Image`
- `Google APIs Intel x86 Atom_64 System Image`

- Note: Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 23.0.1 is selected.

- Note: Finally, click "Apply" to download and install the Android SDK and related build tools.

#### Configure the ANDROID_HOME environment variable.
- Note: Add the following lines to your $HOME/.bash_profile config file:
- `export ANDROID_HOME=/Users/$USER/Library/Android/sdk`
- `export PATH=$PATH:$ANDROID_HOME/tools`
- `export PATH=$PATH:$ANDROID_HOME/tools/bin`
- `export PATH=$PATH:$ANDROID_HOME/platform-tools`

#### If something goes wrong and Android doesn't run:
- `cd ./android`
- `./gradlew --debug clean build`
- See what happens...
- If nothing good, happens, run: `./gradlew --info clean build`, and see what the last 'Evaluating project' was before the run failed.
- Google that, and see how the npm-package, that is failing, is manually liked to the Android Library || check the version number if it is 'Google' related.
- Should work now, hopefully.
- If not, alrighty, here is what you can try: `Command⌘ + F` and search for the npm-package that is bugging (ex: 'react-native-router-flux'), see if it is being 'imported' in any file, if so, idk dude... BUT IF NOT: delete node_modules folder + delete package-lock.json + remove all instances from all android files, and run `npm install`, and boom it works (99.9% accuracy).

### React Native new application created (skip this if you are just setting up the environment to clone/run).
- `react-native init App`

# Running
- IOS: `npm run mobile:ios` -> simulator will popup automatically; for developer options: `Command⌘ + D`. Also you can run in Xcode, from the top menu bar, and have access to different devices to try out.
- Android: `npm run mobile:android` -> to run on the android virtual device you have to go to the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Select "Create Virtual Device...", then pick any Phone from the list and click "Next". Select the "x86 Images" tab, then look for the `Marshmallow` API Level 23, x86_64 ABI image with a Android 6.0 (Google APIs) target. Name your device, before you save, `react-native-device`. Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step; for developer options: `Command⌘ + M`. Note: After you set the above up you can run: `npm run mobile:android:run:emulator` and then `npm run mobile:android` to never have to open android studio ever again, yay.

# Building
- IOS: should do it automatically || run this to build IOS manually: `npm run mobile:ios:build` -> this may require you to drop the `main.jsbundle.meta` created into the Xcode project manually, but probably not. || `npm run mobile:ios:build:release`.
- Android: should do it automatically || run this to build Android manually: `./gradlew assembleDebug` -> this is only a debug version of the build.
