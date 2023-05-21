import s from './ChatHeader.module.scss';

interface CharHeaderProps {
  name: string;
}

export const ChatHeader = ({ name }: CharHeaderProps): React.ReactElement => {
  return (
    <header className={s.header}>
      <p className={s.name}>{name}</p>
    </header>
  );
};
