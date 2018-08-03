import React, { Component } from "react";
import { NavBar, List, Toast, Radio, Icon } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;
const RadioItem = Radio.RadioItem;
export default class ParkingLotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLotId: 0
        };
    }
    select = (id,size) => {
        if(size!==0){
            this.setState({
                parkingLotId: id
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
                <RadioItem
                    key={id}
                    checked={id == this.state.parkingLotId}
                    onChange={() => {
                        console.log("=======  " + id + "  ===========");
                        this.select(id,size);
                    }}
                >
                    {name} ( {size} / {initSize} )
                </RadioItem>
            );
        });
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push("/employees")}
                >
                    停车地点
                </NavBar>
                <List>{parkingLotItems}</List>
            </div>
        );
    }
}
