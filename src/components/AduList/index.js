import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import AduItem from '../AduItem';
import AduForm from '../AduForm';

const DEFAULT_ADU = {
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
    if (AduList.filter((adu) => adu.id === values.id).length > 0) {
      setAduList({ ...AduList, values });
    } else {
      setAduList([
        ...AduList,
        {
          id: AduList.length,
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.lastName,
          br: values.br,
          ba: values.ba,
          sqft: values.sqft,
          price: values.price,
        },
      ]);

      if (AduFormVisibility) {
        setAduFormVisibilty(false);
      }
    }

    console.log({ AduList });
  };

  const editAdu = (id) => {
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
    initialValues: DEFAULT_ADU,
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
            <AduItem adu={adu} />
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
