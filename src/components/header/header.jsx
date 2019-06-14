import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
export default class Header extends React.Component{
    render(){
        return <Sheader>
            <Simg  src={logo} alt=""/>
            <Snav >
                <Sli> <Sspan>For passengers</Sspan> </Sli>
                <Sli> <Sspan>IEV Services</Sspan> </Sli>
                <Sli> <Sspan>VIP</Sspan> </Sli>
                <Sli> <Sspan>Corporate</Sspan> </Sli>
            </Snav>
            <Sbutton>EN</Sbutton>
        </Sheader>
    }
}

const Sheader = styled.header`
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    width: 100%;
    height: 92px;
    background-color: #1EB7EE;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    z-index: 2;
`
const Simg = styled.img`
    height: 60px;
    margin: 15px 0 18px 134px;
`

const Snav = styled.nav`
     display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 0 0 0 40%;
`
const Sli = styled.li`
    text-decoration: none;
    list-style: none;
`

const Sspan = styled.span`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 16px;
    font-weight: bold;
`
const Sbutton = styled.button`
    justify-self: end;
    width: 70px;
    height: 92px;
    color: white;
    font-weight: bold;
    font-size: 17px;
    background-color: #1EB7EE;
    border: none;
`
