import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ImgSrc from './ImgSrc';
import Fullname from './Fullname';
import Profession from './Profession';
import Bio from './Bio';
class App extends Component{
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Ghzel dawser',
        bio: 'A software developer',
        imgSrc: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/267494287_3020437644895680_7266684194077384837_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1rn_GikZvtsAX9OhXFG&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDJ2iDSg89CbIAHuwzPasuhGxdqU1wpaOEJvlHUUrPdIg&oe=64ED0AD4",
        profession: 'Developer'
      },
      show: false,
      lastMountTime: 0,
      
    };
  }
  componentDidMount() {
    this.setState({ lastMountTime: Date.now() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render(){
    const { person, show, lastMountTime } = this.state;
    return(
  <div className='abc'>
  <button onClick={this.toggleShow}>Dawser Profile</button>
  
  {show && (
      <div className='imag'>
      <ImgSrc imgSrc={this.state.person.imgSrc}/>
      <Fullname fullName={this.state.person.fullName} />
      <Profession profession={this.state.person.profession} />
      <Bio bio={this.state.person.bio}/>
      
      </div>
      )}
      <p>Time since last mount: {Date.now() - lastMountTime} milliseconds</p>
      </div>
    )
  }
}



export default App;
