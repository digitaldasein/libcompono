#####################################################################
Customized KUL theme for shower presentation engine
#####################################################################

Author(s):    Herman Bruyninckx, Senne Van Baelen
Contact:      senne.vanbaelen@kuleuven.be
Date created: 2020-08-29
Links:        <https://github.com/shower/shower>

This theme requires:
- (i) a very minimal set of stylesheets (shower + custom KUL)
- (ii) the full (slightly extended) shower.js script

=====================================================================
Run demo
=====================================================================
Just open the index.html file in your favorite browser, no need to install
anything!

(For PDF export see below)

=====================================================================
Config
=====================================================================

Use configuration variables in your main html file. Some examples:

    <style>
      .shower {
        --slide-width: 1024px;
        --slide-ratio: calc(16 / 9);
        --slide-height: calc(var(--slide-width) / var(--slide-ratio));
        --heading-color: var(--kul-darkblue);
        --font: 24px/2 'Roboto', sans-serif;
        --progress-size:  4px;
        --right-slide-nr: 2%;
        --bottom-slide-nr: 5px;
        --font-size-slide-nr: 0.6em;
        --color-slide-nr: #000;
        --slide-left-side: 20px;
        --slide-right-side: 20px;
        --slide-top-side:15px;
        --link-color: #2a76dd;
      }
    </style>

Check the stylesheet for more variables, or create your own!

=====================================================================
Static
=====================================================================

---------------------------------------------------------------------
Javascript
---------------------------------------------------------------------
- js/shower.js
- js/svbaelen.js

The latter currenlty only adds some key-based screen handling, such as
fullscreening.

---------------------------------------------------------------------
CSS stylesheets
---------------------------------------------------------------------

Note that there are also some very minimal modifications in the original
shower stylesheets.

Everything in one file:
- css/styles_all.css

=> integrate static/css/styles_all.css in index.html

Modular structure (similar to shower's default folder structure):
- css/styles.css [MAIN]
- css/fonts.css
- css/shower + subdirs
- css/blocks + subdirs
- css/slide + subdirs
- css/custom + subdirs

(the custom folder contains KUL theming)

=> integrate static/css/styles.css in index.html

---------------------------------------------------------------------
fonts
---------------------------------------------------------------------

Roboto font (can also be installed globally on your machine)

=====================================================================
Dist
=====================================================================

Compressed javascript and css code
- dist/shower.min.js
- dist/styles.min.css

=> integrate stylesheet: dist/styles.min.css in index.html
=> integrate javascript: dist/shower.min.js in index.html

=====================================================================
Export to PDF
=====================================================================

Requires shower CLI <https://github.com/shower/cli/>

!! NOTE !!
When MathJax is loaded from a CDN, the current shower JS code does not
"wait" for mathjax content to finish loading when exporting. After
installing shower CLI, change the following line in
/path/to/global/node_modules/@shower/cli/core/command/pdf.js:

    //await page.goto(`file://${cwd}/index.html`) // original line
    await page.goto(`file://${cwd}/index.html`, {waitUntil: 'networkidle0'})

networkidle0: consider navigation to be finished when there are no more than
              0 network connections for at least 500 ms

You could just as easily install the MathJax source locally on your machine:
in this case there is no need to modify the pdf.js source!

Export to PDF, when in main dir:

    $ shower pdf


=====================================================================
Additional functionality
=====================================================================

---------------------------------------------------------------------
js/svbaelen.js
---------------------------------------------------------------------
- f-key for fullscreen mode
