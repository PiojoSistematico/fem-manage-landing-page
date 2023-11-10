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
      <main className="text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
        <section title="hero-section" className="flex flex-col gap-4 p-8">
          <picture className="object-contain w-full">
            <img src={imgIntro} alt="Illustration Intro" />
          </picture>
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl text-primary-2 font-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button className="bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2">
              Get Started
            </Button>
          </div>
        </section>
        <section
          title="description-section"
          className="flex flex-col gap-4 items-center py-8"
        >
          <div className="flex flex-col items-center gap-4 text-center p-8">
            <h2 className="text-2xl text-primary-2 font-bold">
              What’s different about Manage?
            </h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="flex flex-col gap-8 pl-4">
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  01
                </span>
                <span>Track company-wide progress</span>
              </div>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  02
                </span>
                <span>Advanced built-in reports</span>
              </div>
              <p>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  03
                </span>
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
        <section
          title="cta-section"
          className="bg-primary-1 flex flex-col gap-4 px-8 py-16 items-center text-neutral-4"
        >
          <p className="text-3xl font-medium text-center">
            Simplify how your team works today.
          </p>
          <Button className="bg-neutral-4 text-primary-1 rounded-3xl px-8 py-2 font-medium">
            Get Started
          </Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
