import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "News | " + Config.SITE_TITLE;
const DESC = "This is the news page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/news";

class News extends React.Component{
    
    render() {
        
        // let slides = document.getElementsByClassName("slider-slide");
        // let navlinks = document.getElementsByClassName("slider-navlink");
        // let currentSlide = 0;

        // document.getElementById("nav-button-next").addEventListener("click", () => {
        //     changeSlide(currentSlide + 1)
        // });
        // document.getElementById("nav-button-prev").addEventListener("click", () => {
        //     changeSlide(currentSlide - 1)
        // });

        // function changeSlide(moveTo) {
        //     if (moveTo >= slides.length) {moveTo = 0;}
        //     if (moveTo < 0) {moveTo = slides.length - 1;}
            
        //     slides[currentSlide].classList.toggle("active");
        //     navlinks[currentSlide].classList.toggle("active");
        //     slides[moveTo].classList.toggle("active");
        //     navlinks[moveTo].classList.toggle("active");
            
        //     currentSlide = moveTo;
        // }

        // document.querySelectorAll('.slider-navlink').forEach((bullet, bulletIndex) => {
        //     bullet.addEventListener('click', () => {
        //         if (currentSlide !== bulletIndex) {
        //             changeSlide(bulletIndex);
        //         }
        //     })
        // })

        return (<main>
            
             <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            <h3>News</h3>
            <div class="news-container">
                <year><div class="title">2022</div>
                    <div class="container">
                        <div class="grid">
                            <a class="cell" id="1" href="#slides__1">1</a>
                            <a class="cell" id="2" href="#slides__2">2</a>
                            <a class="cell" id="3" href="#slides__3">3</a>
                            <a class="cell" id="4" href="#slides__4">4</a>
                            <a class="cell" id="5" href="#slides__5">5</a>
                            <a class="cell" id="6" href="#slides__6">6</a>
                            <a class="cell" id="7" href="#slides__7">7</a>
                            <a class="cell" id="8" href="#slides__8">8</a>
                            <a class="cell" id="9" href="#slides__9">9</a>
                            <a class="cell" id="10" href="#slides__10">10</a>
                            <a class="cell" id="11" href="#slides__11">11</a>
                            <a class="cell" id="12" href="#slides__12">12</a>
                        </div>              
                    </div>
                </year>
                <month-slider>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slides">
                        <div id="slides__2022_1" class="slide">
                            <span class="slide__text">1</span>
                            <a class="slide__prev" href="#slides__2022_12" title="Next"></a>
                            <a class="slide__next" href="#slides__2022_2" title="Next"></a>
                        </div>
                        <div id="slides__2022_2" class="slide">
                            <span class="slide__text">2
                            02/01/2022: Application is open for NSF Summer REU on Imaging in Medicine and Biology for Underrepresented Minorities at University of Rochester</span>

                            <a class="slide__prev" href="#slides__2022_1" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_3" title="Next"></a>
                        </div>
                        <div id="slides__2022_3" class="slide">
                            <span class="slide__text">3</span>
                            <a class="slide__prev" href="#slides__2022_2" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_4" title="Next"></a>
                        </div>
                        <div id="slides__2022_4" class="slide">
                            <span class="slide__text">4</span>
                            <a class="slide__prev" href="#slides__2022_3" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_5" title="Prev"></a>
                        </div>
                        <div id="slides__2022_5" class="slide">
                            <span class="slide__text">5</span>
                            <a class="slide__prev" href="#slides__2022_4" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_6" title="Next"></a>
                        </div>
                        <div id="slides__2022_6" class="slide">
                            <span class="slide__text">6</span>
                            <a class="slide__prev" href="#slides__2022_5" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_7" title="Next"></a>
                        </div>
                        <div id="slides__2022_7" class="slide">
                            <span class="slide__text">7</span>
                            <a class="slide__prev" href="#slides__2022_6" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_8" title="Next"></a>
                        </div>
                        <div id="slides__2022_8" class="slide">
                            <span class="slide__text">8</span>
                            <a class="slide__prev" href="#slides__2022_7" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_9" title="Next"></a>
                        </div>
                        <div id="slides__2022_9" class="slide">
                            <span class="slide__text">9</span>
                            <a class="slide__prev" href="#slides__2022_8" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_10" title="Next"></a>
                        </div>
                        <div id="slides__2022_10" class="slide">
                            <span class="slide__text">10</span>
                            <a class="slide__prev" href="#slides__2022_9" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_11" title="Next"></a>
                        </div>
                        <div id="slides__2022_11" class="slide">
                            <span class="slide__text">11</span>
                            <a class="slide__prev" href="#slides__2022_10" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_12" title="Next"></a>
                        </div>
                        <div id="slides__2022_12" class="slide">
                            <span class="slide__text">12</span>
                            <a class="slide__prev" href="#slides__2022_11" title="Prev"></a>
                            <a class="slide__next" href="#slides__2022_1" title="Next"></a>
                        </div>
                        </div>

                        <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__2022_1"></a>
                        <a class="slider__navlink" href="#slides__2022_2"></a>
                        <a class="slider__navlink" href="#slides__2022_3"></a>
                        <a class="slider__navlink" href="#slides__2022_4"></a>
                        <a class="slider__navlink" href="#slides__2022_5"></a>
                        <a class="slider__navlink" href="#slides__2022_6"></a>
                        <a class="slider__navlink" href="#slides__2022_7"></a>
                        <a class="slider__navlink" href="#slides__2022_8"></a>
                        <a class="slider__navlink" href="#slides__2022_9"></a>
                        <a class="slider__navlink" href="#slides__2022_10"></a>
                        <a class="slider__navlink" href="#slides__2022_11"></a>
                        <a class="slider__navlink" href="#slides__2022_12"></a>
                        </div>
                    </div>
                </div>
                </month-slider>
            </div>

            <div class="news-container">
                <year>2021</year>
                <month-slider>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slides">
                        <div id="slides__2021_1" class="slide">
                            <span class="slide__text">1</span>
                            <a class="slide__prev" href="#slides__2021_12" title="Next"></a>
                            <a class="slide__next" href="#slides__2021_2" title="Next"></a>
                        </div>
                        <div id="slides__2021_2" class="slide">
                            <span class="slide__text">2
                            02/01/2022: Application is open for NSF Summer REU on Imaging in Medicine and Biology for Underrepresented Minorities at University of Rochester</span>

                            <a class="slide__prev" href="#slides__2021_1" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_3" title="Next"></a>
                        </div>
                        <div id="slides__2021_3" class="slide">
                            <span class="slide__text">3</span>
                            <a class="slide__prev" href="#slides__2021_2" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_4" title="Next"></a>
                        </div>
                        <div id="slides__2021_4" class="slide">
                            <span class="slide__text">4</span>
                            <a class="slide__prev" href="#slides__2021_3" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_5" title="Prev"></a>
                        </div>
                        <div id="slides__2021_5" class="slide">
                            <span class="slide__text">5</span>
                            <a class="slide__prev" href="#slides__2021_4" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_6" title="Next"></a>
                        </div>
                        <div id="slides__2021_6" class="slide">
                            <span class="slide__text">6</span>
                            <a class="slide__prev" href="#slides__2021_5" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_7" title="Next"></a>
                        </div>
                        <div id="slides__2021_7" class="slide">
                            <span class="slide__text">7</span>
                            <a class="slide__prev" href="#slides__2021_6" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_8" title="Next"></a>
                        </div>
                        <div id="slides__2021_8" class="slide">
                            <span class="slide__text">8</span>
                            <a class="slide__prev" href="#slides__2021_7" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_9" title="Next"></a>
                        </div>
                        <div id="slides__2021_9" class="slide">
                            <span class="slide__text">9</span>
                            <a class="slide__prev" href="#slides__2021_8" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_10" title="Next"></a>
                        </div>
                        <div id="slides__2021_10" class="slide">
                            <span class="slide__text">10</span>
                            <a class="slide__prev" href="#slides__2021_9" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_11" title="Next"></a>
                        </div>
                        <div id="slides__2021_11" class="slide">
                            <span class="slide__text">11</span>
                            <a class="slide__prev" href="#slides__2021_10" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_12" title="Next"></a>
                        </div>
                        <div id="slides__2021_12" class="slide">
                            <span class="slide__text">12</span>
                            <a class="slide__prev" href="#slides__2021_11" title="Prev"></a>
                            <a class="slide__next" href="#slides__2021_1" title="Next"></a>
                        </div>
                        </div>

                        <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__2021_1"></a>
                        <a class="slider__navlink" href="#slides__2021_2"></a>
                        <a class="slider__navlink" href="#slides__2021_3"></a>
                        <a class="slider__navlink" href="#slides__2021_4"></a>
                        <a class="slider__navlink" href="#slides__2021_5"></a>
                        <a class="slider__navlink" href="#slides__2021_6"></a>
                        <a class="slider__navlink" href="#slides__2021_7"></a>
                        <a class="slider__navlink" href="#slides__2021_8"></a>
                        <a class="slider__navlink" href="#slides__2021_9"></a>
                        <a class="slider__navlink" href="#slides__2021_10"></a>
                        <a class="slider__navlink" href="#slides__2021_11"></a>
                        <a class="slider__navlink" href="#slides__2021_12"></a>
                        </div>
                    </div>
                </div>
                </month-slider>
            </div>
        </main>);
    }
}

export default News;