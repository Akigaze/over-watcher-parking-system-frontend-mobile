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
    NavBar,
    Toast
} from "antd-mobile";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginApi } from "../API/loginApi";
import boyApi from "../API/index";
import store from "../reducers/index";

const Item = List.Item;
const Brief = Item.Brief;
export default class PrivatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "" };
    }
    componentWillMount() {
        console.log("=== 个人页面store ===");
        console.log(store);

        const id = window.localStorage.id;
        this.props.getparkingLots(id);
        this.setState({
            username: "100fen"
        });
    }
    out = () => {
        this.props.history.push("/");
        Toast.success("退出成功！",1)
    };
    signOuting = () => {
        boyApi.signOut();
        Toast.loading("正在退出", 2, this.out)
    };
    render() {
        console.log("=== 个人页面 ===");

        console.log(this.props.parkingLots);
        let parkingLotList = this.props.parkingLots.map(lot => {
            const { name, size, initSize } = lot;
            return (
                <Item
                    onClick={() => {}}
                    platform="android"
                    extra={`初始车位：${initSize}`}
                >
                    {name}
                    <Brief>剩余车位：{size}</Brief>
                </Item>
            );
        });

        return (
            <div>
                <NavBar>个人</NavBar>
                <Flex alignContent="end">
                    <Flex.Item />
                    <Flex.Item />

                    <Flex.Item>
                        <Button
                            type="primary"
                            size="small"
                            style={{
                                margin: "10px",
                                backgroundColor: "#e95410"
                            }}
                            onClick={this.signOuting}
                        >
                            退出
                        </Button>
                    </Flex.Item>
                </Flex>

                <img
                    src="http://bpic.588ku.com/back_pic/03/62/05/6957a98797c759a.jpg!/fh/300/quality/90/unsharp/true/compress/true"
                    style={{ width: "100%", marginTop: -50 }}
                />
                <div style={{ textAlign: "center" }}>
                    <img
                        src="https://trello-avatars.s3.amazonaws.com/9fb0d4d1340b2222aa8f343122aeebaf/original.png"
                        style={{
                            borderRadius: "50%",
                            border: "4px solid #fff",
                            width: 120,
                            height: 120,
                            marginTop: -60,
                            "z-index": 99
                        }}
                    />
                    <div style={{ lineHeight: "30px", fontSize: 20 }}>
                        {window.localStorage.username}
                    </div>

                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                </div>

                <List renderHeader={() => "我的停车场"} className="my-list">
                    {parkingLotList}
                </List>
                <WhiteSpace size="lg" />
            </div>
        );
    }
}
