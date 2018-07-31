import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import "antd-mobile/dist/antd-mobile.css"
import { Button, List, InputItem, WhiteSpace, WingBlank,Icon} from "antd-mobile"

class App extends Component {
  render() {
    return (
      <div>
          <LoginForm/>
      </div>
    );
  }
}

export default App;
