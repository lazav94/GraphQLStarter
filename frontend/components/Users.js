import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    getUsers {
      id
      firstname
      lastname
      #billingTransaction {
      #  payment
      #}
    }
  }
`;

class Users extends React.Component {
  render() {
    return (
      <div>
        Users page
        {/* Render prop or HO component */}
        <Query query={ALL_USERS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div className="user">
                <hr />
                {data.getUsers.map((user) => (
                  <div className="user" key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.firstname}</p>
                    <p>{user.lastname}</p>
                    {user.billingTransaction
                      ? user.billingTransaction.payment
                      : ""}
                    <hr />
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default Users;
