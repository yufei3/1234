import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Members | " + Config.SITE_TITLE;
const DESC = "This is the members page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/members";



class Members extends React.Component{
    
    render() {

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
        
        <div>
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name="description" content={DESC}/>
                    <meta name="theme-color" content={Config.THEME_COLOR} />
                </Helmet>
                
                
                <section className="introduction">
                <h3>Visiting Researchers</h3>
                    <img src="https://s2.loli.net/2022/04/02/nQUSrP31wO4v5EH.jpg" class="w3-display-middle w3-large" alt="" />
                    <p><strong>Prof. Jinsong Su</strong></p>
                    <p>Xiamen University</p>
                </section>
                <section className="members-intro">
                    <h3>PhD Students</h3>
                </section>

                <section class="phd-container">
                    
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/02/frMQC3R718pXBPv.jpg" alt="" width="140" height="170" />
                                </div>  
                                <div class="card_desc">
                                    <p><strong>Yuncheng Li</strong></p>
                                    <p>Snapchat Research 2017-2019</p>
                                    <p>Google Brain since 2019</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/7RMkWUxVY5sh6ue.png" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Quanzeng You</strong></p>
                                    <p>Microsoft Research AI since 2017</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/LZvT7dm5Kc1NfED.png" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Tianrun Hu</strong></p>
                                    <p>College of William & Mary</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/n5ClIwmKJLBueZW.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Jianbo Yuan</strong></p>
                                    <p>Amazon - AWS</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/xsnlkPUhrA6C58d.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Yu Wang (PSC)</strong></p>
                                    <p>Apple Siri since 2018</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/sSE5Mw2mIxV9P6c.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Yang Feng</strong></p>
                                    <p>Google Cloud</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/9I8kEoMWHjCvmF7.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Haofu Liao</strong></p>
                                    <p>Amazon - AWS</p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/8flKIXOUH6QYrdN.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Tianlang Chen</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/19uR6evWJMcAXt8.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Zhengyuan Yang</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/iMVDGO6tCKepbEm.png" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Wei Xiong</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/L5YC61Pr3nmT9WV.png" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Weijian Li</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/q59UMbgAS4xteiI.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Songyang Zhang</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/YPHsUkdeJ9Iz3Du.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Wei Zhu</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/bexwWXLVCmHG9rK.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Haitian Zheng</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/JbO5v2gI3uiqMSr.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Jie An</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/6vCWHmUFquBKxwP.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Zhaoyi Wan</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/WnuQbd87UOYLNzq.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Yuqi Gao</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/flDwBXZAEjy5FV6.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Hang Hua</strong></p>
                                    <button>View</button>
                                </div>
                            </div>
                            <div class="card_item">
                                <div class="card_img">
                                    <img src="https://s2.loli.net/2022/04/09/aMjcPI6mk1sUYFA.jpg" alt="" width="140" height="170" />
                                </div>
                                <div class="card_desc">
                                    <p><strong>Hanjia Lyu</strong></p>
                                    <button>View</button>
                                </div>
                            </div>   
                </section>

                <div class="other_student_container">
                    <div id="Students" className="tabcontent">
                        <button className="accordion" onClick={(e) => openTab("Section1", e)}>MS Students</button>
                        <div id="Section1" className="panel">
                            <ul>
                                <li>CS Program: Arsal Imtiaz, Ashwin Ramesh, Henry Moncure, Haozheng Du, Junda Wang, Viet Duong</li>
                                <li>DS Program: Junyu Chen, Matthew Johnston, Mohamad Ali Kalassina, Hanjia Lyu, Ravi Dugh, Yangxin Fan, Tangqiu Jiang, Ziyu Xiong</li>
                            </ul>
                        </div>

                        <button className="accordion" onClick={(e) => openTab("Section2", e)}>Undergraduate Students</button>
                        <div id="Section2" className="panel">
                            <ul>
                                <li>CS/DS Program: Grace Julien, Nikola Danevski, Enting Zhou, Yurong Liu, Jingyuan Chen, Emile Hemway, Peirong Hao, Xiaojun Min, Zachary Mustin, Brian Kimani, Sidhant Bendre, Anisha Bhattacharya, Alexandra Ferrante, Zihe Zheng, Neil Yeung, Jonathan Lai, Wei Wu, Jinglong Ruan, Bokai Zhang</li>
                                <li>NSF REU Program: Michael Zhou (Cornell), Miles Sigel (Rice)</li>
                            </ul>
                        </div>

                        <button className="accordion" onClick={(e) => openTab("Section3", e)}>Alumni</button>
                        <div id="Section3" className="panel">
                            <ul>
                                <li>Visiting Professors: 
                                    <ul>
                                        <li>Prof. Yang Cong (SIA)</li>
                                        <li>Prof. Tian-Liang Liu (NUPT)</li>
                                        <li>Prof. Jun Wu (BJYU)</li>
                                        <li>Prof. Congyan Lang (BJTU)</li>
                                        <li>Prof. Weining Wang (SCUT)</li>
                                        <li>Prof. Yi Wang (DLUT)</li>
                                    </ul>
                                </li>    
                                <li>Visiting Postdocs: 
                                    <ul>
                                        <li>Dr. Kuan-Ting Chen (NTU)</li>
                                    </ul>
                                </li>
                                <li>Visiting PhD Students: 
                                    <ul>
                                        <li>Kuan-Ting Chen (NTU)</li>
                                        <li>Wu Liu (ICT, Chinese Academy of Sciences)</li>
                                        <li>Zhiwei Jin (ICT, Chinese Academy of Sciences)</li>
                                        <li>Xiangyang Xu (Nanjing University)</li>
                                        <li>Jesse Wang (UR Medicine)</li>
                                        <li>Luigi Celona (Universita degli Studi di Milano-Bicocca)</li>
                                        <li>Mengshi Qi (Beihang University)</li>
                                        <li>Wenbin Li (Nanjing University)</li>
                                        <li>Jianxin Lin (USTC)</li>
                                        <li>Jing Wang (NJUST)</li>
                                    </ul>
                                </li>
                                <li>Former Graduate Students: 
                                    <ul>
                                        <li>CS PhD Program: Lam Tran, Spyridoula Gravani (PhD@Rochester), Junhuan Zhu, Qiguang Liu (Youtube), Jie Chen (Microsoft)</li>
                                        <li>DS MS Program: Meghana Murthy, Trang Nguyen, Xupin Zhang, Jong Hwi Park, Kefei Wu</li>
                                        <li>CS MS Program: Sai Anirudh Reddy Avilala, Rohit Venkata Sai Dulam, Zhezheng Hong, Yubao Liu, Yuxiao Chen (PhD@Rutgers), Tianxin Xie*, Kshitij Joshi*, Yiyun Peng*, Hao Zhou, Lele Chen, Rijul Magu, He Gong, Eric Biglow, Wentao Cai (PhD@Rochester), Xitong Yang (PhD@UMD), Haoyuan Xiao, Ran Pang (Bloomberg), Yunping Shao, Bella Wang, Han Guo (ICT)</li>
                                        <li>ECE MS Program: Beibei Qi, Yixuan Zhang, Zhongping Zhang, Taolue Chen, Yuchen Wu, Peizhong Cong, Siddarth Patki, Zhiyuan Li, Lin Wang, Jile Hu, Liangkai Zhang, Jiong Liu (Epic), Agnes Zhang, Jingwei Guo, Jiaqi Wang, Yao Zhou (PhD@ASU), Dawei Zhou (PhD@ASU), Yun Zhou, Ge Ma (PhD@Brandeis), Yingru Tian</li>
                                        <li>TEAM Program: Qi Tang, Shujing Yu, Augustine Baretto (start-up), Bowei Zhang</li>
                                    </ul>
                                </li>
                                <li>Former Undergraduate Students: 
                                    <ul>
                                        <li>CS/DS Program: Li Sun, Haoqi Zhang, Dawei Zhang, Tongyu Yang, Edan Meyer, Yipeng Zhang, Long Chen, Xinyi Lu, Shuaidong Pan, Faner Lin, Zhifan Nan, Gao Fan, Tolga Atkas, Viet Duy Nuygen, Viet Duong, Phu Pham, Yutong He, Benjamin King, Peijun Xu, Yiming Pan, David Anuta, Josh Churchin, Numair Sani, Ryan Berger, Kelly He (Ernst & Young), Trevor Whitestone, Chester Holtz (UCSD), Yiheng Zhou (CMU), Yuntao Zhou (CMU), Honglin Zheng (UCLA), Xuefeng Peng (Harvard), Kevin Chi, Zhishen Pan, Jiagen Zheng (UCSD), Jingyao Zhan (UCSD), Zoe Tiet, Raina Langevin, Jake Schechner, Caesar De Hoyos, Kuan Wang (PhD@U Penn), Lee Murphy, Jacob Niebloom, Kezhen Chen (PhD@Northwestern), Chunpai Wang (PhD@Albany), Andrew Nocka (Charles Schwab), Simon Weber (Hacker School)</li>
                                        <li>Math/Stats/Applied Math Program: Danning Zheng (Bloomberg)</li>
                                        <li>Economy Program: Alex Feiszli</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default Members;