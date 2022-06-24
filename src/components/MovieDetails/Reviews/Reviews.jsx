import Loader from 'components/Loader';
import { Status } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { fetchByIdReview } from 'service/api';
import s from './Reviews.module.css';

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
      {review.length === 0 && <p>No info</p>}
      {state === Status.RESOLVED && (
        <ul>
          {review &&
            review.map(({ author, id, content }) => {
              return (
                <li key={id} className={s.list}>
                  <div>
                    <h3 className={s.title}>{author}</h3>
                    <p className={s.text}>{content}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
