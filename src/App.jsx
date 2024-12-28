import { meta } from "@eslint/js";
import { useState } from "react";
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

// const Hero = lazy(() => import("./components/hero/Hero"));
// const Services = lazy(() => import("./components/services/Services"));
// const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
// const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  const [isLocked, setIsLocked] = useState(true); // Default: locked
  const [password, setPassword] = useState("");

  const handleUnlock = () => {
    const correctPassword = import.meta.env.VITE_PASSWORD; // Access the password
    if (password === correctPassword) {
      setIsLocked(false);
    } else {
      alert("Incorrect Password! Try Again.");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleUnlock();
    }
  }

  return (
    <div className="container">
      {/* Lock Screen */}
      {isLocked && (
        <div className="lockScreen">
          <div className="lockContent">
            <h2>Enter Password to Unlock</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              onKeyDown={handleEnter}
            />
            <button onClick={handleUnlock}>Unlock</button>
          </div>
        </div>
      )}

      {/* App Content */}
      {!isLocked && (
        <>
          <Suspense fallback={"loading..."}>
            <LazyLoad height={"100vh"} offset={-100}>
              <section id="#home">
                <Hero />
              </section>
            </LazyLoad>
          </Suspense>
          <Suspense fallback={"loading..."}>
            <LazyLoad height={"100vh"} offset={-100}>
              <section id="#services">
                <Services />
              </section>
            </LazyLoad>
          </Suspense>
          <Suspense fallback={"loading..."}>
            <LazyLoad height={"600vh"} offset={-100}>
              <Portfolio />
            </LazyLoad>
          </Suspense>
          <Suspense fallback={"loading..."}>
            <LazyLoad height={"100vh"} offset={-100}>
              <section id="#contact">
                <Contact />
              </section>
            </LazyLoad>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
