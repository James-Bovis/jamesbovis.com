import { Mail, Github, Linkedin, ExternalLink, Heart } from "lucide-react";
import James from "./james.jpg";
import JamesWebp from "./james-webp.webp";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-24 flex items-center gap-4">
          <picture>
            <source srcSet={JamesWebp} type="image/webp" />
            <img src={James} alt="James Bovis" className="w-24 rounded-full" />
          </picture>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 tracking-tight">
              James Bovis
            </h1>

            <div className="flex items-center gap-3">
              <div className="relative flex items-center hidden md:block">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <p className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                {`Senior Front-End Engineer at `}
                <a
                  href="https://butternutbox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline"
                >
                  {`Butternut Box`}
                </a>
              </p>
            </div>
          </div>
        </header>

        <main className="space-y-20">
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
              {getGreeting()},
            </h2>
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              <p className="text-lg">
                I'm James. I'm a Front-End Web Developer based in Kent,
                currently with the Acquisition team at Butternut Box.
              </p>
              <p>
                With over 7 years of experience in fast-paced startups, I
                specialize in building beautiful websites, creating joyful
                customer experiences, and managing effective teams. I thrive on
                shipping great products and growing with the teams I work with.
              </p>
              <p>
                Outside of work, you'll find me drinking coffee, watching a
                film, or trying to improve my Padel game.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:hello@jamesbovis.com"
                className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://github.com/James-Bovis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamesbovis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </section>

          <section></section>

          <section>
            <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-8 uppercase tracking-wider">
              Work
            </h2>
            <div className="space-y-8">
              <div className="group border-b border-neutral-200 dark:border-neutral-700 pb-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="text-neutral-500 dark:text-neutral-500 mr-2">
                      📦
                    </span>
                    <a
                      href="https://butternutbox.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline"
                    >
                      Butternut Box
                    </a>
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    August 2018 — Present
                  </span>
                </div>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                    Senior Front-End Engineer - Team Lead
                  </p>
                </div>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed mb-5">
                  As the Engineering Team Lead for the Acquisition Team at
                  Butternut Box, I manage a team of 6 engineers dedicated to
                  optimizing the new customer signup journey. Our primary goal
                  is to improve conversion rates across 6 international markets,
                  working within a React/TypeScript and Ruby on Rails
                  environment.
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed mb-10">
                  My role involves mentoring and supporting my team's career
                  development, guiding our technical architecture, and ensuring
                  we maintain high standards for code quality. I collaborate
                  closely with product managers, designers, and data analysts to
                  define our roadmap, drive A/B testing strategies, and deliver
                  features that directly impact business growth.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                    Engineering Team Lead
                  </p>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    July 2022 — Feb 2024
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                    Front-End Engineer
                  </p>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    Feb 2020 — Sep 2022
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                    Junior Front-End Engineer
                  </p>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    Aug 2018 — Feb 2020
                  </span>
                </div>
              </div>

              <div className="group border-b border-neutral-200 dark:border-neutral-700 pb-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="text-neutral-500 dark:text-neutral-500 mr-2">
                      🐾
                    </span>
                    <a
                      href="https://pawsquad.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline"
                    >
                      PawSquad
                    </a>
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    Nov 2017 — Aug 2018
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                  Front-End Developer
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed">
                  Joined a small and very passionate team to help build the and
                  support new features for the PawSquad website. Involved
                  building marketing landing pages and maintaining the Vet Nurse
                  online portal.
                </p>
              </div>

              <div className="group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    <span className="text-neutral-500 dark:text-neutral-500 mr-2">
                      👗
                    </span>
                    <a
                      href="https://lauraashley.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline"
                    >
                      Laura Ashley
                    </a>
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    Sep 2015 — Oct 2017
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                  Web Designer
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed">
                  I supported a large, multi-department team by designing and
                  building responsive, ROI-focused web pages and creating
                  diverse digital marketing content. This included producing
                  assets and affiliate banners, often adapting designs for
                  French and German markets based on a continuous promotional
                  calendar.
                </p>
              </div>
            </div>
          </section>

          {/* <section>
            <h2 className="text-sm font-bold text-neutral-900 mb-8 uppercase tracking-wider">
              Projects
            </h2>
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-neutral-900">
                    TBC
                  </h3>
                </div>
                <p className="text-neutral-600 mb-2">
                  Coming Soon...
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
              </div>
            </div>
          </section> */}

          <section>
            <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-8 uppercase tracking-wider">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4 text-neutral-700 dark:text-neutral-300">
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  Front-End
                </h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>GraphQL / Apollo</li>
                  <li>NextJS</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  Tools
                </h3>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>Git & GitHub</li>
                  <li>Launch Darkly</li>
                  <li>Figma</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-32 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
          <p className="text-sm text-neutral-400 dark:text-neutral-600">
            © {new Date().getFullYear()} James Bovis
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              {`Built with `}
              <Heart className="w-4 h-4 inline-block text-red-500 mb-1" />
              {` and `}
              <a
                href="https://bolt.new/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors underline"
              >
                Bolt
              </a>
            </p>
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
