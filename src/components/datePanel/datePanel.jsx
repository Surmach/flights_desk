import React from 'react'
import styled from 'styled-components'
import dateimg from './dateimg.svg'
import {Link} from "react-router-dom"
export default class DatePanel extends React.Component{
    constructor(props){
        super(props)
        this.props={
           isDepartureClick: null,
           isArrivalClick: null,
        }
       
    }

    render(){
        
        const date = new Date()
        const month = date.getMonth()+1

        const nowmonth = month < 10 ? '0' + month: month
        const nowdate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const toomorow = date.getDate()+1
        const yestarday = date.getDate()-1

        const toomorowdate =  toomorow < 10 ? '0' + toomorow: toomorow
        const yestertadydate = yestarday < 10 ? '0' + yestarday: yestarday

        const toomorowdateMonth = toomorowdate + '/' + nowmonth
        const yestertadydateMonth = yestertadydate + '/' + nowmonth
        const dateMonth = nowdate + '/' + nowmonth

        
        return <Sdatepanel>

            <Sleftitem>
                <Sspan>{dateMonth}</Sspan>
                <Simg src={dateimg} alt=""/>
            </Sleftitem>

            <Srightitem>

                <SLink to={this.props.isArrivalClick ? '/arrival-toomorow': '/departure-toomorow'}>
                    <Sitem>
                        <Sspan>{yestertadydateMonth}</Sspan>
                        <Sspan>ВЧОРА</Sspan>
                        <Sline></Sline>
                    </Sitem> 
                </SLink>

              
                   <Sitem>
                    <SLink to={this.props.isArrivalClick ? '/arrival': '/departure'}>
                        <Sspan>{dateMonth}</Sspan>
                        <Sspan>СЬОГОДНІ</Sspan>
                        <Sline></Sline>
                    </SLink>
                    </Sitem>
              

               <SLink to={this.props.isArrivalClick ? '/arrival-yestarday': '/departure-yestarday'}>
                     <Sitem>
                    <Sspan>{toomorowdateMonth}</Sspan>
                    <Sspan>ЗАВТРА</Sspan>
                    <Sline></Sline>
                    </Sitem>
               </SLink>
                
            </Srightitem>
        </Sdatepanel>
    }
}

const Sdatepanel = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    height: 12vh;
    width: 100%;
    background-color: white; 
`
const Sleftitem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: center; 
    justify-self: center;
    margin: 0 0 15% 0;
`
const Srightitem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Sspan = styled.span`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    color: #1eb7ee;
`
const Sline = styled.div`
    height: 2px;
    width: 100px;
    background-color: #B8B9B9;
`
const Sitem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
`
const Simg = styled.img`
    align-self: flex-start;
`
const SLink = styled(Link)`
    text-align: center;
    text-decoration: none;
`