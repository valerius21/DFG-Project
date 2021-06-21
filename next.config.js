module.exports = {
    // webpackDevMiddleware: (config) => {
    //     // Solve compiling problem via vagrant
    //     config.watchOptions = {
    //         poll: 1000,   // Check for changes every second
    //         aggregateTimeout: 300,   // delay before rebuilding
    //     };
    //     return config;
    // }
    images: {
        domains: ['live.staticflickr.com', 'images.unsplash.com']
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dfg-website' : '',
}