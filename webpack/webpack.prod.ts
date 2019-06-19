import {Configuration} from 'webpack';
import merge from 'webpack-merge';
import CommonConfig from './webpack.common';

const config: Configuration = {
    mode: 'production',
};

export default merge(CommonConfig, config);