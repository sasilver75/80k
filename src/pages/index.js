import React from "react"
import styled from "styled-components"
// import YouTube from 'react-youtube';
// import { Player } from 'video-react';
import { graphql } from "gatsby";
// import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'


import "../styles/scrollbar.css"
import "../styles/index.css"

// import { Link } from "gatsby"


/*
Styled Components lets you use actual CSS syntax inside your components. Styled Components is a variant on “CSS-in-JS”—which solves many of the problems with traditional CSS.
One of the most important problems they solve is selector name collisions. With traditional CSS, you have to be careful not to overwrite CSS selectors used elsewhere in a site because all CSS selectors live in the same global namespace. This unfortunate restriction can lead to elaborate (and often confusing) selector naming schemes.
*/

/**
 * Okay Okay...
 * So I have the scraped data somewhere out there. JSON.
 * There's probably a JSON data plugin out there:
 * [Source] plugins “source” data from remote or local locations into what Gatsby calls nodes.
 * [Transformer] plugins “transform” data provided by source plugins into new nodes and/or node fields.
 * Check out the Plugin Library to see if the source plugins and/or transformer plugins you’d like to use already exist
 * I should deal with that later I think -- How can I mock the data now just to build my components?
 * How about let's style and build a single component here in the index.js. You can hardcode the information in it.
 * 1. Hardcode a single card here and style it.
 * 2. Move the card into a component and pass in information to it here via props
 * 3. Put the JSON data into a local MongoDB server.
 * 3. Use the plugins to read the JSON GraphQL data... use that data to generate a card for each one..
 * 4. Add some additional styling and animations
 * 5. Something about login... I dunno man.
 */

// --------------


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
  box-shadow: 11px 10px 8px -7px rgba(0,0,0,0.75);
  box-shadow: 8px 8px 16px rgba(50,50,93,.3), 0 2px 6px rgba(0,0,0,.22);
  transition: all .15s ease;

  margin: 15px 0px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 14px 14px 28px rgba(50,50,93,.3), 0 6px 9px rgba(0,0,0,.22);
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

  // Manipulate the data to extract...

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


// OLD
// const Card = (props) => (
//   <Container>
//     <OrgImgContainer>
//       <OrgImg src={props.image}></OrgImg>
//     </OrgImgContainer>
//     <Description className='description'>
//       <Info>
//         <strong>Position Title:</strong>
//         <br></br>
//         {props.jobName}
//       </Info>
//       <Info>
//         <strong>Organization:</strong>
//         <br></br>
//         {props.orgName}
//       </Info>
//       <Info>
//         <strong>Position Description:</strong>
//         <br></br>
//         {props.jobDescription}
//       </Info>
//       <Info>
//         <strong>Organization Description:</strong>
//         <br></br>
//         {props.orgDescription}
//       </Info>
//     </Description>
//   </Container >
// )


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
  width: 700px;
  height: 100%;
  ${'' /* border: 1px solid black; */}
  
  color: black;
  background-color: rgba(233, 230, 230);
  overflow: scroll;
  border-right: 1px solid rgba(0,0,0,.4);
  border-bottom: 1px solid rgba(0,0,0,.4);
  box-shadow: 11px 10px 8px -7px rgba(0,0,0,0.75);
  padding: 10px;

