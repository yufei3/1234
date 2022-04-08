import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Members | " + Config.SITE_TITLE;
const DESC = "This is the members page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/members";

class Members extends React.Component{
    
    render() {
        return (
        <div>
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                {/* Put everything into a new <div></div> attribute*/}
                <section className="introduction">
                <h3>Visiting Researchers</h3>
                    <img src="https://s2.loli.net/2022/04/02/nQUSrP31wO4v5EH.jpg" class="w3-display-middle w3-large" alt="" />
                    <p><strong>Prof. Jinsong Su</strong></p>
                    <p>Xiamen University</p>
                </section>
                <section className="members-intro">
                    <h3>PhD Students</h3>
                </section>
                <section className="student-main">
                    <div className="student-pic-gallary">
                        <img src="https://s2.loli.net/2022/04/02/frMQC3R718pXBPv.jpg" alt=""/>
                        <p><strong>Yuncheng Li</strong></p>
                        <p>Snapchat Research 2017-2019</p>
                        <p>Google Brain since 2019</p>
                    </div>
                    <div className="student-pic-gallary">
                        <img src="https://s2.loli.net/2022/04/02/frMQC3R718pXBPv.jpg" alt=""/>
                        <p><strong>Quanzeng You</strong></p>
                        <p>Microsoft Research AI since 2017</p>
                    </div>
                    <div className="student-pic-gallary">
                        <img src="http://www.cs.rochester.edu/u/thu" alt=""/>
                        <p><strong>Tianrun Hu</strong></p>
                        <p>College of William Mary</p>
                    </div>
                </section>

            </main>
        </div>
        );
    }
}

export default Members;