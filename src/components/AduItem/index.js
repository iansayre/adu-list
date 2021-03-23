import React from 'react';
import PropTypes from 'prop-types';

const AduItem = (props) => {
  const { id, firstName, lastName, address, br, ba, sqft, price } = props.adu;
  return (
    <div className="adu-item">
      <h4>
        {firstName} {lastName}
      </h4>
      <p className="address">{address}</p>
      <div className="adu-info">
        <span>Br: {br}</span>
        <span>Ba: {ba}</span>
        <span>Sqft: {sqft}</span>
        <span>Price: ${price}</span>
      </div>
      <div className="edit-btns">
        <button
          onClick={(id) => {
            props.handleEdit(id);
          }}
        >
          Edit
        </button>
        <button
          onClick={(id) => {
            props.handleRemove(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

AduItem.propTypes = {
  adu: PropTypes.object,
  handleEdit: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default AduItem;
