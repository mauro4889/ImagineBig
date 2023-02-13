import React from 'react'
import { Card } from '../card/Card'
import { ProductsContainer } from './ProductsStyle'

export const Products = (props) => {
    let items = props.product
    
    return (
        <ProductsContainer>
            {
                items ?
                    items.map(product => <Card key={product.id} {...product} />) :
                    <p>INGRESE EL PRODUCTO QUE DESEA BUSCAR</p>
            }
        </ProductsContainer>
    )
}
