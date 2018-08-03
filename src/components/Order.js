import React,{Component} from "react";
import { List } from "antd-mobile"

const Item = List.Item;
const Brief = Item.Brief;
export default class Order extends Component{
    render(){
        return(
            <div>
                <List>
                    <img src="http://file06.zk71.com/File/CorpProductImages/2013/12/29/0_mrf13_8098_20131229233427.jpg"
                    style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                    <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                        车牌号：粤00000
                        <Brief>停车时间</Brief>
                    </Item>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533228973796&di=7b911a1a35761c7396452333f858f2ed&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F32%2F95%2F58110de7b77ac_610.jpg"
                         style={{width:"50px",height:"50px",float:"left",margin:"10px 0 0 20px"}}/>
                    <Item extra="详情" arrow="horizontal" onClick={() => {}}>
                        车牌号：粤00000
                        <Brief>停车时间</Brief>
                    </Item>
                </List>
            </div>
        );
    }
}