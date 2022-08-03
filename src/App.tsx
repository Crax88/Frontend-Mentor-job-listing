function App() {
  return (
    <>
      <header></header>
      <div className="container">
        <div className="filter-panel">
          <div className="filter-panel_list">
            <span>fdfds</span>
            <span>fdfds</span>
            <span>fdfds</span>
            <span>fdfds</span>
          </div>
          <button className="filter-panel_btn">Clear</button>
        </div>
        <div className="jobs-container">
          <div className="card">
            <img className="card_img" src="./images/account.svg" alt="" />
            <div className="card_info">
              <div className="card_info_main">
                <h3>Account</h3>
                <div>IsNew</div>
                <div>FEATURED</div>
              </div>
              <div className="card_info_position">
                Senior Frontend Developer
              </div>
              <div className="card_info_meta">
                <span>1d ago</span>
                <span>Contract</span>
                <span>USA only</span>
              </div>
            </div>
            <div className="card_tags">
              <span>CSS</span>
              <span>React</span>
              <span>Node</span>
            </div>
          </div>
          <div className="card card--featured">fdsfds</div>
        </div>
      </div>
    </>
  );
}

export default App;
