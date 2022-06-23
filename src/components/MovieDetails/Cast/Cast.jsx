import { PATH } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { fetchByIdCast } from 'service/api';
import s from './Cast.module.css';

const IMG =
  'https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png';
const Cast = ({ id }) => {
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    fetchByIdCast(id).then(p => setCasts(p.cast));
  }, [id]);

  return (
    <ul>
      {casts &&
        casts.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id} className={s.list}>
              <img
                src={profile_path ? PATH + profile_path : IMG}
                alt=""
                width={70}
              />
              <div>
                <p className={s.text}>{character}</p>
                <p className={s.text}>{name}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
