import styles from "./VideoCard.module.css";

type VideoCardProps = {
  title: string;
  description?: string;
  video?: string;
  poster?: string;
  aspect?: "portrait" | "landscape" | "square";
};

export function VideoCard({ title, description, video, poster, aspect = "portrait" }: VideoCardProps) {
  return (
    <article className={`${styles.card} ${styles[aspect]}`}>
      <div className={styles.media}>
        {video ? (
          <video controls preload="none" poster={poster} aria-label={title}>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div className={styles.placeholder} aria-label="Видео будет добавлено">
            <span className={styles.play} />
            <span>Видео будет добавлено</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.playIcon} aria-hidden="true" />
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>
    </article>
  );
}
