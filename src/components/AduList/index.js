import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import AduItem from '../AduItem';
import AduForm from '../AduForm';

const DEFAULT_ADU = {
  id: '',
  firstName: '',
  lastName: '',
  address: '',
  br: '',
  ba: '',
  sqft: '',
  price: '',
};

const AduList = () => {
  const [AduList, setAduList] = useState([]);
  const [AduFormVisibility, setAduFormVisibilty] = useState(false);
  const [ActiveAdu, setActiveAdu] = useState(DEFAULT_ADU);
  const [updateOrAdd, setUpdateOrAdd] = useState('ADD');

  const updateAduList = (values) => {
    console.log({ values });
    setAduList([...AduList, values.values]);

    if (AduFormVisibility) {
      setAduFormVisibilty(false);
    }

    if (updateOrAdd === 'UPDATE') {
      setUpdateOrAdd('ADD');
    }

    setActiveAdu(DEFAULT_ADU);

    console.log({ AduList, ActiveAdu });
  };

  const editAdu = (id) => {
    setUpdateOrAdd('UPDATE');
    setActiveAdu(AduList.filter((adu) => adu.id === id)[0]);
    setAduFormVisibilty(true);
  };

  const removeAdu = (id) => {
    setAduList((prevAduList) => prevAduList.filter((adu) => adu.id !== id));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useCustomForm({
    initialValues: ActiveAdu,
    onSubmit: (values) => {
      updateAduList(values);
    },
  });

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
            <AduItem adu={adu} handleEdit={editAdu} handleRemove={removeAdu} />
          </li>
        ))}
      </ul>
      {AduFormVisibility && (
        <AduForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          updateOrAdd={updateOrAdd}
        />
      )}
    </div>
  );
};

export default AduList;
