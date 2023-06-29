"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query Acts {
    acts {
      id
      title
      prologue {
        id
        title
      }
      volumes {
        id
        title
        chapters {
          id
          title
        }
      }
      epilogue {
        id
        title
      }
    }
  }
`;

export default async function Home() {
  const { data, loading, called } = useQuery(query);

  console.log({ data, loading, called });

  return (
    <div>
      <h1>Client Component</h1>
      <p>Loading: {loading ? "True" : "False"}</p>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
