module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: './public/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        include: [
            './src/'
        ],
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
    
}