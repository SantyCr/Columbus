import React, { Component } from 'react'
import "./FlexBox.css";

export default class flexbox extends Component {
    render() {
        return (
            <div>
                <div >
                    <div className = "flex_container">
                        <p>dada</p>
                        <p>dada</p>
                        <p>dada</p>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        )
    }
}
