#!/bin/bash

cd cra-site
npm install
# npm run build
cd ../gatsby-site
npm install
npm run build

rm -rf ../cra-site/public/gatsby
mv public ../cra-site/public/gatsby
cd ../cra-site
npm run build
cp ../_redirects public/
# netlify deploy --dir=public --prod
