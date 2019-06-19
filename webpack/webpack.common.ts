import {resolve} from 'path';
import {Configuration, RuleSetRule} from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const tsRules: RuleSetRule[] = [
    {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
    }
];

const styleRules: RuleSetRule[] = [
    {
        test: /\.module\.s[ca]ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    camelCase: true,
                }
            },
            'sass-loader',
        ]
    },
    {
        test: /\.s[ca]ss$/,
        exclude: /\.module.(s[ca]ss)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ]
    }
];

const fileRules: RuleSetRule[] = [
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    }
];

const config: Configuration = {
    entry: ['./src/index.tsx', './src/scss/index.scss'],
    module: {
        rules: [
            ...tsRules,
            ...styleRules,
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