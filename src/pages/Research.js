import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Research | " + Config.SITE_TITLE;
const DESC = "This is the research page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/research";


class Research extends React.Component{
    
    render() {
        return (        
        <main>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            {/* Tab links */}
            <div className="tab">
                <button className="tablink" onclick="openPage(event, 'computer-vision')" id="defaultOpen">Computer Vision, NLP &amp; Media Understanding</button>
                <button className="tablink" onclick="openPage(event, 'machine-learning')">Machine Learning</button>
                <button className="tablink" onclick="openPage(event, 'social-media-data-mining')">Web &amp; Social Media Data Mining</button>
                <button className="tablink" onclick="openPage(event, 'biomedical-analytics')">Biomedical Analytics &amp; Health Informatics</button>
                <button className="tablink" onclick="openPage(event, 'human-computer-interaction')">Human Computer Interaction</button>
                <button className="tablink" onclick="openPage(event, 'pervasative-computing')">Mobile &amp; Pervasive Computing</button>
            </div>

            {/* Tab content */}
            <div id="computer-vision" className="tabcontent">
                <h3>Computer Vision, NLP &amp; Media Understanding</h3>
                <h4>2022</h4>
                <ul>
                    <li>Wei Zhu, Zihe Zheng, Haitian Zheng, Hanjia Lyu, Jiebo Luo, 
                        "Learning to Aggregate and Refine Noisy Labels for Visual Sentiment Analysis," 
                        International Conference on Pattern Recognition (ICPR), Montreal, Quebec, Canada, August 2022.</li>
                    <li>Zhengyuan Yang, Jingen Liu, Jing Huang, Xiaodong He, Tao Mei, Chenliang Xu, Jiebo Luo, 
                        "Cross-modal Contrastive Distillation for Instructional Activity Anticipation," 
                        International Conference on Pattern Recognition (ICPR), Montreal, Quebec, Canada, August 2022.</li>
                    <li>Zhongjie Yu, Gaoang Wang, Lin Chen, Jiebo Luo, Sebastian Raschka, 
                        "When Few-Shot Learning Meets Video Object Detection," 
                        International Conference on Pattern Recognition (ICPR), Montreal, Quebec, Canada, August 2022.</li>
                    <li>Wei Zhu, Le Lu, Jing Xiao, Mei Han, Jiebo Luo, Adam Harrison, "Localized Adversarial Domain Generalization," 
                        IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2022.</li>
                    <li>Kai Zhu, Yang Cao, Wei Zhai, Jiebo Luo, Zheng-jun Zha, 
                        "Self-Sustaining Representation Expansion for Non-Exemplar Class-Incremental Learning," 
                        IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2022.</li>
                    <li>Fuchen Long, Zhaofu Qiu, Yingwei Pan, Ting Yao, Jiebo Luo, Tao Mei. 
                        "Stand-Alone Inter-Frame Attention in Video Models," 
                        IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2022.</li>
                    <li>Jing Shi, Ning Xu, Haitian Zheng, Alex Smith, Jiebo Luo, Chenliang Xu, 
                        "SpaceEdit: Learning a Unified Editing Space for Open-Domain Image Editing," 
                        IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2022.</li>
                    <li>Shaofei Cai, Liang Li, Xinzhen Han, Jiebo Luo, Zheng-Jun Zha, Qingming Huang, 
                        "Automatic Relation-aware Graph Network Proliferation," 
                        IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2022.</li>
                </ul>
            </div>

            <div id="machine-learning" className="tabcontent">
                <h3>Machine Learning</h3>
            </div>

            <div id="social-media-data-mining" className="tabcontent">
                <h3>Web &amp; Social Media Data Mining</h3>
            </div>

            <div id="biomedical-analytics" className="tabcontent">
                <h3>Biomedical Analytics &amp; Health Informatics</h3>
            </div>

            <div id="human-computer-interaction" className="tabcontent">
                <h3>Human Computer Interaction</h3>
            </div>

            <div id="pervasative-computing" className="tabcontent">
                <h3>Mobile &amp; Pervasive Computing</h3>
            </div>

        </main>);
    }
}

export default Research;