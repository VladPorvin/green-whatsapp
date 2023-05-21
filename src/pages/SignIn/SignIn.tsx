import { Header } from '../../components/Header';
import { SignInPopup } from '../../components/SignInPopup';

import s from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Header />

          <SignInPopup />
        </div>
      </div>
    </>
  );
};
