import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'store/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);

  const changeFilterHandler = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <input
        type="text"
        value={filterValue}
        onChange={changeFilterHandler}
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
