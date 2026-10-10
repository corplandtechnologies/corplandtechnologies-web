import React, { useReducer, createContext, useContext, useEffect } from "react";
import "./App.scss";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import setCursorLocation from "./utils/helpers/setCursorLocation";
import Cursor from "./components/Cursor/Cursor";
import setCursorAppearance from "./utils/helpers/setCursorAppearance";
import reducer from "./reducers/reducer";
import sampleStore from "./utils/samples/sampleStore";
import toggleContextMenu from "./utils/helpers/toggleContextMenu";
import hideContextMenu from "./utils/helpers/hideContextMenu";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import PaymentReturn from "./components/PaymentReturn/PaymentReturn";
import Home from "./pages/Home/Home";
import Free from "./pages/Free/Free";
import { company } from "./data/site";
import { EASE_OUT, page } from "./utils/motion";

export const store = createContext<any>(null);

const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function Shell() {
  const [state] = useContext(store);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.documentElement.dataset.theme = state.darkmode ? "dark" : "light";
  }, [state.darkmode]);

  return (
    <div
      className="App"
      onClick={isHome ? hideContextMenu : undefined}
      onMouseMove={(e) => setCursorLocation(e)}
      onScroll={(e) => setCursorLocation(e)}
      onMouseDown={(e) => setCursorAppearance(e)}
      onMouseUp={(e) => setCursorAppearance(e)}
      onContextMenu={isHome ? (e) => toggleContextMenu(e) : undefined}
    >
      <Toaster />
      <Cursor />
      {!isHome && <PaymentReturn />}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={location.pathname}
          className="App__page"
          variants={page}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.28, ease: EASE_OUT }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path={company.freePath} element={<Free />} />
            <Route
              path="/freemvp"
              element={<Navigate to={company.freePath} replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {!isHome && <Footer />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <StoreProvider>
      <MotionConfig reducedMotion="user">
        <Shell />
      </MotionConfig>
    </StoreProvider>
  );
}

export default App;
