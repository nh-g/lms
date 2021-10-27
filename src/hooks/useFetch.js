import { useEffect, useState } from "react";
import { firestoreInstance } from "scripts/firebase";
import { getCollection } from "scripts/fireStore";

export default function useFetch(collection, dispatch) {
  // STATES
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  async function fetchData(someDatabase, someCollection) {
    try {
      const response = await getCollection(someDatabase, someCollection);
      dispatch({ type: "SET_DATA", payload: someCollection });
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  //hook
  useEffect(() => {
    fetchData(firestoreInstance, collection);
  }, []);

  return { data, error, loading, setData };
}
