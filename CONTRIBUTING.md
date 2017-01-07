We're intentionally leaving our CONTRIBUTING.md file on the slim side.  "Why", you ask.  **Great question!**

We want everyone to be able to contribute, even if it's just to add contribution guidelines.  What follows are some general guidelines of what the original contributors would like to see with regard to subsequent contributions.  Please feel free to flesh out any section that you think needs it!  :smile:

* **Contributions** of all sorts are welcome and encouraged! :thumbsup:
* The [wiki](https://github.com/LunaMinds/code-cafe/wiki) serves as the **general documentation**.
* Along the same vain as this CONTRIBUTING.md, we haven't fleshed out the **[PULL_REQUEST_TEMPLATE.md](https://github.com/LunaMinds/code-cafe/blob/master/PULL_REQUEST_TEMPLATE.md) or [ISSUE_TEMPLATE.md](https://github.com/LunaMinds/code-cafe/blob/master/ISSUE_TEMPLATE.md)**.  They could use some :heart:ing attention.
* We haven't selected a **license**.  We want the underlying code to be open source, and –at this point– we don't want others to be able to profit off of the code.
* The **tech stack**, and goals for the tech stack, are documented in the latest [COLOPHON.md](https://github.com/LunaMinds/code-cafe/blob/master/COLOPHON.md) while the latest active list is [package.json](https://github.com/LunaMinds/code-cafe/blob/master/package.json).
* We've tried to automate all the things.  **To work with the source code** you need [npm](https://docs.npmjs.com/) (and we highly recommend a version manager such as [nvm](https://github.com/creationix/nvm), [nvm-windows](https://github.com/coreybutler/nvm-windows), or [nodist](https://github.com/marcelklehr/nodist)) and then you should be able to run `npm install LunaMinds/code-cafe`.  We've provided several additional npm scripts including: `npm run unit-tests`, `npm run lint`, and `npm run build`.  (See the 'package.json' in your copy of the repo for currently available scripts.)
* We're using a [customized version](https://github.com/LunaMinds/code-cafe/blob/master/.eslintrc.js) of [feross](http://feross.org/)' **[Standard](https://github.com/feross/eslint-config-standard)**[ - ESLint Shareable Config](https://github.com/feross/eslint-config-standard).
* **Pull requests** are welcome and encouraged!  
  * Please note that all pull requests must include related tests and [JSDoc](http://usejsdoc.org/index.html)umentation, pass Travis-CI tests, and will be reviewed by an approved contributor before they will be merged into the 'master' branch.
  * **Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
* Ask any **questions**, post any **problems**, and make **feature requests** in [issues](https://github.com/LunaMinds/code-cafe/issues).  (You can even post an issue requesting that we activate a [Gitter channel](https://gitter.im) for chatting.)

## Setting up your local development environment

NOTE: The following instructions assume you already have node and git installed locally.

1. With the following exception, follow the [instructions to locally install Selenium for Nightwatch.js](http://nightwatchjs.org/getingstarted#selenium-server-setup)   
**EXCEPTION: The `selenium-server-standalone-{VERSION}.jar` should be in the _user's home directory_ (i.e. `~/selenium-server-standalone-{VERSION}.jar`)**

2. In github, fork the [https://github.com/LunaMinds/code-cafe](https://github.com/LunaMinds/code-cafe#fork-destination-box) repository.

3. `git clone` your newly forked version.

4. Install nightwatch globally via `npm install -g nightwatch` _OR_ `yarn add global nightwatch`.

5. Install all packages via `npm install` _OR_ `yarn`.
