import { memo } from "react";

import Masthead from "./components/Masthead";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Masthead />
        <main className="space-y-20">
          <About />
          <Work />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default memo(App);
