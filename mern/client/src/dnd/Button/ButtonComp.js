import { useState } from "react"
import { Button } from "@material-ui/core"

export const ButtonComp = ({buttonText = "Click Me!"
                        }) => {
    return <div>
        <Button variant="contained">
            <div> {buttonText} </div>
        </Button>
    </div>
}
