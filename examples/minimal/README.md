<!--
SPDX-FileCopyrightText: 2022 Digital Dasein <https://digitaldasein.org/>
SPDX-FileCopyrightText: 2022 Gerben Peeters <gerben@digitaldasein.org>
SPDX-FileCopyrightText: 2022 Senne Van Baelen <senne@digitaldasein.org>

SPDX-License-Identifier: MIT
-->

# Minimal compono example

- no external presentation framework

## Run example

### Prerequisites

You need the compono library. To build it from this repo:

```bash
cd to project root (compono)
yarn install
yarn build:compono:prod
```

Alternative: you could also simply download/copy the compono library from 
somewhere.  In this case, make sure you adjust your `<script scr=...></script?` 
in the `index.html` accordingly.

### Server-less

(in this folder)

```sh
<your-favorite-browser> index.html
```

For example, `firefox index.html` or `chromium index.html`.

### Local dev server

With <b>local http server</b> (e.g.: Modern web [Web Dev 
Server](https://modern-web.dev/docs/dev-server/overview/), [python http 
server](https://docs.python.org/3/library/http.server.html), [Javascript http 
server](https://www.npmjs.com/package/http-server), ...): go to project root, 
launch your http server, and navigate to this path, e.g.,
`http://0.0.0.0:8000/examples/minimal/`.

You can use the Web Dev Server directly, i.e. (in the project root):

```sh
yarn run example:minimal
```

### Your own project / presentation

- bring your own HTML
- copy `compono.min.js` to your project folder
- import it, e.g., `<script src="compono.min.js"></script>`
- make a cool presentation
