import React, { Component } from "react";
import {
    NavBar,
    List,
    Toast,
    Picker,
    WhiteSpace,
    Button,
    WingBlank,
    Icon
} from "antd-mobile";
import Scramble from "./Scramble ";
import { Link } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

export default class ParkingOrderFinishing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }
    render() {
        console.log("完成订单页面\n----------------------");
        console.log(this.props.routerMatch.match);
        const {history,location,match}=this.props.routerMatch
        const boyId=window.localStorage.id;

        return (
            <div>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push("/employees")}
                >
                    停车地点
                </NavBar>

                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <List>
                    <Link to={`/employees/${boyId}/parkingLots`}>
                        <Item arrow="horizontal" onClick={()=>this.props.selectParkingLots(boyId)}> 选择停车地点</Item>
                    </Link>
                </List>

                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WingBlank size="lg">
                    <Button type="primary">完成订单</Button>
                </WingBlank>
            </div>
        );
    }
}
