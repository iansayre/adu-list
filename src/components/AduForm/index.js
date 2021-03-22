import React from 'react';

const AduForm = (props) => {
  const { id, firstName, lastName, address, br, ba, sqft, price } = props.adu;
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="hidden" value={id} />
      <input
        type="text"
        label="First Name"
        placeholder="first name"
        value={firstName}
      />
      <input
        type="text"
        label="Last Name"
        placeholder="last name"
        value={lastName}
      />
      <input
        type="text"
        label="Address"
        placeholder="Address"
        value={address}
      />
      <input
        type="text"
        label="Bathrooms"
        placeholder="number of bathrooms"
        value={ba}
      />
      <input
        type="text"
        label="Bedrooms"
        placeholder="number of bedrooms"
        value={br}
      />
      <input
        type="text"
        label="Square Feet"
        placeholder="square feet"
        value={sqft}
      />
      <input type="text" label="$" placeholder="price" value={price} />
      <input type="submit" value={props.submitBtnValue} />
    </form>
  );
};

export default AduForm;
