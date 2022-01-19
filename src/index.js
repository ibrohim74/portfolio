import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import 'antd/dist/antd.css';
import 'core-js';
import App from './App';
import {Spin} from "antd";

ReactDOM.render(
    <Suspense fallback={<div className="loadingSpin"><Spin size={"large"}/></div>}>
        <App/>
    </Suspense>
    ,
    document.getElementById('root')
);

