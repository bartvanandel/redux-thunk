import { isFSA } from 'flux-standard-action';

export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    const payload = isFSA(action) ? action.payload : action;
    return typeof payload === 'function'
      ? payload(dispatch, getState)
      : next(action);
  };
}
