import React from 'react'
import { CardContainer } from './CardStyle'

export const Card = (props) => {
    let {id, name, price, img} = props
    return (
        <CardContainer>+
            <img src={img} alt={name} />
            <div className="containerInfo">
                <h3> {name} </h3>
                <p className='id' > {id} </p>
                <p className="price">Precio: <span>{price}</span> </p>
            </div>
        </CardContainer>
    )
}
