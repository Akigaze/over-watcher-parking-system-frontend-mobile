import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import {filterTodo} from "../actions";
import QiangDan from '../components/QiangDanBar'
import qiangdan from '../API/index'

const mapStateToProps = (state, ownProps) =>{
    console.log("----------")

    console.log(state)
    return {
        orders: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onQiangdan:(carId)=>{qiangdan(dispatch,carId)}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QiangDan)
