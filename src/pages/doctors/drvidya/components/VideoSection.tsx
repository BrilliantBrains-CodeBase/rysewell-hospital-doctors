import { useState, useRef, useEffect } from "react";


interface VideoSectionProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  title?: string;
  subtitle?: string;
}

const VideoSection = ({
  videoUrl = "https://www.youtube.com/watch?v=FHTsQmDtmMU",
  thumbnailUrl = "/thumbnail.png",
  title = "Experience the Vision",
  subtitle = "Experience the healing journey with Dr. Vidya Palve through this exclusive video insight into her clinic and patient care approach.",
}: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);
  const isYouTube = !!youtubeId;
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      setScrollY(progress);
      setIsVisible(rect.top < windowHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        .vs-subtitle {
          font-size: 15px;
          color: #666;
          letter-spacing: 0.01em;
          margin-top: 10px;
          font-weight: 400;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .vs-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          border-radius: 12px;
          opacity: 0;
          transform: translateY(50px) scale(0.97);
          transition: opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.08),
            0 20px 60px rgba(0,0,0,0.12),
            0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
        }
        .vs-frame.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .vs-frame.playing {
          cursor: default;
        }

        .vs-thumbnail {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 110%;
          top: -5%;
          object-fit: cover;
          transition: transform 0.1s linear;
          filter: brightness(0.72);
        }

        .vs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.45) 100%);
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
          border: 2px solid rgba(255,255,255,0.85);
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 2;
        }
        .vs-play-btn:hover {
          background: rgba(0,0,0,0.6);
          border-color: #fff;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .vs-play-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 13px 0 13px 24px;
          border-color: transparent transparent transparent #ffffff;
          margin-left: 5px;
        }

        .vs-pulse {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.35);
          animation: vs-pulse-anim 2.5s ease-out infinite;
          pointer-events: none;
        }
        @keyframes vs-pulse-anim {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .vs-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          background: #000;
        }

        .vs-native-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #000;
        }

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
          background: #ddd;
        }
      `}</style>

      <div className="vs-root" ref={sectionRef}>
        <div className="vs-wrapper">

          {/* Header */}
          <div className={`vs-header ${isVisible ? "visible" : ""}`}>
            <p className="vs-eyebrow">Featured Video</p>
            <h2 className="vs-title">{title}</h2>
            <p className="vs-subtitle">{subtitle}</p>
          </div>

          {/* Video Frame */}
          <div
            className={`vs-frame ${isVisible ? "visible" : ""} ${isPlaying ? "playing" : ""}`}
            onClick={!isPlaying ? () => setIsPlaying(true) : undefined}
          >
            {/* Thumbnail (hidden once playing) */}
            {!isPlaying && (
              <img
                className="vs-thumbnail"
                src={thumbnailUrl}
                alt="Video thumbnail"
                style={{
                  transform: `translateY(${parallaxOffset}px)`,
                }}
              />
            )}

            {/* YouTube iframe */}
            {isPlaying && isYouTube && embedUrl && (
              <iframe
                className="vs-iframe"
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Native video fallback */}
            {isPlaying && !isYouTube && (
              <video
                className="vs-native-video"
                src={videoUrl}
                controls
                autoPlay
              />
            )}

            {/* Overlay + play button (only before playing) */}
            {!isPlaying && (
              <>
                <div className="vs-overlay" />
                <div className="vs-play-btn">
                  <div className="vs-pulse" />
                  <div className="vs-play-icon" />
                </div>
              </>
            )}
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