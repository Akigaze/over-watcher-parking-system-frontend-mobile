import React,{Component} from 'react'
import "antd-mobile/dist/antd-mobile.css"
import { Button, List, InputItem, WhiteSpace, WingBlank,Icon,NoticeBar} from "antd-mobile"
import {Link} from 'react-router-dom'
import axios from "axios";


export default class LoginForm extends Component{
    constructor(props) {
        super(props)
        this.userName=React.createRef()
        this.pwd=React.createRef()
        this.state={msg:""};
    }

    login=()=>{
        const name=this.userName.current.state.value
        const password=this.pwd.current.state .value
        console.log(name);
        console.log(password);
        if(name===""||password===""){
            // message.error('用户名或密码不能为空！',1);
            this.setState({msg:"no username or password"});
        }else{
            axios.post('http://localhost:9090/auth/login', {
                "username":name,
                "password":password})
                .then((response) => {
                    console.log(response);
                    this.props.history.push('/employees')
                }).catch(function (error) {
                    // this.setState({msg:"wrong password"});
                    // console.log(this.state)
                // message.error('用户名或密码错误！',1);
                console.log(error);
            });
        }
    }

    closeNoticeBar=()=>{
        console.log(this.state)

        this.setState({msg:""})
    }

    render() {
        let noticeBar=""
        if(this.state.msg!==""){
            noticeBar=<NoticeBar
                mode="closable"
                icon={<Icon type="cross-circle" size="xxs"
                    onClick={()=>{this.closeNoticeBar()}}/>}
            >
                {this.state.msg}
            </NoticeBar>
        }
        return (
            <div>
                <WingBlank size="lg">
                    <div>
                        <WhiteSpace size="xl" />
                        <List>
                            <InputItem
                                placeholder="Your name"
                                ref={this.userName}
                            >
                                User
                            </InputItem>
                            <InputItem
                                type="password"
                                placeholder="Your password"
                                ref={this.pwd}
                            >
                                Password
                            </InputItem>
                        </List>
                        <WhiteSpace size="xs" />
                        {noticeBar}
                        <WhiteSpace size="md" />
                            <Button type="primary" onClick={this.login}>
                                Login
                            </Button>
                    </div>
                </WingBlank>
            </div>
        );
    }
}
