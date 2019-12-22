# Gekko [![npm](https://img.shields.io/npm/dm/gekko.svg)]() [![Build Status](https://travis-ci.org/askmike/gekko.png)](https://travis-ci.org/askmike/gekko) [![Build status](https://ci.appveyor.com/api/projects/status/github/askmike/gekko?branch=stable&svg=true)](https://ci.appveyor.com/project/askmike/gekko)

![Gordon Gekko](http://mikevanrossum.nl/static/gekko.jpg)

*The most valuable commodity I know of is information.*

-Gordon Gekko

Gekko is a Bitcoin TA trading and backtesting platform that connects to popular Bitcoin exchanges. It is written in JavaScript and runs on [Node.js](http://nodejs.org).

*Use Gekko at your own risk.*

## Documentation

See [the documentation website](https://gekko.wizb.it/docs/introduction/about_gekko.html).

## Installation & Usage

Gekko requires [nodejs](https://nodejs.org/en/) to be installed. Go ahead and install this if it's not already (Gekko requires at least version 8.11.2). We advice to download the current LTS.

The recommended way of downloading Gekko is by using git. This makes keeping Gekko up to date a lot easier. Run this in a terminal:

```
git clone git://github.com/askmike/gekko.git
cd gekko
```

Once you have Gekko downloaded you need to install the dependencies, open your terminal and navigate to the gekko folder and run:

```
CPPFLAGS="$CPPFLAGS -fPIC" npm install --build-from-source sqlite3
npm install --only=production
```

NOTE: You may see a vulnerability warning from NPM, if you run npm audit with --force, Gekko will break. See [here](https://github.com/askmike/gekko/issues/2585#issuecomment-428450997).

You also need to install Gekko Broker's dependencies, run:

```
cd exchange
npm install --only=production
cd ..
```

After all the above you can start Gekko by running the following in your terminal:

```
node gekko --ui
```

For additional instructions, see [the installing Gekko doc](https://gekko.wizb.it/docs/installation/installing_gekko.html).

## Community & Support

Gekko has [a forum](https://forum.gekko.wizb.it/) that is the place for discussions on using Gekko, automated trading and exchanges. In case you rather want to chat in realtime about Gekko feel free to join the [Gekko Support Discord](https://discord.gg/26wMygt).

## Final

If Gekko helped you in any way, you can always leave me a tip at (BTC) 13r1jyivitShUiv9FJvjLH7Nh1ZZptumwW
