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
                            <li>Wei Zhu, Jiebo Luo, "Federated Medical Image Analysis with
                                Virtual Sample Synthesis," <i>International Conference on
                                Medical Image Computing and Computer Assisted Interventions</i>
                                (MICCAI), Singapore, September 2022.</li>
                            <li>Wei Zhu, Andrew White, and Jiebo Luo, "Federated Learning of
                                Molecular Properties in a Heterogeneous Setting," <i>Cell
                                Patterns</i>, 2022.
                            </li>
                            <li>Wei Zhu, Le Lu, Jing Xiao, Mei Han, Jiebo Luo, Adam Harrison, 
                                "Localized Adversarial Domain Generalization," <i>IEEE/CVF 
                                Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.
                            </li>
                            <li>Kai Zhu, Yang Cao, Wei Zhai, Jiebo Luo, Zheng-jun Zha, "Self-Sustaining 
                                Representation Expansion for Non-Exemplar Class-Incremental Learning," 
                                <i>IEEE/CVF Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.
                            </li>
                            <li>Shaofei Cai, Liang Li, Xinzhen Han, Jiebo Luo, Zheng-Jun Zha, Qingming Huang, 
                                "Automatic Relation-aware Graph Network Proliferation," <i>IEEE/CVF 
                                Conferences on Computer Vision and Pattern Recognition </i>(CVPR), June 2022.
                            </li>
                            <li>Jian Kang, Yan Zhu, Yinglong Xia, Jiebo Luo, Hanghang Tong. "RawlsGCN: Towards 
                                Rawlsian Difference Principle on Graph Convolutional Network," <i>ACM Web Conference </i>
                                (WWW), 2022.
                            </li>
                        </ul>
                    </div>
                    

                    <button className="accordion" onClick={(e) => openTab("ml-2021", e)}>2021</button>
                    <div id="ml-2021" className="panel">
                        <ul>
                            <li>Hongwei Xue, Yupan Huang, Bei Liu, Houwen Peng, Jianlong Fu,
                                Houqiang Li, Jiebo Luo, "Probing Inter-modality: Visual Parsing
                                with Self-Attention for Vision-and-Language Pre-training," 
                                <i>Neural Information Processing Systems</i> (NeurlPS), December 2021.
                            </li>
                            <li>Yiming Xu, Lin Chen, Lixin Duan, Ivor Tsang, Jiebo Luo, "Open
                                Set Domain Adaptation with Soft Unknown-Class Rejection," 
                                <i>IEEE Transactions on Neural Networks and Learning Systems</i>
                                (TNNLS), in press.
                            </li>
                            <li>Wei Zhu, Haitian Zheng, Haofu Liao, Weijian Li, Jiebo Luo,
                                "Learning Bias-Invariant Representation by Cross-Sample Mutual
                                Information Minimization," <i>International Conference on
                                Computer Vision</i> (ICCV), 2021.
                            </li>
                            <li>Guo-Jun Qi, Jiebo Luo, "Small Data Challenges in Big Data Era:
                                A Survey of Recent Progress on Unsupervised and Semi-Supervised
                                Methods," <i>IEEE Transactions on Pattern Analysis and Machine
                                Intelligence</i>, in press.
                            </li>
                            <li>Xiao Wang, Guo-Jun Qi, Jiebo Luo, "EnAET: A Self-Trained
                                Framework for Semi-Supervised and Supervised Learning with
                                Ensemble Transformation," <i>IEEE Transactions on Image
                                Processing</i>, 30: 1639-1647, 2021.
                            </li>
                            <li>Wei Zhu, Wenbin Li, Haofu Liao, and Jiebo Luo, ''Temperature
                                Network for Few-shot Learning with Distribution-aware
                                Large-margin Metric,'' <i>Pattern Recognition</i>, in press.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2020", e)}>2020</button>
                    <div id="ml-2020" className="panel">
                        <ul>
                            <li>Mengshi Qi, Jie Qin, Xiantong Zhen, Di Huang, Yi Yang, Jiebo
                                Luo, "Few-Shot Ensemble Learning for Video Classification with
                                SlowFast Memory Networks," <i>ACM Multimedia Conference</i>,
                                Seattle, WA, October 2020.
                            </li>
                            <li>Wenbin Li, Lei Wang, Jing Huo. Yinghuan Shi, Yang Gao, Jiebo
                                Luo, "Asymmetric Distribution Measure for Few-shot Learning," <i>International Joint Conference on Artificial Intelligence</i> (IJCAI),
                                Yokohama, Japan, July 2020.
                            </li>
                            <li>Zhongjie Yu, Lin Chen, Zhongwei Cheng, Jiebo Luo, "TransMatch:
                                A Transfer-Learning Scheme for Semi-Supervised Few-Shot
                                Learning," <i>IEEE/CVF Conferences on Computer Vision and
                                Pattern Recognition</i> (CVPR), Seattle, WA, June 2020.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2019", e)}>2019</button>
                    <div id="ml-2019" className="panel">
                        <ul>
                            <li>Yi Wang, Nan Xue, Xin Fan, Jiebo Luo, Risheng Liu, Haojie Li,
                                Bin Chen, Zhongxun Luo, "Novelty Detection and Online Learning
                                for Chunk Data Streams," <i>IEEE Transactions on Pattern
                                Analysis and Machine Intelligence</i>, in press.
                            </li>
                            <li>Wenbin Li, Lei Wang, Jinglin Xu, Jing Huo, Yang Gao and Jiebo
                                Luo, "Revisiting Local Descriptor based Image-to-Class Measure
                                for Few-shot Learning," <i>IEEE Conference on Computer Vision
                                and Pattern Recognition (CVPR)</i>, Long Beach, CA, June 2019.
                                <a href="https://arxiv.org/abs/1903.12290"> [PDF]</a> <a
                                href="https://github.com/WenbinLee/DN4"> [Github]</a>
                            </li>
                            <li>Wenbin Li, Jing Huo, Yinghuan Shi, Yang Guo, Lei Wang, Jiebo
                                Luo, "Distribution Consistency based Covariance Metric Networks
                                for Few Shot Learning," <i>The 33rd AAAI Conference on
                                Artificial Intelligence (AAAI)</i>, Honolulu, HI, February
                                2019. <strong>(oral presentation)</strong> 
                                <a href="https://www.researchgate.net/profile/Jinglin_Xu2/publication/331831434_Distribution_Consistency_based_Covariance_Metric_Networks_for_Few-shot_Learning/links/5c8f457945851564fae48610/Distribution-Consistency-based-Covariance-Metric-Networks-for-Few-shot-Learning.pdf"> [PDF]</a> 
                                <a href="https://github.com/WenbinLee/CovaMNet"> [Github]</a>
                            </li>
                            <li>Liheng Zhang, Guo-Jun Qi, Liqiang Wang, Jiebo Luo, "AET vs.
                                AED: Unsupervised Representation Learning by Auto-Encoding
                                Transformations rather than Data," <i>IEEE Conference on
                                Computer Vision and Pattern Recognition (CVPR)</i>,
                                Long Beach, CA, June 2019. <strong>(oral presentation)</strong>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2018", e)}>2018</button>
                    <div id="ml-2018" className="panel">
                        <ul>
                            <li>Yi Wang, Nan Xue, Xin Fan, Jiebo Luo, Risheng Liu, Haojie Li,
                                Bin Chen, Zhongxun Luo, "Fast factorization-free Kernel Learning
                                for Unlabeled Chunk Data Streams," <i>International Joint
                                Conference on Artificial Intelligence (IJCAI)</i>, Stockholm,
                                Sweden, July 2018.
                            </li>
                            <li>Xiaotong Zhang, Xianchao Zhang, Han Liu, Jiebo Luo,
                                "Multi-Task Clustering with Model Relation Learning," <i>International Joint Conference on Artificial Intelligence (IJCAI)</i>,
                                Stockholm, Sweden, July 2018.
                            </li>
                            <li>Yang Cong, Ji Liu, Jiebo Luo, "Sparse Low-rank Online
                                Similarity Learning," <i>IEEE Transactions on Cybernetics</i>,
                                73: 33-46, 2018.
                            </li>
                            <li>Yang Cong, Ji Liu, Jiebo Luo, "Online Similarity Learning for
                                Big Data with Overfitting," <i>IEEE Transactions on Big Data</i>,
                                4(1): 78-89, 2018.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2017", e)}>2017</button>
                    <div id="ml-2017" className="panel">
                        <ul>
                            <li>Jianbo Yuan, Han Guo, Zhiwei Jin, and Jiebo Luo, "One-shot
                                Learning for Fine-grained Relation Extraction via Convolutional
                                Siamese Neural Network," <i>IEEE Big Data Conference</i>,
                                Boston, MA, December 2017.
                            </li>
                            <li>Yuncheng Li, Jianchao Yang, Yale Song, Liangliang Cao, Jia Li
                                and Jiebo Luo, "Learning from Noisy Labels with Distillation," <i>International Conference on
                                Computer Vision </i>(ICCV), Venice, Italy, October 2017.
                            </li>
                            <li>Guo-Jun Qi, Jiliang Tang, Jingdong Wang and Jiebo Luo,
                                "Mixture Factorized Ornstein-Uhlenbeck Processes for Time-Series
                                Forecasting," <i>ACM SIGKDD Conference on Knowledge Discovery and Data Mining </i>
                                (KDD), Nova Scotia, Canada, August 2017.
                            </li>
                            <li>Yuncheng Li, Yale Song, Jiebo Luo, "Improving Pairwise Ranking
                                for Multi-label Image Classification," <i>IEEE Conference on Computer 
                                Vision and Pattern Recognition (CVPR)</i>, Hawaii, July 2017.
                            </li>
                            <li>Yi Wang, Xin Fan, Maomao Min, Jiebo Luo, "Fast Online
                                Incremental Learning on Mixture Streaming Data," <i>The 
                                31st AAAI Conference on Artificial Intelligence (AAAI)</i>, San Francisco, CA,
                                February 2017.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2016", e)}>2016</button>
                    <div id="ml-2016" className="panel">
                        <ul>
                            <li>Xianchao Zhang, Haixing Li, Wenxin Liang, Jiebo Luo, "Multi-Type 
                                Co-clustering of General Heterogeneous Information Networks," 
                                <i>IEEE International Conference on Data Mining (ICDM)</i>, 
                                December 2016.
                            </li>
                            <li>Young Chol Song, Iftekhar Naim, Abdullah Al Mamun, Kaustubh Kulkarni, 
                                Parag Singla, Jiebo Luo, Daniel Gildea and Henry Kautz, 
                                "Unsupervised Alignment of Actions in Video with Text Descriptions," 
                                <i>AAAI International Joint Conference on Artificial Intelligence (IJCAI)</i>, 
                                New York City, July 2016.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2015", e)}>2015</button>
                    <div id="ml-2015" className="panel">
                        <ul>
                            <li>Iftekhar Naim, Young Chol Song, Henry Kautz, Jiebo Luo, Qiguang Liu, 
                                Daniel Gildea, and Liang Huang, "Discriminative Unsupervised Alignment 
                                of Natural Language Instructions with Corresponding Video Segments," 
                                <i>North American Chapter of the Association for Computational Linguistics  
                                (NAACL)</i>, 2015.
                            </li>
                            <li>Quanzeng You, Jiebo Luo, Hailin Jin, and Jianchao Yang,
                                "Robust Image Sentiment Analysis using Progressively Trained and
                                Domain Transferred Deep Networks," <i>The Twenty-Ninth AAAI Conference on Artificial
                                Intelligence (AAAI)</i>, Austin, TX, January 25-30, 2015. 
                                <a href="http://www.cs.rochester.edu/u/qyou/papers/sentiment_analysis_final.pdf"> [PDF]</a>
                                <a href="http://www.cs.rochester.edu/u/qyou/DeepSent/deepsentiment.html"> [Project Page]</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ml-2010-2014", e)}>2010-2014</button>
                    <div id="ml-2010-2014" className="panel">
                        <ul>
                            <li>Iftekhar Naim, Young Song, Daniel Gildea, Qiguang Liu, Henry
                                Kautz and Jiebo Luo, "Unsupervised Alignment of Natural Language
                                Instructions with Video Segments," <i>the Twenty-Eighth AAAI Conference on Artificial
                                Intelligence (AAAI)</i>, Quebec City, Canada, July 27-31,
                                2014.
                            </li>
                            <li>Yang Cong, Ji Liu, Junsong Yuan, Jiebo Luo, "Self-Supervised
                                Online Metric Learning With Low Rank Constraint for Scene
                                Categorization." <i>IEEE Transactions on Image Processing</i>, 22(8): 3179-3191,
                                2013.
                            </li>
                            <li>Liangliang Cao, Xin Jin, Zhijun Yin, Andrey Del Pozo, Jiebo Luo, Jiawei Han, 
                                Thomas S. Huang, "RankCompete: Simultaneous ranking and clustering of 
                                information networks," <i>Neurocomputing</i>, 95: 98-104, 2012.
                            </li>
                            <li> Yahong Han, Fei Wu, Qi Tian, Yueting Zhuang, Jiebo Luo,
                                "Correlated Attribute Transfer with Multi-task Graph-Guided
                                Fusion," <i>ACM Multimedia Conference</i>, Nara, Japan,
                                October 2012. (Long paper)
                            </li>
                            <li> Lixin Duan, Dong Xu, Ivor Tsang, Jiebo Luo, "Visual Event
                                Recognition in Videos by Learning from Web Data," <i>IEEE
                                Conference on Computer Vision and Pattern Recognition</i>,
                                San Francisco, CA, June 2010. <strong>(Best Student Paper)</strong> 
                                <a href="http://vc.sce.ntu.edu.sg/index_files/VisualEventRecognition/VisualEventRecognition.html"> [Project Page]</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="social-media-data-mining" className="tabcontent">
                    <h3>Web &amp; Social Media Data Mining</h3>
                    <button className="accordion" onClick={(e) => openTab("sm-2022", e)}>2022</button>
                    <div id="sm-2022" className="panel">
                        <ul>
                            <li>Junda Wang, Xupin Zhang, Jiebo Luo, "How COVID-19 Have Changed
                                Crowdfunding: Evidence from GoFundMe," <i>Frontiers on Computer
                                Science</i>, section Human-Media Interaction, Vol. 4, 2022.
                            </li>
                            <li>Arsal Imtiaz, Danish Khan, Hanjia Lyu, and Jiebo Luo, "Taking
                                sides: Public Opinion over the Israel-Palestine Conflict in
                                2021," International Workshop on Social Sensing (SocialSens):
                                Special Edition on Belief Dynamics, <i>AAAI International
                                Conference on Web and Social Media </i>(ICWSM), Atlanta, GA,
                                June 2022.
                            </li>
                            <li>Yichi Qian, Qiyi Shan, Hanjia Lyu, and Jiebo Luo, "Look behind
                                the Censorship: Reposting-User Characterization and Muted-Topic
                                Restoration," International Workshop on Social Sensing
                                (SocialSens): Special Edition on Belief Dynamics, <i>AAAI
                                International Conference on Web and Social Media</i> (ICWSM),
                                Atlanta, GA, June 2022.
                            </li>
                            <li>Yingqiang Ge, Juntao Tan, Yan Zhu, Yinglong Xia, Jiebo Luo,
                                Shuchang Liu, Zuohui Fu, Shijie Geng, Zelong Li and Yongfeng
                                Zhang, "Explainable Fairness for Feature-aware Recommender
                                Systems," <i>ACM SIGIR Conference on Research and Development
                                in Information Retrieval </i>(SIGIR 2022), July 11 - 15,
                                2022, Madrid, Spain.
                            </li>
                            <li>Hanjia Lyu, Zihe Zheng, and Jiebo Luo, "Misinformation versus
                                Facts: Understanding the Influence of News Regarding COVID-19
                                Vaccines on Vaccine Uptake," <i>Health Data Science</i>, 2022.
                            </li>
                            <li>Jian Kang, Yan Zhu, Yinglong Xia, Jiebo Luo, Hanghang Tong.
                                "RawlsGCN: Towards Rawlsian Difference Principle on Graph
                                Convolutional Network," <i>ACM Web Conference</i> (WWW), 2022.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2021", e)}>2021</button>
                    <div id="sm-2021" className="panel">
                        <ul>
                            <li>Hanjia Lyu, Yangxin Fan, Ziyu Xiong, Mayya Komisarchik, and
                                Jiebo Luo, "Understanding Public Opinion toward the
                                #StopAsianHate Movement and the Relation with Racially Motivated
                                Hate Crimes in the US," <i>IEEE Transactions on Computational
                                Social Systems</i>, in press.
                            </li>
                            <li>Haitian Zheng, Kefei Wu, Jong-Hwi Park, Wei Zhu, and Jiebo
                                Luo, "Personalized Fashion Recommendation from Personal Social
                                Media Data: An Item-to-Set Metric Learning Approach," <i>IEEE
                                International Conference on Big Data</i>, December 2021.</li>
                            <li>Tanqiu Jiang, Sidhant Bendre, Hanjia Lyu, and Jiebo Luo, "From
                                Static to Dynamic Prediction: Wildfire Risk Assessment Based on
                                Multiple Environmental Factors," Special Session on Intelligent
                                Data Mining, <i>IEEE International Conference on Big Data</i>,
                                December 2021.
                            </li>
                            <li>Xupin Zhang, Hanjia Lyu, and Jiebo Luo, "Understanding the
                                Hoarding Behaviors during the COVID-19 Pandemic using Large
                                Scale Social Media Data," Special Session on Intelligent Data
                                Mining, <i>IEEE International Conference on Big Data</i>,
                                December 2021.
                            </li>
                            <li>Songyang Zhang, Tolga Aktas, and Jiebo Luo, "Mi YouTube es Su
                                YouTube? Analyzing the Cultures using YouTube Thumbnails of
                                Popular Videos," Special Session on Intelligent Data Mining, <i>
                                IEEE International Conference on Big Data</i>, December 2021.
                            </li>
                            <li>Hanjia Lyu, Junda Wang, Wei Wu, Viet Duong, Xiyang Zhang,
                                Timothy D. Dye, and Jiebo Luo, "Social Media Study of Public
                                Opinions on Potential COVID-19 Vaccines: Informing Dissent,
                                Disparities, and Dissemination," <i>Intelligent Medicine</i>,
                                2021.</li>
                            <li>Junda Wang, Xupin Zhang, Jiebo Luo, "How COVID-19 Has Changed
                                the World of Crowdfunding," <i>Sustainability</i>, 2021.
                            </li>
                            <li>Ziyu Xiong, Pin Li, Hanjia Lyu, and Jiebo Luo, "Social Media
                                Opinions on Working From Home in the United States During the
                                COVID-19 Pandemic: Observational Study," <i>JMIR Medical
                                Informatics</i>, 2021.
                            </li>
                            <li>Wei Wu, Hanjia Lyu, Jiebo Luo, "Characterizing Discourse about
                                COVID-19 Vaccines: A Reddit Version of the Pandemic Story," <i>Health Data Science</i>, 2021.</li>
                            <li>Xupin Zhang, Hanjia Lyu, Jiebo Luo, "What Contributes to a
                                Crowdfunding Campaign's Success?
                                Evidence and Analyses from GoFundMe Data," <i>IEEE Journal of
                                Social Computing</i>, 2021.
                            </li>
                            <li>Zhongkai Shangguan, Zihe Zheng and Jiebo Luo, "What Makes A
                                Turing Award Winner?" <i>International Conference on Social
                                Computing, Behavioral-Cultural Modeling &amp; Prediction and
                                Behavior Representation in Modeling and Simulation (SBP-BRiMS)</i>,
                                Virtual, July 2021.
                            </li>
                            <li>Long Chen, Hanjia Lyu, Tongyu Yang, Yu Wang and Jiebo Luo,
                                "Fine-Grained Analysis of the Use of Neutral and Controversial
                                Terms for COVID-19 on Social Media," <i>International
                                Conference on Social Computing, Behavioral-Cultural Modeling
                                &amp; Prediction and Behavior Representation in Modeling and
                                Simulation (SBP-BRiMS)</i>, Virtual, July 2021.
                            </li>
                            <li>Karan Vombatkere, Hanjia Lyu and Jiebo Luo, "How Political is
                                the Spread of COVID-19 in the United States? An Analysis using
                                Transportation and Weather Data," <i>International Conference
                                on Social Computing, Behavioral-Cultural Modeling &amp;
                                Prediction and Behavior Representation in Modeling and
                                Simulation (SBP-BRiMS)</i>, Virtual, July 2021.
                            </li>
                            <li>Xupin Zhang, Hanjia Lyu and Jiebo Luo, "Understanding the
                                Hoarding Behaviors duringthe COVID-19 Pandemic using Large Scale
                                Social Media Data," Working Paper, <i>I</i><i>nternational
                                Conference on Social Computing, Behavioral-Cultural Modeling
                                &amp; Prediction and Behavior Representation in Modeling and
                                Simulation (SBP-BRiMS)</i>, Virtual, July 2021.
                            </li>
                            <li>Ziqi Tang, Yutong Wang and Jiebo Luo, "Are Top School Students
                                More Critical of Their Professors? Mining Comments on
                                RateMyProfessors.com," Working Paper,<i> International
                                Conference on Social Computing, Behavioral-Cultural Modeling
                                &amp; Prediction and Behavior Representation in Modeling and
                                Simulation (SBP-BRiMS)</i>, Virtual, July 2021.
                            </li>
                            <li>Xiyang Zhang, Yu Wang, Hanjia Lyu, Yipeng Zhang, Yubao Liu,
                                Jiebo Luo, "The Influence of COVID-19 on people's Well-Being:
                                Big Data Methods for Capturing Working Adults' Well-being and
                                Protective Factors Nationwide," <i>Frontiers in Psychology</i>,
                                2021.
                            </li>
                            <li>Yipeng Zhang, Hanjia Lyu. Yubao Liu. Xiyang Zhang, Yu Wang,
                                Jiebo Luo, "Monitoring Depression Trend on Twitter during the
                                COVID-19 Pandemic: Observational Study," <i>Journal of Medical
                                Internet Research Infodemiology</i>, 2021.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2020", e)}>2020</button>
                    <div id="sm-2020" className="panel">
                        <ul>
                            <li>Li Sun*, Haoqi Zhang*, Songyang Zhang, and Jiebo Luo,
                                "Content-based Analysis of the Cultural Differences between
                                TikTok and Douyin," Special Session on Intelligent Data Mining,
                                <i>IEEE International Conference on Big Data</i>, Atlanta, GA,
                                December 2020.
                            </li>
                            <li>Neil Yeung, Jonathan Lai, and Jiebo Luo, "Face Off: Polarized
                                Public Opinions on Personal Face Mask Usage during the COVID-19
                                Pandemic," Special Session on Intelligent Data Mining, <i>IEEE
                                International Conference on Big Data</i>, Atlanta, GA,
                                December 2020.
                            </li>
                            <li>Wei Wu*, Jinlong Ruan*, and Jiebo Luo, "Stock Price Prediction
                                Under Anomalous Circumstances," Special Session on Intelligent
                                Data Mining, <i>IEEE International Conference on Big Data</i>,
                                Atlanta, GA, December 2020.
                            </li>
                            <li>Shuaidong Pan*, Faner Lin*, and Jiebo Luo, "Do Sports and
                                Politics Mix? Cross-Analysis of Fan Bases of Major League Sports
                                and Presidential Candidates," <i>IEEE/ACM International
                                Conference on Advances in Social Networks Analysis and Mining</i>
                                (ASONAM), 2020.
                            </li>
                            <li>Viet Duong, Phu Pham, Tongyu Yang, Yu Wang and Jiebo Luo, "The
                                Ivory Tower Lost: How College Students Respond Differently than
                                the General Public to the COVID-19 Pandemic," <i>IEEE/ACM
                                International Conference on Advances in Social Networks
                                Analysis and Mining</i> (ASONAM), 2020.
                            </li>
                            <li>Luoying Yang, Zhou Xu, Jiebo Luo, "Measuring Female
                                Representation and Impact in Films over Time," <i>ACM
                                Transactions on Data Science</i>, in press.
                            </li>
                            <li>Hanjia Lyu, Long Chen, Yu Wang, Jiebo Luo, "Sense and
                                Sensibility: Characterizing Social Media Users Regarding the Use
                                of Controversial Terms for COVID-19," <i>IEEE Transactions on
                                Big Data</i>, available online.
                            </li>
                            <li>Xinyi Lu, Long Chen, Jianbo Yuan, Joyce Luo, Zidian Xie, Jiebo
                                Luo, Dongmei Li, "E-cigarette Flavors and Their Perceptions on
                                Social Media: Observational Study," <i>Journal of Medical
                                Internet Research</i>, Vol 22, No 6, 2020.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2019", e)}>2019</button>
                    <div id="sm-2019" className="panel">
                        <ul>
                            <li>Shuaidong Pan, Tianran Hu, Shujing Sun, Jianbo Yuan, and Jiebo
                                Luo, "Help Oneself in Helping the Others: The Ecology of Online
                                Support Groups," <i>IEEE International Conference on Big Data</i>,
                                Los Angeles, CA, December 2019.
                            </li>
                            <li>Yingtong Dou, Weijian Li, Zhirong Liu, Zhenhua Dong, Jiebo Luo
                                and Philip Yu, "Uncovering Download Fraud Activities in Mobile
                                App Market," <i>IEEE/ACM International Conference on Advances
                                in Social Networks Analysis and Mining</i> (ASONAM),
                                Vancouver, Canada, August 2019.
                            </li>
                            <li>Yuan Liu, Zhongwei Cheng, Jie Liu, Bourhan Yassin, Zhe Nan,
                                Jiebo Luo, "AI for Earth: Rainforest Conservation by Acoustic
                                Surveillance," Workshop on Data Mining and AI for Conservation,
                                <i>ACM SIGKDD Conference on Knowledge Discovery and Data Mining
                                (KDD)</i>, Anchorage, AK, August 2019.
                            </li>
                            <li>Tianran Hu, Yinglong Xia, Jiebo Luo, "To Return or to Explore:
                                Modelling Human Mobility and Dynamics in Cyberspace," <i>The
                                Web Conference (formerly WWW)</i>, San Francisco, CA, May
                                2019.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2018", e)}>2018</button>
                    <div id="sm-2018" className="panel">
                        <ul>
                            <li>Zhongping Zhang, Tianlang Chen, Zheng Zhou, Jiaxin Li, and
                                Jiebo Luo, "How to Become Instagram Famous: Post Popularity
                                Prediction with Dual-Attention," <i>IEEE International
                                Conference on Big Data</i>, Seattle, WA, December 2018.
                            </li>
                            <li>Tianlang Chen, Yuxiao Chen, Han Guo, and Jiebo Luo, "You Type
                                a Few Words and We Do the Rest: Image Recommendation for Social
                                Multimedia Posts," <i>IEEE International Conference on Big Data</i>,
                                Seattle, WA, 2018.
                            </li>
                            <li>Benjamin Kane and Jiebo Luo, "Do the Communities We Choose
                                Shape our Political Beliefs? A Study of the Politicization of
                                Topics in Online Social Groups," International Workshop on Big
                                Social Media Data Management and Analysis, <i>IEEE
                                International Conference on Big Data</i>, Seattle, WA,
                                December 2018.
                            </li>
                            <li>Yuxiao Chen*, Jianbo Yuan*, Quanzeng You, Jiebo Luo, "Twitter
                                Sentiment Analysis via Bi-sense Emoji Embedding and
                                Attention-based LSTM," <i>ACM Multimedia Conference</i>, Seoul,
                                Korea, October 2018.
                            </li>
                            <li>Xuefeng Peng, Li-Kai Chi and Jiebo Luo, "The Effect of Pets on
                                Happiness: A Large-scale Multi-Factor Analysis using Social
                                Multimedia," <i>ACM Transactions on Intelligent Systems and
                                Technology</i> (TIST) 9(5), 2018. 
                            </li>
                            <li>Tianran Hu, Jiebo Luo and Wei Liu, "Life in the 'Matrix':
                                Human Mobility Patterns in the Cyber Space," <i>AAAI
                                International Conference on Web and Social Media (ICWSM)</i>,
                                Stanford, CA, June 2018. (Full Paper Acceptance Rate 16%)
                            </li>
                            <li>Weijian Li*, Yuxiao Chen*, Tianran Hu, and Jiebo Luo, "Mining
                                the Relationship between Emoji Usage Patterns and Personality,"
                                <i>AAAI International Conference on Web and Social Media (ICWSM)</i>,
                                Stanford, CA, June 2018.
                            </li>
                            <li>Tianlang Chen, Yuxiao Chen, Han Guo and Jiebo Luo, "When
                                E-commerce Meets Social Media: Identifying Business on WeChat
                                Moment Using Bilateral-Attention LSTM," <i>The Web Conference
                                (WWW)</i>, Lyon, France, April 2018.
                            </li>
                            <li>Peijun Zhao, Jia Jia, Lexing Xie, Yongsheng An and Jiebo Luo,
                                "Analyzing and Predicting Emoji Usages in Social Media," <i>The
                                Web Conference (WWW)</i>, Lyon, France, April 2018.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2017", e)}>2017</button>
                    <div id="sm-2017" className="panel">
                        <ul>
                            <li>Yiming Pan, Xuefeng Peng, Tianran Hu, and Jiebo Luo,
                                "Understanding What affects Career Progression Using LinkedIn
                                and Twitter Data," Special Session on Intelligent Data Mining, 
                                <i>IEEE Big Data Conference</i>, Boston, MA, December 2017.
                            </li>
                            <li>Xuefeng Peng, Yiming Pan, and Jiebo Luo, "Predicting High Taxi
                                Demand Regions Using Social Media Check-ins," Special Session on
                                Intelligent Data Mining, <i>IEEE Big Data Conference</i>,
                                Boston, MA, December 2017.
                            </li>
                            <li>Zhiwei Jin, Juan Cao, Han Guo, Yongdong Zhang, Yu Wang and
                                Jiebo Luo, "Multimodal Fusion with Recurrent Neural Networks for
                                Rumor Detection on Microblogs," <i>ACM Multimedia Conference</i>, 
                                Mountain View, CA, October 2017.
                            </li>
                            <li>Yu Wang, Jiebo Luo and Xiyang Zhang, "When Follow is Just One
                                Click Away: Understanding Twitter Follow Behavior in the 2016
                                U.S. Presidential Election," <i>International
                                Conference on Social Informatics</i> (SocInfo), Oxford,
                                England, Sept. 2017.
                            </li>
                            <li>Yu Wang, Yang Feng and Jiebo Luo, "How Polarized Have We
                                Become? A Multimodal Classification of Trump Followers and
                                Clinton Followers," <i>International Conference on Social Informatics</i> (SocInfo), Oxford,
                                England, Sept. 2017. 
                            </li>
                            <li>Zhiwei Jin, Juan Cao, Han Guo, Yongdong Zhang, Yu Wang and
                                Jiebo Luo, "Detection and Analysis of 2016 US Presidential
                                Election Related Rumors on Twitter," <i>International Conference on Social Computing,
                                Behavioral-Cultural Modeling &amp; Prediction and Behavior
                                Representation in Modeling and Simulation </i>(SBP-BRiMS),
                                Washington, DC, July 2017. 
                            </li>
                            <li>Yu Wang and Jiebo Luo, "Inferring Follower Preferences with
                                Sparse Learning," <i>International
                                Conference on Social Computing, Behavioral-Cultural Modeling
                                &amp; Prediction and Behavior Representation in Modeling and
                                Simulation</i> (SBP-BRiMS), Washington, DC, July 2017.
                            </li>
                            <li>Yu Wang and Jiebo Luo, "Gender Politics in the 2016
                                Presidential Election: A Computer Vision Approach," <i>International Conference on Social
                                Computing, Behavioral-Cultural Modeling &amp; Prediction and
                                Behavior Representation in Modeling and Simulation</i>
                                (SBP-BRiMS), July 2017.
                            </li>
                            <li>Quanzeng You, Jungseock Joo, Dario Garcia Garcia, Jiebo Luo,
                                "Cultural Dynamics and Trends in Facebook Photographs," <i>AAAI International Conference on
                                Web and Social Media (ICWSM)</i>, Montreal, Canada, May
                                2017.
                            </li>
                            <li>Tianran Hu, Han Guo, Hao Sun, Thuy-vy Thi Nguyen, Jiebo Luo,
                                "Spice up Your Chat: The Intentions and Sentiment Effects of
                                Using Emojis," <i>AAAI International Conference on Web and Social Media (ICWSM)</i>,
                                Montreal, Canada, May 2017.
                            </li>
                            <li>Tianran Hu, Ruihua Song, Xing Xie, Maya Abtahian, Philip Ding
                                and Jiebo Luo, "A World of Difference: Divergent Word
                                Interpretations among People," <i>AAAI International Conference on Web and Social Media
                                (ICWSM)</i>, Montreal, Canada, May 2017.
                            </li>
                            <li>Rijul Magu, Kshitij Joshi and Jiebo Luo, "Decoding the Hate
                                Code on Social Media," <i>AAAI International Conference on Web and Social Media (ICWSM)</i>,
                                Montreal, Canada, May 2017.
                            </li>
                            <li>Yu Wang and Jiebo Luo, "Tactics and Tallies: A Study of the
                                2016 U.S. Presidential Campaign Using Twitter 'Likes'," <i>AAAI International Conference on
                                Web and Social Media (ICWSM)</i>, Second International
                                Workshop on News and Public Opinion, Montreal, Canada, May 2017.
                            </li>
                            <li>Kuan-Ting Chen and Jiebo Luo, "When Fashion Meets Big Data:
                                Discriminative Mining of Best Selling Clothing Features," <i>World Wide Web Conference</i>
                                (WWW), Perth, Australia, April 2017.
                            </li>
                            <li>Tianlang Chen, Yuxiao Chen and Jiebo Luo, "A Selfie is Worth a
                                Thousand Words: Mining Personal Patterns behind User
                                Selfie-posting Behaviours," <i>World Wide Web Conference</i> (WWW), Perth, Australia, April
                                2017.
                            </li>
                            <li>Tianran Hu, Eric Biglow, Henry Kautz, and Jiebo Luo, "Tales of
                                Two Cities: Using Social Media to Understand Idiosyncratic
                                Lifestyles in Distinctive Metropolitan Areas," Special Issue on
                                Big Media Data: Understanding, Search, and Mining, <i>IEEE Transactions on Big Data</i>, 3(1): 55-66, 2017.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2016", e)}>2016</button>
                    <div id="sm-2016" className="panel">
                        <ul>
                            <li>Yiheng Zhou, Numair Sani, and Jiebo Luo, "Fine-grained Mining
                                of Illicit Drug Use Patterns Using Social Multimedia Data from
                                Instagram," Special Session on Intelligent Data Mining," <i>IEEE International Conference on
                                Big Data (Big Data),</i> Washington, DC, December 2016.
                            </li>
                            <li>Jianbo Yuan, Walid Shalaby, Mohammed Korayem, David Lin,
                                Khalifeh AlJadda and Jiebo Luo, "Solving Cold Start Problem in
                                Large-scale Recommendation Engines: A Deep Learning Approach," <i>IEEE International Conference on
                                Big Data (Big Data),</i> 2016.
                            </li>
                            <li>Yuchen Wu, Jianbo Yuan, Quanzeng You, and Jiebo Luo, "The
                                Effect of Pets on Happiness: A Data-Driven Approach via
                                Large-Scale Social Media," Special Session on Intelligent Data
                                Mining, <i>IEEE International Conference on Big Data (Big Data),</i>
                                Washington, DC, December 2016.
                            </li>
                            <li>Haofu Liao, Yuncheng Li, Tianran Hu, and Jiebo Luo, "Inferring
                                Restaurant Styles by Mining Crowd Sourced Photos from
                                User-Review Websites," <i>IEEE International Conference on Big Data (Big Data), 
                                </i>Washington, DC, December 2016.
                            </li>
                            <li>Yu Wang, Yang Feng, Jiebo Luo, "Pricing the Woman Card: Gender
                                Politics in 2016 US Presidential Election", <i>Workshop on Applications of Big
                                Data in Computational Social Science, </i> <i>IEEE International Conference on
                                Big Data (Big Data)</i>, Washington, DC, December 2016.
                            </li>
                            <li>Yu Wang, Yang Feng, Xiyang Zhang, and Jiebo Luo, "Inferring
                                Voter Preferences behind Brexit," <i>Workshop on Application of Big Data for Computational
                                Social Science, </i> <i>IEEE International Conference on Big Data (Big Data)</i>,
                                Washington, DC, December 2016.
                            </li>
                            <li>Yang Feng, Jiebo Luo, "When Do Luxury Cars Hit Road? Findings
                                by A Big Data Approach", <i>Workshop
                                on Applications of Big Data in Computational Social
                                Science, </i> <i>IEEE
                                International Conference on Big Data (Big Data),</i>
                                Washington, DC, December 2016. 
                            </li>
                            <li>Yu Wang, Yang Feng, Jiebo Luo, Xiyang Zhang, "Voting with
                                Feet: Who are Leaving Hillary Clinton and Donald Trump?" <i>IEEE International Symposium on
                                Multimedia</i>, San Jose, CA, December 2016. <strong>(Invited
                                Paper)</strong>
                            </li>
                            <li>Tianran Hu, Ruihua Song, Xing Xie, Jiebo Luo, "Mining Shopping
                                Patterns for Divergent Urban Regions by Incorporating Mobility
                                Data", <i>ACM International Conference on Information and Knowledge Management (CIKM)</i>,
                                Indianapolis, IN, October 2016.
                            </li>
                            <li>Kelly He, Lee Murphy, and Jiebo Luo, "Using Social Media to
                                Promote STEM Education: Matching College Students with Role
                                Models", <i>European Conference
                                on Machine Learning and Principles and Practice of Knowledge
                                Discovery (ECML/PKDD),</i> Riva del Garda, Italy,
                                September 2016. <a href="http://arxiv.org/abs/1607.00405"> [arXiv]</a>
                            </li>
                            <li>Zhishen Pan, Kevin Chi, Timothy Dye, Jiebo Luo, "Towards
                                Understanding How News Coverage Affect Public Perception During
                                Epidemic Outbreaks",<i> International Conference on Social Computing,
                                Behavioral-Cultural Modeling &amp; Prediction and Behavior
                                Representation in Modeling and Simulation (SBP-BRiMS)</i>,
                                Washington DC, June 2016.
                            </li>
                            <li>Yiheng Zhou, Numair Sani, Jiebo Luo, "Understanding Illicit
                                Drug Use Behaviors by Mining Instagram," <i>International Conference on Social
                                Computing, Behavioral-Cultural Modeling &amp; Prediction and
                                Behavior Representation in Modeling and Simulation (SBP-BRiMS)</i>,
                                Washington DC, June 2016. <a href="http://arxiv.org/abs/1604.07096"> [arXiv]</a>
                            </li>
                            <li>Tianran Hu, Haoyuan Xiao, Jiebo Luo, Thuy-vy Thi Nguyen, 
                                "What the Language You Tweet Says About Your Occupation," <i>AAAI International Conference on
                                Weblogs and Social Media (ICWSM)</i>, Cologne, Germany, May
                                2016.
                            </li>
                            <li>Yu Wang, Yuncheng Li, Jiebo Luo, "Deciphering the 2016 U.S.
                                Presidential Campaign in the Twitter Sphere: A Comparison of the
                                Trumpists and Clintonists," <i>AAAI International Conference on Weblogs and Social Media (ICWSM)</i>,
                                Cologne, Germany, May 2016. <a
                                href="http://arxiv.org/abs/1603.03097"> [arXiv]</a>
                            </li>
                            <li>Yu Wang, Jiebo Luo, Richard G. Niemi, Yuncheng Li, Tianran Hu,
                                "Catching Fire via 'Likes': Inferring Topic Preferences of Trump
                                Followers on Twitter," <i>AAAI
                                International Conference on Weblogs and Social Media (ICWSM),</i>
                                Cologne, Germany, May 2016. <a href="http://arxiv.org/abs/1603.03099"> [arXiv]</a>
                            </li>
                            <li>Nabil Hossain, Tianran Hu, Roghayeh Feizi, Ann Marie White,
                                Jiebo Luo, Henry Kautz, "Inferring Fine-grained Details on User
                                Activities and Home Location from Social Media: Detecting
                                Drinking-While-Tweeting Patterns in Communities," <i>AAAI International Conference on
                                Weblogs and Social Media (ICWSM),</i> Cologne, Germany, May
                                2016. <a href="http://arxiv.org/abs/1603.03181"> [arXiv]</a>
                            </li>
                            <li>Yu Wang, Yuncheng Li, Richard G. Niemi, Jiebo Luo, "To Follow
                                or Not to Follow: Analyzing the Growth Patterns of the Trumpists
                                on Twitter," <i>AAAI International Conference on Weblogs and Social Media (ICWSM),</i>
                                Workshop on Social Media in the Newsroom, Cologne, Germany, May
                                2016.
                            </li>
                            <li>Zhiwei Jin, Juan Cao, Yongdong Zhang, Jiebo Luo, "News
                                Verification by Exploiting Conflicting Social Viewpoints in
                                Microblogs," <i>The 30th AAAI Conference on Artificial Intelligence (AAAI),</i> Phoenix,
                                AZ, January 2016. <a href="https://drive.google.com/drive/folders/0Byh2_bxvelahRHZwS1U4RG9wMHM"> [PDF]</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2015", e)}>2015</button>
                    <div id="sm-2015" className="panel">
                        <ul>
                            <li>Quanzeng You, Sumit Bhatia, Jiebo Luo, "A Picture Tells a
                                Thousand Words About You! User Interest Profiling from
                                User Generated Visual Content," <i>Signal
                                Processing</i>, Special Issues on Big Data Meets Multimedia
                                Analytics, December 2015. <a
                        href="http://www.sciencedirect.com/science/article/pii/S0165168415003758"> [PDF]</a>
                            </li>
                            <li>Quanzeng You, Liangliang Cao, Jiebo Luo, "A Multifaceted
                                Social Multimedia-based Approach to Prediction of Elections,", 
                                <i>IEEE Transactions on Multimedia</i>, to appear, 2015. 
                                <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=7293668"> [PrePrintPDF]</a>
                            </li>
                            <li>Tianran Hu, Adam Sadilek, Henry Kautz, and Jiebo Luo, "Home
                                Location Inference from Sparse and Noisy Data: Models and
                                Applications," <i>IEEE International Conference on Data Mining (ICDM), Workshop on
                                Social Multimedia Data Mining</i>, Atlantic City, December
                                2015.
                            </li>
                            <li>Yu Wang, Jianbo Yuan, and Jiebo Luo, "To Love or to Loathe:
                                How is the World Reacting to China's Rise?" <i>IEEE International Conference on
                                Data Mining (ICDM), Workshop on Big Media Data: Understanding,
                                Search, and Mining</i>, Atlantic City, December 2015. <a
                                href="http://arxiv.org/abs/1509.02596"> [PrePrintPDF]</a>
                            </li>
                            <li>Ran Pang, Agustin Baretto, Henry Kautz, and Jiebo Luo,
                                "Monitoring Adolescent Alcohol Use via Multimodal Data Analysis
                                in Social Multimedia," Special Session on Intelligent Mining, 
                                <i>IEEE Big Data Conference</i>,
                                Santa Clara, CA, October 2015. <a
                        href="https://drive.google.com/open?id=0Byh2_bxvelahcFJCRVZRbGhYanFOUzFkMUNBa052RE9XWTJR"> [PrePrintPDF]</a>
                            </li>
                            <li>Yuncheng Li, Yang Cong, Tao Mei, and Jiebo Luo, "User-Curated
                                Image Collections: Modeling and Recommendation,"<i> IEEE Big Data Conference,</i>
                                Santa Clara, CA, October 2015. <a
                                href="http://arxiv.org/abs/1509.05671"> [PrePrintPDF]</a>
                            </li>
                            <li>Yu Wang, Jianbo Yuan, and Jiebo Luo, "America Tweets China: A
                                Fine-Grained Analysis of the State and Individual
                                Characteristics Regarding Attitudes towards China," <i>IEEE Big Data Conference</i>,
                                Santa Clara, CA, October 2015. <a
                        href="https://drive.google.com/open?id=0Byh2_bxvelahcjliM2MyMTNkd1ZnVVBPUEFlUUNrY0NZbFow"> [PrePrintPDF]</a>
                            </li>
                            <li>Kuan-Ting Chen*, Kezhen Chen*, Peizhong Cong, Winston Hsu,
                                Jiebo Luo, "Who are the Devils Wearing Prada in New York City?"
                                <i>ACM Multimedia Conference</i>,
                                October 2015. <a href="http://arxiv.org/pdf/1508.04785.pdf"> [PrePrintPDF]</a>
                            </li>
                            <li>Xitong Yang, Yuncheng Li, Jiebo Luo, "Pinterest Board
                                Recommendation for Twitter Users," <i>ACM Multimedia Conference</i>, October 2015. 
                                <a href="http://arxiv.org/abs/1509.00511"> [PrePrintPDF]</a>
                            </li>
                            <li>Danning Zheng, Tianran Hu, Quanzeng You, and Jiebo Luo,
                                "Towards Lifestyle Understanding: Predicting Home and Vacation
                                Locations from User's Online Photo Collections," <i>AAAI International Conference on
                                Weblogs and Social Media (ICWSM), </i>May 2015.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("sm-2010-2014", e)}>2010-2014</button>
                    <div id="sm-2010-2014" className="panel">
                        <ul>
                            <li>Quanzeng You, Sumit Bhatia, Jiebo Luo, "The eyes of the
                                beholder: Gender prediction using images posted in online social
                                networks," <i>IEEE International Conference on Data Mining (ICDM), Workshop on Social
                                Multimedia Data Mining</i>, December 2014. <a
                        href="http://www.cs.rochester.edu/u/qyou/papers/gender_classification.pdf"> [PDF]</a>
                            </li>
                            <li>Simon Weber, Jiebo Luo, "What Makes An Open Code Popular in
                                Github," <i>IEEE International Conference on Data Mining (ICDM), Workshop on Software Data
                                Mining</i>, December 2014.
                            </li>
                            <li>Andrew Nocka, Danning Zheng, Tianran Hu, Jiebo Luo, "Moneyball
                                for Academia: Towards Measuring and Maximizing Faculty
                                Performance and Impact," <i>IEEE
                                International Conference on Data Mining (ICDM), Workshop on
                                Domain Dependent Data Mining</i>, December 2014. 
                            </li>
                            <li>Danning Zheng, Tianran Hu, Quanzeng You, and Jiebo Luo,
                                "Inferring Home Location from User's Photo Collections based on
                                Visual Content and Mobility Patterns," <i>ACM Multimedia Conference, Workshop on Geotagging in
                                Multimedia (GeoMM)</i>, November 2014.
                            </li>
                            <li>Yuncheng Li, Jiebo Luo, Tao Mei, "Personalized Image
                                Recommendation for Web Search Engine Users", <i>IEEE ICME</i>, July 2014. 
                            </li>
                            <li>Junhuan Zhu, Quanzeng You, Jiebo Luo and John R. Smith,
                                "Towards Understanding the Effectiveness of Election Related
                                Images in Social Media," <i>IEEE
                                International Conference on Data Mining (ICDM), Workshop on
                                Domain-driven Data Mining</i>, December 2013. 
                                <a
                        href="https://drive.google.com/file/d/0Byh2_bxvelahcFdmYkNWNnJMTEk/edit?usp=sharing"> [PDF]</a>
                            </li>
                            <li> Jianbo Yuan, Quanzeng You, and Jiebo Luo, "Are There
                                Cultural Differences in Event Driven Information Propagation
                                Over Social Media?" <i>ACM Multimedia Conference, International Workshop on
                                Socially-Aware Multimedia (IWSAM)</i>, October 2013. <a
                        href="https://drive.google.com/file/d/0Byh2_bxvelahdlZWenZ3VjlMXzQ/edit?usp=sharing"> [PDF]</a>
                            </li>
                            <li> Quanzeng You and Jiebo Luo, "Towards Social Imagematics:
                                Sentiment Analysis in Social Multimedia," <i>ACM SIGKDD, Workshop on Multimedia
                                Data Mining</i>, August 2013. <a
                        href="https://docs.google.com/file/d/0Byh2_bxvelahemFxRjJhQlZwMDg/edit?usp=sharing"> [PDF]</a>
                            </li>
                            <li> Jianbo Yuan, Quanzeng You, Sean McDonough, and Jiebo
                                Luo, "Sentribute: Image Sentiment Analysis from a Mid-level
                                Perspective," <i>ACM SIGKDD,
                                Workshop on Issues of Sentiment Discovery and Opinion
                                Mining (WISDOM)</i>, August 2013. <a
                        href="https://docs.google.com/file/d/0Byh2_bxvelaheE5oTUQ5elJPcXM/edit?usp=sharing"> [PDF]</a>
                            </li>
                            <li> Ge Ma and Jiebo Luo, "Is A Social Picture Worth 1000 Votes?
                                Analyzing the Sentiment of Election Related Photos," <i>IEEE ICME</i>, July 2013.
                            </li>
                            <li> Xin Jin, Jie Yu, Jiawei Han, Jiebo Luo, "Reinforced retrieval
                                in image-rich information networks via integration of link and
                                content based similarities," <i>IEEE Transactions on Knowledge
                                Discovery and Engineering</i>, 25(2): pp 448-460, Feb. 2013.
                            </li>
                            <li> Xin Jin, Cindy Lin, Jiebo Luo, Jiawei Han, "SocialSpamGuard:
                                A Data Mining-based Spam Detection System for Social Media
                                Networks," Demo Paper,<i> International Conference on Very
                                Large Data Bases</i> (VLDB), Seattle, WA, August 2011.
                            </li>
                            <li> Xin Jin, Chi Wang, Jiebo Luo, Jiawei Han, "LikeMiner: A
                                System for Mining the Power of 'Like' in Social Media Networks,"
                                Demo Paper, <i>International Conference on Knowledge Discovery
                                and Data Mining</i> (KDD), San Diego, CA, August 2011.
                            </li>
                            <li> Zhijun Yin, Liangliang Cao, Jiawei Han, Jiebo Luo, and Thomas
                                Huang, "Diversified Trajectory Pattern Ranking in Geo-tagged
                                Social Media," <i>SIAM Conference on Data Mining</i> (SDM),
                                Mesa, AZ, April 2011.
                            </li>
                            <li> Jie Yu, Xin Jin, Jiawei Han, Jiebo Luo, "Collection-based
                                sparse label propagation and its application to social group
                                suggestion from photos," <i>ACM Transactions on Intelligent
                                Systems and Technology</i>, 2(2): , February 2011.
                            </li>
                            <li>&nbsp;Xin Jin, Andrew Gallagher, Jiawei Han, Jiebo Luo,
                                "Wisdom of Social Multimedia: Using Flickr for Prediction and
                                Forecast," <i>ACM Multimedia Conference</i>, Brave and New
                                Ideas Track, Firenze, Italy, October 2010. (Long Paper)
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="biomedical-analytics" className="tabcontent">
                    <h3>Biomedical Analytics &amp; Health Informatics</h3>
                    <button className="accordion" onClick={(e) => openTab("ba-2022", e)}>2022</button>
                    <div id="ba-2022" className="panel">
                        <ul>
                            <li>Wei Zhu, Jiebo Luo, "Federated Medical Image Analysis with
                                Virtual Sample Synthesis," <i>International Conference on
                                Medical Image Computing and Computer Assisted Interventions</i>
                                (MICCAI), Singapore, September 2022.
                            </li>
                            <li>Wei Zhu, Andrew White, and Jiebo Luo, "Federated Learning of
                                Molecular Properties in a Heterogeneous Setting," <i>Cell
                                Patterns</i>, 2022.
                            </li>
                            <li>Nisreen Al-Jallad, Oriana Ly-Mapes, Peirong Hao, Jinlong Ruan,
                                Ashwin Ramesh, Jiebo Luo, Tong Tong Wu, Timothy Dye, Noha
                                Rashwan, Johana Ren, Hoonji Jang, Luis Mendez, Nora Alomier,
                                Sherita Bullock, Kevin Fiscella, Jin Xiao, "Artificial
                                intelligence-powered smartphone application, AICaries, improves
                                at-home dental caries screening in children: moderated and
                                unmoderated usability tests," <i>Plos Digital Health</i>, 2022.
                            </li>
                            <li>Wei Xiong, Neil Yeung, Shubo Wang, Liyun Wang, Jiebo Luo,
                                "Breast Cancer Induced Bone Osteolysis Prediction Using Temporal
                                Variational Auto-Encoders," Special Issue on AI for Advanced
                                Biomedical Applications,<i> BME Frontiers</i>, 2022.
                            </li>
                            <li>Hanjia Lyu, Zihe Zheng, and Jiebo Luo, "Misinformation versus
                                Facts: Understanding the Influence of News Regarding COVID-19
                                Vaccines on Vaccine Uptake," <i>Health Data Science</i>, 2022.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2021", e)}>2021</button>
                    <div id="ba-2021" className="panel">
                        <ul>
                            <li>Jin Xiao, Jiebo Luo, Oriana Ly-Mapes, Tong Tong Wu, Timothy
                                Dye, Nisreen Al Jallad, Peirong Hao, Jinlong Ruan, Sherita
                                Bullock, Kevin Fiscella, "Assess A Smartphone App (AICaries)
                                that Uses Artificial Intelligence to Detect Dental Caries in
                                Children and Provide Interactive Oral Health Education: Protocol
                                for Design and Usability Testing," <i>JMIR Research Protocols</i>,
                                2021.
                            </li>
                            <li>Hanjia Lyu, Junda Wang, Wei Wu, Viet Duong, Xiyang Zhang,
                                Timothy D. Dye, and Jiebo Luo, "Social Media Study of Public
                                Opinions on Potential COVID-19 Vaccines: Informing Dissent,
                                Disparities, and Dissemination," <i>Intelligent Medicine</i>,
                                2021.
                            </li>
                            <li>Wei Wu, Hanjia Lyu, Jiebo Luo, "Characterizing Discourse about
                                COVID-19 Vaccines: A Reddit Version of the Pandemic Story," <i>Health Data Science</i>, 2021.
                            </li>
                            <li>Xiyang Zhang, Yu Wang, Hanjia Lyu, Yipeng Zhang, Yubao Liu,
                                Jiebo Luo, "The Influence of COVID-19 on people's Well-Being:
                                Big Data Methods for Capturing Working Adults' Well-being and
                                Protective Factors Nationwide," <i>Frontiers in Psychology</i>,
                                2021. 
                            </li>
                            <li>Yipeng Zhang, Hanjia Lyu. Yubao Liu. Xiyang Zhang, Yu Wang,
                                Jiebo Luo, "Monitoring Depression Trend on Twitter during the
                                COVID-19 Pandemic: Observational Study," <i>Journal of Medical
                                Internet Research Infodemiology</i>, 2021.
                            </li>
                            <li>Cheng Peng, Haofu Liao, Gina Wong, Jiebo Luo, S. Kevin Zhou,
                                Rama Chellappa, "XraySyn: Realistic View Synthesis from a Single
                                Radiograph Through CT Prior," <i>The 35th AAAI Conference on
                                Artificial Intelligence</i> (AAAI), February 2021.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2020", e)}>2020</button>
                    <div id="ba-2020" className="panel">
                        <ul>
                            <li>Weijian Li, Wei Zhu, Ray Dorsey, Jiebo Luo, "Predicting
                                Parkinson's Disease with Multimodal Irregularly Collected
                                Longitudinal Smartphone Data," <i>IEEE International Conference
                                on Data Mining</i> (ICDM), November 2020.
                            </li>
                            <li>Zhou Zhuang, Johnson V. John, Haofu Liao, Jiebo Luo, Paul
                                Rubery, Addisu Mesfin, Sunil Kumar Boda, Jingwei Xie and Xinping
                                Zhang, ''Electrospray-Enabled Peptide Coating of Structural Bone
                                Allografts for Enhanced Repair and Reconstruction of Femoral
                                Segmental Defects,'' <i>ACS Biomaterials Science &amp;
                                Engineering</i>, in press.
                            </li>
                            <li>Wei Zhu, Haofu Liao, Wenbin Li, Weijian Li, Jiebo Luo,
                                "Alleviating the Incompatibility between Cross Entropy Loss and
                                Episode Training for Few-shot Skin Disease Classification," <i>International Conference on Medical Image Computing and
                                Computer Assisted Interventions </i>(MICCAI), Lima, Peru,
                                October 2020.
                            </li>
                            <li>Yipeng Zhang, Haofu Liao, Jin Xiao, Nisreen Al Jallad, Jiebo
                                Luo, "A Smartphone-based System for Real-time Early Childhood
                                Caries Diagnosis," <i>Workshop on Perinatal, Preterm and
                                Paediatric Image Analysis</i>, <i>International Conference on
                                Medical Image Computing and Computer Assisted Interventions</i>
                                (MICCAI), October 2020.
                            </li>
                            <li>Ray Dorsey, Larsson Omberg, Emma Waddell, Jamie L. Adams, Roy
                                Adams, Mohammad Rafayet Ali, Katherine Amodeo, Abigail Arky,
                                Erika F. Augustine, Karthik Dinesh, Mohammed Ehsan Hoque,
                                Alistair M. Glidden, Stella Jensen-Roberts, Zachary Kabelac,
                                Dina Katabi, Karl Kieburtz, Daniel R. Kinel, Max A. Little,
                                Karlo J. Lizarraga, Taylor Myers, Sara Riggare, Spencer Z.
                                Rosero, Suchi Saria, Giovanni Schifitto, Ruth B. Schneider,
                                Gaurav Sharma, Ira Shoulson, E. Anna Stevenson, Christopher G.
                                Tarolli, Jiebo Luo, Michael P. McDermott, "Deep Phenotyping of
                                Parkinson's Disease," <i>Journal of Parkinson's Disease</i>, in
                                press.
                            </li>
                            <li>Long Chen, Xinyi Lu, Jianbo Yuan, Joyce Luo, Jiebo Luo, Zidian
                                Xie, and Dongmei Li, "A Social Media Study on Associations of
                                Flavored E-cigarette with Health Symptoms: Observational study,"
                                <i>Journal of Medical Internet Research</i>, Vol 22, No 6, 2020.
                            </li>
                            <li>Haofu Liao, Wei-An Lin, S. Kevin Zhou, Jiebo Luo, "ADN:
                                Artifact Disentanglement Network for Unsupervised Metal Artifact
                                Reduction," <i>IEEE Transactions on Medical Imaging </i>(TMI),
                                Volume 39, Issue 3, 2020.
                            </li>
                            <li>Jianbo Yuan, Zhiwei Jin, Han Guo, Hongxia Jin, Xianchao Zhang,
                                Tristram Smith, and Jiebo Luo. "Constructing biomedical
                                domain-specific knowledge graph with minimum supervision." 
                                <i>Knowledge and Information Systems</i> 62(1): 1-20, 2020.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2019", e)}>2019</button>
                    <div id="ba-2019" className="panel">
                        <ul>
                            <li>Jianbo Yuan, Haofu Liao, Rui Luo, Jiebo Luo, "Automated
                                Radiology Report Generation via Multi-view Image Fusion and
                                Medical Concept Enrichment," <i>International Conference
                                    on Medical Image Computing and Computer Assisted
                                Interventions </i>(MICCAI), Shenzhen, China, October 2019.
                            </li>
                            <li>Haofu Liao, Wei-An Lin, Zhimin Huo, William Sehnert, Levon
                                Vogelsang, Kevin Zhou, Jiebo Luo, "Generative Mask Pyramid
                                Network for CT/CBCT Metal Artifact Reduction with Joint
                                Projection-Sinogram Correction," <i>International
                                    Conference on Medical Image Computing and
                                Computer Assisted Interventions</i> (MICCAI), Shenzhen, China,
                                October 2019.
                            </li>
                            <li>Haofu Liao, Wei-An Lin, Jianbo Yuan, S. Kevin Zhou, Jiebo Luo,
                                "Artifact Disentanglement Network for Unsupervised Metal
                                Artifact Reduction," <i>International Conference on Medical 
                                Image Computing and Computer Assisted Interventions </i>(MICCAI),
                                Shenzhen, China, October 2019. <strong>(Young Scientist Honorable
                                Mention)</strong> <a href="https://arxiv.org/pdf/1906.01806.pdf"> [PDF]</a> 
                                <a href="https://github.com/liaohaofu/adn"> [Project Page]</a>
                            </li>
                            <li>Weijian Li, Viet-Duy Nguyen, Haofu Liao, Matthew Wilder, Ke
                                Cheng, Jiebo Luo, "Patch Transformer for Multi-tagging Whole
                                Slide Histopathology Images," <i>International Conference on 
                                Medical Image Computing and Computer Assisted
                                Interventions </i>(MICCAI), Shenzhen, China, October 2019.
                            </li>
                            <li>Sen Zhang, Changzheng Zhang, Lanjun Wang, Cixing Li, Dandan
                                Tu, Rui Luo, Guo-Jun Qi, Jiebo Luo, "MSAFusionNet: Multiple
                                Subspace Attention Based Deep Multi-modal Fusion Network," <i>Springer LNCS Proceedings of the 10th International Workshop on
                                Machine Learning in Medical Imaging (MLMI), in
                                conjunction with MICCAI</i>, Shenzhen, China, October 2019.
                            </li>
                            <li>Dong Liu, Changzheng Zhang, Lanjun Wang, Yaoxin Li, Xiaoshi
                                Chen, Rui Luo, Shuanlong Che, Hehua Liang, Yinghua Li, Si Liu,
                                Dandan Tu, Guo-Jun Qi, Pifu Luo, Jiebo Luo, "DCCL: A Benchmark
                                for Cervical Cytology Analysis," <i>Springer LNCS Proceedings
                                of the 10th International Workshop on Machine Learning in
                                Medical Imaging (MLMI), in conjunction with MICCAI</i>,
                                Shenzhen, China, October 2019. 
                            </li>
                            <li>Zidian Xie, Olga Nikolayeva, Dongmei Li, Jiebo Luo, "Building
                                Risk Prediction Models for Type 2 Diabetes Using Machine
                                Learning Techniques," <i>Preventing Chronic Disease</i>, in
                                press.
                            </li>
                            <li>Wei-An Lin*, Haofu Liao*, Cheng Peng, Xiaohang Sun, Jingdan
                                Zhang, Jiebo Luo, Rama Chellappa, S. Kevin Zhou, "DuDoNet: Dual
                                Domain Network for CT Metal Artifact Reduction," <i>IEEE
                                Conference on Computer Vision and Pattern Recognition </i>(CVPR), Long Beach, CA, June 2019.
                            </li>
                            <li>Haofu Liao, Wei-An Lin, Jiarui Zhang, Jingdan Zhang, Jiebo
                                Luo, S. Kevin Zhou, "Multiview 2D/3D Rigid Registration via a
                                Point-Of-Interest Network for Tracking and Triangulation," 
                                <i>IEEE Conference on Computer Vision and Pattern Recognition </i>(CVPR), Long Beach, CA, June 2019.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2018", e)}>2018</button>
                    <div id="ba-2018" className="panel">
                        <ul>
                            <li>S Weisenthal, C Quill, J Luo, H Kautz, S Farooq, M Zand, "A
                                machine learning pipeline to predict acute kidney injury (AKI)
                                in patients without AKI in their most recent hospitalization," <i>Journal
                                of Clinical and Translational Science</i>, 2018.
                            </li>
                            <li>Haofu Liao, Zhimin Huo, James Sehnert, Kevin S, Zhou, Jiebo
                                Luo, "Adversarial Sparse-View CBCT Artifact Reduction," <i>International Conference on Medical Image Computing and Computer Assisted
                                Intervention</i> (MICCA), Granada, Spain, September 2018. <strong>(oral presentation)</strong>
                            </li>
                            <li>Haofu Liao, Yucheng Tang, Gareth Funka-Lea, Jiebo Luo, Kevin
                                S. Zhou, "More Knowledge is Better: Cross-Modality Volume
                                Completion and 3D+2D Segmentation for Intracardiac
                                Echocardiography Contouring," <i>International Conference on
                                Medical Image Computing and Computer Assisted Intervention</i>
                                (MICCA), Granada, Spain, September 2018.
                            </li>
                            <li>Haofu Liao, Addisu Mesfin, Jiebo Luo, "Joint Vertebrae
                                Identification and Localization in Spinal CT Images by Combining
                                Short- and Long-Range Contextual Information," <i>IEEE
                                Transactions on Medical Imaging</i> 37(5): 1266-1275,
                                2018.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2017", e)}>2017</button>
                    <div id="ba-2017" className="panel">
                        <ul>
                            <li>Xuefeng Peng, Jiebo Luo, Catherine Glenn, Li-Kai Chi, and
                                Jingyao Zhan, "Sleep-deprived Fatigue Pattern Analysis using
                                Large-Scale Selfies from Social Media," Special Session on
                                Intelligent Data Mining,<i> IEEE Big Data Conference</i>,
                                Boston, MA, December 2017.
                            </li>
                            <li>Yiheng Zhou, Jingyao Zhan and Jiebo Luo, "Predicting Multiple
                                Risky Behaviors via Multimedia Content," <i>International Conference on Social
                                Informatics </i>(SocInfo), Oxford, England, September
                                2017.
                            </li>
                            <li>Xitong Yang, Jiebo Luo, "Tracking Illicit Drug Dealing and
                                Abuse on Instagram using Multimodal Analysis," <i>ACM Transactions on Intelligent
                                Systems and Technology</i>, 8(4): 58:1-58:15, August 2017.
                            </li>
                            <li>Xuefeng Peng and Jiebo Luo, "Large-Scale Sleep Condition
                                Analysis Using Selfies from Social Media," <i>International Conference on Social
                                Computing, Behavioral-Cultural Modeling &amp; Prediction and
                                Behavior Representation in Modeling and Simulation (SBP-BRiMS)</i>,
                                Washington, DC, July 2017. 
                            </li>
                            <li>Jianbo Yuan, Chester Holtz, Tristram H Smith, Jiebo Luo,
                                "Autism Spectrum Disorder Detection from Semi-Structured and
                                Unstructured Medical Data," <i>EURASIP
                                Journal on Bioinformatics and Systems Biology, </i>2017:3, February 2017.
                            </li>
                            <li>Yiheng Zhou, Catherine Glenn, Jiebo Luo, "Understanding and
                                Predicting Multiple Risky Behaviors from Social Media," <i>AAAI 2017 Joint Workshop on Health
                                Intelligence,</i> San Francisco, CA, February 2017.
                            </li>
                            <li>Haofu Liao, Jiebo Luo, "A Deep Multitask Learning Approach to
                                Skin Lesion Classification," <i>AAAI 2017 Joint Workshop on Health Intelligence</i>, 
                                San Francisco, CA, February 2017.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2016", e)}>2016</button>
                    <div id="ba-2016" className="panel">
                        <ul>
                            <li>Haofu Liao, Yuncheng Li, Jiebo Luo, "Skin Disease 
                                Classification versus Skin Lesion Characterization: Achieving
                                Robust Diagnosis using Multi-label Deep Neural Networks", <i>International Conference on
                                Pattern Recognition (ICPR)</i>, Cancun, Mexico, December
                                2016.
                            </li>
                            <li>Kuan Wang, Jiebo Luo, "Detecting Visually Observable Disease
                                Symptoms from Faces", <i>1ST International Workshop on Biomedical Informatic with
                                Optimization and Machine Learning (BOOM)</i>, in
                                conjunction with IJCAI 2016, New York City, New York, July
                                2016. <strong>(Best Paper Runner-Up)</strong> 
                            </li>
                            <li>Chunlan Huang, Vincent P. Ness, Xiaochuan Yang, Hongli Chen,
                                Jiebo Luo, Edward B Brown and Xinping Zhang, "Spatiotemporal
                                Analyses of Osteogenesis and Angiogenesis via Intravital Imaging
                                in Cranial Bone Defect Repair," <i>Journal of Bone and Mineral Research</i>,
                                available in PubMed.
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-2015", e)}>2015</button>
                    <div id="ba-2015" className="panel">
                        <ul>
                            <li>Dawei Zhou, Jiebo Luo, Vincent Silenzio, Yun Zhou, Glenn Currier, and Henry Kautz, 
                                "Tackling Mental Health by Integrating Unobtrusive Multimodal sensing," 
                                <i>the Twenty-Ninth AAAI Conference on Artificial Intelligence (AAAI)</i>, 
                                Austin, TX, January 25-30, 2015.
                            </li>
                            <li>Junhuan Zhu, Jiebo Luo, Yousuf Khalifar, "Computerized Grading of Cataract 
                                Surgery from Videos," <i>Machine Vision and Applications</i>, 26(1): 115-125, 2015.
                            </li>
                            <li>Yang Cong, Ji Liu, Jiebo Luo, "Deep Sparse Feature Selection for Computer Aided 
                                Endoscopy Diagnosis," <i>Pattern Recognition</i>, 48(3): 907-917, 2015.    
                            </li>
                        </ul>
                    </div>

                    <button className="accordion" onClick={(e) => openTab("ba-pre-2015", e)}>Pre-2015</button>
                    <div id="ba-pre-2015" className="panel">
                        <ul>
                            <li>Tianli Yu, Jiebo Luo, Narendra Ahuja, "Search strategies for shape regularized 
                                active contour," <i>Computer Vision and Image Understanding</i>, 113(10): 1053-1063, 2009.
                            </li>
                            <li>Hui Luo, Jiebo Luo, "Robust online orientation correction for radiographs in PACS environments," 
                                <i>IEEE Transactions on Medical Imaging</i>, 25(10): 1370-1379, 2006.
                            </li>
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