import React from 'react';

const Launch = ({ launch, handleLaunchClick }) => (
  <li className='launch-item' onClick={() => handleLaunchClick(launch)}>
    <h2> { launch.mission_name } </h2>
    <div> Flight Number: { launch.flight_number } </div>
  </li>
);

export default Launch;
