import React, { Component } from "react";
import { NavBar, List, Toast } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;

export default class WorkingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }
    // showToast() {
    //     Toast.info("抢单成功！！！", 1);
    // }
    render() {
        const boyId = window.localStorage.id;
        console.log(this.props);
        const { orders, onClickOrder } = this.props;
        console.log(orders);
        let workList = this.props.orders.map(order => {
            const { id,type, carId, createdDate } = order;
            if(type=="停车"){
                return (
                    <div>
                        <img src="http://file06.zk71.com/File/CorpProductImages/2013/12/29/0_mrf13_8098_20131229233427.jpg"
                            style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                        <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                            车牌号：{carId}
                            <Brief>停车时间{createdDate}</Brief>
                        </Item>
                    </div>
                );
            }else {
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533228973796&di=7b911a1a35761c7396452333f858f2ed&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F95%2F58110de7b77ac_610.jpg"
                        style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                    <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                        车牌号：{carId}
                        <Brief>停车时间{createdDate}</Brief>
                    </Item>
                </div>
            }
        });
        return (
            <div>
                <NavBar>停取工作列表</NavBar>
                <List>{workList}</List>
            </div>
        );
    }
}
