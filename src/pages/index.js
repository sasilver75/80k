import React from "react"
import styled from "styled-components"
// import YouTube from 'react-youtube';
// import { Player } from 'video-react';
import { graphql } from "gatsby";
import Particles from 'react-particles-js';



import "../styles/scrollbar.css"
import "../styles/index.css"

const FakeBody = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 40% 60%;
  ${'' /* box-shadow: 11px 10px 8px -7px rgba(255,255,255,0.85); */}
  box-shadow: 8px 8px 16px rgba(255,255,255,.3), 0 2px 6px rgba(255,255,255,.32);
  transition: all .15s ease;
  border-radius: 5px;
  margin: 15px 5px;
  background-color: #F5FBFC;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 16px 16px 28px rgba(255,255,255,.3), 0 6px 9px rgba(255,255,255,.32);
  }
`

const OrgImgContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`


const OrgImg = styled.img`
  width: 100%;
  height: 100%;
  ${'' /* border: 1px solid cyan; */}
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  border-right: 1px solid rgba(0,0,0,.4);
  border-bottom: 1px solid rgba(0,0,0,.4);
  box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
`

const Description = styled.div`
  background: rgba(20,20,20,.01);
  width: 100%;
  height: 100%;
  padding: 5px;
  color: rgba(0,0,0,.6);
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  overflow: scroll;
  box-sizing: border-box;
  
  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #FFF;
    background-image: -webkit-linear-gradient(top,
    #e4f5fc 0%,
    #bfe8f9 40%,
    #9fd8ef 60%,
    #2ab0ed 100%);
  }
  &::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: transparent;
  }
  &::-webkit-scrollbar:horizontal {
  height: 12px;
  }
  &::-webkit-scrollbar:vertical {
  width: 10px;
  }
  &::-webkit-scrollbar {
  -webkit-appearance: none;
  }
  ::-webkit-scrollbar-corner {
  background: rgba(0,0,0,0);
  }
`

const Info = styled.p`
  ${'' /* Nothing here now */}
`
// NEW
const Card = (props) => {

  return (
    <Container>
      <OrgImgContainer>
        <OrgImg src={props["image"]}></OrgImg>
      </OrgImgContainer>
      <Description className='description'>
        <Info>
          <strong><i class="fas fa-chevron-right"></i>

            Position Title:</strong>
          <br></br>
          {props["jobName"]}
        </Info>
        <Info>
          <strong>Organization:</strong>
          <br></br>
          {props["orgName"]}
        </Info>
        <Info>
          <strong>Position Description:</strong>
          <br></br>
          {props["jobDescription"]}
        </Info>
        <Info>
          <strong>Organization Description:</strong>
          <br></br>
          {props["orgDescription"]}
        </Info>
      </Description>
    </Container >
  )
}

export const query = graphql`
{
  allJobsJson {
    edges {
      node {
        image
        jobName
        orgName
        jobDescription
        orgDescription
      }
    }
  }
}
`


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="iFrameContainer">
    <iframe
      className="iFrame"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width='100%'
      height='100%'
    />
  </div>
)

const PitchCard = styled.div`
  width: 900px;
  height: 100%;
  ${'' /* border: 1px solid black; */}
  color: black;
  background-color: rgba(233, 230, 230);
  ${'' /* background-color: #f0ead6; */}
  overflow: scroll;
  border-right: 1px solid rgba(0,0,0,.4);
  border-bottom: 1px solid rgba(0,0,0,.4);
  box-shadow: 11px 10px 8px -7px rgba(255,255,255,.3);
  padding: 10px;
  border-radius: 10px;
`

