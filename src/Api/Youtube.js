import React, { Component } from 'react';
import Footer from '../Footer';

//const API = 'AIzaSyCmjaw9urF3QAt-XCesWLjkZMC3LX90ClM';
const API = 'AIzaSyDV9rYoxC1wMgjcSuaIFfIpSurFZAkhzgU';
//const channelID = 'UCT0LQjFFUr8yq1wI-EeGJSg';
//const result = 12;

// new API: AIzaSyDV9rYoxC1wMgjcSuaIFfIpSurFZAkhzgU

var errorMessage = '';

//var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
  constructor(props){
    super(props);

    this.state = {
      resultYt : [],
      channel: '',
      videoNumber: ''
    };

    this.fetchVideos = this.fetchVideos.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleVideoNumberChange = this.handleVideoNumberChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({channel: event.target.value});
 }

 handleVideoNumberChange(event) {
  this.setState( {videoNumber: event.target.value} );
}

//for input: submit
 // handleSubmit(event) {
 //   alert('A channel was submitted: ' + this.state.channel + ' : video number = ' + this.state.videoNumber);
 //   event.preventDefault();
 // }


// the big bulk of app logic here
  fetchVideos(){
    // validate user input info
   // construct error message for form validatation
    if (this.state.channel === '' && this.state.videoNumber === '') {
      // no channel id and video number
      //alert('A channel ID and Number of videos is REQUIRED ');
      errorMessage = 'A channel ID and Number of videos is REQUIRED ';

    }  else if (this.state.channel === '') {
      // here channel id input field is empty(no channel provided)
      //errorMessage = '';
      errorMessage = "Error:  Channel ID is empty, provide a channel ID";

    } else if (this.state.videoNumber === '') {
      // here number of videosinput field is empty
      //errorMessage = '';
      errorMessage = "Error: Number of videos is empty, enter number of videos";

    } else {
      errorMessage = '';
    }


    // proceeed to fetch videos
    if (errorMessage === '') {
      // have both channel ID and number of videos to fetch
      var result;
      var channelID;

      if (this.state.videoNumber > 30 || this.state.videoNumber === 0) {
          result = 5;
      } else {
        result = this.state.videoNumber;
      }

      channelID = this.state.channel;


      // new API: AIzaSyDV9rYoxC1wMgjcSuaIFfIpSurFZAkhzgU

      var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

      fetch(finalUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        const jsonResult = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({ resultYt: jsonResult });

      })
      .catch((error) => {
        console.log(error);
        alert("Error in fetching videos: " + error);
      });

    } else {
      // some input field is empty
      // show error
      alert(errorMessage);
    }

  }

  render(){
    //console.log(finalUrl);
      console.log(this.state.resultYt);

    return(
      <div>
        <div className="container">

            <form onSubmit={this.handleSubmit}>
              <label>
                <h3>Enter Youtube Channel ID: </h3>
                <input type="text" value={this.state.channel} onChange={this.handleChange} />
              </label>

              <label>
                <h3>Number of Videos( no more than 30): </h3>
                <input type="text" pattern="[0-9]*" value={this.state.videoNumber} onChange={this.handleVideoNumberChange} />
              </label>

            </form>

            <button onClick={this.fetchVideos}>Fetch Youtube videos</button>

              {
                this.state.resultYt.map((link, i) => {
                  console.log(link);
                  //"https://www.youtube.com/embed/vHiag5VZ4CQ"
                  var frame = <div className="youtube"><iframe key={i} width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                  return frame;
                })
              }
        </div>

        <Footer />
    </div>

      );
    }
  }

  export default Youtube;
