const React = require('react/addons');
const {CSSTransitionGroup} = React.addons;

import Player from './player';

export default class MusicPlayer extends React.Component {
  constructor(props){
    super(props);		
  }

  render() {
    let songs =  [
      {
        id: "S1",
        image: "img/boujee.jpg",
        artist: "Migos",
        name: "Bad n Boujee",
        srcs: 
        [
          {
            src: "media/bad.m4a",
            type: "audio/mp3"
          }, {

          }
      	]
  	  }, {
        id: "S2",
        image: "img/shape.jpg",
        artist: "Kai Engel",
        name: "Moonlight Reprise",
        srcs: [
          {
            src: "media/olympian.m4a",
            type: "audio/mp3"
          }, {

          }
        ]
      }, {
        id: "S3",
        image: "img/slide.jpg",
        artist: "Frank Ocean",
        name: "Slide",
        srcs: [
          {
            src: "media/transmission.m4a",
            type: "audio/mp3"
          }, {

          }
        ]
      }, {
        id: "S4",
        image: "img/future.jpg",
        artist: "Future",
        name: "Selfish",
        srcs: [
          {
            src: "media/upstep.m4a",
            type: "audio/mp3"
          }, {

          }
        ]
	   }
    ];
    return (
      <div className="mp-music-player">
      <CSSTransitionGroup transitionName="my-player" transitionAppear={true} transitionAppearTimeout={500} component="div">
        <Player key="1"
          songs={songs}/>
      </CSSTransitionGroup>		
      </div>
    );
  }
}