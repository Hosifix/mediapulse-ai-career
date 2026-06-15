/**
 * Fixed, decorative animated backdrop: drifting colour blobs, a faint grid and
 * a subtle noise layer. Purely presentational and non-interactive.
 */
export default function Background() {
  return (
    <div className="bg-stage" aria-hidden="true">
      <div className="blob blob-lime" />
      <div className="blob blob-blue" />
      <div className="blob blob-violet" />
      <div className="blob blob-magenta" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
