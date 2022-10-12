const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.ts('resources/js/test.ts', 'public/js');
mix.ts('resources/js/groupEdit.ts', 'public/js');
mix.ts('resources/js/AJAXcalls.ts', 'public/js');
