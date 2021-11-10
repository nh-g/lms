// NPM packages
import { useEffect, useState } from "react";
import { useCallback } from "react";

// Project files
import { firestoreInstance } from "scripts/firebase";
import { getCollection } from "scripts/fireStore";
import { useCourses } from "state/CoursesProvider";

export default function useFetch(collection, dispatch) {
  // Global state
  // const { dispatch } = useCourses();

  //Local state
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  const fetchData = useCallback(
    async (collection, dispatch) => {
      try {
        const response = await getCollection(firestoreInstance, collection);
        dispatch({ type: "SET_DATA", payload: response });
        setData(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [collection, dispatch]
  );

  useEffect(() => {
    fetchData(collection, dispatch);
  }, [fetchData]);

  return { data, error, loading };
}
