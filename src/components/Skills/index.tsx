import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-8 uppercase tracking-wider">
        {t("skills.sectionTitle")}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-neutral-700 dark:text-neutral-300">
        <div>
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            {t("skills.categories.frontEnd")}
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
            {t("skills.categories.tools")}
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
  );
};

export default Skills;
