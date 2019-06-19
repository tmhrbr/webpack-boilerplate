import {HotModuleReplacementPlugin, Configuration, DefinePlugin} from 'webpack';
import merge from 'webpack-merge';
import CommonConfig from './webpack.common';

const config: Configuration = {
    mode: 'development',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ],
};

export default merge(CommonConfig, config);