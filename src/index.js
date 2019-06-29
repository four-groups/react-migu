import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
//引入通用样式文件
import "./stylesheets/main.scss"

//引入post.js文件
//import "./modules/post"
import "./modules/axios-utils"

//使用rem.js
import "./modules/rem.js"
//在这使用HashRouter时可以起个别名
import {HashRouter as Router} from "react-router-dom"
//引入swiper.min.css样式文件
import "swiper/dist/css/swiper.min.css"
//引入视频的样式
import "video-react/dist/video-react.css";
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router> 
    </Provider>, document.getElementById('root'));

