import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"

 const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)
//ReactDOM.render(<App></App>,rootEl)
