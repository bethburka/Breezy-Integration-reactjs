import React, { Component } from 'react';
import disfetch from './disfetch';
 import {Checkbox, Radio, Button, HelpBlock, Row,FormGroup, Grid, ControlLabel, FormControl, form, FromGroup, control} from 'react-bootstrap';
//
class Forms extends Component{


    constructor(props) {
      super(props);
      this.state = {
        data:[],
        name:'ola',
        email:'dsds',
        phone:'3434'

    };

    console.log(this.state.name);

}
handleSubmit(event) {
var newdata= this.state.name;

  var data = {
    email: document.getElementById('name').value
  }
  console.log(data)
  event.preventDefault();
  return fetch(
    // 'http://beta.json-generator.com/api/json/get/VyHFZXJOZ',
    'http://breezy-proxy.mobgendev005.com' + endpoint,
    { method: 'post', mode: 'cors', body: JSON.stringify(data) }
  ).then((response) => response.json());
  // // Scroll to the top of the page to show the status message.
  // console.log(this.state)
  // var nextItems = this.state.data.concat([{text: this.state.name, id: Date.now()}]);
  // var nextText = '';
  // this.setState({data: nextItems, text: nextText});

}


sendFormData() {
  // Prepare form data for submitting it.
  var data = {
    email: this.name
  // answer: document.getElementById('answer').value
    // name: React.findDOMNode(this.refs.name).value,
    // email: React.findDOMNode(this.refs.email).value,
    // phone: React.findDOMNode(this.refs.phone).value
  };

  console.log(data);
}


  render() {

    return (
      <div style={{ margin: '10em 7em 1em 10em' }}>
        <h1 className="p-detail">Personal Detail</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input id="name" className="form-control"  placeholder=" Full Name" name="name" ref="name" required type="text" />
          </div>
                 <br/>
          <div className="form-group">
            <label htmlFor="email"> </label>
            <input className="form-control" placeholder="Email Address" name="email" ref="email" required type="email" />
          </div>
            <br/>
          <div className="form-group">
            <label htmlFor="phone"> </label>
            <input className="form-control"  placeholder="Phone Number" name="phone" ref="phone" required type="phone" />
          </div>
             <br/>
               <h2 className="p-detail">Resume</h2>
               <FormGroup controlId="formControlsFile">
              <ControlLabel></ControlLabel>
              <FormControl type="file" />
              </FormGroup>
            <br/>
              <h2 className="p-detail">Cover Letter</h2>
           <FormGroup controlId="formControlsFile">
             <ControlLabel></ControlLabel>
             <FormControl type="file" />
           </FormGroup>
           <br/>

          <div className="form-group">
          <h3 className="p-detail">Additional Info</h3>
            <label htmlFor="Additional"></label>
            <textarea className="form-control" name="project" ref="project" rows="4" />
          </div>
           <br/>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Forms;
