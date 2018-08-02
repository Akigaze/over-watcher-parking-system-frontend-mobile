import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import Interface from '../components/Interface'
import boyApi from '../API/index'

const mapStateToProps = (state, ownProps) =>{
    console.log(state.props);
    return {
        order:state.orders
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        clickQD:()=>{boyApi.findAllOrders(dispatch)}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Interface)
