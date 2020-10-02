const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

modules.export = {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: '/public/js',
        publicPath: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'scss'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin()
      ]
}