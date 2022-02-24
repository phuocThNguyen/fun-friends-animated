module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fun-friends-animated'
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
    }
}