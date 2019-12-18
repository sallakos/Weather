import React from 'react'

const Search = ({ search, handleSearch }) => (
  <div>
    Etsi kaupunkia:&nbsp;
    <input value={search} onChange={handleSearch} />
  </div>
)

export default Search