import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";
import Scramble from "./Scramble ";
import Order from "./Order";
// import QiangDanBar from "../containers/QiangDanBarContainer"
// import WorkingBar from "../containers/WorkingBarContainer"
import QiangDanBar from "./QiangDanBar";
import WorkingBar from "./WorkingBar";
import { BrowserRouter, Route } from "react-router-dom";
import ParkingOrderFinishing from "./ParkingOrderFinishing"
import ParkingLotList from "./ParkingLotList"
import UnparkingPage from "./FinishUnparkingOrderPage"
import HistoryOrderList from "./HistoryOrderList"
import PrivatePage from "./PrivatePage"

export default class Interface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
        this.boyId=window.localStorage.id;
    }

    myWorkListPage = match => {
        return <WorkingBar works={this.props.works} routerMatch={match} />;
    };

    finishParkingOrderPage=(match)=>{
        return (<ParkingOrderFinishing routerMatch={match} selectParkingLots={this.props.findMyParkingLots} finishOrder={this.props.onFinishOrder}/>)
    }

    myParkingLotPage=(match)=>{
        return (<ParkingLotList parkingLots={this.props.parkingLots} routerMatch={match}/>)
    }
    unparkingPage=(match)=>{
        return (<UnparkingPage clickFinish={this.props.onUnparking} parkingLots={this.props.parkingLots} routerMatch={match}/>)
    }

    render() {
        console.log("Interface的match---------------------------");
        console.log(this.props.match);
        const {history,location,match}=this.props.match
        const userId=window.localStorage.id;
        return (
            <div
                style={{
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0
                }}
            >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="抢单"
                        key="抢单"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://raw.githubusercontent.com/Eugene-Armstrong/my-online-pics/master/qiangdan.png) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://raw.githubusercontent.com/Eugene-Armstrong/my-online-pics/master/qiangdan_active.png) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "blueTab"}
                        onPress={() => {
                            history.push("/employees")

                            this.props.clickQD();
                            this.setState({
                                selectedTab: "blueTab"
                            });
                        }}
                    >
                        <QiangDanBar
                            unFinishOrders={this.props.unFinishOrders}
                            clickOrder={this.props.onClickOrder}
                        />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        title="停取"
                        key="停取"
                        selected={this.state.selectedTab === "redTab"}
                        onPress={() => {
                            history.push("/employees")
                            this.props.clickCQ();
                            this.setState({
                                selectedTab: "redTab"
                            });
                        }}
                    >
                        <BrowserRouter>
                            <div>
                                <Route
                                    exact path={`${this.props.match.match.url}`}
                                    component={this.myWorkListPage}
                                />
                                <Route
                                    exact path={`${
                                        this.props.match.match.url
                                    }/orders/:orderId`}
                                    component={this.finishParkingOrderPage}
                                />
                                <Route
                                    exact path={`${
                                        this.props.match.match.url
                                    }/orders/:orderId/cars/:carId`}
                                    component={this.unparkingPage}
                                />
                                <Route
                                    exact path={`${
                                        this.props.match.match.url
                                    }/:boyId/orders/:orderId/parkingLots`}
                                    component={this.myParkingLotPage}
                                />

                            </div>
                        </BrowserRouter>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://raw.githubusercontent.com/Eugene-Armstrong/my-online-pics/master/history.png) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://raw.githubusercontent.com/Eugene-Armstrong/my-online-pics/master/history_active.png) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        title="历史"
                        key="历史"
                        selected={this.state.selectedTab === "greenTab"}
                        onPress={() => {
                            this.props.findHistoryOrder(this.boyId)
                            this.setState({
                                selectedTab: "greenTab"
                            });
                        }}
                    >
                        <HistoryOrderList orderList={this.props.historyOrders} history={history}></HistoryOrderList>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri:
                                "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg"
                        }}
                        selectedIcon={{
                            uri:
                                "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
                        }}
                        title="个人"
                        key="个人"
                        selected={this.state.selectedTab === "yellowTab"}
                        onPress={() => {
                            this.props.findMyParkingLots(userId)
                            this.setState({
                                selectedTab: "yellowTab"
                            });
                        }}
                    >
                        <PrivatePage checkIn={this.props.checkIn} parkingLots={this.props.parkingLots} getparkingLots={this.props.findMyParkingLots} history={history}/>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
