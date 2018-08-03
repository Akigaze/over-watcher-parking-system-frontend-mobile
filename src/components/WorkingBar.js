import React, { Component } from "react";
import { NavBar, List, Toast } from "antd-mobile";
import Scramble from "./Scramble ";
import {Link} from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;

export default class WorkingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }
    render() {
        const boyId = window.localStorage.id;
        const { works, onClickOrder } = this.props;
        console.log("我的待完成工作\n--------------------------");
        console.log(works)
        let history=this.props.routerMatch.history;

        let workList = works.map(order => {
            const { id,type, carId, createdDate } = order;
            let path=`/employees/orders/${id}`;

            if(type=="存车"){
                return (
                    <Link to={path}>
                        <img src="http://file06.zk71.com/File/CorpProductImages/2013/12/29/0_mrf13_8098_20131229233427.jpg"
                            style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                        <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                            车牌号：{carId}
                            <Brief>停车时间{createdDate}</Brief>
                        </Item>
                    </Link>
                );
            }else if(type=="取车"){
                return (

                    <Link to={path}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533228973796&di=7b911a1a35761c7396452333f858f2ed&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F95%2F58110de7b77ac_610.jpg"
                    style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                    <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                    车牌号：{carId}
                    <Brief>停车时间{createdDate}</Brief>
                    </Item>
                    </Link>
                )
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
