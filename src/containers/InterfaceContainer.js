import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import Interface from '../components/Interface'
import boyApi from '../API/index'

const mapStateToProps = (state, ownProps) =>{
    return {
        unFinishOrders:state.unFinishOrders,
        works:state.works,
        parkingLots:state.parkingLots
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        clickQD:()=>{boyApi.findAllOrders(dispatch)},
        clickCQ:()=>{boyApi.findAllWork(dispatch)},
        onClickOrder:(orderId,boyId)=>{boyApi.qiangdan(dispatch,orderId,boyId)},
        findMyParkingLots:(boyId)=>{boyApi.getParkingLotsByBoyId(dispatch,boyId)},
        onFinishOrder:(parkingLotId,orderId)=>{boyApi.finishOrder(dispatch,parkingLotId,orderId)}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Interface)