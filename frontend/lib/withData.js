import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

const backendEndpoint = "http://localhost:4000/";

function createClient({ headers }) {
  return new ApolloClient({
    uri: backendEndpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