`





// const fakeProps = {
//   "image": "https://80000hours.org/wp-content/uploads/2019/04/google.jpg",
//   "jobName": "Director, Global Affairs and Public Policy, Foreign Policy Institutions",
//   "orgName": "Google",
//   "jobDescription": "You'll design and lead Google's engagement with US Government agencies charged with the administration of US foreign policy, foreign embassies based in the US, and international institutions based in the US. You will coordinate with other members of the global Government Affairs & Public Policy team and key cross-functional partners to further Google’s public policy agenda globally and educate US-based policymakers on Google’s global activities. You will liaise with relevant internationally-focused trade associations, think tanks, and other key opinion-formers most relevant to these institutions and issues.",
//   "orgDescription": "Google’s parent company, Alphabet, is one of the world’s largest information technology company. Its core search engine, Google.com, is the internet’s most visited website and it houses Google Brain, one of the world’s top deep learning labs. Google has published principles committing it to making progress in the responsible development of AI, helping answer questions about the best way to build fairness, interpretability, privacy, and security into AI systems and sharing knowledge, research, tools, datasets, and other resources with the larger community."
// }
// const fakeProps2 = {
//   "image": "https://cdn.80000hours.org/wp-content/uploads/2017/03/openAI_logo2-150x150.png",
//   "jobName": "Strategic Finance Lead",
//   "orgName": "OpenAI",
//   "jobDescription": "OpenAI’s Finance team is responsible for ensuring the organization is set up for long-term success in pursuit of its mission. You will directly contribute to this initiative by owning all aspects of our financial models, analyzing and recommending strategic investments, and providing senior management and the Board with actionable insight into the state of our operations. Responsibilities will include building and maintaining OpenAI’s operating model and budget, analyzing, recommending, and overseeing large strategic projects and investments, and supporting fundraising processes and managing relationships with investors.",
//   "orgDescription": "OpenAI is a nonprofit research company, founded in 2015 with the goal of discovering and enacting the path to safe artificial general intelligence. It has received $1 billion in funding commitments from the technology community, and is one of the leading organisations working on general AI development."
// }
// const fakeProps3 = {
//   "image": "https://80000hours.org/wp-content/uploads/2018/08/CSERlogo.jpg",
//   "jobName": "Research Associate in Global Justice and Global Catastrophic Risks",
//   "orgName": "Centre for the Study of Existential Risk",
//   "jobDescription": "This research programme seeks to study ways in which global inequality and injustice increase vulnerability to global catastrophic and existential risks, work in collaboration with partners to incorporate population and economic growth, resource scarcity, and global equity into the overall evaluation of global policy and existential risk, and develop a practical framework for global catastrophe justice designed to complement existing guidance such as the Sendai Framework for Disaster Risk Reduction and the Sustainable Development Goals.",
//   "orgDescription": "CSER is an interdisciplinary research centre at the University of Cambridge dedicated to the study and mitigation of existential risks. Their research focuses on biological risks, environmental risks, risks from artificial intelligence, and how to manage extreme technological risk in general. It was founded in 2012 by Professor Lord Martin Rees, the Astronomer Royal, Jaan Tallinn, the co-founder of Skype, and Huw Price, the Bertrand Russell Professor of Philosophy."
// }
// const fakeProps4 = {
//   "image": "https://cdn.80000hours.org/wp-content/uploads/2018/05/deepmind-150x150.png",
//   "jobName": "Recruiter, Engineering",
//   "orgName": "DeepMind",
//   "jobDescription": "Your responsibilities will include helping organize and launch candidate searches and build initial lists of potential candidates, working closely with and offering expert advice to engineering and recruiting managers to build talented and diverse candidate pipelines, developing research strategies, conducting in-depth searches, and providing shortlists of qualified engineering candidates to the recruitment team and hiring managers.",
//   "orgDescription": "DeepMind is probably the largest and most advanced research group developing general machine intelligence. It includes an ethics & society team\n and has published a number of research papers and blog posts on safety issues."
// }




export default ({ data }) => {

  const cardArray = data.allJobsJson.edges.map(elt => {
    return Card(elt.node)
  });

  return (
    <div>
      <Video
        // https://player.vimeo.com/video/290952236
        // https://player.vimeo.com/video/302734559 ... #t=15s
        // https://vimeo.com/seandoran
        videoSrcURL='https://player.vimeo.com/video/290952236?title=0&byline=0&portrait=0&sidedock=0&autoplay=1&loop=1'
        videoTitle="Orbit"
      />
      <div id="pitchCardContainer">
        <PitchCard id="pitchCard" >
          <h1>The Future Matters More Than Anything Else</h1>
          <p>The Earth is estimated to continue to remain habitable for hundreds of millions of years, without conditioning on anthropogenic factors. We may die out long before that point, but if there’s a chance of making it, then more people will live in the future than are alive today by an unenumerable order of magnitude (when considering the size of our cosmic endowment).</p>
          <p>If each generation lasts for 100 years, then over the course of 100 million years there could be one million future generations.</p>
          <p>This is such a big number that any problem that affects future generations potentially has a far greater scale than one that only affects the present in terms of expected value –- it could affect one million times more people, and all the art, science and culture that they will create. Again -- Problems that affect future generations are potentially the largest in scale and the most neglected.</p>
          <p>The future could be amazing beyond comprehension. In only the last few generations, humanity has gained the power to destroy itself fully. Extreme technogenic risks will continue to arise and decentralize and we continue to gain power. Whether our wisdom and governance systems will advance in response is a mutable unknown. While life might seem like business as usual, if you really take the time to contextualize yourself in anthropological history, you'll realize that we live in a narrow band of time of baffling import to our future as a species.</p>
          <p>If you want to learn more about how you can make the greatest impact on the world's most difficult problems, check out the links below to get started reading about Long-Term Effective Altruism. The world is full not only of neglected, high-leverage, and tractable problems, but also companions willing to go out of their way to help you towards contributing toward attaining our shared goal.</p>
          <p id='quote'>“In the next century, we will be inventing radical new technologies - machine intelligence, perhaps nanotech, great advances in synthetic biology and other things we haven't even thought of yet. And those new powers will unlock wonderful opportunities, but they might also bring with them certain risks. And we have no track record of surviving those risks. So if there are big existential risks, I think they are going to come from our own activities and mostly from our own inventiveness and creativity.”</p>
          <p id='attribution'> - Nick Bostrom, Future of Humanity Institute</p>
          <h4>Getting Started</h4>
          <ul>
            <li><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxuYmVja3N0ZWFkfGd4OjExNDBjZTcwNjMxMzRmZGE">On the Overwhelming Importance of Shaping the Far Future</a></li>
            <li><a href="https://80000hours.org/career-guide/">80,000 Hours Career Guide</a></li>
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
          <h4>Other Links:</h4>
          <ul>
            <li><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxuYmVja3N0ZWFkfGd4OjExNDBjZTcwNjMxMzRmZGE">Links to Orgs (LW, CFAR, FHI, 80k, ETC.)</a></li>
          </ul>
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





