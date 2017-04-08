#!/bin/bash
npm install
cordova platform add android
monaca plugin add cordova-plugin-file
cd ./parche
git clone https://github.com/attaboy/react-codemirror.git
cd react-codemirror
git checkout set_options_only_if_changed
cd ../..
rm -rf node_modules/react-codemirror
mv parche/react-codemirror node_modules/
cp -rf parche/node_modules/* node_modules/
monaca transpile
