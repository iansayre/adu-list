import React from 'react';

const AduForm = (props) => {
  const { handleChange, handleSubmit, values, submitBtnText } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" value={values.id} />
      <>
        <label>First Name</label>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
      </>
      <>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
      </>
      <>
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={handleChange}
          value={values.address}
        />
      </>
      <>
        <lable>Bathrooms</lable>
        <input
          type="text"
          placeholder="number of bathrooms"
          name="ba"
          onChange={handleChange}
          value={values.ba}
        />
      </>
      <>
        <label>Bedrooms</label>
        <input
          type="text"
          name="br"
          placeholder="number of bedrooms"
          onChange={handleChange}
          value={values.br}
        />
      </>
      <>
        <label>Square Feet</label>
        <input
          type="text"
          name="sqft"
          placeholder="square feet"
          onChange={handleChange}
          value={values.sqft}
        />
      </>
      <>
        <label>$</label>
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={values.price}
        />
      </>

      <input type="submit" value={submitBtnText} />
    </form>
  );
};

export default AduForm;
