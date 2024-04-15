import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.filters.name);

  const handleSearchValue = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <h2>Find contacts by name</h2>

      <input
        type="text"
        value={selectNameFilter}
        onChange={handleSearchValue}
      />
    </>
  );
};

export default SearchBox;
