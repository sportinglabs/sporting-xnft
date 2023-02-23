export function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-section-1">
          <div className="home-title">
            <p>home</p>
          </div>
        </div>
        <div className="home-section-2">
          <div className="home-tabs">
            <div className="home-tabs-content">
              <button className="home-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Stake</div>
                  <div className="home-tab-description">Stake your cars!</div>
                </div>
              </button>
              <button className="home-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Leaderboard</div>
                  <div className="home-tab-description">
                    Winning is everything.
                  </div>
                </div>
              </button>
              <button className="home-tab">
                <div className="home-tab-text">
                  <div className="home-tab-title">Garage</div>
                  <div className="home-tab-description">Tune your drive!</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
