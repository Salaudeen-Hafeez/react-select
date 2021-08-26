import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SelectComponent = () => {
  const [colourOptions, setColourOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [selectValue, setSelectValue] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const userNames = data.map((val) => {
          return { id: val.id, value: val.name, label: val.name };
        });
        setColourOptions(userNames);
      });
  }, []);

  const handleSelect1 = (e) => {
    setValues(e);
  };

  const handleSelect2 = (e) => {
    setSelectValue(e);
  };

  return (
    <div>
      <Select
        defaultValue={colourOptions[1]}
        options={colourOptions}
        onChange={handleSelect1}
      />
      <p>
        You have selected{' '}
        <span style={{ fontWeight: 'bold' }}>{values.value}</span> whose id is
        spa <span style={{ fontWeight: 'bold' }}>{values.id}</span>
      </p>
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        onChange={handleSelect2}
      />
      <div style={{ display: 'flex', flexDirection: 'column', font: 'bold' }}>
        {selectValue.map((val) => (
          <p
            key={val.id}
            style={{
              fontWeight: 'bold',
              marginTop: '4px',
              marginBottom: '4px',
            }}
          >
            {val.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectComponent;
