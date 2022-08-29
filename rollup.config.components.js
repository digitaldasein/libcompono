// SPDX-FileCopyrightText: 2022 Digital Dasein <https://digitaldasein.org/>
// SPDX-FileCopyrightText: 2022 Gerben Peeters <gerben@digitaldasein.org>
// SPDX-FileCopyrightText: 2022 Senne Van Baelen <senne@digitaldasein.org>

// SPDX-License-Identifier: MIT

// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';

export default [
  {
    input: "./modules/dd-grid/dist/src/dd-grid.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-grid',
    },
    preserveEntrySignatures: 'strict',
  },
  {
    input: "./modules/dd-titlepage/dist/src/dd-titlepage.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-titlepage',
    },
    preserveEntrySignatures: 'strict',
  },
  {
    input: "./modules/dd-footer/dist/src/dd-footer.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-footer',
    },
    preserveEntrySignatures: 'strict',
  },
  {
    input: "./modules/dd-slide/dist/src/dd-slide.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-slide',
    },
    preserveEntrySignatures: 'strict',
  },
  {
    input: "./modules/dd-slide-collection/dist/src/dd-slide-collection.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-slide-collection',
    },
    preserveEntrySignatures: 'strict',
  },
  {
    input: "./modules/dd-code/dist/src/dd-code.js",
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),

      // Print bundle summary
      summary(),
    ],

    output: {
      dir: 'dist/dd-code',
    },
    preserveEntrySignatures: 'strict',
  }
];
