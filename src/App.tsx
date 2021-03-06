//@ts-nocheck
// NPM Packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// Project files
import "./styles/styles.sass";
import { useAuth } from "state/AuthProvider";
import Logged from "routes/Logged";
import UnLogged from "routes/Unlogged";
import Footer from "components/shared/Footer";
import { getDocument } from "scripts/fireStore";
import Spinner from "components/shared/Spinner";
import BoxError from "components/shared/BoxError";
import { useUser } from "state/UserProvider";
import { useCourses } from "state/CoursesProvider";
import useFetch from "hooks/useFetch";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, uid } = useAuth();
  const { setUser } = useUser();
  const path = "courses";
  const { dispatch } = useCourses();
  const { data, loading, error } = useFetch(path, dispatch);

  //Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);

        setUser(user);
        setLoggedIn(true);
        setStatus(1);
      }
    },
    [setLoggedIn, setUser]
  );
  useEffect(() => {
    fetchUser("users", uid);
  }, [fetchUser, uid]);

  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {status === 1 && loading && <Spinner />}
      {status === 1 && error && <p>{error}</p>}
      {status === 1 && data && (
        <BrowserRouter>
          <Switch>
            {loggedIn ? (
              <Logged />
            ) : (
              <>
                <UnLogged /> <Footer />
              </>
            )}
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}


// //@ts-nocheck
// // NPM Packages
// import { useState, useCallback, useEffect } from "react";
// import { BrowserRouter, Switch } from "react-router-dom";

// // Project files
// import { useAuth } from "state/AuthProvider";
// import "./styles/styles.sass";
// import Logged from "routes/Logged";
// import UnLogged from "routes/Unlogged";
// import Footer from "components/shared/Footer";
// import { getDocument } from "scripts/fireStore";
// import Spinner from "components/shared/Spinner";
// import BoxError from "components/shared/BoxError";
// import { useUser } from "state/UserProvider";
// export default function App() {
//   // Global state
//   const { loggedIn, setLoggedIn, uid } = useAuth();
//   const { setUser } = useUser();

//   //Local state
//   const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

//   // Methods
//   const fetchUser = useCallback(
//     async (path, uid) => {
//       if (uid === "no user") {
//         setStatus(1);
//       } else if (uid !== "") {
//         const user = await getDocument(path, uid);

//         setUser(user);
//         setLoggedIn(true);
//         setStatus(1);
//       }
//     },
//     [setLoggedIn, setUser]
//   );
//   useEffect(() => {
//     fetchUser("users", uid);
//   }, [fetchUser, uid]);

//   return (
//     <div className="App">
//       {status === 0 && <Spinner />}
//       {status === 2 && <BoxError />}
//       {status === 1 && (
//         <BrowserRouter>
//           <Switch>
//             {loggedIn ? (
//               <Logged />
//             ) : (
//               <>
//                 <UnLogged /> <Footer />
//               </>
//             )}
//           </Switch>
//         </BrowserRouter>
//       )}
//     </div>
//   );
// }
