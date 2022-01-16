import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
           You are getting 30% off on each product
         </Container>
    )
}

export default Announcement
