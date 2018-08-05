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

    close=()=>{
        Toast.hide()
        Toast.info('停车完成 !!!', 1);
        // console.log("停车成功\n-----------------------");
        // console.log(this.props);
        this.props.routerMatch.history.push("/employees")
    }
    finshiOrder=()=>{
        const {history,location,match}=this.props.routerMatch
        let lotId=location.state!=undefined?location.state.parkingLot.id:0;
        let orderId=match.params.orderId
        if(lotId!==0&&lotId!==undefined){
            this.props.finishOrder(lotId,orderId,this.close)
            Toast.info("停车中...",0)

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
