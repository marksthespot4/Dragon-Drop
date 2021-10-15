'use strict'

import React, { useState } from "react";
import { SketchPicker } from 'react-color'

// http://casesandberg.github.io/react-color/
export default function Color() {
    const[color, setColor] = useState('black');
    return (
        <div>
            <SketchPicker
                color={color}
                onChangeComplete= { (color) => {setColor(color.hex)}}
            />
        </div>
    )
}