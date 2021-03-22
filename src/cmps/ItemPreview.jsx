import React, { Component } from "react";

export class ItemPreview extends React.Component {
    componentDidMount() {
        console.log('this.props:', this.props);
    }
    render() {
        const { item, id, imgs } = this.props
        return (
            <section className="flex item-preview">
                <div className="item-img">
                    <img src={imgs[id]} alt="" />
                </div>
                <div className="line"></div>
                <div className="info">
                    <p className="title">
                        {item.title}
                    </p>
                    <p className="item-desc">
                        {item.desc}
                    </p>
                </div>
            </section>
        )
    }
}