'use strict'

import React, { Component, useState } from "react";
// import { SketchPicker } from 'react-color'

import Form from 'react-bootstrap/Form'

// http://casesandberg.github.io/react-color/
export default class Color extends Component {
    // const[color, setColor] = useState('green');
    constructor() {
        super();
        this.state = {
            color:"#000000"
        };
    }

    handleColorChange(e) {
        this.props.setColor(e.target.value);
        this.setState({color: e.target.value});
    }

    render() {
        return (
            <div>
                {/* <SketchPicker
                    color={color}
                    onChangeComplete= { (color) => {setColor(color.hex)}}
                /> */}
                {/* <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label> */}
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue={this.state.color}
                    title="Choose your color"
                    value={this.state.color}
                    onChange={(e) => this.handleColorChange(e)}
                />
                {/* <div style={{color:this.state.color}}>sdfghjkyhtgr</div> */}
            </div>
        )
    }
}