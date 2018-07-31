import React,{Component} from 'react'
import "antd-mobile/dist/antd-mobile.css"
import { Button, List, InputItem, WhiteSpace, WingBlank,Icon} from "antd-mobile"

export default class LoginForm extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <WingBlank size="lg">
                    <div>
                        <WhiteSpace size="xl"/>
                        <List>
                            <InputItem placeholder="Your name">
                                User
                            </InputItem>
                            <InputItem
                                type="password" placeholder="Your password">
                                Password
                            </InputItem>
                        </List>
                        <WhiteSpace size="xl"/>
                        <Button type="primary">Login</Button>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
