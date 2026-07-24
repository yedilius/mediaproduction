"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Play } from "lucide-react";
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
            <button
              type="button"
              className="portfolio-media"
              onClick={() => item.video && setActiveVideo(activeVideo === item.id ? null : item.id)}
              aria-label={activeVideo === item.id ? `Показать обложку ${item.title}` : `Воспроизвести видео ${item.title}`}
            >
              {activeVideo === item.id && item.video ? (
                <video controls autoPlay preload="metadata" poster={item.image}>
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <>
                  <Image src={item.image} alt="" fill sizes={index === 0 ? "(min-width: 900px) 66vw, 100vw" : "(min-width: 900px) 33vw, 100vw"} />
                  {item.video && <span className="play-button"><Play size={18} fill="currentColor" /></span>}
                </>
              )}
            </button>
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
