/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import axios from 'axios';

function Memo({
  memory,
  searchTerms,
  handleSearch,
  handleDeleteMemory,
  setID,
}) {
  return (
    <>
      <p className="memoDetails">
        Details:
        <br />
        {memory.detail}
      </p>
      <br />
      <p className="memoDetail">
        When:
        {' '}
        {memory.month}
        /
        {memory.year}
      </p>
      <p className="memoDetail">
        Name:
        {' '}
        {memory.name}
      </p>
      <p className="memoDetail">
        state/city:
        {' '}
        {memory.place}
      </p>
      <button
        type="button"
        className="delete"
        onClick={() => setID(memory._id)}
      >
        delete memory
      </button>
      <br />
    </>
  );
}

export default Memo;
