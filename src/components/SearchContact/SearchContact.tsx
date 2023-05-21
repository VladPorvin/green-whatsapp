import { useCallback, useEffect, useState } from 'react';

import { FindUserBtn } from '../FindUserBtn/FindUserBtn';

import s from './SearchContact.module.scss';
import { storage } from '@root/src/utils/storage';

import axios from '@root/src/api/axios';
import { SeachInput } from '../SearchInput/SeachInput';

import { ContactType } from '@root/src/types';

const CONTACT_TAIL = '@c.us';

interface SearchContactProps {
  setContacts: React.Dispatch<React.SetStateAction<ContactType>>;
  contacts: ContactType;
}

export const SearchContact = ({
  setContacts,
  contacts
}: SearchContactProps): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<any>('');

  const idInstance = storage.getItem('auth');
  const apiTokenInstance = storage.getItem('token');

  const fetchContact = useCallback(async () => {
    try {
      const response = await axios.post(
        `/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
        {
          chatId: value + CONTACT_TAIL
        }
      );
      const { name, avatar, chatId } = response.data;
      setContacts([...contacts, { name, avatar, chatId }]);
    } catch (err) {
      throw Error(err);
    }
  }, [apiTokenInstance, contacts, idInstance, setContacts, value]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
        {
          phoneNumber: value
        }
      );
      const { existsWhatsapp } = response.data;
      if (!existsWhatsapp) {
        setError('User does not exist');
        return;
      }

      fetchContact();
      setError('');
      setValue('');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <SeachInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='tel'
          name='phone'
          placeholder='Enter phone'
        />
        <FindUserBtn />
      </form>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
