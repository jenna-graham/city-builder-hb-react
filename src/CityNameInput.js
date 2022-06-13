import React from 'react';

export default function CityNameInput({ setCityName }) {
  return (
    <section>
      <label>
        What is your City Name? <input onChange={e => setCityName(e.target.value)}/>
      </label>
      {/* this component should have a prop called setCityName, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setCityName function */}
      {/* <input /> */}
    </section>
  );
}
