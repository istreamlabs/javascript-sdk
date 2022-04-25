# Release Process

Here is the process for making new releases:

```sh
# Generate the latest SDK
$ npm run update

# Confirm the changes are reasonable/expected
$ git diff

# Commit the changes to a new branch
$ git checkout release-1.2.3
$ git add .
$ git commit -m 'feat: update from latest OpenAPI'
$ git push origin HEAD
```

Now head to https://github.com/istreamlabs/javascript-sdk/pulls and create a pull request. Once reviewed and merged:

```sh
# Get latest main branch code for release.
$ git checkout main
$ git pull

# Update the NPM package version to make the release
$ npm version 1.2.3

# Create the tarball
$ npm pack

# If everything worked as expected, then push the commit/tags
$ git push --atomic origin main v1.2.3
```

Now you can install, copy, or share `istreamplanet-isp-1.2.3.tgz`. It can also be pushed into various private npm repositories as needed.
