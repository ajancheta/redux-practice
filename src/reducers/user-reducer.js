import { UPDATE_USER } from '../actions/user-actions.js';

export default function userReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    default:
      return state;
  }
}
