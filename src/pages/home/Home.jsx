import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-hero-content">
        <div className="home-hero-left">
          <h5>So, You Want To Travel To</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="button-wrapper">
          <Link to="/destination">
              <button>explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
