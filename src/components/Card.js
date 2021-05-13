import { Paper } from '@material-ui/core'
import React from 'react'
import '../css/card.css'
function Card({element}) {
    return (
        <div>
            <Paper style={{width:'fit-content'}}>
                <div className="card__text">
                    <h2>{element.toUpperCase()}</h2>
                </div>                
            </Paper>
        </div>
    )
}

export default Card
