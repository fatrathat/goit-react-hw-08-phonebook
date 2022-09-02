import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'store/slices/filterSlice';

import TextField from '@mui/material/TextField';
import styles from './style.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);

  const changeFilterHandler = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={styles.InputFilterContainer}>
      <TextField
        className={styles.InputFilter}
        id="standard-basic"
        variant="standard"
        label="Search"
        size="small"
        type="text"
        value={filterValue}
        onChange={changeFilterHandler}
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
