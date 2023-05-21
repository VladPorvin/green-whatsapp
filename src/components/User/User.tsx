import React, { useState } from 'react';

import s from './User.module.scss';

interface UserProps {
  id: string;
  name: string;
}

export const User = ({ id, name }: UserProps): React.ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div key={id} className={s.user}>
      <p className={s.name}>{name}</p>
    </div>
  );
};
