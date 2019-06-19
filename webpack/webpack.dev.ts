import {resolve} from 'path';
import {HotModuleReplacementPlugin, Configuration, DefinePlugin} from 'webpack';
// @ts-ignore
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';

const tsRules = [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
];

const cssRules = [
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }
];

const fileRules = [
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    }
];

const config: Configuration = {
    mode: 'development',
    entry: './app.ts',
    module: {
        rules: [
            ...tsRules,
            ...cssRules,
            ...fileRules,
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Some app'
        }),
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': 'development'
        })
    ]
};

export default config;