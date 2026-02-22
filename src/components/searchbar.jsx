function Searchbar({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      className="searchbar"
    />
  );
}

export default Searchbar;