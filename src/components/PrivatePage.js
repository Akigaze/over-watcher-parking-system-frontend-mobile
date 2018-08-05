import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import {
    Button,
    List,
    InputItem,
    WhiteSpace,
    WingBlank,
    Icon,
    NoticeBar,
    Flex,
    PlaceHolder,
    NavBar
} from "antd-mobile";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginApi } from "../API/loginApi";
const Item = List.Item;
const Brief = Item.Brief;
export default class PrivatePage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    let mode;
    if (this.props.age > 70) {
      mode = 'old';
    } else if (this.props.age < 18) {
      mode = 'young';
    } else {
      mode = 'middle';
    }
    this.setState({ mode });
  }
    render() {
        return (
            <div>
                <NavBar>个人</NavBar>
                <img src="http://bpic.588ku.com/back_pic/03/62/05/6957a98797c759a.jpg!/fh/300/quality/90/unsharp/true/compress/true" style={{width:"100%"}}/>
                <div style={{textAlign:"center"}}>
                    <img src="https://trello-avatars.s3.amazonaws.com/9fb0d4d1340b2222aa8f343122aeebaf/original.png"
                    style={{
                        borderRadius:"50%",border:"4px solid #fff",
                        width:120,height:120,
                        marginTop:-60,"z-index":99
                    }}/>
                <div style={{lineHeight:"30px",fontSize:20}}>{window.localStorage.username}</div>
                </div>
                <WhiteSpace size="lg" />
                <List renderHeader={() => '我的停车场'} className="my-list">
                    <Item
                        onClick={() => {}} platform="android"
                        extra={'初始车位：22'}>叮叮停车场
                        <Brief>剩余车位：2</Brief>
                    </Item>
                    <Item
                        onClick={() => {}} platform="android"
                        extra={'初始车位：22'}>BiuBiu停车场
                        <Brief>剩余车位：2</Brief>
                    </Item>
                    <Item
                        onClick={() => {}} platform="android"
                        extra={'初始车位：22'}>HaHa停车场
                        <Brief>剩余车位：2</Brief>
                    </Item>
                </List>
            <WhiteSpace size="lg" />
            </div>
        );
    }
}
