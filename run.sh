#!/bin/bash

set -e # Bail on first error

#npm install -g @angular/cli@7.3.0

echo "#"
echo "# Formatting files"
echo "#"

npm run format

echo "#"
echo "# Running local server"
echo "#"

npm serve
