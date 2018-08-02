import React,{Component} from "react";
import { List } from "antd-mobile"

const Item = List.Item;
export default class Scramble extends Component{
    render(){
        return(
            <div>
                <List>
                    <Item extra="抢单" arrow="horizontal" onClick={() => {}}>车牌号：粤00000</Item>
                </List>
            </div>
        );
    }
}