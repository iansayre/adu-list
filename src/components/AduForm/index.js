import React from 'react';

const AduForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        label="First Name"
        placeholder="first name"
        value={props.firstName}
      />
      <input
        type="text"
        label="Last Name"
        placeholder="last name"
        value={props.lastName}
      />
      <input
        type="text"
        label="Bathrooms"
        placeholder="number of bathrooms"
        value={props.ba}
      />
      <input
        type="text"
        label="Bedrooms"
        placeholder="number of bedrooms"
        value={props.br}
      />
      <input
        type="text"
        label="Square Feet"
        placeholder="square feet"
        value={props.sqft}
      />
      <input type="text" label="$" placeholder="price" value={props.price} />
      <input type="submit" value={props.submitBtnValue} />
    </form>
  );
};

export default AduForm;
