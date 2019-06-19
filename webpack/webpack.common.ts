import {resolve} from 'path';
import {Configuration} from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const tsRules = [
    {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
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
    entry: './src/index.tsx',
    module: {
        rules: [
            ...tsRules,
            ...cssRules,
            ...fileRules,
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
};

export default config;