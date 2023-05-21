import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <p className={s.logo}>WhatsGreen</p>
    </div>
  );
};
