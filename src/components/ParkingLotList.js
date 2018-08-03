import React, { Component } from "react";
import { NavBar, List, Toast,Radio,Icon } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;
const RadioItem = Radio.RadioItem;
export default class ParkingLotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }

    render() {
        const {history,location,match}=this.props.routerMatch
        console.log("停车场列表\n------------------------");
        console.log(match);
        let parkingLotItems=this.props.parkingLots.map(lot=>{
            const {id,name,size,initSize}=lot
            return (
                <RadioItem
                key={id}
                >
                {name} ({size/initSize})
                </RadioItem>
            )
        })
        return (
            <div>
            <NavBar
                icon={<Icon type="left" />}
                onLeftClick={() => history.push("/employees")}
            >
                停车地点
            </NavBar>
                <List>
                    {parkingLotItems}
                </List>
            </div>
        );
    }
}
