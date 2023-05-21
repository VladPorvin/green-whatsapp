import { useState } from 'react';

import { ChatBox } from '@root/src/components/ChatBox';
import { Contact } from '@root/src/components/Contact';
import { PersonPanel } from '@root/src/components/PersonPanel';
import { SearchContact } from '@root/src/components/SearchContact';

import { ContactType } from '@root/src/types';

import s from './Main.module.scss';

export const Main = () => {
  const [contacts, setContacts] = useState<ContactType>([]);

  return (
    <section className={s.main}>
      <div className={s.leftSide}>
        <div className={s.leftSide__header}>
          <PersonPanel
            imgUrl={
              'https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75'
            }
          />
          <SearchContact setContacts={setContacts} contacts={contacts} />
          {contacts.map((contact) => (
            <Contact key={contact.chatId} avatar={contact.avatar} name={contact.name} />
          ))}
        </div>
      </div>
      <div className={s.rightSide}>
        <ChatBox />
      </div>
    </section>
  );
};
