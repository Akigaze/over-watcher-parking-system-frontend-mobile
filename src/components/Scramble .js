import React,{Component} from "react";
import { NavBar, Icon } from "antd-mobile"

export default class Scramble extends Component{
    render(){
        return(
    <div>
        <NavBar
            mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <span  key="0">抢单</span> ,
                <Icon  key="1" type="right" />]
            }
        >车牌号：粤00000</NavBar>
    </div>
        );
    }
}