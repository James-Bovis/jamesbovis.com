import { useMemo } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { getWeatherIcon } from "../../utils/weatherIcons";
import { useTemperatureUnit } from "../../hooks/useTemperatureUnit";

const About = () => {
  const { temperatureUnit } = useTemperatureUnit();
  const { temperature, weatherCode, loading } = useWeather(temperatureUnit);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }, []);

  return (
    <section className="opacity-0 animate-fade-in-up animation-delay-200">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
        {greeting},
      </h2>
      <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
        <p className="text-lg">
          {`I'm James. I'm a Front-End Engineer living in `}
          {loading ? (
            "Kent"
          ) : (
            <>
              {getWeatherIcon(weatherCode)} {temperature}°
              {temperatureUnit === "celsius" ? "C" : "F"} Kent
            </>
          )}
          {`, currently leading the
                Acquisition team at Butternut Box.`}
        </p>
        <p>
          {`With over 7 years of experience in fast-paced startups, I
                specialize in building beautiful websites, creating joyful
                customer experiences, and managing effective teams. I thrive on
                shipping great products and growing with the teams I work with.`}
        </p>
        <p>
          {`Outside of work, you'll find me drinking coffee, watching a
                film, or trying to improve my Padel game.`}
        </p>
      </div>

      <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up animation-delay-400">
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
  );
};

export default About;
