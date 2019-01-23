import React from "react";
import { userSearchContext } from "./search-hooks";
const SearchList = ({ list }) => (
  <div data-testid="search-list">
    <ul data-testid="search-list-ul">
      {list &&
        list.map(({ id, name }) => (
          <li key={`item-key-${id}`} data-testid={`item-${id}`}>
            {name}
          </li>
        ))}
    </ul>
  </div>
);

const SearchListContainer = () => {
  const { state } = userSearchContext();
  return <SearchList list={state.list} />;
};

export default SearchListContainer;
