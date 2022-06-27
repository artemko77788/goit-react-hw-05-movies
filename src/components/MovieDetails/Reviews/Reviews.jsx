import Loader from 'components/Loader';
import { Status } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { fetchByIdReview } from 'service/api';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ id }) => {
  const [review, setReview] = useState([]);
  const [err, setErr] = useState(null);
  const [state, setState] = useState(Status.IDLE);
  useEffect(() => {
    setState(Status.PENDING);
    fetchByIdReview(id)
      .then(res => setReview(res.results))
      .catch(err => setErr(err), setState(Status.REJECTED));
    setState(Status.RESOLVED);
  }, [id]);
  return (
    <>
      {state === Status.PENDING && <Loader />}
      {state === Status.REJECTED && <p>`${err}`</p>}
      {state === Status.RESOLVED && (
        <ul>
          {review.length !== 0 ? (
            review.map(({ author, id, content }) => {
              return (
                <li key={id} className={s.list}>
                  <div>
                    <h3 className={s.title}>{author}</h3>
                    <p className={s.text}>{content}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <p>NO info</p>
          )}
        </ul>
      )}
    </>
  );
};
Reviews.propType = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
