import '../styles/styles.scss'
import React from 'react';
import {wrapper} from '../state'
const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);