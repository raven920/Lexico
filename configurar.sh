#!/usr/bin/env sh
monaca reconfigure
npm install
cordova platform add android
monaca plugin add cordova-plugin-file
cd ./parche
git clone https://github.com/codemix/flow-runtime.git
cd flow-runtime
lerna bootstrap
patch -p1 -i ../flow-espanol.patch
npm run build
cd ..
git clone https://github.com/attaboy/react-codemirror.git
cd react-codemirror
git checkout set_options_only_if_changed
rm -rf .git
cd ../..
rm -rf node_modules/react-codemirror
mv parche/react-codemirror node_modules/
cp -rf parche/flow-runtime/packages/flow-runtime/dist/* node_modules/flow-runtime/dist/
rm -rf parche/flow-runtime
cp -rf parche/node_modules/* node_modules/
