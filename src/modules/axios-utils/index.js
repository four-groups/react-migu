import Post from "./Post"
import Get from "./Get"
import {Component} from "react"

Component.prototype.$get = Get;
Component.prototype.$post = Post;

export {  //方便后续actionCreators使用   组件用的话直接通过this.$post或者this.$get
    Get,Post
}