#!/bin/bash

openapi-generator-cli generate -i https://api.istreamplanet.com/openapi.json -g javascript --skip-validate-spec -o .

git checkout -b new-release
git add .
git commit -m "New Release"
git push --set-upstream origin new-release