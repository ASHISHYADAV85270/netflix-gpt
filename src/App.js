import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <ToastContainer />
    </Provider>
  );
}

export default App;
