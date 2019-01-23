import React from "react";
import SearchComponent from "./SearchComponent";
import { useSearchReducer, useSearchRequest } from "./search-hooks";

// ---- hooks

// ---- component
const SearchContainerHooks = props => {
  // --- hooks
  const { state, actions } = useSearchReducer(props);
  // --- side effect
  useSearchRequest(state, actions);

  return (
    <SearchComponent title={"Search Use Reducer"} {...state} {...actions} />
  );
};

export default SearchContainerHooks;