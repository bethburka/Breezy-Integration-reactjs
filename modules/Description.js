import React, { Component } from 'react';
import datafetch from './datafetch';
import { Link } from 'react-router';
import { Row, Grid, Button, ButtonToolbar} from 'react-bootstrap';


class Description extends Component{
  constructor(props) {
    super(props);
    this.state = { position:[{ description:'Programmer', position:'IT'}],

    };
  }
  componentDidMount() {
    datafetch().then((position) => {
      console.log('fetched', position);
        this.setState({
      position,

      });
    });
  }

  render() {
   let param = this.props.params.id;
console.log(param);
    return (

      <Grid className="container-fluid">

        <Row style={{ margin: '10em 7em 1em 10em' }}>
            <h2>{this.state.position[0].position}</h2>

            <p>{this.state.position[0].descritpion}</p>


            <Link to="/forms">
                  <ButtonToolbar>
                     <Button>Apply</Button>
                    </ButtonToolbar></Link>
        </Row>
      </Grid>

)
  }
}
export default Description;
