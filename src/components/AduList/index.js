import React, { useState } from 'react';
import AduItem from '../AduItem';
import AduForm from '../AduForm';

const FIRST_ADU = {
  id: 0,
  firstName: 'Foo',
  lastName: 'bar',
  address: '123 Any St. USA',
  br: 3,
  ba: 2,
  sqft: 1200,
  price: 150000,
};

const AduList = () => {
  const [AduList, setAduList] = useState([]);
  const [AduFormVisibility, setAduFormVisibilty] = useState(false);
  const [ActiveAdu, setActiveAdu] = useState(null);

  const updateAduList = (e) => {
    e.preventDefault();

    console.log({ form: e.target });

    if (AduList.filter((adu) => adu.id === e.id).length > 0) {
    } else {
      setAduList([
        ...AduList,
        {
          id: AduList.length,
          firstName: e.target.firstName,
          lastName: e.target.lastName,
          address: e.target.lastName,
          br: e.target.br,
          ba: e.target.ba,
          sqft: e.target.sqft,
          price: e.target.price,
        },
      ]);
      setAduFormVisibilty(false);
    }

    console.log({ AduList });
  };

  const editAdu = (id) => {
    setActiveAdu(AduList.filter((adu) => adu.id === id));
  };

  const removeAdu = (id) => {
    setAduList((prevAduList) => prevAduList.filter((adu) => adu.id !== id));
  };

  return (
    <div className="adu-container">
      <div className="btn-container">
        <button
          onClick={() => {
            setAduFormVisibilty(true);
          }}
        >
          Add new Adu
        </button>
      </div>
      <ul className="adu-list">
        {AduList.map((adu) => (
          <li key={adu.id}>
            <AduItem adu={adu} />
          </li>
        ))}
      </ul>
      {AduFormVisibility && (
        <AduForm
          adu={ActiveAdu ? ActiveAdu : {}}
          handleSubmit={updateAduList}
          subitButtonValue={ActiveAdu ? 'Update' : 'Submit'}
        />
      )}
    </div>
  );
};

export default AduList;
