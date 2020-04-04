import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/perfil');
  } catch (err) {
    console.tron.log();

    yield put(signFailure());

    if (err.response.status === 401) {
      toast.error('E-mail ou senha incorretos.');
      return;
    }

    toast.error('Ocorreu um erro inesperado.');
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
