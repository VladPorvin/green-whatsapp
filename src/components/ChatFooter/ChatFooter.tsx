import React from 'react';

import { ChatMessageArea } from '../ChatMessageArea/ChatMessageArea';

import s from './ChatFooter.module.scss';
import { SendMsgBtn } from '../SendMsgBtn/SendMsgBtn';

export const ChatFooter = () => {
  return (
    <footer className={s.footer}>
      <ChatMessageArea />
      <SendMsgBtn />
    </footer>
  );
};
