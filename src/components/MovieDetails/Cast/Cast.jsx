import Loader from 'components/Loader';
import { IMG, PATH, Status } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { fetchByIdCast } from 'service/api';
import s from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = ({ id }) => {
  const [casts, setCasts] = useState([]);
  const [err, setErr] = useState(null);
  const [state, setState] = useState(Status.IDLE);
  useEffect(() => {
    setState(Status.PENDING);
    fetchByIdCast(id)
      .then(res => setCasts(res.cast))
      .catch(err => setErr(err), setState(Status.REJECTED));
    setState(Status.RESOLVED);
  }, [id]);

  return (
    <>
      {state === Status.PENDING && <Loader />}
      {state === Status.REJECTED && <p>`${err}`</p>}
      {casts.length === 0 && <p>No info</p>}
      {state === Status.RESOLVED && (
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
      )}
    </>
  );
};

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Cast;
