import { useState } from 'react';

import axios from '@root/src/api/axios';

import useAuth from '@root/src/hooks/useAuth';

import { storage } from '@root/src/utils/storage';

import s from './SignInPopup.module.scss';

/*
 ** Popup window for SignUp
 */
export const SignInPopup = (): JSX.Element => {
  const [idInstance, setIdInstance] = useState<string>('');
  const [apiTokenInstance, setApiTokenInstance] = useState<string>('');
  const [errMsg, setErrMsg] = useState<any>();

  const { setAuth } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
      );
      if (response.data.stateInstance === 'notAuthorized') {
        setErrMsg('Not Authorized');
        return;
      }
      setAuth(idInstance);
      storage.setItem('auth', idInstance);
      storage.setItem('token', apiTokenInstance);

      setIdInstance('');
      setApiTokenInstance('');
      window.location.reload();
    } catch (err) {
      setErrMsg(err);
    }
  };

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Sign In</p>

      {errMsg && <p className={s.error}>{errMsg}</p>}

      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <input
            className={s.input}
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
            type='text'
            name='idInstance'
            required
            placeholder='IdInstance'
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
            type='text'
            name='ApiTokenInstance'
            required
            placeholder='ApiTokenInstance'
          />
        </label>
        <button className={s.button} type='submit'>
          SignIn
        </button>
      </form>
    </div>
  );
};
