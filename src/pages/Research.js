import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Research | " + Config.SITE_TITLE;
const DESC = "This is the research page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/research";


class Research extends React.Component{

    render() {
        
        const openPage = (pageName, e) => {
            var i, tabcontent, tablinks;

            // Hide all elements with class="tabcontent" by default */
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            // Show the specific tab content
            document.getElementById(pageName).style.display = "block"; 
            e.currentTarget.className += " active";           
        }

        const openTab = (year, e) => {
            var panel;

            panel = document.getElementById(year);
            if (panel.style.display === "block") {
                panel.style.display = "none";
                e.currentTarget.className = e.currentTarget.className.replace(" active", ""); 
            } else {
                panel.style.display = "block";
                e.currentTarget.className += " active"; 
            }
        
        }


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
                <button className="tablink active" onClick={(e) => openPage("computer-vision", e)}>Computer Vision, NLP &amp; Media Understanding</button>
                <button className="tablink" onClick={(e) => openPage("machine-learning", e)}>Machine Learning</button>
                <button className="tablink" onClick={(e) => openPage("social-media-data-mining", e)}>Web &amp; Social Media Data Mining</button>
                <button className="tablink" onClick={(e) => openPage("biomedical-analytics", e)}>Biomedical Analytics &amp; Health Informatics</button>
                <button className="tablink" onClick={(e) => openPage("human-computer-interaction", e)}>Human Computer Interaction</button>
                <button className="tablink" onClick={(e) => openPage("pervasative-computing", e)}>Mobile &amp; Pervasive Computing</button>
            </div>

            {/* Tab content */}
            <div id="allContent">
                <div id="computer-vision" className="tabcontent">
                    <h3>Computer Vision, NLP &amp; Media Understanding</h3>
                    <button className="accordion" onClick={(e) => openTab("2022", e)}>2022</button>
                    <div id="2022" className="panel">
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

                    <button className="accordion" onClick={(e) => openTab("2021", e)}>2021</button>
                    <div id="2021" className="panel">
                        <ul>
                            <li>Sheng Liu, Zhongwei Cheng, Lin Chen, Jiebo Luo, Junsong Yuan, "A Compositional Model for 
                                Visual Relationship Grounding," IEEE Transactions on Image Processing, in press.</li>
                            <li>Songyang Zhang, Houwen Peng, Yijuan Lu, Jianlong Fu, Jiebo Luo, "Multi-Scale 2D Temporal 
                                Adjacent Networks for Moment Localization with Natural Language," IEEE Transactions on 
                                Pattern Analysis and Machine Intelligence, in press.</li>
                            <li>Hongwei Xue, Yupan Huang, Bei Liu, Houwen Peng, Jianlong Fu, Houqiang Li, Jiebo Luo, 
                                "Probing Inter-modality: Visual Parsing with Self-Attention for Vision-and-Language 
                                Pre-training," Neural Information Processing Systems (NeurlPS), December 2021.</li>
                            <li>Wentian Zhao, Xinxiao Wu, Jiebo Luo, "Multi-modal Dependency Tree for Video Captioning,"
                                Neural Information Processing Systems (NeurlPS), December 2021.</li>
                            <li>Jian Ding, Nan Xue, Gui-Song Xia, Xiang Bai, Wen Yang, Michael Yang, Serge Belongie, 
                                Jiebo Luo, Mihai Datcu, Marcello Pelillo, Liangpei Zhang, "Object Detection in Aerial 
                                Images: A Large-Scale Benchmark and Challenges," IEEE Transactions on Pattern Analysis 
                                and Machine Intelligence, in press.</li>
                            <li>Litao Yu, Zhibin Li, Min Xu, Yongsheng Gao, Jiebo Luo, Jian Zhang, "Distribution-aware 
                                Margin Calibration for Semantic Segmentation in Images," International Journal of Computer Vision, in press.</li>
                            <li>Zhengyuan Yang, Songyang Zhang, Liwei Wang, Jiebo Luo, "SAT: 2D Semantics Assisted Training 
                                for 3D Visual Grounding," International Conference on Computer Vision (ICCV), 2021. <strong>(Oral presentation)</strong></li>
                            <li>Wei Zhu, Haitian Zheng, Haofu Liao, Weijian Li, Jiebo Luo, "Learning Bias-Invariant Representation 
                                by Cross-Sample Mutual Information Minimization," International Conference on Computer Vision (ICCV), 2021.</li>
                            <li>Heliang Zheng, Huan Yang, Jianlong Fu, Zheng-Jun Zha, Jiebo Luo, "Learning Dual-Path Embedding Network for 
                                Degraded-Reference Image Quality Assessment," International Conference on Computer Vision (ICCV), 2021.</li>
                            <li>Jing Bi, Jiebo Luo, Chenliang Xu, "Procedure Planning in Instructional Videos via Contextual Modeling 
                                and Model-based Policy Learning," International Conference on Computer Vision (ICCV), 2021. <strong>(Oral presentation)</strong></li>
                            <li>Mengshi Qi, Jie Qin, Di Huang, Zhiqiang Shen, Yi Yang, and Jiebo Luo, "Latent Memory-augmented Graph Transformer 
                                for Visual Storytelling," ACM Multimedia Conference, Chengdu, China, October 2021.</li>
                            <li>Hongwei Xue, Bei Liu, Huan Yang, Jianlong Fu, Houqiang Li, Jiebo Luo, "Learning Fine-Grained Motion Embedding 
                                for Landscape Animation," ACM Multimedia Conference, Chengdu, China, October 2021. <strong>(Oral presentation)</strong></li>
                            <li>Songyang Zhang, Linfeng Song, Lifeng Jin, Dong Yu, Jiebo Luo, "Video-aided Unsupervised Grammar Induction," 
                                Annual Conference of the North American Chapter of the Association for Computational Linguistics (NAACL), 
                                Mexico City, Mexico, June 2021. <strong>(Best Long Paper)</strong></li>
                            <li>Hang Hua, Xingjian Li, Dejin Dou, Chengzhong Xu, Jiebo Luo, "Noise Stability Regularization for Improving 
                                BERT Fine-tuning," Annual Conference of the North American Chapter of the Association for Computational 
                                Linguistics (NAACL), Mexico City, Mexico, June 2021.</li>
                            <li>Zhengyuan Yang, Yijuan Lu, Xi Yin, Dinei Florencio, Lijuan Wang, Cha Zhang, Lei Zhang, Jiebo Luo, 
                                "TAP: Text-Aware Pre-training for Text-VQA and Text-Caption," IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition (CVPR), June 2021. <strong>(Oral presentation)</strong></li>
                            <li>Jie An, Siyu Huang, Yibing Song, Dejing Dou, Wei Liu, Jiebo Luo, "ArtFlow: Unbiased Image Style Transfer 
                                via Reversible Neural Flows," IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2021.</li>
                            <li>Jing Wang, Jinhui Tang, Mingkun Yang, Xiang Bai, Jiebo Luo, "Improving OCR-based Image Captioning by Incorporating 
                                Geometrical Relationship," IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2021.</li>
                            <li>Hao Wang, Zheng-Jun Zha, Liang Li, Dong Liu, Jiebo Luo, "Structured Multi-Level Interaction Network for Video Moment 
                                Localization via Language Query," IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2021.</li>
                            <li>Kecheng Zheng, Wu Liu, Lingxiao He, Tao Mei, Jiebo Luo, Zheng-Jun Zha, "Group-aware Label Transfer for Domain Adaptive 
                                Person Re-identification, " IEEE/CVF Conferences on Computer Vision and Pattern Recognition (CVPR), June 2021.</li>
                            <li>Cheng Peng, Haofu Liao, Gina Wong, Jiebo Luo, S. Kevin Zhou, Rama Chellappa, "XraySyn: Realistic View Synthesis 
                                from a Single Radiograph through CT Prior," The 35th AAAI Conference on Artificial Intelligence (AAAI), February 2021.</li>
                            <li>Jin Chen, Xinxiao Wu, Yao Hu, Jiebo Luo, ''Spatial-temporal Causal Inference for Partial Image-to-video Adaptation," 
                                The 35th AAAI Conference on Artificial Intelligence (AAAI), February 2021.</li>
                            <li>Haitian Zheng, Lele Chen, Chenliang Xu, Jiebo Luo, "Pose Flow Learning from Person Images for Posed Guided Synthesis," 
                                IEEE Transactions on Image Processing, 30:1898-1909, 2021.</li>
                            <li>Yanlong Dong, Ying Zhang, Lin Ma, Zhi Wang, Jiebo Luo, ''Unsupervised text-to-image synthesis,'' Pattern Recognition, 110: 107573, 2021.</li>
                        </ul>
                    </div>
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
            </div>
    

        </main>);
    }
}

export default Research;