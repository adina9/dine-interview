import { Component } from "react";
import React from "react";
import { ItemPreview } from "./ItemPreview";

var src1 = require('../assets/images/homepage/menu-items/menu-item1.jpg').default
var src2 = require('../assets/images/homepage/menu-items/menu-item2.jpg').default
var src3 = require('../assets/images/homepage/menu-items/menu-item3.jpg').default

export class ItemList extends React.Component {
    state = {
        imgs: [src1, src2, src3]
    }
    componentDidMount() {
        // console.log('this.props', this.props);
    }
    render() {
        const { items } = this.props
        const { imgs } = this.state
        return (
            <div className="items-list">
                {items.map((item, idx) => {
                    console.log('idx',idx);
                    return <ItemPreview item={item} key={idx} imgs={imgs} id={idx}/>
                })}
            </div>
        )
    }
}