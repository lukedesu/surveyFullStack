import axios from 'axios';
import querystring from 'querystring';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};

export const handleToken = token => async dispatch => {
  const { data } = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const { data } = await axios.post('/api/surveys', values);
  dispatch({ type: FETCH_USER, payload: data });
  history.push('/surveys');
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: data });
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
