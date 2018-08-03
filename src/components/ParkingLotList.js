import React, { Component } from "react";
import { NavBar, List, Toast, Radio, Icon,WhiteSpace,WingBlank } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;
const RadioItem = Radio.RadioItem;
export default class ParkingLotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLot: {}
        };
    }
    select = (lot,size) => {
        if(size!==0){
            this.setState({
                parkingLot: lot
            });
        }else{
            Toast.info('该停车场已经没有空位了 !!!', 1);
        }

    };

    render() {
        const { history, location, match } = this.props.routerMatch;
        console.log("停车场列表\n------------------------");
        console.log(match);
        let parkingLotItems = this.props.parkingLots.map(lot => {
            let { id, name, size, initSize } = lot;
            return (
                <WingBlank size="sm">
                    <RadioItem
                        key={id}
                        checked={id == this.state.parkingLot.id}
                        onChange={() => {
                            console.log("=======  " + id + "  ===========");
                            this.select(lot,size);
                        }}
                        >
                        <WhiteSpace size="md"/>
                        {name} ( {size} / {initSize} )
                        <WhiteSpace size="md"/>

                    </RadioItem>
                </WingBlank>
            );
        });
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() =>
                        {console.log("选择停车返回历史\n------------------");
                        const orderId=match.params.orderId
                        history.push(`/employees/orders/${orderId}`,this.state)}}
                >
                    停车地点
                </NavBar>
                <List>{parkingLotItems}</List>
            </div>
        );
    }
}
