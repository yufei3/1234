import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "This is the home page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component{
    render() {
        return (
        <div>
            {/* Put everything into a new <div></div> attribute*/}
            <div className="welcome-container">
                <h1>VIStA</h1>
                <h2>Visual Intelligence &amp; Social Multimedia Analytics</h2>
            </div>

            <div className="container">
                <main>

                    <Helmet>
                        <title>{TITLE}</title>
                        <link rel="canonical" href={CANONICAL} />
                        <meta name="description" content={DESC}/>
                        <meta name="theme-color" content={Config.THEME_COLOR} />
                    </Helmet>

                    <section className="introduction">
                        <h3>Introduction</h3>
                        <p><strong>VIStA</strong> is a research group under the department of computer science at the University of Rochester. Directed by Professor Jiebo Luo, VIStA works on a wide-range of topics spanning from computer vision to social media data mining. Currently, it has more than 30 active researchers with a dozen projects in progress. 
                        </p>
                    </section>

                    <section className="professor-intro">
                        <div className= "pic">
                            {/* Add a forwardslash to the end of the original html attribute */}
                             <img src="https://s2.loli.net/2022/01/23/KI3DyPErTRCihsU.jpg" alt="Professor Luo's Portrait" />
                        </div>
                        <div className= "title">
                            <h3>About Professor Jiebo Luo</h3>
                        </div>
                        <div className= "intro">
                            <p>Jiebo Luo is a Chinese-American computer scientist, Professor of Computer Science at the University of Rochester and Distinguished Researcher with Goergen Institute for Data Science. He is interested in artificial intelligence, data science and computer vision. Prof. Luo is one of the most influential scholars in the general field of multimedia, and particularly in social media mining, ranked 2nd according to <a href="https://scholar.google.com/citations?user=CcbnBvgAAAAJ&hl=en&inst=10118598557142643180">Google Scholar</a>. </p>
                            <p>At the time of writing, Prof. Luo has 500+ publications, 4 books, 33,000+ citations, an h-index of 101, 95 US issued patents, and 8 best paper awards.
                            </p>
                        </div>
                    </section>

                    <section className="news">
                        <h3>News &amp; Updates</h3>
                        <div className="updatesList">
                            <p> Oct 22nd, 2021 - Prof. Luo receives the <a href="http://sigmm.org/news/sigmm_technical_award_2021">2021 ACM SIGMM Award</a> for Outstanding Technical Contributions to Multimedia Computing, Communications and Applications for his "outstanding, pioneering and continued research contributions in the areas of multimedia content analysis and social media analytics and for outstanding and continued service to the multimedia community."</p>
                        </div>
                    </section>
                </main>
            </div>

            <aside  className="home-topics">
                <h3>Research Topics</h3>
                <ul className="flowing-boxes1">
                    <li id="one">Computer Vision, NLP &amp; Media Understanding</li>
                    <li id="two">Machine Learning</li>
                    <li id="three">Web &amp; Social Media Data Mining</li>
                </ul>
                <ul className="flowing-boxes2">
                    <li id="four">Biomedical Analytics &amp; Health Informatics</li>
                    <li id="five">Human Computer Interaction</li>
                    <li id="six">Mobile &amp; Pervasive Computing</li>
                </ul>
            </aside>
        </div>
        );
    }

}

export default Home;