export default ({ data }) => {

  const cardArray = data.allJobsJson.edges.map(elt => {
    return Card(elt.node)
  });

  // "#3CA9D1"
  return (
    <div>
      <Particles
        id="myParticles"
        params={{
          "particles": {
            "number": {
              "value": 300,
              "density": {
                "enable": true,
                "value_area": 1800
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.05
            },
            "move": {
              "direction": "right",
              "speed": 0.4
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <Video
        // https://player.vimeo.com/video/290952236
        // https://player.vimeo.com/video/302734559 ... #t=15s
        // https://vimeo.com/seandoran
        videoSrcURL='https://player.vimeo.com/video/290952236?title=0&byline=0&portrait=0&sidedock=0&autoplay=1&loop=1'
        videoTitle="Orbit"
      />
      <p id="hoverText">
        <p>
          You have about 80,000 working hours in your career.
        </p>
        <p>
          Spend them working on the World's most pressing problems.
        </p>
      </p>

      <div id="pitchCardContainer">
        <PitchCard id="pitchCard" >
          <h1>The Future Matters More Than Anything Else</h1>
          <p>The Earth is estimated to continue to remain habitable for hundreds of millions of years, without conditioning on anthropogenic factors. We may die out long before that point, but if there’s a chance of making it, then more people will live in the future than are alive today by an unenumerable order of magnitude.</p>
          <p>If each generation lasts for 100 years, then over the course of 100 million years there could be one million future generations. This doesn't even begin to consider the carrying capacity of our cosmic endowment </p>
          <p>This is such a big number that any problem that affects future generations potentially has a far greater scale than one that only affects the present in terms of expected value –- it could affect one million times more people, and all the art, science and culture that they will create. Again -- Problems that affect future generations are potentially the largest in scale and the most neglected. We have the incredible honor of being born during this pivotal time, and I feel that we have a responsibility to future generations to protect against tail risks, no matter how improbable.</p>
          <p>The future could be amazing beyond comprehension. However, in only the last few generations, humanity has gained the power to destroy itself fully. Extreme technogenic risks will continue to arise and decentralize as we continue to gain power. Whether our wisdom and governance systems will advance in response is a mutable unknown. While life in 2019 might seem like business as usual, if you really take the time to contextualize yourself in anthropological history, you'll realize that we live in a narrow band of time of baffling import to our future as a species. </p>
          <p>If you want to learn more about how you can make the greatest impact on the world's most difficult problems, check out the links below to get started reading about Long-Term Effective Altruism. The world is full not only of neglected, high-leverage, and tractable problems, but also companions willing to go out of their way to help you towards contributing toward attaining our shared goal.</p>
          <hr></hr>

          <p id='quote'>“In the next century, we will be inventing radical new technologies - machine intelligence, perhaps nanotech, great advances in synthetic biology and other things we haven't even thought of yet. And those new powers will unlock wonderful opportunities, but they might also bring with them certain risks. And we have no track record of surviving those risks. So if there are big existential risks, I think they are going to come from our own activities and mostly from our own inventiveness and creativity.”</p>
          <p id='attribution'> - Nick Bostrom, Future of Humanity Institute</p>
          <hr></hr>
          <div id="linkContainer">
            <h4>Getting Started</h4>
            <ul>
              <li><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxuYmVja3N0ZWFkfGd4OjExNDBjZTcwNjMxMzRmZGE">On the Overwhelming Importance of Shaping the Far Future</a></li>
              <li><a href="https://80000hours.org/career-guide/">80,000 Hours Career Guide</a></li>
              <li><a href="http://mindingourway.com/on-caring/">Nate Soares: On Caring</a></li>
              <li><a href="https://www.effectivealtruism.org/articles/cause-profile-long-run-future/">The Long Run Future</a></li>
              <li><a href="https://80000hours.org/career-guide/world-problems/#why-focusing-on-future-generations-can-be-even-more-effective-than-tackling-global-health">The World's Biggest Problems</a></li>
              <li><a href="https://www.effectivealtruism.org/articles/cause-profile-long-run-future/">Podcast: Why the Long Term matters more than Anything Else</a></li>
              <li><a href="https://80000hours.org/articles/future-generations/">The Long Term Value Thesis</a></li>
              <li><a href="https://80000hours.org/articles/extinction-risk/">The Case for Reducing Extinction Risk</a></li>
              <li><a href="https://docs.google.com/document/d/1NdlBbOodrBCL9KB2WFFMfIGQaYV3vvA6wD4qh3u7pgc/edit#">Big History and Big Future</a></li>
              <li><a href="https://docs.google.com/document/d/10DhORpdeoLHdygISziFIhZZxLVdwjxT_xFXcQtGDFQ4/edit#">Risks and Threats</a></li>
              <li><a href="https://docs.google.com/document/d/1R_8EILI3OSVijlavnafaM9nYIyv977SZVJDDDfsXk6M/edit#">Existential Hope</a></li>
              <li><a href="https://www.effectivealtruism.org/articles/cause-profile-long-run-future/">Podcast: Why the Long Term matters more than Anything Else</a></li>
            </ul>
            <h4>Other Links</h4>
            <ul>
              <li><a href="https://www.fhi.ox.ac.uk/">Future of Humanity Institute (Oxford)</a></li>
              <li><a href="https://www.cser.ac.uk/">Center for the Study of Existential Risk (Cambridge)</a></li>
              <li><a href="https://existence.org/">Berkeley Existential Risk Inititative (UCB)</a></li>
              <li><a href="http://longnow.org/">The Long Now Foundation</a></li>
              <li><a href="https://www.effectivealtruism.org/">Effective Altruism</a></li>
              <li><a href="https://www.rationality.org/">Center for Applied Rationality</a></li>

            </ul>
          </div>

        </PitchCard>
      </div>
      <div id="bostromContainer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GWP1rlbjszg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <FakeBody>
        {cardArray}
      </FakeBody>
    </div>
  )
}





