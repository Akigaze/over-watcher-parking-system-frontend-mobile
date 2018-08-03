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
            parkingLot: {}
        };
    }

    setParkingLot=()=>{
        const {history,location,match}=this.props.routerMatch
        const lot=location.state.parkingLot
        this.setState({
            parkingLot: lot
        })
        return lot;
    }
    finshiOrder=()=>{
        const lot=this.setParkingLot();
        const orderId=this.match.params.orderId
        if(lot!={}){
            this.props.finishOrder(lot.id,orderId)
        }else{
            Toast.info('未选择停车场 !!!', 1);
        }
    }
    render() {

        const {history,location,match}=this.props.routerMatch
        const boyId=window.localStorage.id;

        console.log("完成订单页面\n----------------------");
        console.log(location);

        let lotName=location.state!=undefined?location.state.parkingLot.name:"";

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

                        <Item extra={lotName} arrow="horizontal" onClick={()=>{
                                this.props.selectParkingLots(boyId)
                                const orderId=match.params.orderId
                                history.push(`/employees/${boyId}/orders/${orderId}/parkingLots`)

                            }}> 选择停车地点</Item>

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
                    <Button type="primary" onClick={
                            this.finshiOrder
                        }>完成订单</Button>
                </WingBlank>
            </div>
        );
    }
}
