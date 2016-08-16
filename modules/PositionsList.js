
import React, { PropTypes } from 'react';
import { ListGroup  } from 'react-bootstrap';
import PositionsListItem from './PositionsListItem';



const renderPositionsListItemView = (position, index) => (
<PositionsListItem
key={index} position={position} index={index}
/>
);

const mapPositionsListItem = positions => (
positions.map((position, index) => renderPositionsListItemView(position, index))
);

const PositionsList = ({ positions }) => {
const positionsList = mapPositionsListItem(positions);
return (

  <ListGroup>
    {positionsList}
  </ListGroup>

);
};
PositionsList.propTypes = {
onPostitionsClick: PropTypes.func.isRequired,
  positions: PropTypes.array.isRequired,
};
