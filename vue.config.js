module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fun-friends-animated/'
        : '/',
    pwa: {
        name: 'Fun Friends Skills',
        themeColor: '#00ce7c',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            name: 'Fun Friends Skills',
            short_name: 'Fun Friends Skills',
            start_url: '.',
            display: 'standalone',
            theme_color: '#00ce7c'
        },
        iconPaths: {
            favicon32: 'img/logos/favicon-32x32.png',
            favicon16: 'img/logos/favicon-16x16.png',
            appleTouchIcon: 'img/logos/apple-touch-icon-152x152.png',
            msTileImage: 'img/logos/msapplication-icon-144x144.png'
        },

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
    }
}