import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DatePanel from '../datePanel/datePanel';
import ButtonPanel from '../buttonpanel/buttonPanel';
import DataTable from '../flights/dataTable'
import { BrowserRouter, Route} from "react-router-dom";

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            day: new Date().getDate(),       
            isLoaded: false,
            filtArrival: [],
            filtDeparture: [],
            filtArrivalYestarday: [],
            filtArrivalToomorow: [],
            filtDepartureYestarday: [],
            filtDepartureToomorow: []
            }
            
        }
        componentDidMount(){
            const nowdate = new Date().getDate()
            axios.get(`https://api.iev.aero/api/flights/${this.now()}`)
            .then(res => {
                this.setState({isLoaded: true, filtArrival: [res.data.body.arrival][0].filter(item=>{
                    const date = item.actual.split('T')
                    return date[0] === `2019-06-${nowdate}`
    
                }),
                    filtDeparture: [res.data.body.departure][0].filter(item=>{
                        const date = item.actual.split('T')
                        return date[0] === `2019-06-${nowdate}`
                    }),
    
                    filtArrivalToomorow: [res.data.body.arrival][0].filter(item=>{
                        const date = item.actual.split('T')
                        return date[0] === `2019-06-${nowdate-1}`
                    }),
                    filtArrivalYestarday: [res.data.body.arrival][0].filter(item=>{
                        const date = item.actual.split('T')
                        return date[0] === `2019-06-${nowdate+1}`
                    }),
                    filtDepartureToomorow: [res.data.body.arrival][0].filter(item=>{
                        const date = item.actual.split('T')
                        return date[0] === `2019-06-${nowdate-1}`
                    }),
    
                    filtDepartureYestarday: [res.data.body.arrival][0].filter(item=>{
                        const date = item.actual.split('T')
                        return date[0] === `2019-06-${nowdate+1}`
                    }),
                })
            })
            
        }
    
    now  =  () =>{
        const d = new Date();
        const month = d.getMonth()+1;
        const output = (this.state.day<10 ? '0' : '') + this.state.day + "-" 
          + (month<10 ? '0' : '') + month + '-'
          + d.getFullYear();

        return output;
    } 

    render(){
        return(
            <SContent>
                <BrowserRouter>
                <ButtonPanel />
                    <Route path='/arrival' render={(props)=><DataTable filtArrival={this.state.filtArrival} typeOfflights='arrival'/>}/>
                    <Route path='/departure' render={(props)=><DataTable filtDeparture={this.state.filtDeparture} typeOfflights='departure'/>}/>

                    <Route path='/arrival-yestarday' render={(props)=><DataTable filtArrivalYestarday={this.state.filtArrivalYestarday} typeOfflights='arrival-yestarday'/>}/>
                    <Route path='/arrival-toomorow' render={(props)=><DataTable filtArrivalToomorow={this.state.filtArrivalToomorow} typeOfflights='arrival-toomorow'/>}/>

                    <Route path='/departure-yestarday' render={(props)=><DataTable filtDepartureYestarday={this.state.filtDepartureYestarday} typeOfflights='departure-yestarday'/>}/>
                    <Route path='/departure-toomorow' render={(props)=><DataTable filtDepartureToomorow={this.state.filtDepartureToomorow} typeOfflights='departure-toomorow'/>}/>

                </BrowserRouter>
            </SContent>
        )
    }
}    
const SContent = styled.div`
    max-width: 80vw;
    margin: 0 auto;
`
