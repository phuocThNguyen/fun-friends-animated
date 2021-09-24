module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fun-friends-animated/'
        : '/',
    pwa: {
        name: 'Fun Friends Skills',
        themeColor: '#00ce7c',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            name: 'Fun Friends Skills',
            short_name: 'Fun Friends Skills',
            start_url: '.',
            orientation: 'landscape',
            display: 'standalone',
            theme_color: '#00ce7c',
            background_color: '#ffffff'
        },
        iconPaths: {
            favicon32: 'img/logos/favicon-32x32.png',
            favicon16: 'img/logos/favicon-16x16.png',
            appleTouchIcon: 'img/logos/apple-touch-icon-152x152.png',
            msTileImage: 'img/logos/msapplication-icon-144x144.png'
        },

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        }
    }
}