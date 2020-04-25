import React from 'react';
// import { Dropdown } from 'semantic-ui-react'
import clasroom from "../../assets/classroom.jpg"
import './Home.scss'

// const options = [
//   { key: 'angular', text: 'Angular', value: 'angular' },
//   { key: 'css', text: 'CSS', value: 'css' },
//   { key: 'design', text: 'Graphic Design', value: 'design' },
//   { key: 'ember', text: 'Ember', value: 'ember' },
//   { key: 'html', text: 'HTML', value: 'html' },
//   { key: 'ia', text: 'Information Architecture', value: 'ia' },
//   { key: 'javascript', text: 'Javascript', value: 'javascript' },
// ]



class Home extends React.Component {
    constructor(props) {
        super(props);
       this.state = { 

       };
    }
 
  render() {
      return (<div className="Home">
                <div className="Home-navbar">
                <h1>Home Quarntine</h1>
                </div>
          <div className="Home-container">
              <div className="Home-container-image">
                <img src={clasroom} alt="classrrom"/>
              </div>
              <div className="Home-container-text">
                  <div className="Home-container-text-l1">
                        <h1>AUTOMATED ATTENDENCE SYSTEM</h1>
                  </div>
                  <div className="Home-container-text-l2">
                    <h3>Imgae Recogination based Attendence System</h3>
                  </div>
                  <div className="Home-container-text-l3">
                     <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                  </div>
                  <div className="Home-container-text-button">
                     <a href="/signin">Login</a>
                     <a href="/registration">Register</a>
                </div>
              </div>

          </div>
      </div>
        );
    }
}

export default Home;