const path = require('path')

module.exports = {
    productionBrowserSourceMaps: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*' // Proxy to Backend
            }
        ]
    }
}