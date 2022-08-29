<!--
SPDX-FileCopyrightText: 2022 Digital Dasein <https://digitaldasein.org/>
SPDX-FileCopyrightText: 2022 Gerben Peeters <gerben@digitaldasein.org>
SPDX-FileCopyrightText: 2022 Senne Van Baelen <senne@digitaldasein.org>

SPDX-License-Identifier: MIT
-->

# libcompono

[![REUSE 
status](https://api.reuse.software/badge/github.com/digitaldasein/libcompono)](https://api.reuse.software/info/github.com/digitaldasein/libcompono)
[![pipeline](https://github.com/digitaldasein/libcompono/actions/workflows/build.yml/badge.svg)](https://github.com/digitaldasein/libcompono/actions/workflows/build.yml)

`libcompono` is a JavaScript library providing <b>web components</b> to be used 
primarily in <b>HTML presentations</b>.  All 
[`dd-web-components`](rttps://github.com/digitaldasein) are structured as 
*separate* [open-wc](https://open-wc.org/) projects, that is, they can be 
**built**, **tested** and **run** (including standalone demos) **separately**.

For <b>examples</b>, check [below](#examples)!

## Submodules

Since these components are the fundamental blocks for the optimised, 
production-ready, top-level `libcompono` library, they are included as **git 
submodules** in the project.  To **initialise** and/or **update** all 
submodules, run:

```sh
git submodule update --init --recursive
```

For also pulling the latest (remote) commits of the submods:

```sh
git submodule update --init --recursive --remote --merge
```

A general alias for initialising and/or updating to latest commit:

```sh
yarn submods
```

To build all production-ready components _and_ the corresponding `libcompono` 
library, run:

```sh
yarn build
```

## Docs

Check out documentation for all included components:

- [dd-grid](https://digitaldasein.github.io/dd-grid/docs/classes/DdGrid.html)
- [dd-code](https://digitaldasein.github.io/dd-code/docs/classes/DdCode.html)
- [dd-footer](https://digitaldasein.github.io/dd-footer/docs/classes/DdFooter.html)
- [dd-titlepage](https://digitaldasein.github.io/dd-titlepage/docs/classes/DdTitlepage.html)
- [dd-slide](https://digitaldasein.github.io/dd-slide/docs/classes/DdSlide.html)
- [dd-slide-collection](https://digitaldasein.github.io/dd-slide-collection/docs/classes/DdSlideCollection.html)

## npm package

The package 
[`@digitaldasein/libcompono`](https://www.npmjs.com/package/@digitaldasein/compono) 
merely includes the integrated `libcompono` library, no separate web 
components.

```sh
npm install @digitaldasein/libcompono
```

or

```sh
yarn add @digitaldasein/libcompono
```

## Download

You can also 
[<b>download</b>]() 
the bundled version of this library directly.

## Development

### Standalone web components

See the associated projects for more information:

- [dd-grid](https://github.com/digitaldasein/dd-grid)
- [dd-code](https://github.com/digitaldasein/dd-code)
- [dd-footer](https://github.com/digitaldasein/dd-footer)
- [dd-titlepage](https://github.com/digitaldasein/dd-titlepage)
- [dd-slide](https://github.com/digitaldasein/dd-slide)
- [dd-slide-collection](https://github.com/digitaldasein/dd-slide-collection)

## Production

### Fully integrated, top-level library 

Build integrated `libcompono` library for production:

```
yarn build:libcompono:prod
```

### Standalone components

As recommended by the [Open Web Components best 
practices](https://open-wc.org/docs/building/overview/), the building step is 
best performed in projects which deploy the final result to production, such as 
apps or websites.  As stated on their website: "This is where you can make the 
best decisions about supported browsers and optimizations.".

The components in this library can be used in line with this recommendation, 
that is, as ES (dev) 
[modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).  
On top of that, `libcompono` provides optimised, production-ready components 
directly in the top-level [dist](/dist) folder.

To build these components, run:

```
yarn build:components:prod
```

Alternatively, you can download them from [TODO].

## Examples

- [minimal example](./examples/minimal/README.md), without external 
    presentation framework
- [example](./examples/shower/README.md) using the shower presentation engine

## Attribution

### [Shower](https://github.com/shower/shower)
`libcompono` is heavily inspired by the [Shower presentation 
engine](https://github.com/shower/shower). The 
[`dd-slide-collection`](https://digitaldasein.org/software/html-presentations/dd-slide-collection/docs/classes/DdSlideCollection.html) 
component in particular adopted several features and styles from Shower.

Even more so, `libcompono` is **fully compatible** with the [shower 
core](https://github.com/shower/core/), as seen 
[here](./examples/shower/README.md).

As such, the Shower core can **extend** the `dd-components`, which aim to 
merely possess a limited (yet *practical*) set of functionalities.

Big thanks to all the Shower contributors!
