import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./routing/routing.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>,

    </>
  );
}

export default App;
