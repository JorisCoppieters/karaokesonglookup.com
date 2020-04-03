#!/bin/bash

set -e # Bail on first error

#npm install -g @angular/cli
#npm install -g npm-check-updates

echo "#"
echo "# Running ng update (see https://update.angular.io/#7.2:9.0)"
echo "#"

ng update

echo "#"
echo "# Running npm-check-updates"
echo "#"

ncu -u

echo "#"
echo "# Running install"
echo "#"

npm install

echo "#"
echo "# Running audit fix"
echo "#"

npm audit fix

echo "#"
echo "# Running build (dev)"
echo "#"

ng build

echo "#"
echo "# Running build (prod)"
echo "#"

ng build --prod
