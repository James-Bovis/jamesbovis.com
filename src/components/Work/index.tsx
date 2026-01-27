import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section className="opacity-0 animate-fade-in-up animation-delay-600">
      <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-8 uppercase tracking-wider">
        {t("work.sectionTitle")}
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
              {t("work.jobs.butternutBox.dateRange")}
            </span>
          </div>
          <div className="flex items-start justify-between mb-2">
            <p className="text-neutral-600 dark:text-neutral-200 mb-2">
              {t("work.jobs.butternutBox.title")}
            </p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed mb-5">
            {t("work.jobs.butternutBox.description1")}
          </p>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed mb-10">
            {t("work.jobs.butternutBox.description2")}
          </p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
              {t("work.jobs.butternutBox.roles.teamLead.title")}
            </p>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              {t("work.jobs.butternutBox.roles.teamLead.dateRange")}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
              {t("work.jobs.butternutBox.roles.frontEnd.title")}
            </p>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              {t("work.jobs.butternutBox.roles.frontEnd.dateRange")}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
              {t("work.jobs.butternutBox.roles.junior.title")}
            </p>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              {t("work.jobs.butternutBox.roles.junior.dateRange")}
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
              {t("work.jobs.pawSquad.dateRange")}
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-2">
            {t("work.jobs.pawSquad.title")}
          </p>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed">
            {t("work.jobs.pawSquad.description")}
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
              {t("work.jobs.lauraAshley.dateRange")}
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-2">
            {t("work.jobs.lauraAshley.title")}
          </p>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm leading-relaxed">
            {t("work.jobs.lauraAshley.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
