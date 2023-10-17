import { useState } from "react";
import Header from "./components/Header";
import imgIntro from "./assets/images/illustration-intro.svg";
import { Button } from "react-aria-components";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <section title="hero-section">
          <picture>
            <img src={imgIntro} alt="Illustration Intro" />
          </picture>
          <div>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
          </div>
        </section>
        <section title="description-section">
          <div>
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div>
            <div>
              <div>
                <span>01</span>
                <span>Track company-wide progress</span>
              </div>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div>
              <div>
                <span>02</span>
                <span>Advanced built-in reports</span>
              </div>
              <p>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div>
              <div>
                <span>03</span>
                <span>Everything you need in one place</span>
              </div>
              <p>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </section>
        <Carrousel></Carrousel>
        <section title="cta-section">
          <p>Simplify how your team works today.</p>
          <Button>Get Started</Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
