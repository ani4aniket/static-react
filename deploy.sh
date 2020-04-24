#!/bin/bash

cd cra-site
npm install
npm run build
cd ../gatsby-site
npm install
npm run build

# rm -rf ../gatsby-site/public/cra
mv public ../cra-site/public/gatsby
cd ../cra-site
cp ../_redirects public/
# netlify deploy --dir=public --prod
