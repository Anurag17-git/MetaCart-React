import React from 'react'
import {popularProducts} from "../data"
import styled from 'styled-components';
import Product from "./Product";
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
    return (
        <Link to="product">
            <Container>
            {popularProducts.map(item => {
                return <Product item={item} key={item.id}/>
            })}
        </Container>
        </Link>
    )
}

export default Products
