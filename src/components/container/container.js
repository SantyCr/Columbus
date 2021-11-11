import React, { Component } from 'react'
import "./container.css";

export default class flexbox extends Component {
    render() {
        return (
            <div>
                <div >
                <br/>
                    <div className = "flex_container">
                        <p styles = "flex-grow: 1">dada</p>
                        <p styles = "flex-grow: 1">dada</p>
                    </div>
                </div>
            </div>
        )
    }
}
