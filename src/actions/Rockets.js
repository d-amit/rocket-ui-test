import RocketService from '../services/RocketService';
import ACTIONS from "../constants";

export const requestRocketDetails = () => ({
  type: ACTIONS.REQUEST_ROCKET_DETAILS
});

const receiveRocketDetails = response => ({
  type: ACTIONS.RECEIVE_ROCKET_DETAILS,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = ({ dispatch, rocketId }) => {
  dispatch(requestRocketDetails());
  return RocketService.get(rocketId).then(response => dispatch(receiveRocketDetails(response)));
};
