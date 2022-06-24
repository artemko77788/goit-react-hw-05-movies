import s from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ submite }) {
  const [seachMovies, setseachMovies] = useState('');

  const handleInputChange = e => {
    setseachMovies(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (seachMovies.trim() === '') {
      toast.error('Imput something');
      return;
    }
    submite(seachMovies);

    setseachMovies('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchFormButton}>
        <span>
          <FaSearch />
        </span>
      </button>

      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={seachMovies}
        onChange={handleInputChange}
      />
    </form>
  );
}

Search.propTypes = {
  submite: PropTypes.func.isRequired,
};
export default Search;
