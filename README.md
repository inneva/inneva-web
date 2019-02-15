# inneva-web
[![Build status](https://travis-ci.org/inneva/inneva-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

Source code for inneva.se, built using React with Contentful as backend.

## Setup local environment
First, make sure you have [Node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/) installed.

Then, run the following:

```
git clone git@github.com:inneva/inneva-web.git && cd inneva-web
yarn
yarn start
```
The site can be found at [localhost:3000](http://localhost:3000).

## Contributing
First, make sure to create an [issue]() describing the feature you will work on and label it accordingly. It should also be tagged with the appropriate milestone and project. Then, run the following:

```
git checkout master
git pull
git checkout -b feature/<feature-name>
```

After finishing all your work, submit a Pull Request to master and select a reviewer to look over the code. Travis
will build the project automatically whenever the PR is opened and will block merging until the PR is reviewed and all checks pass.