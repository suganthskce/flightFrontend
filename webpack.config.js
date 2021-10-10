const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const PATH_SOURCE = path.join(__dirname, './src');
const PATH_PUBLIC = path.join(__dirname, './public');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {
    const { environment = 'development' } = env;

    return {
        mode: environment,

        devServer: {
            contentBase: PATH_DIST,
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        entry: [
            path.join(PATH_SOURCE, './index.js'),
        ],

        resolve: {
            extensions: ['.js', '.jsx'],
        },
        output: {
            path: PATH_DIST,
            filename: 'js/[name].[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: true,
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                }],
                                '@babel/preset-react',
                            ],
                        },
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.(jpg|png)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
            new CleanWebpackPlugin(),
        ],
    };
};