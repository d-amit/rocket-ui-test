import React from 'react';

const Launch = ({ launch, handleLaunchClick, rocket }) => (
  <li className='launch-item' onClick={() => handleLaunchClick(launch)}>
    <h2> { launch.mission_name } </h2>
    <div> Flight Number: { launch.flight_number } </div>
    {
      rocket &&
        <dl>
          <dt>ROCKET ID</dt><dd>{rocket.rocket_id}</dd>
          <dt>ROCKET NAME</dt><dd>{rocket.rocket_name}</dd>
          <dt>COST PER LAUNCH</dt><dd>{rocket.cost_per_launch}</dd>
          <dt>SUCCESS RATE</dt><dd>{rocket.success_rate_pct}</dd>
          <dt>DESCRIPTION</dt><dd>{rocket.description}</dd>
        </dl>
    }
  </li>
);

export default Launch;
