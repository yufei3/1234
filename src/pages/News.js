import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "News | " + Config.SITE_TITLE;
const DESC = "This is the news page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/news";

class News extends React.Component{
    
    render() {
        return (<main>
            
             <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            <h3>News</h3>
            <div class="news-container">
                <year>2022</year>
                <month-slider>
                    <div class="mysliders fade">
                        <div class="number-text">1/12</div>
                        <div class="slider-text">
                            First Month
                        </div> 
                    </div>

                    <div class="mysliders fade">
                        <div class="number-text">2/12</div>
                        <div class="slider-text">
                            Second Month
                        </div> 
                    </div>

                    <div class="mysliders fade">
                        <div class="number-text">3/12</div>
                        <div class="slider-text">
                            Third Month
                        </div> 
                    </div>

                    /*Next and Previous buttons */
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </month-slider>

                <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
</div>
            </div>
        </main>);
    }
}

export default News;