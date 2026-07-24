"use client";

import dynamic from "next/dynamic";

const MediaSystemScene = dynamic(
  () => import("@/components/MediaSystemScene").then((module) => module.MediaSystemScene),
  { ssr: false },
);

export function VisualStory() {
  return (
    <div className="visual-story-track" aria-hidden="true">
      <MediaSystemScene />
    </div>
  );
}
