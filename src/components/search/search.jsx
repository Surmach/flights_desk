import React from 'react'
import styled from 'styled-components'
export default class Search extends React.Component{
    render(){
        return <Swrapper>
            <Slookinput type="button" value=""/>
            <Ssearchinput type="text" placeholder='Номер рейсу або місто'/>
            <Sbuttoninput type="submit" value="ЗНАЙТИ"/>
        </Swrapper>
    }
}
const Swrapper = styled.div`
    position:relative;
    width: 540px;
    margin: 30px auto;
`
const Slookinput = styled.input`
    position:absolute;
    top:30%;
    left:2%;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    background-image: url('./search.svg');
    background-size: cover;
`
const Ssearchinput = styled.input`
    width: 490px;
    height: 60px;
    border: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #95989A;
    padding: 0 0 0 50px;
    outline: none;
`
const Sbuttoninput = styled.input`
    position:absolute;
    top:-1%;
    right:-10%;
    width:150px;
    height:62px;
    border: none;
    background-color: #1EB7EE;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #ffffff;
    outline: none;
    border-radius: 0 70px 0 0;
`