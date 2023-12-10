import { gql } from "@apollo/client";

export const ALL_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;
