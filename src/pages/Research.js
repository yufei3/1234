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
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2018", e)}>2018</button>
                    <div id="cv-2018" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2017", e)}>2017</button>
                    <div id="cv-2017" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2016", e)}>2016</button>
                    <div id="cv-2016" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2015", e)}>2015</button>
                    <div id="cv-2015" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("cv-2010-2014", e)}>2010-2014</button>
                    <div id="cv-2010-2014" className="panel">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
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