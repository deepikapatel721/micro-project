import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

class Demo extends Component{

        render(props){
            return <div className="maindiv_style">
                        <h1>{this.props.name}</h1>
                        <p>Welcome To India</p>
                    </div>
        }

}
export default Demo;