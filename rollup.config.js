// SPDX-FileCopyrightText: 2022 Digital Dasein <https://digitaldasein.org/>
// SPDX-FileCopyrightText: 2022 Gerben Peeters <gerben@digitaldasein.org>
// SPDX-FileCopyrightText: 2022 Senne Van Baelen <senne@digitaldasein.org>

// SPDX-License-Identifier: MIT

// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';

export default {
  input: "./modules/index.js",
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
      compress:true,
    }),

    // Print bundle summary
    summary(),
  ],

  output: {
    file: "dist/libcompono.min.js",
    format: 'es'
  },
  preserveEntrySignatures: 'strict',
};
