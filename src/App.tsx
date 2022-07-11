import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ResponsiveAppBar from "./components/app-bar";
import About from "./components/pages/about";
import Landing from "./components/pages/landing";
import History from "./components/pages/history";

import store, { persistor } from "./stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
