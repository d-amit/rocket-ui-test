import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

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
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = [];

    launchCollection.launches.forEach((launch, i) => {
      launches.push(
        <Launch
          key={i.toString()}
          launch={launch}
          handleLaunchClick={this.handleLaunchClick}
        />
      );
    });

    return <ul>{launches}</ul>;
  }

  handleLaunchClick(launch) {
    console.info(launch);
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
