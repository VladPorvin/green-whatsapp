import React from 'react';

import s from './Contact.module.scss';

interface ContactProps {
  avatar: string;
  name: string;
}

export const Contact = ({ avatar, name }: ContactProps): React.ReactElement => {
  return (
    <div className={s.contact}>
      <img className={s.image} src={avatar} alt='contact photo' />
      <p className={s.name}>{name}</p>
    </div>
  );
};
