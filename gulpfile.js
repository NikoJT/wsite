const elixir = require('laravel-elixir')

require('laravel-elixir-webpack-advanced')

var paths = {
    'fontawesome': 'node_modules/font-awesome/fonts'
}

elixir(mix, function() {
    mix.sass(style.scss)
    .copy(paths.fontawesome, 'public/build/fonts')
    .webpack(
        // {
        //     app:
        // },
        {
            entry: {
                vendor: ['baconjs', 'bootstrap-sass', 'jquery', 'ladda', 'twitter-fetcher', 'underscore'],
                plugins: ['owl.carousel']
            }
        },
        {
            $: 'jquery',
                _: 'underscore',
            Bacon: 'baconjs',
            jQuery: 'jquery',
            fetcher: 'twitter-fetcher',
            "window.jQuery": 'jquery'
        }
    )
    .version([
        'css/app.css'
    ])
})