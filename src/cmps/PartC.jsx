import React from "react";
import { itemService } from "../services/item-service";
import { ItemList } from "./ItemList";

export class PartC extends React.Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.loaditems()
    }
    loaditems = () => {
        itemService.query().then(items => this.setState({ items }))
    }
    render() {
        const { items } = this.state
        return (
            <div className="partC">
                <div className="left">
                    <p className="title"> A few highlights from our menu</p>
                    <p className="full-txt">
                        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.
                    </p>
                </div>
                <div className="right">
                    <ItemList items={items} />
                </div>
            </div>
        )
    }
}