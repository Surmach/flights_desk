import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import DatePanel from '../datePanel/datePanel';

export default class ButtonPanel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isDepartureClick: false,
            isArrivalClick: false,
        }
    }

    isArrivalClick = () =>{
        this.setState(state=>({
            isArrivalClick: true,
            isDepartureClick: false
        }))
    }
    isDepartureClick = () =>{
        this.setState(state=>({
            isDepartureClick: true,
            isArrivalClick: false
        }))
    }
    render(){
        
        return(
            <div>
                
                <SbuttonPanel>
                            <SLink id='departureBtn' to='/departure/' onClick={this.isDepartureClick}>ВИЛІТ</SLink>
                            <SLink id='arrivalBtn' to='/arrival/' onClick={this.isArrivalClick}>ПРИЛІТ</SLink>
                </SbuttonPanel>
                <DatePanel isDepartureClick={this.state.isDepartureClick} isArrivalClick={this.state.isArrivalClick}/>
            </div>  
        )  
    }
}

const SbuttonPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #73D2F0;
    border-radius: 50px 50px 0 0;
`
const SLink = styled(Link)`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 50px 50px 0 0;
    background-color: #73D2F0;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
    color: #ffffff;

    text-decoration: none;
    text-align: center;
    :focus{
    background-color: #ffffff;
    outline: none;
    color: #73D2F0;
    }
`
