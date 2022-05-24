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
                    <button className="accordion" onClick={(e) => openTab("cv-2022", e)}>2022</button>
                    <div id="cv-2022" className="panel">
                        <ul>
                            <li>Wei Zhu, Zihe Zheng, Haitian Zheng, Hanjia Lyu, Jiebo Luo, 
                                "Learning to Aggregate and Refine Noisy Labels for Visual Sentiment Analysis," 
                                <i>International Conference on Pattern Recognition </i>(ICPR), Montreal, Quebec, Canada, August 2022.</li>
                            <li>Zhengyuan Yang, Jingen Liu, Jing Huang, Xiaodong He, Tao Mei, Chenliang Xu, Jiebo Luo, 
                                "Cross-modal Contrastive Distillation for Instructional Activity Anticipation," 
                                <i>International Conference on Pattern Recognition </i>(ICPR), Montreal, Quebec, Canada, August 2022.</li>
                            <li>Zhongjie Yu, Gaoang Wang, Lin Chen, Jiebo Luo, Sebastian Raschka, 
                                "When Few-Shot Learning Meets Video Object Detection," 
                                <i>International Conference on Pattern Recognition </i>(ICPR), Montreal, Quebec, Canada, August 2022.</li>
                            <li>Wei Zhu, Le Lu, Jing Xiao, Mei Han, Jiebo Luo, Adam Harrison, "Localized Adversarial Domain Generalization," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.</li>
                            <li>Kai Zhu, Yang Cao, Wei Zhai, Jiebo Luo, Zheng-jun Zha, 
                                "Self-Sustaining Representation Expansion for Non-Exemplar Class-Incremental Learning," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.</li>
                            <li>Fuchen Long, Zhaofu Qiu, Yingwei Pan, Ting Yao, Jiebo Luo, Tao Mei. 
                                "Stand-Alone Inter-Frame Attention in Video Models," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.</li>
                            <li>Jing Shi, Ning Xu, Haitian Zheng, Alex Smith, Jiebo Luo, Chenliang Xu, 
                                "SpaceEdit: Learning a Unified Editing Space for Open-Domain Image Editing," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.</li>
                            <li>Shaofei Cai, Liang Li, Xinzhen Han, Jiebo Luo, Zheng-Jun Zha, Qingming Huang, 
                                "Automatic Relation-aware Graph Network Proliferation," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.</li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2021", e)}>2021</button>
                    <div id="cv-2021" className="panel">
                        <ul>
                            <li>Sheng Liu, Zhongwei Cheng, Lin Chen, Jiebo Luo, Junsong Yuan, "A Compositional Model for 
                                Visual Relationship Grounding," <i>IEEE Transactions on Image Processing</i>, in press.</li>
                            <li>Songyang Zhang, Houwen Peng, Yijuan Lu, Jianlong Fu, Jiebo Luo, "Multi-Scale 2D Temporal 
                                Adjacent Networks for Moment Localization with Natural Language," <i>IEEE Transactions on 
                                Pattern Analysis and Machine Intelligence</i>, in press.</li>
                            <li>Hongwei Xue, Yupan Huang, Bei Liu, Houwen Peng, Jianlong Fu, Houqiang Li, Jiebo Luo, 
                                "Probing Inter-modality: Visual Parsing with Self-Attention for Vision-and-Language 
                                Pre-training," <i>Neural Information Processing Systems </i>(NeurlPS), December 2021.</li>
                            <li>Wentian Zhao, Xinxiao Wu, Jiebo Luo, "Multi-modal Dependency Tree for Video Captioning,"
                                <i>Neural Information Processing Systems </i>(NeurlPS), December 2021.</li>
                            <li>Jian Ding, Nan Xue, Gui-Song Xia, Xiang Bai, Wen Yang, Michael Yang, Serge Belongie, 
                                Jiebo Luo, Mihai Datcu, Marcello Pelillo, Liangpei Zhang, "Object Detection in Aerial 
                                Images: A Large-Scale Benchmark and Challenges," <i>IEEE Transactions on 
                                Pattern Analysis and Machine Intelligence</i>, in press.</li>
                            <li>Litao Yu, Zhibin Li, Min Xu, Yongsheng Gao, Jiebo Luo, Jian Zhang, "Distribution-aware 
                                Margin Calibration for Semantic Segmentation in Images," <i>International Journal of Computer Vision</i>, in press.</li>
                            <li>Zhengyuan Yang, Songyang Zhang, Liwei Wang, Jiebo Luo, "SAT: 2D Semantics Assisted Training 
                                for 3D Visual Grounding," <i>International Conference on Computer Vision </i>(ICCV), 2021. <strong>(Oral presentation)</strong></li>
                            <li>Wei Zhu, Haitian Zheng, Haofu Liao, Weijian Li, Jiebo Luo, "Learning Bias-Invariant Representation 
                                by Cross-Sample Mutual Information Minimization," <i>International Conference on Computer Vision </i>(ICCV), 2021.</li>
                            <li>Heliang Zheng, Huan Yang, Jianlong Fu, Zheng-Jun Zha, Jiebo Luo, "Learning Dual-Path Embedding Network for 
                                Degraded-Reference Image Quality Assessment," <i>International Conference on Computer Vision </i>(ICCV), 2021.</li>
                            <li>Jing Bi, Jiebo Luo, Chenliang Xu, "Procedure Planning in Instructional Videos via Contextual Modeling 
                                and Model-based Policy Learning," <i>International Conference on Computer Vision </i>(ICCV), 2021. <strong>(Oral presentation)</strong></li>
                            <li>Mengshi Qi, Jie Qin, Di Huang, Zhiqiang Shen, Yi Yang, and Jiebo Luo, "Latent Memory-augmented Graph Transformer 
                                for Visual Storytelling," <i>ACM Multimedia Conference</i>, Chengdu, China, October 2021.</li>
                            <li>Hongwei Xue, Bei Liu, Huan Yang, Jianlong Fu, Houqiang Li, Jiebo Luo, "Learning Fine-Grained Motion Embedding 
                                for Landscape Animation," <i>ACM Multimedia Conference</i>, Chengdu, China, October 2021. <strong>(Oral presentation)</strong></li>
                            <li>Songyang Zhang, Linfeng Song, Lifeng Jin, Dong Yu, Jiebo Luo, "Video-aided Unsupervised Grammar Induction," 
                                <i>Annual Conference of the North American Chapter of the Association for Computational Linguistics </i>(NAACL), 
                                Mexico City, Mexico, June 2021. <strong>(Best Long Paper)</strong></li>
                            <li>Hang Hua, Xingjian Li, Dejin Dou, Chengzhong Xu, Jiebo Luo, "Noise Stability Regularization for Improving 
                                BERT Fine-tuning," <i>Annual Conference of the North American Chapter of the Association for Computational Linguistics </i>(NAACL), 
                                Mexico City, Mexico, June 2021.</li>
                            <li>Zhengyuan Yang, Yijuan Lu, Xi Yin, Dinei Florencio, Lijuan Wang, Cha Zhang, Lei Zhang, Jiebo Luo, 
                                "TAP: Text-Aware Pre-training for Text-VQA and Text-Caption," <i>IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition </i>(CVPR), June 2021. <strong>(Oral presentation)</strong></li>
                            <li>Jie An, Siyu Huang, Yibing Song, Dejing Dou, Wei Liu, Jiebo Luo, "ArtFlow: Unbiased Image Style Transfer 
                                via Reversible Neural Flows," <i>IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition </i>(CVPR), June 2021.</li>
                            <li>Jing Wang, Jinhui Tang, Mingkun Yang, Xiang Bai, Jiebo Luo, "Improving OCR-based Image Captioning by Incorporating 
                                Geometrical Relationship," <i>IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition </i>(CVPR), June 2021.</li>
                            <li>Hao Wang, Zheng-Jun Zha, Liang Li, Dong Liu, Jiebo Luo, "Structured Multi-Level Interaction Network for Video Moment 
                                Localization via Language Query," <i>IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition </i>(CVPR), June 2021.</li>
                            <li>Kecheng Zheng, Wu Liu, Lingxiao He, Tao Mei, Jiebo Luo, Zheng-Jun Zha, "Group-aware Label Transfer for Domain Adaptive 
                                Person Re-identification, " <i>IEEE/CVF Conferences on Computer Vision 
                                and Pattern Recognition </i>(CVPR), June 2021.</li>
                            <li>Cheng Peng, Haofu Liao, Gina Wong, Jiebo Luo, S. Kevin Zhou, Rama Chellappa, "XraySyn: Realistic View Synthesis 
                                from a Single Radiograph through CT Prior," <i>The 35th AAAI Conference on Artificial Intelligence </i>(AAAI), February 2021.</li>
                            <li>Jin Chen, Xinxiao Wu, Yao Hu, Jiebo Luo, ''Spatial-temporal Causal Inference for Partial Image-to-video Adaptation," 
                                <i>The 35th AAAI Conference on Artificial Intelligence </i>(AAAI), February 2021.</li>
                            <li>Haitian Zheng, Lele Chen, Chenliang Xu, Jiebo Luo, "Pose Flow Learning from Person Images for Posed Guided Synthesis," 
                                <i>IEEE Transactions on Image Processing</i>, 30:1898-1909, 2021.</li>
                            <li>Yanlong Dong, Ying Zhang, Lin Ma, Zhi Wang, Jiebo Luo, ''Unsupervised text-to-image synthesis,'' 
                                <i>Pattern Recognition</i>, 110: 107573, 2021.</li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2020", e)}>2020</button>
                    <div id="cv-2020" className="panel">
                        <ul>
                             <li>Xinxiao Wu, Ruiqi Wang, Jingyi Hou, Hanxi Lin, Jiebo Luo,
                                ''Spatial-Temporal Relation Reasoning for Action Prediction in
                                Videos,'' <i>International Journal of Computer Vision </i>(IJCV), in press.
                            </li>
                            <li>Jie An, Tianlang Chen, Songyang Zhang, Jiebo Luo, "Global
                                Image Sentiment Transfer," <i>International Conference on
                                Pattern Recognition</i> (ICPR), Milan, Italy, December 2020. 
                            </li>
                            <li>Zhengyuan Yang, Tushar Kumar, Tinalang Chen, Jinsong Su, Jiebo Luo, 
                                ''Grounding-Tracking-Integration,'' <i>IEEE Transactions on Circuits and 
                                Systems for Video Technology</i>, in press.
                            </li>
                            <li>Mingkun Yang, Haitian Zheng, Xiang Bai, Jiebo Luo,
                                "Cost-Effective Adversarial Attacks against Scene Text
                                Recognition," <i>International Conference on Pattern
                                Recognition</i> (ICPR), Milan, Italy, December 2020. 
                            </li>
                            <li>Gaoang Wang, Lin Chen, Mingwei He, Jiebo Luo, "DAIL:
                                Dataset-Aware and Invariant Learning for Face Recognition," <i>International 
                                Conference on Pattern Recognition</i> (ICPR), Milan, Italy,
                                December 2020.
                            </li>
                            <li>Weijian Li, Haofu Liao, Shun Miao, Le Lu, Jiebo Luo,
                                "Unsupervised Learning of Landmarks based on Inter-Intra Subject
                                Consistencies," <i>International Conference on Pattern
                                Recognition</i> (ICPR), Milan, Italy, December 2020.
                            </li>
                            <li>Zhengyuan Yang, Yuncheng Li, Linjie Yang, Ning Zhang, Jiebo
                                Luo, "Weakly Supervised Body Part Segmentation with Pose based
                                Part Priors," <i>International Conference on Pattern
                                Recognition</i> (ICPR), Milan, Italy, December 2020.</li>
                            <li>Zhengyuan Yang, Amanda Kay, Yuncheng Li, Wendi Cross, Jiebo
                                Luo, "Pose-based Body Language Recognition for Emotion and
                                Psychiatric Symptom Interpretation," <i>International
                                Conference on Pattern Recognition</i> (ICPR), Milan, Italy,
                                December 2020. </li>
                            <li>Heliang Zheng, Jianlong Fu, Yanhong Zeng, Zheng-jun Zha, Jiebo
                                Luo, "Learning Semantic-aware Normalization for Generative
                                Adversarial Networks," <i>Neural Information Processing Systems </i> 
                                (NeurlPS), December 2020. (<strong>spotlight presentation</strong>)</li>
                            <li>Yiming Xu, Lin Chen, Zhongwei Cheng, Lixin Duan, Jiebo Luo,
                                "Open-Ended Visual Question Answering by Multi-Modal Domain
                                Adaptation," <i>The Conference on Empirical Methods in Natural
                                Language Processing</i> (EMNLP), <i>Findings of EMNLP</i>,
                                November 2020.
                            </li>
                            <li>Xiankai Lu, Wenguan Wang, Jianbing Shen, David Crandall, Jiebo
                                Luo, "Zero-Shot Video Object Segmentation with Co-Attention
                                Siamese Networks,<i>"</i><i> IEEE Transactions on Pattern
                                Analysis and Machine Intelligence</i>, in press.</li>
                            <li>Wenbin Li*, Wei Xiong*, Haofu Liao, Jing Huo, Yang Gao, Jiebo
                                Luo, "CariGAN: Caricature Generation through Weakly Paired
                                Adversarial Learning," <i>Neural Networks</i>, in press.
                            </li>
                            <li>Tianlang Chen, Wei Xiong, Haitian Zheng, Jiebo Luo, "Image
                                Sentiment Transfer," Brave and New Ideas Track, <i>ACM
                                Multimedia Conference</i>, Seattle, WA, October 2020. (Oral
                                Presentation)</li>
                            <li>Jing Wang, Jinhui Tang, Jiebo Luo, "Multimodal Attention with
                                Image Text Spatial Relationship for OCR-Based Image Captioning,"
                                <i>ACM Multimedia Conference</i>, Seattle, WA, October 2020.</li>
                            <li>Mengshi Qi, Jie Qin, Xiantong Zhen, Di Huang, Yi Yang, Jiebo
                                Luo, "Few-Shot Ensemble Learning for Video Classification with
                                SlowFast Memory Networks," <i>ACM Multimedia Conference</i>,
                                Seattle, WA, October 2020.
                            </li>
                            <li>Huan Lin, Fandong Meng, Jinsong Su, Yongjing Yin, Zhengyuan
                                Yang, Yubin Ge, Jie Zhou, Jiebo Luo, "Dynamic Context-guided
                                Capsule Network for Multimodal Machine Translation," <i>ACM
                                Multimedia Conference</i>, Seattle, WA, October 2020.</li>
                            <li>Rui Zhao, Kecheng Zheng, Zheng-Jun Zha, Hongtao Xie, Jiebo
                                Luo, "Memory Enhanced Embedding Learning for Cross-Modal
                                Video-Text Retrieval," <i>ACM Multimedia Conference</i>,
                                Seattle, WA, October 2020.</li>
                            <li>Yangchun Zhu, Zheng-Jun Zha, Tianzhu Zhang, Jiawei Liu, Jiebo
                                Luo, "A Structured Graph Attention Network for Vehicle
                                Re-Identification," <i>ACM Multimedia Conference</i>, Seattle,
                                WA, October 2020. (Oral Presentation)</li>
                            <li>Hao Wang, Zheng-Jun Zha, Xuejin Chen, Zhiwei Xiong, Jiebo Luo,
                                "Dual Path Interaction Network for Video Moment Localization," 
                                <i>ACM Multimedia Conference</i>, Seattle, WA, October 2020.
                            </li>
                            <li>Haitian Zheng, Lele Chen, Chenliang Xu, Jiebo Luo, "Pose Flow
                                Learning from Person Images for Posed Guided Synthesis," 
                                <i>IEEE Transactions on Image Processing</i>, in press.
                            </li>
                            <li>Fuchen Long, Ting Yao, Zhaofan Qiu, Xinmei Tian, Jiebo Luo,
                                Tao Mei, "Learning to Localize Actions from Moments," 
                                <i>European Conference on Computer Vision </i>(ECCV), Glasgow, UK, August
                                2020.<strong> (oral presentation)</strong></li>
                            <li>Jianxin Lin, Yingxue Pang, Yingce Xia, Zhibo Chen, Jiebo Luo,
                                "TuiGAN: Learning Versatile Image-to-Image Translation with Two
                                Unpaired Images," <i>European Conference on Computer Vision</i>
                                (ECCV), Glasgow, UK, August 2020. <strong>(spotlight presentation)</strong></li>
                            <li>Zhengyuan Yang, Tianlang Chen, Liwei Wang, Jiebo Luo,
                                "Improving One-stage Visual Grounding by Recursive Sub-query
                                Construction," <i>European Conference on Computer Vision</i>
                                (ECCV), Glasgow, UK, August 2020.</li>
                            <li>Tianlang Chen, Jiajun Deng, Jiebo Luo, "Adaptive Offline
                                Quintuplet Loss for Image-text Matching," <i>European
                                Conference on Computer Vision</i> (ECCV), Glasgow, UK, August
                                2020.</li>
                            <li>Haitian Zheng, Haofu Liao, Lele Chen, Wei Xiong, Tianlang
                                Chen, Jiebo Luo, "Example-Guided Image Synthesis across
                                Arbitrary Scenes using Masked Spatial-Channel Attention and
                                Self-Supervision," <i>European Conference on Computer Vision</i>
                                (ECCV), Glasgow, UK, August 2020.</li>
                            <li>Weijian Li, Yuhang Lu, Kang Zheng, Haofu Liao, Chihung Lin,
                                Jiebo Luo, Chi-Tung Cheng, Jing Xiao, Le Lu, Chang-Fu Kuo, Shun
                                Miao, "Cross-domain Structured Landmark Detection via
                                Progressive Topology-Adapting Deep Graph Learning," <i>European
                                Conference on Computer Vision</i> (ECCV), Glasgow, UK, August
                                2020.</li>
                            <li>Mang Ye, Jianbing Shen, David J. Crandall, Ling Shao, Jiebo
                                Luo, "Dynamic Dual-Attentive Aggregation Learning for
                                Visible-Infrared Person Re-Identification," <i>European
                                Conference on Computer Vision</i> (ECCV), Glasgow, UK, August
                                2020.</li>
                            <li>Huafeng Li, Jiajia Xu, Zhengtao Yu, and Jiebo Luo, "Jointly
                                Learning Commonality and Specificity Dictionaries for Person
                                Re-Identification," <i>IEEE Transactions on Image Processing</i>,
                                in IEEE Xplore.
                            </li>
                            <li>Xin Liu, Kai Liu, Jinsong Su, Yebin Ge, Xiang Li, Bin Wang,
                                Jiebo Luo, "An Iterative Multi-Source Mutual Knowledge Transfer
                                Framework for Machine Reading Comprehension," <i>International
                                Joint Conference on Artificial Intelligence (IJCAI)</i>,
                                Yokohama, Japan, July 2020.
                            </li>
                            <li>Yongjing Yin, Fandong Meng, Jinsong Su, Chunlun Zhou,
                                Zhengyuan Yang, Jie Zhou, Jiebo Luo, "A Novel Graph-based
                                Multi-modal Fusion Encoder for Neural Machine Translation,"
                                <i>Annual Meeting of the Association for Computational Linguistics
                                (ACL), </i>Seattle, WA, July 2020.</li>
                            <li>Mengshi Qi, Yunhong Wang, Annan Li, Jiebo Luo, "STC-GAN:
                                Spatio-temporally coupled Generative Adversarial Networks for
                                Predictive Scene Parsing," <i>IEEE Transactions on Image
                                Processing</i>, 29: 5420-5430, 2020.</li>
                            <li>Jingyi Hou, Xinxiao Wu, Ruiqi Wang, Jiebo Luo, Yunde Jia,
                                "Confidence-Guided Self Refinement for Action Prediction in
                                Untrimmed Videos," <i>IEEE Transactions on Image Processing</i>,
                                in press.
                            </li>
                            <li>Wei Xiong, Yutong He, Yixuan Zhang, Wenhan Luo, Lin Ma, Jiebo
                                Luo, "Fine-grained Image-to-Image Transformation towards Visual
                                Recognition," <i>IEEE/CVF Conferences on Computer Vision and
                                Pattern Recognition</i> (CVPR), Seattle, WA, June 2020.</li>
                            <li>Jie Chen, Zhiheng Li, Chenliang Xu, Jiebo Luo, "Learning a
                                Weakly-Supervised Video Actor-Action Segmentation Model with a
                                Wise Selection," <i>IEEE/CVF Conferences on Computer Vision and
                                Pattern Recognition</i> (CVPR), Seattle, WA, June 2020. 
                                <strong>(oral presentation)</strong>
                            </li>
                            <li>Zhongjie Yu, Lin Chen, Zhongwei Cheng, Jiebo Luo, "TransMatch:
                                A Transfer-Learning Scheme for Semi-Supervised Few-Shot
                                Learning," <i>IEEE/CVF Conferences on Computer Vision and
                                Pattern Recognition</i> (CVPR), Seattle, WA, June 2020.</li>
                            <li>Zhaoyi Wang, Jielei Zhang, Liang Zhang, Cong Yao, Jiebo Luo,
                                "On Vocabulary Reliance in Scene Text Recognition," <i>IEEE/CVF
                                Conferences on Computer Vision and Pattern Recognition</i>
                                (CVPR), Seattle, WA, June 2020.</li>
                            <li>Jiamin Wu, Tianzhu Zhang, Zheng-Jun Zha, Jiebo Luo, Yongdong
                                Zhang, Feng Wu, "Self-supervised Domain-aware Generative Network
                                for Generalized Zero-shot Learning," <i>IEEE/CVF Conferences on
                                Computer Vision and Pattern Recognition</i> (CVPR), Seattle,
                                WA, June 2020.
                            </li>
                            <li>Jie An, Haoyi Xiong, Jun Huan, Jiebo Luo, "Ultrafast Photorealistic 
                                Style Transfer via Neural Architecture Search," <i>The 34th AAAI Conference 
                                on Artificial Intelligence</i> (AAAI), New York, NY, February 2020. <strong>(oral presentation)</strong>
                            </li>
                            <li>Tianlang Chen, Jiebo Luo, "Expressing Objects just like Words:
                                Recurrent Visual Embedding for Image-Text Matching," <i>The
                                34th AAAI Conference on Artificial Intelligence </i>(AAAI),
                                New York, NY, February 2020.
                            </li>
                            <li>Songyang Zhang, Houwen Peng, Jianlong Fu, Jiebo Luo, "Learning
                                2D Temporal Adjacent Networks for Moment Localization with
                                Natural Language," <i>The 34th AAAI Conference on Artificial
                                Intelligence</i> (AAAI), New York, NY, February 2020.
                            </li>
                            <li>Jinyi Hou, Xinxiao Wu, Yunde Jia, Jiebo Luo, "Joint
                                Commonsense and Relation Reasoning for Image and Video
                                Captioning," <i>The 34th AAAI Conference on Artificial
                                Intelligence</i> (AAAI), New York, NY, February 2020.
                            </li>
                            <li>Jiali Zeng, Linfeng Song, Jinsong Su, Xie Jun, Wei Song, Jiebo
                                Luo, "Neural Simile Recognition with Cyclic Multitask Learning
                                and Local Attention," <i>The 34th AAAI Conference on Artificial
                                Intelligence</i> (AAAI), New York, NY, February 2020.
                            </li>
                            <li>Yongjing Yin, Fandong Meng, Jinsong Su, Yubin Ge, Linfeng
                                Song, Jie Zhou, Jiebo Luo, "Enhancing Pointer Network for
                                Sentence Ordering with Pairwise Ordering Predictions," <i>The
                                34th AAAI Conference on Artificial Intelligence</i> (AAAI),
                                New York, NY, February 2020.
                            </li>
                            <li>Heliang Zheng, Zheng-Jun Zha, Jiebo Luo, "Learning Rich Part
                                Hierarchies with Progressive Attention Networks for Fine-Grained
                                Image Recognition," <i>IEEE Transactions on Image Processing</i>,
                                29: 476-488, 2020.
                            </li>
                            <li>Tianliang Liu, Quanzeng You, Yanzhang Wang, Xiaodong Dong,
                                Xiubin Dai, Jiebo Luo, "Sentiment Recognition for Short
                                Annotated GIFs Using Visual-Textual Fusion," <i>IEEE
                                Transactions on Multimedia</i>, 22(4): 1098-1110, 2020. 
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2019", e)}>2019</button>
                    <div id="cv-2019" className="panel">
                        <ul>
                            <li>Jianxin Lin, Yingce Xia, Sen Liu, Tao Qin, Zhibo Chen, Jiebo
                                Luo, "Exploring Explicit Domain Supervision for Latent Space
                                Disentanglement in Unpaired Image-to-Image Translation," 
                                <i>IEEE Transactions on Pattern Analysis and Machine Intelligence</i>,
                                in press.
                            </li>
                            <li>Heliang Zheng, Jianlong Fu, Zheng-Jun Zha, Jiebo Luo,
                                "Learning Deep Bilinear Transformation for Fine-grained Image
                                Representation," <i>Neural Information Processing Systems</i>
                                (NeurlPS), Vancouver, Canada, December 2019.</li>
                            <li>Jaili Zeng, Yang Liu, Jinsong Su, Yubing Ge, Yaojie Lu,
                                Yongjing Yin and Jiebo Luo, "Iterative Dual Domain Adaptation
                                for Neural Machine Translation," <i>Conference on Empirical
                                Methods in Natural Language Processing</i> (EMNLP), Hong Kong,
                                November 2019.
                            </li>
                            <li>Biao Zhang, Deyi Xiong, Jinsong Su, and Jiebo Luo,
                                "Future-Aware Knowledge Distillation for Neural Machine
                                Translation," <i>IEEE Transactions on Audio, Speech and
                                Language Processing</i>, in press.
                            </li>
                            <li>Fuchen Long, Ting Yao, Xinwei Tian, Tao Mei, Jiebo Luo,
                                "Coarse-to-Fine Localization of Temporal Action Proposals," <i>IEEE Transactions on Multimedia</i>, in press.</li>
                            <li>Rongrong Ji, Ke Li, Feng Guo, Xiaoshuai Sun, Yan Wang, Feiyue
                                Huang, Jiebo Luo, Gary Huang, "Semi-Supervised Adversarial
                                Monocular Depth Estimation," <i>IEEE Transactions on Pattern
                                Analysis and Machine Intelligence</i>, in press.</li>
                            <li>Yang Cong, Baojie Fan, Dongdong Hou, Huijie Fan, Kaizhou Liu,
                                Jiebo Luo, "Novel Event Analysis for Human-Machine Collaborative
                                Underwater Exploration," <i>Pattern Recognition</i>, in press.</li>
                            <li>Zhengyuan Yang, Boqing Gong, Liwei Wang, Wenbing Huang, Dong
                                Yu, Jiebo Luo, "A Fast and Accurate One-Stage Approach to Visual
                                Grounding," <i> International Conference on Computer Vision </i>(ICCV), Seoul, South Korea, October 2019. (<b>oral presentation</b>)</li>
                            <li>Tianlang Chen, Zhaowen Wang, Ning Xu, Hailin Jin, Jiebo Luo.
                                "Large-scale Tag-based Font Retrieval with Generative Feature
                                Learning," <i>International Conference on Computer Vision</i>
                                (ICCV), Seoul, South Korea, October 2019. 
                            </li>
                            <li>Jingyi Hou, Xinxiao Wu, Wentian Zhao, Jiebo Luo, "Joint Syntax
                                Representation Learning and Visual Cues Translation for Video
                                Captioning," <i>International Conference on Computer Vision</i>
                                (ICCV), Seoul, South Korea, October 2019. 
                            </li>
                            <li>Songyang Zhang, Jinsong Su, Jiebo Luo, "Exploiting Temporal
                                Relationships in Video Moment Localization with natural
                                Language," <i>ACM Multimedia Conference</i>, Nice, France,
                                October 2019. 
                            </li>
                            <li>Jialong Tang, Ziyao Lu, Jinsong Su, Yubin Ge, Linfeng Song, Le
                                Sun, and Jiebo Luo, "Progressive Self-Supervised Attention
                                Learning for Aspect-Level Sentiment Analysis,"<i> Annual Meeting
                                of the Association for Computational Linguistics (ACL), </i>Florence, Italy, July 2019.
                            </li>
                            <li>Yongjing Yin, Linfeng Song, Jinsong Su, Jiali Zeng, Chulun
                                Zhou, and Jiebo Luo, "Graph-based Neural Sentence Ordering," <i>International Joint Conference on Artificial Intelligence (IJCAI)</i>,
                                Macau, July 2019.</li>
                            <li>Heliang Zheng, Zheng-Jun Zha, Jiebo Luo, "Learning Rich Part
                                Hierarchies with Progressive Attention Networks for Fine-Grained
                                Image Recognition," <i>IEEE Transactions on Image Processing</i>,
                                in press. 
                            </li>
                            <li>Yang Feng, Lin Ma, Wei Liu, Jiebo Luo, "Unsupervised Image Captioning," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition </i>(CVPR), Long Beach, CA, June 2019.
                                <a href="https://arxiv.org/abs/1811.10787"> [PDF]</a> <a href="https://github.com/fengyang0317/unsupervised_captioning">[Code]</a>
                            </li>
                            <li>Yang Feng, Lin Ma, Wei Liu, Jiebo Luo, "Spatio-temporal Video Re-localization by Warp LSTM," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition </i>(CVPR), Long Beach, CA, June 2019.
                                <a href="https://arxiv.org/abs/1905.03922"> [PDF]</a> <a href="https://github.com/fengyang0317/STVR">[Code]</a>
                            </li>
                            <li> Wei Xiong, Jiahui Yu, Zhe Lin, Jimei Yang, Xin Lu, Connelly Barnes, Jiebo Luo, "Foreground-aware Image Inpainting," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition </i>(CVPR), Long Beach, CA, June 2019.
                                <a href="https://wxiong.me/foreground/"> [Project Page]</a>
                            </li>
                            <li>Mengshi Qi*, Weijian Li*, Zhengyuan Yang, Yunhong Wang, Jiebo
                                Luo, "Attentive Relational Networks for Mapping Images to Scene
                                Graphs," <i>IEEE Conference on Computer Vision and Pattern
                                Recognition (CVPR)</i>, Long Beach, CA, June 2019.</li>
                            <li>Heliang Zheng, Jianlong Fu, Zheng-Jun Zha, Jiebo Luo, "Looking
                                for the Devil in the Details: Learning Trilinear Attention
                                Sampling Network for Fine-grained Image Recognition," <i>IEEE
                                Conference on Computer Vision and Pattern Recognition (CVPR)</i>,
                                Long Beach, CA, June 2019.</li>
                            <li> Fuchen Long, Ting Yao, Xinmei Tian, Jiebo Luo, Tao Mei,
                                "Gaussian Temporal Awareness Networks for Action Localization",
                                <i>IEEE Conference on Computer Vision and Pattern Recognition
                                (CVPR)</i>, Long Beach, CA, June 2019. (<b>oral presentation</b>)</li>
                            <li>Wei-An Lin*, Haofu Liao*, Cheng Peng, Xiaohang Sun, Jingdan
                                Zhang, Jiebo Luo, Rama Chellappa, S. Kevin Zhou, "DuDoNet: Dual
                                Domain Network for CT Metal Artifact Reduction," <i>IEEE
                                Conference on Computer Vision and Pattern Recognition (CVPR),</i>
                                Long Beach, CA, June 2019.</li>
                            <li>Haofu Liao, Wei-An Lin, Jiarui Zhang, Jingdan Zhang, Jiebo
                                Luo, S. Kevin Zhou, "Multiview 2D/3D Rigid Registration via a
                                Point-Of-Interest Network for Tracking and Triangulation," IEEE
                                Conference on Computer Vision and Pattern Recognition (CVPR),
                                Long Beach, CA, June 2019.
                            </li>
                            <li>Jingyuan Chen, Lin Ma, Wei Liu, Jiebo Luo, "Localizing Natural
                                Language in Videos," <i>The 33rd AAAI Conference on Artificial
                                Intelligence (AAAI)</i>, Honolulu, HI, February 2019.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2018", e)}>2018</button>
                    <div id="cv-2018" className="panel">
                        <ul>
                            <li>Qing Li, Jianlong Fu, Dongfei Yu, Tao Mei, Jiebo Luo,
                                "Tell-and-Answer: Towards Explainable Visual Question Answering
                                using Attributes and Captions," <i>Conference on Empirical
                                Methods in Natural Language Processing (EMNLP)</i>, Brussels,
                                Belgium, November 2018. <strong>(oral presentation)</strong>
                            </li>
                            <li>Mingkun Yang, Yongchao Xu, Xiang Bai, Jiebo Luo, "Integrating
                                Scene Text and Visual Appearance for Fine-Grained Image
                                Classification," <i>IEEE Access</i>, in IEEE Xplore.
                            </li>
                            <li>Zhengyuan Yang, Yuncheng Li, Jianchao Yang, and Jiebo Luo,
                                "Action Recognition with Spatio-Temporal Visual Attention on
                                Skeleton Image Sequences," <i>IEEE Transactions on Circuits and
                                Systems for Video Technology</i>, in IEEE Xplore.</li>
                            <li>Wenbin Li, Jing Huo, Yinghuan Shi, Yang Guo, Lei Wang, Jiebo
                                Luo, "A Joint Local and Global Deep Learning Method for
                                Caricature Recognition," <i>Asian Conference on Computer Vision</i>
                                (ACCV), Perth, Australia, December 2018.</li>
                            <li>Haofu Liao, Gareth Funka-Lea, Yefeng Zheng, Kevin Zhou, Jiebo
                                Luo, "Face Completion with Semantic Knowledge and Collaborative
                                Adversarial Learning," <i>Asian Conference on Computer Vision</i>
                                (ACCV), Perth, Australia, December 2018.</li>
                            <li>Tianlang Chen, Zhongping Zhang, Quanzeng You, Chen Fang,
                                Zhaowen Wang, Hailin Jin, Jiebo Luo, "Factual or Emotional:
                                Stylized Image Captioning with Adaptive Learning and Attention,"
                                <i>European Conference on Computer Vision (ECCV)</i>, Munich,
                                Germany, September 2018.
                            </li>
                            <li>Yang Feng, Lin Ma, Wei Liu, Tong Zhang, Jiebo Luo, "Video Re-localization via 
                                Cross Gated Bilinear Matching," <i>European Conference on Computer Vision (ECCV)</i>, 
                                Munich, Germany, September 2018. <a href="https://openaccess.thecvf.com/content_ECCV_2018/papers/Yang_Feng_Video_Re-localization_via_ECCV_2018_paper.pdf"> [PDF]</a> 
                                <a href="https://github.com/fengyang0317/video_reloc">[Code]</a>
                            </li>
                            <li>Qing Li, Qingyi Tao, Shafiq Joty, Jianfei Cai, Jiebo Luo,
                                "VQA-E: Explaining, Elaborating, and Enhancing Your Answers for
                                Visual Questions," <i>European Conference on Computer Vision
                                (ECCV)</i>, Munich, Germany, September 2018.</li>
                            <li>Mengshi Qi, Jie Qin, Annan Li, Yunhong Wang, Jiebo Luo, Luc
                                Van Gool, "stagNet: An Attentive Semantic RNN for Group Activity
                                Recognition," <i>European Conference on Computer Vision (ECCV)</i>,
                                Munich, Germany, September 2018.
                            </li>
                            <li>Fuchen Long, Ting Yao, Tao Mei, Jiebo Luo, "Deep Domain
                                Adaptation Hashing with Adversarial Learning," <i>ACM SIGIR
                                Conference on Research and Development in Information
                                Retrieval (SIGIR)</i>, Ann Arbor, MI, July 2018. <strong>(Oral
                                presentation)</strong>
                            </li>
                            <li>Xiaobai Liu, Qian Xu, Jingjie Yang, Jacob Thalman, Shuicheng
                                Yan, and Jiebo Luo, "Learning Multi-Instance Deep Ranking and
                                Regression Network for Visual House Appraisal," <i>IEEE
                                Transactions on Knowledge and Data Engineering</i> (TKDE)
                                30(8): 1496-1506, 2018.
                            </li>
                            <li>Zhengyuan Yang, Yixuan Zhang, Jerry Yu, Junjie Cai, Jiebo Luo,
                                "End-to-end Multi-Modal Multi-Task Vehicle Control for
                                Self-Driving Cars with Visual Perception,"<i> IAPR/IEEE
                                International Conference on Pattern Recognition (ICPR)</i>,
                                Beijing, China, August 2018. <strong>(Best Industrial Related Paper)</strong> <a
                                href="https://arxiv.org/abs/1801.06734.pdf"> [PDF]</a> <a
                                href="https://youtu.be/7QGI_tmwZhw"> [Demo]</a>
                            </li>
                            <li>Zhengyuan Yang, Yuncheng Li, Jianchao Yang, Jiebo Luo, "Action Recognition 
                                with Visual Attention on Skeleton Images," <i>IAPR/IEEE International Conference 
                                on Pattern Recognition (ICPR)</i>, Beijing, China, August 2018. <strong>(Oral presentation）</strong>
                            </li>
                            <li>Zhongping Zhang, Yixuan Zhang, Zheng Zhou, Jiebo Luo, "Boundary-based Image Forgery 
                                Detection by Fast Shallow CNN," <i>IAPR/IEEE International Conference 
                                on Pattern Recognition (ICPR)</i>, Beijing, China, August 2018.
                            </li>
                            <li>Viet-Duy Nguyen, Minh Tran, Jiebo Luo, "Are French Really That Different? Recognizing Europeans 
                                from Faces Using Data-Driven Learning," <i>IAPR/IEEE International Conference 
                                on Pattern Recognition (ICPR)</i>, Beijing, China, August 2018.
                            </li>
                            <li>Quanzeng You, Zhengyou Zhang, Jiebo Luo, "End-to-end Convolutional Semantic Embeddings," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 
                                Salt Lake City, UT, June 2018.
                            </li>
                            <li>Wei Xiong, Wenhan Luo, Lin Ma, Wei Liu, Jiebo Luo, "Learning to Generate Time-Lapse 
                                Videos Using Multi-Stage Dynamic Generative Adversarial Networks," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 
                                Salt Lake City, UT, June 2018.
                            </li>
                            <li>Danna Gurari, Qing Li, Abigale Stangl, Anhong Guo, Chi Lin, Kristen Grauman, 
                                Jiebo Luo, Jeffery Bigham, "VizWiz Grand Challenge: Answering Visual Questions 
                                from Blind People," <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 
                                Salt Lake City, UT, June 2018. <strong>(spotlight presentation)</strong>
                            </li>
                            <li>Gui-Song Xia, Xiang Bai, Jian Ding, Serge Belongie, Jiebo Luo, Mihai Datcu, Marcello Pelillo, 
                                Liangpei Zhang, "DOTA: A Large-scale Dataset for Object Detection in Aerial Images," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 
                                Salt Lake City, UT, June 2018.
                            </li>
                            <li>Xinpeng Chen, Jingyuan Chen, Lin Ma, Jian Yao, Wei Liu, Jiebo Luo and Tong Zhang, 
                                "Fine-grained Video Attractiveness Prediction Using Multimodal Deep Learning on a
                                 Large Real-world Dataset," <i>The Web Conference (WWW)</i>, Lyon, France, April 2018.
                            </li>
                            <li>Yu Wang, Haofu Liao, Yang Feng, Xiangyang Xu, Jiebo Luo, "Do They All Look the Same? Deciphering Chinese, 
                                Japanese and Koreans by Fine-Grained Deep Learning," <i>IEEE International Conference on 
                                    Multimedia Information Processing and Retrieval</i>, Miami, FL, April 2018.
                            </li>
                            <li>Tianlang Chen, Chenliang Xu, Jiebo Luo, "Improving Text-based Person Search by Spatial Matching and 
                                Adaptive Threshold," <i>Winter Conference on Computer Vision (WACV)</i>, Lake Tahoe, NV, March 2018.
                            </li>
                            <li>Xitong Yang, Jiebo Luo, "Towards Perceptual Image Dehazing by Physics-based Disentanglement and Adversarial 
                                Training", <i>The 32nd AAAI Conference on Artificial Intelligence (AAAI)</i>, New Orleans, LA, February 2018.
                            </li>
                            <li>Jingyi Hou, Xinxiao Wu, Jiebo Luo, "Unsupervised Deep Learning of Mid-Level Video Representation for 
                                Action Recognition," <i>The 32nd AAAI Conference on Artificial Intelligence (AAAI)</i>, 
                                New Orleans, LA, February 2018.
                            </li>
                            <li>Yu Wang, Haofu Liao, Yang Feng, Xiangyang Xu, Jiebo Luo, "Do They All Look the Same? Deciphering Chinese, 
                                Japanese and Koreans by Fine-Grained Deep Learning," <i>IEEE International Conference on 
                                Multimedia Information Processing and Retrieval</i>, Miami, FL, April 2018.
                            </li>
                            <li>Yang Cong, Ji Liu, Jiebo Luo, "User Attribute Discovery with Missing Labels," <i>Pattern Recognition</i> 
                            73: 33-46, 2018. 
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2017", e)}>2017</button>
                    <div id="cv-2017" className="panel">
                        <ul>
                            <li>Heliang Zheng, Jianlong Fu, Tao Mei, and Jiebo Luo, "Learning
                                Multi-Attention Convolutional Neural Network for Fine-Grained
                                Image Recognition," <i>International Conference on Computer Vision </i>(ICCV), Venice, Italy,
                                October 2017. <strong>(oral presentation)</strong>
                            </li>
                            <li>Xiangyang Xu, Yuncheng Li, Gangshan Wu and Jiebo Luo,
                                "Multi-modal Deep Feature Learning for RGB-D Object Detection,"
                                <i>Pattern Recognition</i> 72:
                                300-313, 2017.
                            </li>
                            <li>Zhengyuan Yang, Wendi Cross, Jiebo Luo, "Personalized pose
                                estimation for body language understanding," <i>International Conference on Image
                                Processing</i> (ICIP), Beijing, China, September 2017.
                                <strong> (oral presentation)</strong>
                            </li>
                            <li>Honglin Zheng, Tianlang Chen, Quanzeng You, Jiebo Luo, "When
                                Saliency Meets Sentiment: Understanding How Image Content
                                Invokes Emotion and Sentiment," <i>International Conference on Image Processing</i>
                                (ICIP), Beijing, China, September 2017. <strong>(oral presentation)</strong>
                            </li>
                            <li>Lifang Wu, Shuang Liu, Meng Jian, Jiebo Luo, Xiuzhen Zhang,
                                Mingchao Qi, "Reducing Noisy Labels on Weakly Labeled Data for
                                Visual Sentiment Analysis," <i>International Conference on Image Processing </i>(ICIP), Beijing, China,
                                September 2017.
                            </li>
                            <li>Yuncheng Li, Liangliang Cao, Jiebo Luo, "Mining Fashion Outfit
                                Composition Using an End-to-End Deep Learning Approach on Set
                                Data,"<i> IEEE Trans. on Multimedia</i>, 19(8): 1946-1955(2017).
                            </li>
                            <li>Yanhao Zhang, Lei Qin, Rongrong Ji, Qingming Huang, Jiebo Luo,
                                "Exploring Coherent Motion Patterns via Structured Trajectory
                                Learning for Crowd Mood Modeling," <i>IEEE Transactions on Circuits and Systems for Video
                                Technology,</i> 27(3): 635-648 (2017).
                            </li>
                            <li>Fei Wu, Zhuhao Wang, Weiming Lu, Xi Li, Yi Yang, Jiebo Luo,
                                Yueting Zhuang, "Regularized Deep Belief Network for Image
                                Attribute Detection," <i>IEEE Transactions on Circuits and Systems for Video Technology</i>,
                                27(7): 1464-1477, 2017.
                            </li>
                            <li>Qing Li, Zhaofan Qiu, Ting Yao, Tao Mei, Yong Rui, Jiebo Luo,
                                "Learning hierarchical video representation for action
                                recognition," <i>International Journal of Multimedia Information Retrieval,</i> 6(1):
                                85-98, 2017.
                            </li>
                            <li>Quanzeng You, Liangliang Cao, Jiebo Luo, "Image Based
                                Appraisal of Real Estate Properties," <i>IEEE Transactions on. Multimedia</i>, in press.
                            </li>
                            <li>Xitong Yang,&nbsp; Sriganesh Madhvanath, Edgar A. Bernal,
                                Palghat Ramesh, Radha Chitta, Jiebo Luo, "Deep Multimodal
                                Representation Learning from Temporal Data," <i>IEEE Conference on Computer Vision
                                and Pattern Recognition (CVPR)</i>,&nbsp; Hawaii, July
                                2017.
                            </li>
                            <li>Marko Stamenovic, Jiebo Luo, "Machine Identification of High
                                Impact Research through Text and Image Analysis," <i>IEEE Big Multimedia Conference</i>,
                                Laguna Hills, CA, April 2017. 
                            </li>
                            <li>Quanzeng You, Hailin Jin, Jiebo Luo, "Visual Sentiment
                                Analysis by Attending on Local Image Regions", <i>The 31st AAAI Conference on
                                Artificial Intelligence (AAAI)</i>, San Francisco, CA,
                                February 2017.
                            </li>
                            <li>Songhe Feng, Congyan Lang, Jiashi Feng and Jiebo Luo, "Human
                                Facial Age Estimation by Cost-Sensitive Label Ranking and Trace
                                Norm Regularization," <i>IEEE
                                Trans. on Multimedia</i>, 19(1): 136-148, 2017.
                            </li>
                            <li>Yang Cong, Ji Liu, Gan Sun, Quanzheng You, Yuncheng Li and
                                Jiebo Luo, "Adaptive Greedy Dictionary Selection for Web Media
                                Summarization," <i>IEEE Trans. on Image Processing</i>, 26(1): 185-195, 2017.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2016", e)}>2016</button>
                    <div id="cv-2016" className="panel">
                        <ul>
                            <li>Yang Feng, Yuncheng Li, Jiebo Luo, "Learning Effective Gait
                                Features Using LSTM", <i>International Conference on Pattern Recognition (ICPR)</i>, Cancun,
                                Mexico, December 2016.
                            </li>
                            <li>Iftekhar Naim, Abdullah Al Mamun, Young Chol Song, Jiebo Luo,
                                Henry Kautz, Daniel Gildea, "Aligning Movies with Scripts by
                                Exploiting Temporal Ordering Constraints", <i>International Conference on
                                Pattern Recognition (ICPR)</i>, Cancun, Mexico, December
                                2016.
                            </li>
                            <li>Quanzeng You, Liangliang Cao, Hailin Jin, Jiebo Luo, "Robust
                                Visual-Textual Sentiment Analysis: When Attention meets
                                Tree-structured Recursive Neural Networks", <i>ACM Multimedia Conference</i>,
                                Amsterdam, The Netherlands, October 2016.
                            </li>
                            <li>Qing Li, Zhaofan Qiu, Ting Yao, Tao Mei, Yong Rui and Jiebo Luo, "Action Recognition 
                                by Learning Deep Multi-Granular Spatio-Temporal Video Representation," 
                                <i>ACM/IAPR International Conference on Multimedia Retrieval (ICMR)</i>, New York City, June 2016. 
                                <strong> (Long paper, Best Paper Candidate)</strong>
                            </li>
                            <li>Quanzeng You, Hailin Jin, Zhaowen Wang, Chen Fang, Jiebo Luo, "Image Captioning with 
                                Semantic Attention," <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 
                                Las Vegas, NV, June 2016. <strong>(spotlight presentation)</strong>
                            </li>
                            <li>Yuncheng Li, Yale Song, Liangliang Cao, Joel Tetreault, Larry  Goldberg, Jiebo Luo, 
                                "TGIF: A New Dataset and Benchmark on Animated GIF Description," <i>IEEE Conference on Computer 
                                Vision and Pattern Recognition (CVPR)</i>, Las Vegas, NV, June 2016. <strong>(spotlight presentation)</strong>
                            </li>
                            <li>Tianliang Liu, Xincheng Wang, Xiubin Dai, Jiebo Luo, "Deep
                                Recursive and Hierarchical Conditional Random Fields for Human
                                Action Recognition," <i>IEEE
                                Winter Conference on Applications of Computer Vision</i>
                                (WACV), Lake Placid, NY, March 2016.
                            </li>
                            <li>Liang Lin, Keze Wang, Wangmeng Zuo, Meng Wang, Lei Zhang,
                                Jiebo Luo, "Deep Reconfigurable Models with Radius-Margin Bound
                                for 3D Human Activity Recognition,"<i> International Journal of Computer Vision</i>,
                                available online.
                            </li>
                            <li>Xinyang Cai, Wengang Zhou, Houqiang Li, Jiebo Luo, Lei Wu,
                                "Effective Kinetic Skeleton Representation for Low Latency Human
                                Action Recognition," <i>IEEE
                                Trans. Multimedia</i>, available online.
                            </li>
                            <li>Quanzeng You, Hailin Jin, Jianchao Yang, Jiebo Luo, "Cross-modality 
                                Consistent Regression for Joint Visual-Textual Sentiment Analysis," 
                                <i>ACM International Conference on Web Search and Data Ming (WSDM)</i>, 
                                San Francisco, CA, February 2016. [PrePrintPDF]
                            </li>
                            <li>Quanzeng You, Hailin Jin, Jianchao Yang, Jiebo Luo, "Building
                                a Large Scale Dataset for Image Emotion Recognition: The Fine
                                Print and The Benchmark," <i>The 30th AAAI Conference on Artificial Intelligence (AAAI),</i>
                                Phoenix, AZ, January 2016. <a
                                href="https://drive.google.com/drive/folders/0Byh2_bxvelahRHZwS1U4RG9wMHM"> [PDF]</a> <a
                                href="https://qzyou.github.io"> [Dataset Page]</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2015", e)}>2015</button>
                    <div id="cv-2015" className="panel">
                        <ul>
                            <li>Yuncheng Li, Xitong Yang, Jiebo Luo, "Semantic Video Entity
                                Linking based on Visual Content and Metadata," <i>International Conference on
                                Computer Vision (ICCV)</i>, Santiago, Chile, December 2015.
                                <a href="https://drive.google.com/open?id=0Byh2_bxvelahTE1COGxsZHVMY2VLekZETUtkMmM1Mi15d1pF"> [PrePrintPDF]</a>
                            </li>
                            <li>Yuncheng Li, Jifei Huang, Jiebo Luo, "Using User Generated
                                Online Photos to Estimate and Monitor Air Pollution in Major
                                Cities," <i>ACM International
                                Conference on Internet Multimedia Computing and Service
                                (ICIMCS)</i>, August 2015. <strong>(Best Pape)</strong> <a
                                href="http://arxiv.org/pdf/1508.05028v1"> [PDF]</a> <a
                                href="http://www.cs.rochester.edu/%7Eyli/haze-level.html"> [Project Page]</a>
                            </li>
                            <li>Yuning Jiang, Jingjing Meng, Junsong Yuan, Jiebo Luo,
                                "Randomized Spatial Context for Object Search," <i>IEEE Trans. on Image Processing</i>,
                                24(6): 1748-1762, 2015.
                            </li>
                            <li>Wu Liu, Tao Mei, Yongdong Zhang, Cherry Che and Jiebo Luo,
                                "Multi-Task Deep Visual-Semantic Embedding for Video Thumbnail
                                Selection," <i>IEEE
                                International Conference on Computer Vision and Pattern
                                Recognition (CVPR)</i>, Boston, MA, June 2015.
                            </li>
                            <li>Wanying Ding, Junhuan Zhu, Lifan Guo, Xiaohua Hu, Jiebo Luo,
                                Haohong Wang, "Jointly Image Topic and Emotion Detection using
                                Multi-Modal Hierarchical Latent Dirichlet Allocation," <i>Journal of Multimedia Information
                                System,</i> 2015.
                            </li>
                            <li>Yang Cong, Ji Liu, Jiebo Luo, "Speeded up Low Rank Online
                                Metric Learning for Object Tracking," <i>IEEE Transactions on Circuits and Systems for Video
                                Technology</i>, 2015.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2010-2014", e)}>2010-2014</button>
                    <div id="cv-2010-2014" className="panel">
                        <ul>
                            <li>Young Chol Song, Henry Kautz, James Allen, Mary Swift, Yuncheng Li, Jiebo Luo, 
                                "A Markov Logic Framework for Recognizing Complex Events from Multimodal Data," 
                                <i>ACM International Conference on Multimodal Interaction (ICMI)</i>, Sidney, Australia, December 2013.
                            </li>
                            <li>Yao Zhou and Jiebo Luo, "A Practical Method for Counting Arbitrary Target Objects in an Arbitrary Scene," 
                                <i>IEEE ICME</i>, July 2013.
                            </li>
                            <li>Congyan Lang, Jiashi Feng, Guangcan Liu, Jinghui Tang, Shuicheng Yan and Jiebo Luo, "Improving Bottom-up 
                                Saliency Detection by Looking into Neighbors," <i>IEEE Transactions on Circuits and Systems for Video 
                                Technology</i>, 23(6): 1016-1028, June 2013.
                            </li>
                            <li>Minwoo Park, Jiebo Luo, Andrew Gallagher, Majid Rabbani, "Learning to Produce 3D Media from a Captured 2D Video," 
                                <i>IEEE Transactions on Multimedia</i>, 15(7): 1569-1578, 2013.
                            </li>
                            <li>Hua Wang, Dhiraj Joshi, Jiebo Luo, and Heng Huang, "Simultaneous Image Annotation and Geo-Tag Prediction via 
                                Correlation Guided Structured Multi-Task Learning," <i>IEEE Symposium on Multimedia (ISM)</i>, December 2012.
                            </li>
                            <li>Jianchao Yang, Jiebo Luo, Jie Yu, Thomas. Huang, "Photo Stream Alignment and Summarization for Collaborative Photo Collection and Sharing," 
                                <i>IEEE Transactions on Multimedia</i>, 14(6): 1642-1651, December 2012.
                            </li>
                            <li>Youjie Zhou, Jiebo Luo, " Geo-Location Inference on News Articles via Multimodal pLSA," 
                                <i>ACM Multimedia Conference</i>, Nara, Japan, October 2012. 
                            </li>
                            <li>Xiaobin Xu, Tao Mei, Wenjun Zeng, Nenghai Yu, Jiebo Luo, "AMIGO: Accurate Mobile Image GeOtagging," <i>ACM International Conference on 
                                Internet Multimedia Computing and Services</i>, Wuhan, China, September 2012. <strong>(Best Paper)</strong>
                            </li>
                            <li>Lin Chen, Dong Xu, Ivor Tsang, and Jiebo Luo for the paper entitled, "Tag-Based Image Retrieval Improved by Augmented Features 
                                and Group-Based Refinement", <i>IEEE Transactions on Multimedia</i>, Volume 14, Number 4, August 2012. <strong>(2014 IEEE Multimedia 
                                Prize Paper Award)</strong>
                            </li>
                            <li>Minwoo Park, Jiebo Luo, Andrew Gallagher, "Towards Assessing and Improving the Quality of Stereo Images,"  Special Issue on Emerging 
                                Techniques in 3D, <i>IEEE Journal of Selected Topics in Signal Processing</i>, 6(5): 460 - 470, 2012.
                            </li>
                            <li>Siyu Xia, Ming Shao, Jiebo Luo, and Yun Fu, "Understanding Kin Relationships in a Photo," Special Issue on Learning Semantics 
                                from Multimedia Web Resources, <i>IEEE Transactions on Multimedia</i>, 14(4): 1046-1056, 2012.
                            </li>
                            <li>Lin Chen, Dong Xu, Ivor W. Tsang, Jiebo Luo, "Tag-based Image Retrieval Improved by SVM with Augmented 
                                Features and Group-based Refinement,"  Special Issue on Learning Semantics from Multimedia Web Resources, 
                                <i>IEEE Transactions on Multimedia</i>, 14(4): 1057-1067, 2012.
                            </li>
                            <li>Cong Yang, Junsong Yuan, Jiebo Luo, "Towards Scalable Summarization of Consumer Videos via Sparse Dictionary 
                                Selection,"  Special Issue on Object and Event Classification in Large-Scale Video Collections, 
                                <i>IEEE Transactions on Multimedia</i>, 14(1): 66-75, February 2012.
                            </li>
                            <li>Dhiraj Joshi, Ritendra Datta, Elena Fedorovskaya, Jia Li, James Z. Wang, Jiebo Luo, "Computational 
                                inference of aesthetics, mood, and emotion in images," <i>IEEE Signal Processing Magazine</i>, 
                                28(5):  94-115, September 2011.
                            </li>
                            <li>Yiming Liu, Dong Xu, Ivor Tsang, Jiebo Luo, "Textual query of personal photos facilitated by 
                                large-scale web data," <i>IEEE Transactions on Pattern Analysis and Machine Intelligence</i>, 
                                33(5): 1022-1036, May 2011.
                            </li>
                            <li>Minwoo Park, Jiebo Luo, Robert Collions, Yanxi Liu, Beyond GPS: Determining the viewing direction 
                                of a geotagged image," <i>ACM Multimedia Conference</i>, Firenze, Italy, October 2010.
                            </li>
                            <li>Xiaobai Liu, Shuicheng Yan, Jiebo Luo, Jinhui Tang, ZhongYang Huang, Hai Jin, 
                                "Nonparametric Label-to-Region by Search," <i>CVPR</i>, 2010.
                            </li>
                            <li>Jingen Liu, Jiebo Luo, Mubarak Shah, "Recognizing Realistic Actions from Videos in the Wild," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition, Miami</i>, FL, June 2009. 
                                <strong> (Oral Presentation)</strong> <a href="http://www.cs.ucf.edu/~liujg/realistic_action_recognition.html"> [Project Page]</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div id="machine-learning" className="tabcontent">
                    <h3>Machine Learning</h3>
                    <button className="accordion" onClick={(e) => openTab("ml-2022", e)}>2022</button>
                    <div id="ml-2022" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    

                    <button className="accordion" onClick={(e) => openTab("ml-2021", e)}>2021</button>
                    <div id="ml-2021" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2020", e)}>2020</button>
                    <div id="ml-2020" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2019", e)}>2019</button>
                    <div id="ml-2019" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2018", e)}>2018</button>
                    <div id="ml-2018" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2017", e)}>2017</button>
                    <div id="ml-2017" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2016", e)}>2016</button>
                    <div id="ml-2016" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2015", e)}>2015</button>
                    <div id="ml-2015" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2010-2014", e)}>2010-2014</button>
                    <div id="ml-2010-2014" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div id="social-media-data-mining" className="tabcontent">
                    <h3>Web &amp; Social Media Data Mining</h3>
                    <button className="accordion" onClick={(e) => openTab("sm-2022", e)}>2022</button>
                    <div id="sm-2022" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2021", e)}>2021</button>
                    <div id="sm-2021" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2020", e)}>2020</button>
                    <div id="sm-2020" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2019", e)}>2019</button>
                    <div id="sm-2019" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2018", e)}>2018</button>
                    <div id="sm-2018" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2017", e)}>2017</button>
                    <div id="sm-2017" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2016", e)}>2016</button>
                    <div id="sm-2016" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2015", e)}>2015</button>
                    <div id="sm-2015" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2010-2014", e)}>2010-2014</button>
                    <div id="sm-2010-2014" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div id="biomedical-analytics" className="tabcontent">
                    <h3>Biomedical Analytics &amp; Health Informatics</h3>
                    <button className="accordion" onClick={(e) => openTab("ba-2022", e)}>2022</button>
                    <div id="ba-2022" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2021", e)}>2021</button>
                    <div id="ba-2021" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2020", e)}>2020</button>
                    <div id="ba-2020" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2019", e)}>2019</button>
                    <div id="ba-2019" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2018", e)}>2018</button>
                    <div id="ba-2018" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2017", e)}>2017</button>
                    <div id="ba-2017" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2016", e)}>2016</button>
                    <div id="ba-2016" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2015", e)}>2015</button>
                    <div id="ba-2015" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-pre-2015", e)}>Pre-2015</button>
                    <div id="ba-pre-2015" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div id="human-computer-interaction" className="tabcontent">
                    <h3>Human Computer Interaction</h3>
                    <ul>
                        <li>Tianran Hu, Anbang Xu, Jiebo Luo. "Touch Your Heart: A Tone-aware Chatbot for 
                            Customer Care on Social Media," The ACM CHI Conference on Human Factors in Computing 
                            Systems (CHI), Montreal, Canada, April 2018.</li>
                        <li>Quanzeng You, Jianbo Yuan, Jiaqi Wang, Philip Guo, Jiebo Luo. Snap n' Shop: Visual 
                            Search-Based Mobile Shopping Made a Breeze by Machine and Crowd Intelligence, IEEE 
                            International Conference on Semantic Computing (ICSC), February 2015.</li>
                        <li>Vivek K. Singh, Jiebo Luo, Dhiraj Joshi, Phoury Lei, Madirakshi Das, Peter Stubler, 
                            "Reliving on demand: a total viewer experience," ACM international conference on Multimedia, November 2011.</li>
                        <li>Dhruv Batra, Adarsh Kowdle, Devi Parikh, Jiebo Luo, and Tsuhan Chen, "iCoSeg: 
                            Interactive Co-segmentation of Objects in Image Collections,"  IEEE Conference on 
                            Computer Vision and Pattern Recognition (CVPR), San Francisco, CA, June 2010.</li>
                    </ul>
                </div>

                <div id="pervasative-computing" className="tabcontent">
                    <h3>Mobile &amp; Pervasive Computing</h3>
                    <ul>
                        <li>Yipeng Zhang, Haofu Liao, Jin Xiao, Nisreen Al Jallad, Jiebo Luo, "A Smartphone-based 
                            System for Real-time Early Childhood Caries Diagnosis," Workshop on Perinatal, Preterm 
                            and Paediatric Image Analysis, International Conference on Medical Image Computing and 
                            Computer Assisted Interventions (MICCAI), October 2020.</li>
                        <li>Young Chol Song, Henry Kautz, James Allen, Mary Swift, Yuncheng Li, Jiebo Luo, "A Markov 
                            Logic Framework for Recognizing Complex Events from Multimodal Data," ACM International 
                            Conference on Multimodal Interaction, Sidney, Australia, December 2013.</li>
                        <li>Heng Liu, Tao Mei, Jiebo Luo, Houqiang Li, Shipeng Li, "Finding Perfect Rendezvous On the 
                            Go: Accurate Mobile Visual Localization and Its Applications to Routing," ACM Multimedia 
                            Conference, Nara, Japan, October 2012. <strong>(Long paper, Best Paper Candidate)</strong></li>
                    </ul>
                </div>
            </div>
    

        </main>);
    }
}

export default Research;