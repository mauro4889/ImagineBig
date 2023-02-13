import React, { useState } from 'react'
import { ContainerCardStyle, FormStyle } from './SearchStyle'

export const Search = (props) => {
    const [item, setItem] = useState('')

    return (
        <ContainerCardStyle>
            <FormStyle >
                <input type="text" onChange={(e)=>setItem(e.target.value)} />
                <button type='submit' onClick={()=>setTimeout(()=> props.handleSubmit(item), 3000)} >BUSCAR</button>
            </FormStyle>
        </ContainerCardStyle>
    )
}
