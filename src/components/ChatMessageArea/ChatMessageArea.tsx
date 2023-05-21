import React from 'react';

import s from './ChatMessageArea.module.scss';

export const ChatMessageArea = () => {
  return <textarea className={s.messageField} placeholder='Enter message'></textarea>;
};
