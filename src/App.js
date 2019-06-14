import React from 'react'
import Header from "./components/header/header";
import Search from './components/search/search';
import Content from './components/content/content';
import styled from 'styled-components'



export default class App extends React.Component {
    componentDidMount(){
      
        
    }

    render() {

        return <main> 

                <Header/>
                <Sh1>ПОШУК РЕЙСУ</Sh1>
                <Search/>
                <Content/>
        </main>
            
        
    }
}

const Sh1 = styled.h1`
text-align: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 10px;
color: #2f2f2f;
margin: 150px 0 50px 0;
`