import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import "antd-mobile/dist/antd-mobile.css";
import {
    Button,
    List,
    InputItem,
    WhiteSpace,
    WingBlank,
    Icon
} from "antd-mobile";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={loginPage} />
                    <Route path="/employees" component={userPage} />
                </div>
            </BrowserRouter>
        );
    }
}
const loginPage = (match) => {
    // return <h1>hihao</h1>;
    console.log(match);
    return <LoginForm history={match.history}/>;
};
const userPage = () => {
    return <h1>hihao</h1>;
};

export default App;
