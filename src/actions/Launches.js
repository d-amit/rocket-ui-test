import LaunchService from '../services/LaunchService';
import ACTIONS from "../constants";

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

const displayLaunchDetails = (launchFlightNumber) => ({
  type: ACTIONS.DISPLAY_LAUNCH_DETAILS,
  payload: {
    flightNumber: launchFlightNumber
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);

export const updateDisplayLaunchTarget = ({ dispatch, launchFlightNumber }) => {
  dispatch(displayLaunchDetails(launchFlightNumber));
};
