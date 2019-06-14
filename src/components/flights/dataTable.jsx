import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Push from 'push.js'
export default class DataTable extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isLoaded: true,
        }
        this.props={
            dateRenderOption: '',
            typeOfflights: '',
            typeOffDay: '',
            onBtn: '',
            filtArrival: [],
            filtDeparture: [],
            filtArrivalYestarday: [],
            filtArrivalToomorow: [],
            filtDepartureYestarday: [],
            filtDepartureToomorow: []
        }
    }

    pushAPI = () =>{
        const date = new Date()
        const nowHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const nowMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const nowSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        const readytime = `${nowHours}:${nowMinutes}:${nowSeconds}`

        const time = this.props.filtDeparture.filter(filt=>{
            const date = filt.actual.split('T')
            const newdate = date[1].slice(0, -1)
            const cut = newdate.slice(2)
            const readyfull = newdate[0]+newdate[1]
            const numberdate = Number(readyfull)+3 
            const stringdate = String(numberdate)
            const finish = stringdate+cut
            console.log(finish)
             if(readytime <= finish){
            Push.create('Get a taxi')
        }
        })
       Push.create('test')
    }
    

    render() { 
        console.log(this.props.filtArrivalToomorow)
        if(!this.state.isLoaded){
            return  <p>Loading...</p> 
        }
        else{
            switch(this.props.typeOfflights){
                case 'arrival': return(
                   
                    
                        <Stable>
                            <tbody>
                                <Str>
                                    <Sth>Термінал</Sth>  
                                    <Sth>Розклад</Sth>
                                    <Sth>Призначення</Sth>
                                    <Sth>Статус</Sth>
                                    <Sth>Авіакомпанія</Sth>
                                    <Sth>Рейс</Sth> 
                                </Str>  
                        {  
                            this.props.filtArrival.map(flight =>(    
                                          
                                <Str key={flight.ID}>
                                    <Std>{flight.term}</Std>
                                    <Std>{flight.actual}</Std>
                                    <Std>{flight["airportFromID.name"]}</Std>
                                    <Std>{flight.status}</Std>
                                    <Std>{flight.airline.ua.name}</Std>
                                    <Std>{flight.codeShareData[0].codeShare}</Std>
                                </Str>
                            ))
                        }   
                            </tbody>
                        </Stable>
                )

            case 'departure': return(
                    <Stable>
                        <tbody>
                            <Str>
                                <Sth>Термінал</Sth>  
                                    <Sth>Розклад</Sth>
                                    <Sth>Призначення</Sth>
                                    <Sth>Статус</Sth>
                                    <Sth>Авіакомпанія</Sth>
                                    <Sth>Рейс</Sth> 
                                    <Sth>Таксі</Sth>
                            </Str>  
                            {  
                                this.props.filtDeparture.map(flight =>(
                                    <Str key={flight.ID}>
                                        <Std>{flight.term}</Std>
                                        <Std>{flight.actual}</Std>
                                        <Std>{flight["airportToID.name"]}</Std>
                                        <Std>{flight.status}</Std>
                                        <Std>{flight.airline.ua.name}</Std>
                                        <Std>{flight.codeShareData[0].codeShare}</Std>
                                        <Std><button onClick={this.pushAPI}>Taxi reminder</button></Std>
                                    </Str>
                                ))
                            }   
                        </tbody>
                    </Stable>
            )

            case 'arrival-yestarday': return(
                   
                    
                <Stable>
                    <tbody>
                        <Str>
                            <Sth>Термінал</Sth>  
                            <Sth>Розклад</Sth>
                            <Sth>Призначення</Sth>
                            <Sth>Статус</Sth>
                            <Sth>Авіакомпанія</Sth>
                            <Sth>Рейс</Sth> 
                        </Str>  
                {  
                    this.props.filtArrivalYestarday.map(flight =>(    
                                  
                        <Str key={flight.ID}>
                            <Std>{flight.term}</Std>
                            <Std>{flight.actual}</Std>
                            <Std>{flight["airportFromID.name"]}</Std>
                            <Std>{flight.status}</Std>
                            <Std>{flight.airline.ua.name}</Std>
                            <Std>{flight.codeShareData[0].codeShare}</Std>
                        </Str>
                    ))
                }   
                    </tbody>
                </Stable>
        )

        case 'arrival-toomorow': return(
                   
                    
            <Stable>
                <tbody>
                    <Str>
                        <Sth>Термінал</Sth>  
                        <Sth>Розклад</Sth>
                        <Sth>Призначення</Sth>
                        <Sth>Статус</Sth>
                        <Sth>Авіакомпанія</Sth>
                        <Sth>Рейс</Sth> 
                    </Str>  
            {  
                this.props.filtArrivalToomorow.map(flight =>(    
                              
                    <Str key={flight.ID}>
                        <Std>{flight.term}</Std>
                        <Std>{flight.actual}</Std>
                        <Std>{flight["airportFromID.name"]}</Std>
                        <Std>{flight.status}</Std>
                        <Std>{flight.airline.ua.name}</Std>
                        <Std>{flight.codeShareData[0].codeShare}</Std>
                    </Str>
                ))
            }   
                </tbody>
            </Stable>
    )

    case 'departure-toomorow': return(
                   
                    
        <Stable>
            <tbody>
                <Str>
                    <Sth>Термінал</Sth>  
                    <Sth>Розклад</Sth>
                    <Sth>Призначення</Sth>
                    <Sth>Статус</Sth>
                    <Sth>Авіакомпанія</Sth>
                    <Sth>Рейс</Sth> 
                    <Sth>Таксі</Sth>
                </Str>  
        {  
            this.props.filtDepartureToomorow.map(flight =>(    
                          
                <Str key={flight.ID}>
                    <Std>{flight.term}</Std>
                    <Std>{flight.actual}</Std>
                    <Std>{flight["airportFromID.name"]}</Std>
                    <Std>{flight.status}</Std>
                    <Std>{flight.airline.ua.name}</Std>
                    <Std>{flight.codeShareData[0].codeShare}</Std>
                    <Std><button>Taxi reminder</button></Std>
                </Str>
            ))
        }   
            </tbody>
        </Stable>
)

case 'departure-yestarday': return(
                   
                    
    <Stable>
        <tbody>
            <Str>
                <Sth>Термінал</Sth>  
                <Sth>Розклад</Sth>
                <Sth>Призначення</Sth>
                <Sth>Статус</Sth>
                <Sth>Авіакомпанія</Sth>
                <Sth>Рейс</Sth> 
                <Sth>Таксі</Sth>
            </Str>  
    {  
        this.props.filtDepartureYestarday.map(flight =>(    
                      
            <Str key={flight.ID}>
                <Std>{flight.term}</Std>
                <Std>{flight.actual}</Std>
                <Std>{flight["airportFromID.name"]}</Std>
                <Std>{flight.status}</Std>
                <Std>{flight.airline.ua.name}</Std>
                <Std>{flight.codeShareData[0].codeShare}</Std>
                <Std><button>Taxi reminder</button></Std>
            </Str>
        ))
    }   
        </tbody>
    </Stable>
)

            }
        }  
        }      
    }

const Stable = styled.table`
    width: 100%;
    border: none;
    border-collapse: collapse; 
` 
const Str = styled.tr`
    :nth-child(odd){
        background-color: #fff;
        border: none;
    }   
    :hover{
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5)    
    }
`
const Std = styled.td`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    color: #2f2f2f;
    text-align: center;
    padding: 15px;
`
const Sth = styled.th`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #95989a;
    text-align: center;
    padding: 15px;
` 
