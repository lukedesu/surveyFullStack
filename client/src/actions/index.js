import axios from 'axios';
import querystring from 'querystring';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};

export const signInUser = params => async dispatch => {
  const { data } = await axios.post(
    '/api/signin',
    querystring.stringify(params)
  );
  console.log('signInUser', data);
};

export const signUpUser = params => async dispatch => {
  const { data } = await axios.post(
    '/api/signup',
    querystring.stringify(params)
  );
  console.log('signUpUser', data);
};
