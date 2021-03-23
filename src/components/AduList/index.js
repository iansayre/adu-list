import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import AduItem from '../AduItem';
import AduForm from '../AduForm';

const DEFAULT_ADU = {
  id: Math.random(),
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
  const [ActiveAdu, setActiveAdu] = useState(null);

  const updateAduList = (values) => {
    console.log({ values });
    setAduList([...AduList, values.values]);

    if (AduFormVisibility) {
      setAduFormVisibilty(false);
    }

    if (ActiveAdu) {
      setActiveAdu(null);
    }

    console.log({ AduList });
  };

  const editAdu = (id) => {
    setActiveAdu(AduList.filter((adu) => adu.id === id)[0]);
    setAduFormVisibilty(true);
  };

  const removeAdu = (id) => {
    setAduList(AduList.filter((adu) => adu.id !== id));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useCustomForm({
    initialValues: ActiveAdu ? ActiveAdu : DEFAULT_ADU,
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
          submitText={ActiveAdu ? 'Update' : 'Submit'}
        />
      )}
    </div>
  );
};

export default AduList;
