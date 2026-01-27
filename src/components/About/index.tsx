import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../hooks/useWeather";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { getWeatherIcon } from "../../utils/weatherIcons";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";

const About = () => {
  const { t } = useTranslation();
  const { temperatureUnit } = useTemperatureUnit();
  const { temperature, weatherCode, loading } = useWeather(temperatureUnit);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return t("about.greeting.morning");
    } else if (hour >= 12 && hour < 17) {
      return t("about.greeting.afternoon");
    } else {
      return t("about.greeting.evening");
    }
  }, [t]);

  return (
    <section className="opacity-0 animate-fade-in-up animation-delay-200">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
        {greeting},
      </h2>
      <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
        <p className="text-lg">
          {`${t("about.intro")} `}
          {loading ? (
            "Kent"
          ) : (
            <>
              {getWeatherIcon(weatherCode)} {temperature}°
              {temperatureUnit === "celsius" ? "C" : "F"} Kent
            </>
          )}
          {t("about.introSuffix")}
        </p>
        <p>{t("about.bio.paragraph1")}</p>
        <p>{t("about.bio.paragraph2")}</p>
      </div>

      <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up animation-delay-400">
        <a
          href="mailto:hello@jamesbovis.com"
          className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium">{t("about.links.email")}</span>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a
          href="https://github.com/James-Bovis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium">{t("about.links.github")}</span>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <a
          href="https://www.linkedin.com/in/jamesbovis/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:underline transition-colors group"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-medium">{t("about.links.linkedin")}</span>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
};

export default About;
