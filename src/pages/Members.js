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
                    
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/02/frMQC3R718pXBPv.jpg" alt="" width="140" height="170" />
                        <div class="student-gallery-desc">
                            <p><strong>Yuncheng Li</strong></p>
                            <p>Snapchat Research 2017-2019</p>
                            <p>Google Brain since 2019</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/7RMkWUxVY5sh6ue.png" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Quanzeng You</strong></p>
                            <p>Microsoft Research AI since 2017</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/LZvT7dm5Kc1NfED.png" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Tianrun Hu</strong></p>
                            <p>College of William & Mary</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/n5ClIwmKJLBueZW.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Jianbo Yuan</strong></p>
                            <p>Amazon - AWS</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/xsnlkPUhrA6C58d.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Yu Wang (PSC)</strong></p>
                            <p>Apple Siri since 2018</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/sSE5Mw2mIxV9P6c.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Yang Feng</strong></p>
                            <p>Google Cloud</p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/8flKIXOUH6QYrdN.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Tianlang Chen</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/19uR6evWJMcAXt8.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Zhengyuan Yang</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/iMVDGO6tCKepbEm.png" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Wei Xiong</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/L5YC61Pr3nmT9WV.png" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Weijian Li</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/q59UMbgAS4xteiI.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Songyang Zhang</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/YPHsUkdeJ9Iz3Du.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Wei Zhu</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/bexwWXLVCmHG9rK.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Haitian Zheng</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/JbO5v2gI3uiqMSr.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Jie An</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/6vCWHmUFquBKxwP.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Zhaoyi Wan</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/WnuQbd87UOYLNzq.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Yuqi Gao</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/flDwBXZAEjy5FV6.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Hang Hua</strong></p>
                        </div>
                    </div>
                    <div class="student-pic-gallery">
                        <img src="https://s2.loli.net/2022/04/09/aMjcPI6mk1sUYFA.jpg" alt="" width="140" height="170"/>
                        <div class="student-gallery-desc">
                            <p><strong>Hanjia Lyu</strong></p>
                        </div>
                    </div>
                    
                </section>

            </main>
        </div>
        );
    }
}

export default Members;