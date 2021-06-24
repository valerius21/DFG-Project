module.exports = {
    images: {
        domains: ['live.staticflickr.com', 'images.unsplash.com']
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dfg-website' : '',
}