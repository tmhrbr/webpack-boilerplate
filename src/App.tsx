import { hot } from 'react-hot-loader/root';
import * as React from "react";

import { Hello } from "./components/Hello";

const App = () => {
    return <Hello compiler="TS" framework="REACT" />;
};

export default hot ? hot(App) : App;