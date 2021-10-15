import { useState } from "react"
import { Button } from "@material-ui/core"
import {Rnd} from "react-rnd"

export const ButtonComp = ({buttonText = "Click Me!"
                        }) => {
    return <Rnd default={{
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }}
    >
        <div>
        <Button variant="contained">
            <div> {buttonText} </div>
        </Button>
    </div>
    </Rnd>
}
