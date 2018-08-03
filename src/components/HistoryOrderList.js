import React, { Component } from "react";
import { NavBar, List, Toast ,WhiteSpace} from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

export default class HistoryOrderList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { orderList } = this.props;
        let orders = orderList.map(order => {
            const { id, carId, createdDate ,status} = order;
            return (
                <Item >
                <WhiteSpace size="md"/>
                    车牌号：{carId} ({status})
                    <Brief>停车时间{createdDate}</Brief>
                </Item>
            );
        });
        return (
            <div>
                <NavBar>历史订单</NavBar>
                <List>{orders}</List>
            </div>
        );
    }
}
