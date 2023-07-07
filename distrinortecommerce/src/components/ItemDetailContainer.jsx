import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import data from "../data/products.json"
import {ItemDetail} from '../components/ItemDetail'

export const ItemDetailContainer = props => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        const promesa = new Promise ((resolve, rejected) => {
            setTimeout (() =>{
                resolve(data)
            }, 2000)
        })

        promesa.then(result => {
                setProducts(result)
        })

    }, [])

return (
    <Container className="mt-4">
        <h1>DistriNorte{props.greeting}</h1>
        {products.length === 0 ? (
        <div>Cargando...</div>
        ) : (
            <ItemDetail car = {products} />
        )}
    </Container>

)
}