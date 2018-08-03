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
        let selection=0;
        return (
            <div>
            <NavBar
                icon={<Icon type="left" />}
                onLeftClick={() => history.push("/employees")}
            >
                停车地点
            </NavBar>
                <List>
                    <RadioItem
                        key={1}
                        checked={selection===1}
                        onChange={() => selection=1}
                    >
                        停车场1
                    </RadioItem>
                    <RadioItem
                        key={2}
                        checked={selection===2}
                        onChange={() => selection=2}

                    >
                        停车场A
                    </RadioItem>
                </List>
            </div>
        );
    }
}
