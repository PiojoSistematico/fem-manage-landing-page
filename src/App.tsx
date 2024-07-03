import Header from "./components/Header";
import imgIntro from "./assets/images/illustration-intro.svg";
import { Button } from "react-aria-components";
import CustomCarrousel from "./components/CustomCarrousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main className="text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
        <section
          title="hero-section"
          className="flex flex-col gap-4 md:px-32 py-8 px-8 md:grid md:grid-cols-2"
        >
          <picture className="object-contain w-full md:order-2">
            <img src={imgIntro} alt="Illustration Intro" />
          </picture>
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:justify-center md:w-3/5">
            <h1 className="text-4xl text-primary-2 font-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button className="bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2 hover:opacity-70 focus-visible:opacity-70">
              Get Started
            </Button>
          </div>
        </section>
        <section
          title="description-section"
          className="flex flex-col gap-4  md:px-32 px-8 py-8 md:grid md:grid-cols-2"
        >
          <div className="flex flex-col items-center gap-4 text-center py-8 md:items-start md:text-left md:justify-start md:p-0 md:w-3/5">
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
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl md:bg-neutral-5">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  01
                </span>
                <span>Track company-wide progress</span>
              </div>
              <p className="md:pl-[82px]">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl md:bg-neutral-5">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  02
                </span>
                <span>Advanced built-in reports</span>
              </div>
              <p className="md:pl-[82px]">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-3 text-primary-2 font-medium flex flex-row items-center gap-4 rounded-l-2xl md:bg-neutral-5">
                <span className="bg-primary-1 text-neutral-4 rounded-3xl px-6 py-2">
                  03
                </span>
                <span>Everything you need in one place</span>
              </div>
              <p className="md:pl-[82px]">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </section>
        <CustomCarrousel></CustomCarrousel>
        <section
          title="cta-section"
          className="bg-primary-1 flex flex-col gap-4 md:px-32 px-16 py-16 items-center text-neutral-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-3xl font-medium text-center">
            Simplify how your team works today.
          </p>
          <Button className="bg-neutral-4 text-primary-1 rounded-3xl px-8 py-2 font-medium hover:opacity-90 focus-visible:opacity-90">
            Get Started
          </Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
