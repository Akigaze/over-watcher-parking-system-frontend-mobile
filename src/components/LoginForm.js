import React,{Component} from 'react'
import "antd-mobile/dist/antd-mobile.css"
import { Button, List, InputItem, WhiteSpace, WingBlank,Icon} from "antd-mobile"

export default class LoginForm extends Component{
    constructor(props) {
        super(props)
        this.userName=React.createRef()
        this.pwd=React.createRef()
    }

    login=()=>{
        const name=this.userName.current.state.value
        const password=this.pwd.current.state .value
        console.log(name);
        console.log(password);

    }
    render(){
        return (
            <div>
                <WingBlank size="lg">
                    <div>
                        <WhiteSpace size="xl"/>
                        <List>
                            <InputItem placeholder="Your name" ref={this.userName}>
                                User
                            </InputItem>
                            <InputItem
                                type="password" placeholder="Your password" ref={this.pwd}>
                                Password
                            </InputItem>
                        </List>
                        <WhiteSpace size="xl"/>
                        <Button type="primary" onClick={this.login}>Login</Button>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
