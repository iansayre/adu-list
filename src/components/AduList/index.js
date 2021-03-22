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
  const [AduList, setAduList] = useState([FIRST_ADU]);
  const [AduFormVisibility, setAduFormVisibilty] = useState(false);
  const [ActiveAdu, setActiveAdu] = useState(null);

  const addNewAdu = (e) => {
    e.preventDefault();

    const prevAduList = AduList;
    setAduList(
      prevAduList.append({
        id: prevAduList.length,
        firstName: e.firstName,
        lastName: e.lastName,
        address: e.lastName,
        br: e.br,
        ba: e.ba,
        sqft: e.sqft,
        price: e.price,
      })
    );
  };

  const editAdu = (id) => {
    // setAduList;
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
          firstName={ActiveAdu ? ActiveAdu.firstName : null}
          lastName={ActiveAdu ? ActiveAdu.lastName : null}
          address={ActiveAdu ? ActiveAdu.address : null}
          br={ActiveAdu ? ActiveAdu.br : null}
          ba={ActiveAdu ? ActiveAdu.ba : null}
          sqft={ActiveAdu ? ActiveAdu.sqft : null}
          price={ActiveAdu ? ActiveAdu.price : null}
          handleSubmit={
            ActiveAdu
              ? () => {
                  editAdu(ActiveAdu.id);
                }
              : () => {
                  removeAdu(ActiveAdu.id);
                }
          }
        />
      )}
    </div>
  );
};

export default AduList;
