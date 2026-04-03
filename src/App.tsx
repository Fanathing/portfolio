/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import Toolkit from "./components/portfolio/Toolkit";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Philosophy from "./components/portfolio/Philosophy";
import Contact from "./components/portfolio/Contact";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <Hero />
      <Toolkit />
      <Experience />
      <Projects />
      <Philosophy />
      <Contact />
    </div>
  );
}
