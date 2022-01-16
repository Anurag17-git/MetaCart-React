import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
`
const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgrey;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Menuitems = styled.div`
    font-size: 14px;
    pointer: cursor;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Languages>EN</Languages>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"grey", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Link to="/" style={{color: "black", textDecoration: "none"}}>
                <Logo>MetaCart.</Logo>
            </Link></Center>
            <Right>
                <Link to="register" style={{color: "black"}}>
                <Menuitems>REGISTER</Menuitems>
                </Link> 
                <Link to="login" style={{color: "black"}}>
                <Menuitems>SIGN IN</Menuitems>
                </Link> 
                <Menuitems>
                <Link to="/cart" style={{color: "black"}}>
                    <Badge badgeContent={4}>
                    <ShoppingCartOutlined />
                    </Badge>
                </Link>
                </Menuitems>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;