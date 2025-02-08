import "./style.css"

export default function Hero() {
  return (
    <div className="hero-container d-flex align-items-center justify-content-between">
      {/* Left Side - Text Content */}
      <div className="text-container">
        <h4 className="py-5">Welcome to my portfolio.</h4>
        <h1>I'm Kenjy Jap</h1>
      </div>

      {/* Right Side - Image */}
      <div className="image-container">
        <img src="/images/gif/pixel-camp-art.gif" alt="Pixel art of someone camping" className="hero-image" />
      </div>
    </div>
  );
}
