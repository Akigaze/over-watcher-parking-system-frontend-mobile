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
    Toast
} from "antd-mobile";
import { Link } from "react-router-dom";
import axios from "axios";
import 'animate.css'
import {LoginApi} from '../API/loginApi'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.userName = React.createRef();
        this.pwd = React.createRef();
        this.state = { msg: "" };
    }

    success = () => {
        this.props.history.push("/employees");
        Toast.hide()
        Toast.success("登录成功！", 1);
    };
    login = () => {
        const name = this.userName.current.state.value;
        const password = this.pwd.current.state.value;
        console.log(name);
        console.log(password);
        if (name === "" || password === "") {
            // message.error('用户名或密码不能为空！',1);
            this.setState({ msg: "no username or password" });
        } else {
            LoginApi.tryToLogin(name,password,this)
            Toast.loading("正在登录", 0)
        }
    };

    closeNoticeBar = () => {
        console.log(this.state);

        this.setState({ msg: "" });
    };

    render() {
        let noticeBar = "";
        if (this.state.msg !== "") {
            noticeBar = (
                <NoticeBar
                    mode="closable"
                    icon={
                        <Icon
                            type="cross-circle"
                            size="xxs"
                        />
                    }
                    onClick={() => {
                        this.closeNoticeBar();
                    }}
                >
                    {this.state.msg}
                </NoticeBar>
            );
        }
        return (
            <div className="animated bounce">

                <div style={{
                    margin:"80px 0 20px 0",
                    textAlign:"center",
                    fontSize:"25px",
                    lineHeight:"40px",
                    color:"#26b5f8",
                    fontFamily:"微软雅黑"
                }}>
                    欢迎登录&nbsp;
                    <img
                        style={{width:"30px",verticalAlign:"text-bottom"}}
                        src="https://raw.githubusercontent.com/Eugene-Armstrong/my-online-pics/master/parking_mobile.png"
                        alt="logo"
                    />
                    <br/>OverWatcher 停车场系统
                </div>
                <WingBlank size="lg">
                    <div style={{padding:"0 20px"}}>
                        <WhiteSpace size="xl" />
                        <List>
                            <InputItem
                                placeholder="请输入用户名"
                                ref={this.userName}
                            >
                                用户名
                            </InputItem>
                            <InputItem
                                type="password"
                                placeholder="请输入密码"
                                ref={this.pwd}
                            >
                                密&nbsp;&nbsp;&nbsp;码
                            </InputItem>
                        </List>
                        <WhiteSpace size="xs" />
                        {noticeBar}
                        <WhiteSpace size="md" />
                        <Button type="primary" onClick={this.login}>
                            登录
                        </Button>
                    </div>
                </WingBlank>
            </div>
        );
    }
}
