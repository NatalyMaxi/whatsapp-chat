import './Search.css';

const Search = ({ onSearch }) => {

  const handleChange = (evt) => {
    const text = evt.target.value;
    onSearch(text)
  }

  return (
    <input
      type='search'
      className='search'
      placeholder='Поиск'
      onChange={handleChange}
    />
  );
}

export default Search;
