import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HowTo extends Component {
  constructor(props){
    super(props);

    this.backHome = this.backHome.bind(this);

  }

  backHome() {
    // nothing later
  }

  render() {
    return (
      <div className="container">

        <h2 ><Link to="/">Back Home</Link></h2>

        <h2>How To Use Rkm-Tube</h2>
        <h4>These are needed: </h4>
        <ul>
          <li>A Channel ID - from Youtube channel</li>
          <li>Number of videos to fetch - maximum allowed is 30</li>
        </ul>

        <h5>Channel ID</h5>
        <p>
          A Channel ID is any Youtube channel id. You can get this from the url. (Whenever you visit a youtube channel like )
          https://www.youtube.com/channel/UCT0LQjFFUr8yq1wI-EeGJSg.</p>

          <span>UCT0LQjFFUr8yq1wI-EeGJSg </span> is the channel ID from the example above

        <h5>Number of videos</h5>
        <p>
          The number of videos you want to get. The maximum number of videos allowed is 30.
        </p>

        <h6>Enjoy Rkm-Tube!!!</h6>

      </div>
    );
  }
}

export default HowTo;
