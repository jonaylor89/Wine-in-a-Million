import React, {Component} from 'react';
import './App.css';
import HomepageImage from './components /HomepageImage';
import SearchBox from './SearchBox';

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wine in a Million</h1>
        <HomepageImage />
        </header>
        <div className="App-Component">
        <SearchBox/>  
      
        <div className="App-Component">
          
        </div>
        
    </div>
    </div>
  );
}
}
export default App;
