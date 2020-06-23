import React, { Component } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE','MIT APP']
        };
    }

    
    render() {
        return (
            <div>
                <Hero title="My Skills" />
                <Content>

            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </Content>

            </div>
            
            )
        }
    }
    
    
    export default Skills
    