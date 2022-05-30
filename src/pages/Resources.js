import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const TITLE = "Resources | " + Config.SITE_TITLE;
const DESC = "This is the resources page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/resources";


class Resources extends React.Component{
    
    render() {
        return (<main>

            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            <h3 className="resources-h3">Featured Talks</h3>

            <div id="splideArea">
                <Splide options={
                    {type     : 'loop',
                    gap: '2rem',
                    perPage: 3,
                    fixedHeight: '30rem',
                    focus    : 'center',
                    autoWidth: true,
                    ///cover: true,
                    }
                        } aria-label="Feature Talks">
                    <SplideSlide>
                        <div className="resources-splide" id="splide-1">
                          <h4>Vision and Language: Past, Present, and Future</h4>
                          <p>Computer vision and natural language processing are two key branches of 
                              artificial intelligence. Since the goal of computer vision has always 
                              been automatic extraction, analysis, and understanding of useful information 
                              from a single image or a sequence of images, it is natural for vision and language 
                              to come together to enable high-level computer vision tasks. Conversely, information 
                              extracted from images and videos can facilitate natural language processing tasks. 
                              Recent advances in machine learning and deep learning are facilitating reasoning 
                              about images and text in a joint fashion. in this talk, we will review a recently 
                              active area of research at the intersection of vision and language, including 
                              video-language alignment, image and video captioning, visual question answering, 
                              image retrieval using complex text queries, image generation from textual descriptions, 
                              language grounding in images and videos, as well as multimodal machine translation and 
                              vision-aided grammar induction.
                          </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="resources-splide" id="splide-2">
                          <h4>COVID-19: What Social Media and Machine Learning Can Inform Us</h4>
                          <p>The COVID-19 pandemic has severely affected people's daily lives and caused tremendous 
                              economic losses worldwide. However, its influence on public opinions and people's mental 
                              health conditions has not received as much attention. In addition, the related literature 
                              in these fields has primarily relied on interviews or surveys, largely limited to small-scale 
                              observations. In contrast, the rise of social media provides an opportunity to study many 
                              aspects of a pandemic at scale and in real-time. Meanwhile, the recent advances in machine 
                              learning and data mining allow us to perform automated data processing and analysis. We will 
                              introduce several recent studies ranging from 1) characterizing Twitter users and topics 
                              regarding the use of controversial terms for COVID-19, 2) understanding how college students 
                              respond differently than the general public to the pandemic, 3) monitoring depression trends 
                              throughout COVID-19, to 4) studying consumer hoarding behaviors during the pandemic.
                          </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="resources-splide" id="splide-3">
                          <h4>Learning with Unpaired Data</h4>
                          <p>Many learning tasks can be summarized as learning a mapping from a structured input to a 
                              structured output, such as machine translation, image style transfer, and so on. 
                              Such mappings are usually learned on paired training data, where an input sample 
                              and its corresponding output are both provided. Collecting paired training data often involves 
                              expensive human annotation, and the scale of paired training data is therefore often limited. 
                              As a result, the generalization ability of models trained on paired data is also limited. 
                              One way to mitigate this issue is learning with unpaired data, which is far less expensive to 
                              collect. Taking machine translation as an example, the unpaired training data can be collected 
                              separately from newspapers in the source language and target language without any annotation. 
                              The challenge of unpaired learning turns into how to align the unpaired data. With carefully 
                              designed objectives, unpaired learning has achieved remarkable progress on several tasks. This 
                              talk will cover the data collection and training methods of several unpaired learning tasks to 
                              illustrate the power of learning with unpaired data.
                          </p>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="resources-splide" id="splide-4">
                          <h4>Spear and Shield: War on Misinformation</h4>
                          <p>Social media, including Twitter and Chinese Weibo, has become an important channel of news and 
                              public opinion in recent years. For example, during the 2016 U.S. presidential election, candidates 
                              and their supporters were actively engaged on Twitter to run campaigns and express their opinions. 
                              The convenience and openness of social media have also fostered various misinformation, rumors, and 
                              fake news, which have become a serious public concern. To increase the credibility of information on 
                              social media and prevent the spreading of fake contents, it is crucial to detect misinformation and 
                              disinformation automatically. We introduce our work in this area and provide analyses of the impacts 
                              of misinformation on major events such as the U.S. presidential election and COVID-19 pandemic.
                          </p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

        </main>);
    }
}

export default Resources;