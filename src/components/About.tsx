import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import photo from "@/assets/photo.png";
import { ExternalLink } from "lucide-react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const timelineData = [
  {
    date: "2021",
    title: "Bachelor of Computer Engineering",
    subtitle: "Universitas Diponegoro",
    highlight: true,
    position: "right" as const,
  },
  {
    date: "2023",
    title: "Backend Developer Intern",
    subtitle: "Diskominfo Semarang",
    highlight: false,
    position: "right" as const,
  },
  {
    date: "2024",
    title: "Cloud Computing Cohort",
    subtitle: "Bangkit Academy 2024",
    highlight: false,
    position: "right" as const,
  },
  {
    date: "2025",
    title: "Universitas Diponegoro Bachelor of Computer Engineering Graduate",
    subtitle: "GPA 3.99/4.00",
    highlight: true,
    position: "right" as const,
  },
  {
    date: "2025 – 2026",
    title: "Backend Developer Intern",
    subtitle: "PT Balai Pustaka",
    highlight: true,
    position: "right" as const,
  },
];

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useReveal(aboutRef);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative w-full bg-bg min-h-[90vh] flex"
    >
      <div className="container flex flex-col md:flex-row items-center md:items-stretch gap-8 sm:gap-12 self-center">
        <div className="flex-shrink-0 self-center flex flex-col items-center gap-4">
          <div className="relative group w-40 sm:w-56 md:w-72">
            <img
              src={photo}
              alt="profile"
              className="w-full h-auto rounded-2xl shadow-lg ent"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-bg via-transparent to-transparent flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-fg font-semibold text-md sm:text-lg text-center px-2 font-primary">
                M. Bintang Prayoga Utama
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-3 w-full text-sm sm:text-base md:text-xl">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-fg text-fg-highlight font-semibold hover:opacity-80 transition"
            >
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/1qwmZLNQn8QY3cYgNYH59M25v0mKIH6TT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-bg-light text-fg font-semibold border border-fg hover:bg-fg hover:text-fg-highlight transition"
            >
              <span>My Resume</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 w-full">
          <div className="relative flex ent mb-5 text-left md:text-left justify-start md:justify-center border-b border-fg-muted">
            <h2 className="text-2xl sm:text-5xl md:text-6xl text-fg font-medium  inline-block">
              About Me
            </h2>
          </div>

          <p className="text-fg-muted text-sm sm:text-base md:text-xl leading-relaxed text-justify">
            Developing modern Web experiences, architecting scalable Cloud
            systems, and exploring intelligent solutions with Artificial
            Intelligence/Machine Learning.
          </p>

          <div className="flex flex-col items-center w-full">
            <Timeline position="alternate" sx={{ width: "100%", padding: 0 }}>
              {timelineData.map((item, i) => (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="text-fg-muted text-xs sm:text-sm font-primary">
                      {item.date}
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant={item.highlight ? "filled" : "outlined"}
                      sx={{
                        borderColor: "var(--fg)",
                        bgcolor: item.highlight ? "var(--fg)" : "transparent",
                        boxShadow: "none",
                      }}
                    />
                    {i < timelineData.length - 1 && (
                      <TimelineConnector
                        sx={{ bgcolor: "var(--fg-muted)", opacity: 0.3 }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <p className="text-fg font-semibold text-sm sm:text-base leading-snug font-primary">
                      {item.title}
                    </p>
                    <p className="text-fg-muted text-xs sm:text-sm font-primary">
                      {item.subtitle}
                    </p>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};
