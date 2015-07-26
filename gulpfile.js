 var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // Use of Less: will search for 'resources/assets/less/app.less'
    //mix.less('app.less');

    mix.sass('app.scss', './public/css/app.css')
        .sass('front.scss', './public/css/front.css')
        .coffee('module.coffee')
        .babel('file.js');
});
