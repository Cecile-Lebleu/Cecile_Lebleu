---
path: gatsby-environment
date: 2020-01-15
title: Dev Setup for Gatsby
description: How to set up your local development environment to work with Gatsby. Great for beginners, or for setting up a new computer or development workstation.
---

## Setting up the dev environment

Setting up your development environment makes your workflow faster. Let's check that our setup is optimized and up-to-date for building sites with Gatsby.

> I use a Mac. If you use Linux, you can follow along. If you use Windows, this process is probably very different.

### Check that everything is installed and up to date

There's a few things we need to make sure we have installed. We can check that they are installed by requesting the version for each — if it is installed, a version number will show up. If it's not installed, then follow the directions for each.

Let's open up our terminal!

> Chances are, if you're already a developer, you already have most (or all) of these installed. If you do, then go ahead and update them.

#### Homebrew

Hombrew is a package manager — it helps install all the necessary things we need to use.

* Version: `brew -v`
* Update: `brew update`
* To install: [brew.sh](https://brew.sh)

#### Xcode Command Line Tools

* Version: `xcode-select -v`
* Update: `xcode-select --update`
* To install: `xcode-select --install`

#### Node

Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. We install it mainly to get NPM, Node's package manager.

* Version: `node -v`
* Update: `brew update node`
* To install: `brew install node` or [nodejs.org](https://nodejs.org/en/)

#### NPM

Node Package Manager (usually just npm) is installed with Node, so if you're following along, you already have it.

* Version: `npm --version`
* Update: `brew update npm`

#### Git

Git is a version control system. It helps manage changes in your project.

* Version: `git --version`
* Update: `brew update git`
* To install: [git-scm.com](https://git-scm.com)

#### Gatsby

You'll probably need Gatsby to be able to build websites with Gatsby.

* Help: `gatsby --help`
* Install: `npm install -g gatsby-cli`

## Starter Site

Let's create a first starter site.

```bash
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

This will install the starter `Hello, World!` site in the `hello-world` directory it will create.

```bash
cd hello-world
gatsby develop
```

Then, we move into `hello-world`, and start up the development server. This development server is live-updated each time you save any files.

* `localhost:8000` is the default address where you can view the server.
* `gatsby develop` starts the development server.
* `control + c` stops the development server.

### Recap

Installing a starter follows the syntax:

```bash
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

Then open up `localhost:8000` to view locally.

## Build

`gatsby develop` runs a local development server, and on save, re- builds the necessary elements. To publish the site, we need to compile it.

`gatsby build` will compile all the files into the folder `[directory]/public`. This is the folder that will be copied or deployed to a hosting provider.
