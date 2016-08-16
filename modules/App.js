import React, { Component } from 'react';
import datafetch from './datafetch';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions:[],
      index: 0,
    };

  }

  componentDidMount() {
  datafetch().then((positions) => {
    console.log('fetched',  positions);
      this.setState({
          positions,
      });

    });
  }

  render(){

    return (

              <div style={{ margin: '10em 7em 1em 10em' }}>
              <h2>
                  <PositionsList positions={this.state.positions}/>
              </h2>
              </div>
          );
        }
}
class PositionsList extends Component {
  render() {

    return (
      <div >
        <h2>
        <ul>
          {
             this.props.positions.map(function(position, index) {
                console.log(position._id);
                return(
                    <li className="position" key={index}>
                    <h2>  <Link to={`/Position/${index}`}>{position.position}</Link></h2>
                    <span>{position.state}</span>

                    </li>
                );
              })
          }

        </ul>
       </h2>
      </div>

)
  }


}



export default App;
    // <div id="location_name">{this.state.positions.data[0].state}</div>
