import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import WokingBar from '../components/WorkingBar'
import boyApi from '../API/index'

const mapStateToProps = (state, ownProps) =>{
    console.log("----------")

    console.log(state)
    return {
        works: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onClickOrder:(orderId,boyId)=>{boyApi.qiangdan(dispatch,orderId,boyId)}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WokingBar)
