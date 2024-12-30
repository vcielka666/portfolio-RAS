import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  const [isLocked, setIsLocked] = useState(true); 
  const [password, setPassword] = useState("");

  const handleUnlock = () => {
    const correctPassword = import.meta.env.VITE_PASSWORD;
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
  };

  let isScrolling = false;

const handleScrollToContact = () => {
  if (!isScrolling) {
    isScrolling = true;
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      isScrolling = false; // Reset after scroll completes
    }, 1000); // Adjust delay to match animation duration
  }
};


  return (
    <div className="container">
      {/* Lock Screen */}
      {isLocked && (
        <div className="lockScreen">
          <div style={{color:"black", fontSize:"1rem"}} className="lockContent">
            <h1>Vip Boutique</h1>
            <h4>Enter Password to Unlock</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
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
            
              <section id="home">
                <Hero scroll={handleScrollToContact} />
              </section>
            
          </Suspense>
          <Suspense fallback={"loading..."}>
            
              <section id="services">
                <Services />
              </section>
            
          </Suspense>
          <Suspense fallback={"loading..."}>
            
              <Portfolio scroll={handleScrollToContact} />
            
          </Suspense>
          <Suspense fallback={"loading..."}>
            
              <section id="contact">
                <Contact />
              </section>
            
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
