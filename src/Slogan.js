import React from 'react';
import SloganList from './SloganList';

export default function Slogan({ slogan }) {
  return (
    <div className='slogan'>
      <ul>
        <SloganList slogan={slogan}/>
      </ul>
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
    </div>
  );
}
