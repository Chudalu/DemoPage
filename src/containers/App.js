import React, {Component} from 'react';
import Navigation from '../components/Navigation.js';
import Scroll from '../components/Scroll.js';
import Body from '../components/Body.js';
import './App.css';

class App extends Component {
   
    render(){
       return <div>
           <Navigation/>
           <Scroll>
            <Body />
           </Scroll>
       </div>
    }
}

export default App;