import { useState } from "react"
// import { Button } from "@material-ui/core"
import {Rnd} from "react-rnd"
import Button from 'react-bootstrap/Button';

export const ButtonComp = ({buttonText = "Click Me!", backColor, textColor
                        }) => {
    const buttonFunction = () => {
        alert("function done!");
    }

    return <Rnd default={{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }}
    >
        <div>
        <Button 
            onClick={() => buttonFunction()} 
            style={{
                "background-color": backColor,
                color: textColor
            }}>
            <div> 
                {buttonText}
            </div>
        </Button>
    </div>
    </Rnd>
}
