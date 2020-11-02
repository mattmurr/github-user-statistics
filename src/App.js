import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import useDebounce from "./debounce";
import UsersTable from "./components/UsersTable";
import SearchBar from "./components/SearchBar";

const SEARCH_USERS = gql`
  query SearchUsers($username: String!, $cursor: String) {
    search(query: $username, type: USER, first: 25, after: $cursor) {
      edges {
        node {
          ... on User {
            avatarUrl
            login
            bio
            url
            createdAt
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("mattmurr");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { loading, data, fetchMore } = useQuery(SEARCH_USERS, {
    variables: { username: debouncedSearchTerm },
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchMore !== undefined &&
        fetchMore({
          variables: {
            username: debouncedSearchTerm,
          },
        });
    }
  }, [debouncedSearchTerm, fetchMore]);

  if (loading) return <div>Loading ...</div>;

  const onWaypointEntered = () => {
    fetchMore({
      variables: {
        username: debouncedSearchTerm,
        cursor: data.search.pageInfo.endCursor,
      },
    });
  };

  return (
    <div className="container w-2/3 mx-auto">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {data && data.search.edges.length > 0 && (
        <UsersTable
          nodes={data.search.edges}
          onWaypointEntered={onWaypointEntered}
        />
      )}
    </div>
  );
};

export default App;
