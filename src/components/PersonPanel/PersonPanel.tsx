import s from './PersonPanel.module.scss';

interface PersonPanelProps {
  imgUrl: string;
}

export const PersonPanel = ({ imgUrl }: PersonPanelProps): React.ReactElement => {
  return (
    <div className={s.panel}>
      <img className={s.img} src={imgUrl} alt='person img' />
      <ul className={s.dots}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
