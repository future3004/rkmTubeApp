import React, { Component } from 'react';

//const API = 'AIzaSyCmjaw9urF3QAt-XCesWLjkZMC3LX90ClM';
const API = 'AIzaSyDV9rYoxC1wMgjcSuaIFfIpSurFZAkhzgU';
const channelID = 'UCT0LQjFFUr8yq1wI-EeGJSg';
const result = 12;

// new API: AIzaSyDV9rYoxC1wMgjcSuaIFfIpSurFZAkhzgU

var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
  constructor(props){
    super(props);

    this.state = {
      resultYt : []
    };
    this.fetchVideos = this.fetchVideos.bind(this);
  }

  fetchVideos(){
    fetch(finalUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      const jsonResult = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({ resultYt: jsonResult });

    })
    .catch((error) => {
      //console.log(error);
    });
  }

  render(){
    //console.log(finalUrl);
      console.log(this.state.resultYt);

    return(
      <div>
          <button onClick={this.fetchVideos}>RKM Youtube videos</button>

            {
              this.state.resultYt.map((link, i) => {
                console.log(link);
                //"https://www.youtube.com/embed/vHiag5VZ4CQ"
                var frame = <div className="youtube"><iframe key={i} width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                return frame;
              })
            }

      </div>
      );
    }
  }

  export default Youtube;
