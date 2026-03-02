import { useState, useRef, useEffect } from "react";
import type React from "react";

const VideoSection = ({
  videoUrl = "https://youtu.be/FHTsQmDtmMU",
  thumbnailUrl = "/thumbnail.png",
  title = "Experience the Vision",
  subtitle = "Expirience the healing journey with Dr. Vidya Palve through this exclusive video insight into her clinic and patient care approach.",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollY(progress);
      setIsVisible(rect.top < windowHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  const parallaxOffset = (scrollY - 0.5) * -60;

  return (
    <>
      <style>{`
        .vs-root *,
        .vs-root *::before,
        .vs-root *::after {
          box-sizing: border-box;
        }

        .vs-root {
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          overflow: hidden;
        }

        .vs-wrapper {
          max-width: 1100px;
          width: 100%;
          position: relative;
        }

        .vs-header {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .vs-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vs-eyebrow {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .vs-title {
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 700;
          color: #111;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .vs-title em {
          font-style: normal;
          color: #111;
        }

        .vs-subtitle {
          font-size: 15px;
          color: #666;
          letter-spacing: 0.01em;
          margin-top: 10px;
          font-weight: 400;
        }

        .vs-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(50px) scale(0.97);
          transition: opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.08),
            0 20px 60px rgba(0,0,0,0.12),
            0 4px 12px rgba(0,0,0,0.08);
        }
        .vs-frame.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .vs-thumbnail {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateY(var(--parallax));
          transition: transform 0.1s linear;
          filter: brightness(0.75);
        }

        .vs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 30%,
            rgba(0,0,0,0.5) 100%
          );
          pointer-events: none;
        }

        .vs-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.8);
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .vs-play-btn:hover {
          background: rgba(0,0,0,0.6);
          border-color: #fff;
          transform: translate(-50%, -50%) scale(1.08);
        }

        .vs-play-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 12px 0 12px 22px;
          border-color: transparent transparent transparent #ffffff;
          margin-left: 4px;
        }

        .vs-pulse {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          animation: pulse 2.5s ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .vs-video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #000;
        }

        .vs-duration-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
        }

        .vs-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: rgba(0,0,0,0.2);
          border-style: solid;
          pointer-events: none;
        }
        .vs-corner-tl { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
        .vs-corner-tr { top: -1px; right: -1px; border-width: 1px 1px 0 0; }
        .vs-corner-bl { bottom: -1px; left: -1px; border-width: 0 0 1px 1px; }
        .vs-corner-br { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }

        .vs-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.08);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .vs-meta.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vs-meta-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #aaa;
          font-weight: 400;
        }
        .vs-meta-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ccc;
        }
      `}</style>

      <div className="vs-root" ref={sectionRef}>
        <div className="vs-wrapper">
          {/* Header */}
          <div className={`vs-header ${isVisible ? "visible" : ""}`}>
            <p className="vs-eyebrow">Featured Video</p>
            <h2 className="vs-title">
              {title.split(" ").map((word, i) =>
                i % 3 === 2 ? <em key={i}> {word}</em> : ` ${word}`
              )}
            </h2>
            <p className="vs-subtitle">{subtitle}</p>
          </div>

          {/* Video Frame */}
          <div
            className={`vs-frame ${isVisible ? "visible" : ""}`}
            onClick={!isPlaying ? handlePlay : undefined}
          >
            {/* Thumbnail with parallax */}
            {!isPlaying && (
              <img
                className="vs-thumbnail"
                src={thumbnailUrl}
                alt="Video thumbnail"
                style={{ ["--parallax" as string]: `${parallaxOffset}px` } as React.CSSProperties}
              />
            )}

            {/* Actual video */}
            {isPlaying && (
              <video
                ref={videoRef}
                className="vs-video-el"
                src={videoUrl}
                controls
                autoPlay
              />
            )}

            {/* Overlay & play button */}
            {!isPlaying && (
              <>
                <div className="vs-overlay" />
                <div className="vs-play-btn">
                  <div className="vs-pulse" />
                  <div className="vs-play-icon" />
                </div>
                <span className="vs-duration-badge">▶ PLAY</span>
              </>
            )}

            {/* Corner accents */}
            <div className="vs-corner vs-corner-tl" />
            <div className="vs-corner vs-corner-tr" />
            <div className="vs-corner vs-corner-bl" />
            <div className="vs-corner vs-corner-br" />
          </div>

          {/* Meta row */}
          <div className={`vs-meta ${isVisible ? "visible" : ""}`}>
            <span className="vs-meta-label">Scroll to Reveal</span>
            <div className="vs-meta-dot" />
            <span className="vs-meta-label">Click to Play</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;