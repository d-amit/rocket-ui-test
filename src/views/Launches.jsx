import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded, updateDisplayLaunchTarget} from "../actions/Launches";
import Launch from '../components/Launch';
import {fetchRocket} from "../actions/Rockets";
import rocketDetails from "../stores/RocketReducer";

class LaunchesView extends Component {

  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection, rocketDetails } = this.props;
    const { launchFlightNumber } = launchCollection;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    launchCollection.launches.forEach((launch, i) => {
      let rocket;

      if (launchFlightNumber !== undefined && launchFlightNumber === launch.flight_number) {
        rocket = rocketDetails ? rocketDetails.rocket : undefined;
      }

      launches.push(
        <Launch
          key={i.toString()}
          launch={launch}
          handleLaunchClick={this.handleLaunchClick}
          rocket={rocket}
        />
      );
    });

    return <ul>{launches}</ul>;
  }

  handleLaunchClick(launch) {
    const { dispatch, launchCollection } = this.props;
    const launchFlightNumber = launch ? launch.flight_number : undefined;
    const prevFlightNumber = launchCollection.launchFlightNumber;
    const rocketId = launch.rocket.rocket_id;

    if (prevFlightNumber !== undefined && launchFlightNumber === prevFlightNumber) {
      updateDisplayLaunchTarget({ dispatch, undefined });
    }
    else {
      updateDisplayLaunchTarget({ dispatch, launchFlightNumber });
      fetchRocket({ dispatch, rocketId });
    }
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
