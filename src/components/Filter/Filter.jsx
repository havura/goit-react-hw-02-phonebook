import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ value, onFilter }) => {
    return (
      <label className={css.label}>
        Find contacts by name:
        <input type="text" value={value} onChange={onFilter} className={css.input} />
      </label>
    );
  };

  Filter.propTypes = {
    value: PropTypes.string,
    onFilter: PropTypes.func.isRequired,
  }