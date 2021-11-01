import { useEffect, useState } from "react";
import { firestoreInstance } from "scripts/firebase";
import { getCollection } from "scripts/fireStore";

export default function useFetch(collection, dispatch) {
  // STATES
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  async function fetchData(database, collection) {
    try {
      const response = await getCollection(database, collection);
      dispatch({ type: "SET_DATA", payload: collection });
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
