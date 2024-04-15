const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>

      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

export default SearchBox;
