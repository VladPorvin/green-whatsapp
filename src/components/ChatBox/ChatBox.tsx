import React from 'react';

import { ChatFooter } from '../ChatFooter/ChatFooter';
import { ChatHeader } from '../ChatHeader';
import { ChatMessages } from '../ChatMessages';

import s from './ChatBox.module.scss';

export const ChatBox = () => {
  return (
    <div className={s.wrapper}>
      <ChatHeader name='Vlad' />
      <div className={s.messages}>
        <ChatMessages />
      </div>
      <ChatFooter />
    </div>
  );
};
