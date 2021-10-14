import { useState } from "react"
import { Button } from "@material-ui/core"

export const ButtonComp = ({buttonText = "Click Me!"
                        }) => {
    const buttonFunction = () => {
        alert("function done!");
    }
    return <div>
        <Button onClick={() => buttonFunction()} variant="contained">
            <div> {buttonText} </div>
        </Button>
    </div>
}
