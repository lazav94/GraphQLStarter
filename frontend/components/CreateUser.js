import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const Form = styled.form`
  border: 1px solid;
  display: grid;
  padding: 10px;
  font-family: Roboto;
  width: 250px;
  button {
    background-color: #fafafa;
  }
  input {
    width: 160px;
    margin-left: 15px;
  }
  input,
  button {
    margin-top: 10px;
  }
`;
const CREATE_USER = gql`
  mutation CRETE_USER($firstname: String!, $lastname: String!) {
    createUser(input: { firstname: $firstname, lastname: $lastname }) {
      id
      firstname
      lastname
    }
  }
`;

class User extends Component {
  state = {
    firstname: "Something",
    lastname: "Else",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Mutation mutation={CREATE_USER} variables={this.state}>
          {(createUser, { loading, error }) => (
            <Form
              onSubmit={async (e) => {
                console.log("MANIJAK");
                e.preventDefault();
                const user = await createUser();
                console.log(user);
              }}
            >
              {loading && <p> Loading !!!</p>}
              <label htmlFor="firstname">
                First name
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={this.state.firstname}
                  required
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="lastname">
                Last name
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={this.state.lastname}
                  required
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">💆‍♂️ Create User</button>
            </Form>
          )}
        </Mutation>
      </>
    );
  }
}

export default User;
