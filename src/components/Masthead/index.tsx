import { useTranslation } from "react-i18next";
import James from "../../james.jpg";
import JamesWebp from "../../james-webp.webp";

const Masthead = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-24 flex items-center gap-4 opacity-0 animate-fade-in-up">
      <picture>
        <source srcSet={JamesWebp} type="image/webp" />
        <img
          src={James}
          alt={t("masthead.imageAlt")}
          className="w-24 rounded-full"
        />
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
            {`${t("masthead.role")} `}
            <a
              href="https://butternutbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors underline"
            >
              Butternut Box
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
