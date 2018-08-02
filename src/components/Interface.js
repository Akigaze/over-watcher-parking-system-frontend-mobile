import React,{Component} from "react";
import {NavBar, TabBar} from "antd-mobile"
import Scramble from "./Scramble ";
import Order from "./Order";
import QiangDanBar from "../containers/QiangDanBarContainer"

export default class Interface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'yellowTab',
        };
    }

    render() {
        console.log("1111111"+this.props.orders);
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0  }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                <TabBar.Item
                            title="抢单"
                            key="抢单"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                                this.props.clickQD()
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                        >

                        <QiangDanBar orders={this.props.orders}/>
                </TabBar.Item>

                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="停取"
                        key="停取"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                        <NavBar>停取工作列表</NavBar>
                        <Order/>
                        {/*{this.renderContent('停取')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="历史"
                        key="历史"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <NavBar>历史</NavBar>
                        {/*{this.renderContent('历史')}*/}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="个人"
                        key="个人"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <NavBar>个人</NavBar>
                        {/*{this.renderContent('个人')}*/}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
