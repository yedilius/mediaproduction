"use client";

import { useMemo, useState } from "react";
import { Pause, Play } from "lucide-react";
import { portfolioCases, portfolioCategories } from "@/config/portfolio";

export function PortfolioGrid() {
  const [category, setCategory] = useState<(typeof portfolioCategories)[number]>("Все");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const cases = useMemo(
    () => category === "Все" ? portfolioCases : portfolioCases.filter((item) => item.category === category),
    [category],
  );

  return (
    <>
      <div className="category-filter" aria-label="Фильтр портфолио">
        {portfolioCategories.map((item) => (
          <button type="button" key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {cases.map((item, index) => (
          <article className={`portfolio-card ${index === 0 ? "portfolio-featured" : ""}`} key={item.id}>
            <div
              className="portfolio-media"
              onMouseEnter={(event) => {
                if (activeVideo !== item.id) void event.currentTarget.querySelector("video")?.play();
              }}
              onMouseLeave={(event) => {
                if (activeVideo !== item.id) {
                  const video = event.currentTarget.querySelector("video");
                  video?.pause();
                  if (video) video.currentTime = 0;
                }
              }}
            >
              {item.video ? (
                <video
                  controls={activeVideo === item.id}
                  autoPlay={activeVideo === item.id}
                  muted={activeVideo !== item.id}
                  loop={activeVideo !== item.id}
                  playsInline
                  preload="metadata"
                  poster={item.image}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <div className="portfolio-image-fallback" style={{ backgroundImage: `url(${item.image})` }} />
              )}
              {item.video && (
                <button
                  type="button"
                  className="play-button"
                  onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
                  aria-label={activeVideo === item.id ? `Остановить видео ${item.title}` : `Воспроизвести видео ${item.title}`}
                >
                  {activeVideo === item.id ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>
              )}
            </div>
            <div className="portfolio-copy">
              <div className="card-meta"><span>{item.category}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.task}</p>
              <details>
                <summary>Подробнее о кейсе</summary>
                <div className="case-details">
                  <p><strong>Решение:</strong> {item.solution}</p>
                  <p><strong>Работы:</strong> {item.work.join(", ")}</p>
                  <p><strong>Результат:</strong> {item.result}</p>
                  <p className="placeholder-note">{item.metrics}</p>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
