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
                            <div class="cell" id="1"><a href="#slides__1">1</a></div>
                            <div class="cell" id="2"><a href="#slides__2">2</a></div>
                            <div class="cell" id="3"><a href="#slides__3">3</a></div>
                            <div class="cell" id="4"><a href="#slides__4">4</a></div>
                            <div class="cell" id="5"><a href="#slides__5">5</a></div>
                            <div class="cell" id="6"><a href="#slides__6">6</a></div>
                            <div class="cell" id="7"><a href="#slides__7">7</a></div>
                            <div class="cell" id="8"><a href="#slides__8">8</a></div>
                            <div class="cell" id="9"><a href="#slides__9">9</a></div>
                            <div class="cell" id="10"><a href="#slides__10">10</a></div>
                            <div class="cell" id="11"><a href="#slides__11">11</a></div>
                            <div class="cell" id="12"><a href="#slides__12">12</a></div>
                        </div>              
                    </div>
                </year>
                <month-slider>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slides">
                        <div id="slides__1" class="slide">
                            <span class="slide__text">1</span>
                            <a class="slide__prev" href="#slides__12" title="Next"></a>
                            <a class="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" class="slide">
                            <span class="slide__text">2
                            02/01/2022: Application is open for NSF Summer REU on Imaging in Medicine and Biology for Underrepresented Minorities at University of Rochester</span>

                            <a class="slide__prev" href="#slides__1" title="Prev"></a>
                            <a class="slide__next" href="#slides__3" title="Next"></a>
                        </div>
                        <div id="slides__3" class="slide">
                            <span class="slide__text">3</span>
                            <a class="slide__prev" href="#slides__2" title="Prev"></a>
                            <a class="slide__next" href="#slides__4" title="Next"></a>
                        </div>
                        <div id="slides__4" class="slide">
                            <span class="slide__text">4</span>
                            <a class="slide__prev" href="#slides__3" title="Prev"></a>
                            <a class="slide__next" href="#slides__5" title="Prev"></a>
                        </div>
                        <div id="slides__5" class="slide">
                            <span class="slide__text">5</span>
                            <a class="slide__prev" href="#slides__4" title="Prev"></a>
                            <a class="slide__next" href="#slides__6" title="Next"></a>
                        </div>
                        <div id="slides__6" class="slide">
                            <span class="slide__text">6</span>
                            <a class="slide__prev" href="#slides__5" title="Prev"></a>
                            <a class="slide__next" href="#slides__7" title="Next"></a>
                        </div>
                        <div id="slides__7" class="slide">
                            <span class="slide__text">7</span>
                            <a class="slide__prev" href="#slides__6" title="Prev"></a>
                            <a class="slide__next" href="#slides__8" title="Next"></a>
                        </div>
                        <div id="slides__8" class="slide">
                            <span class="slide__text">8</span>
                            <a class="slide__prev" href="#slides__7" title="Prev"></a>
                            <a class="slide__next" href="#slides__9" title="Next"></a>
                        </div>
                        <div id="slides__9" class="slide">
                            <span class="slide__text">9</span>
                            <a class="slide__prev" href="#slides__8" title="Prev"></a>
                            <a class="slide__next" href="#slides__10" title="Next"></a>
                        </div>
                        <div id="slides__10" class="slide">
                            <span class="slide__text">10</span>
                            <a class="slide__prev" href="#slides__9" title="Prev"></a>
                            <a class="slide__next" href="#slides__11" title="Next"></a>
                        </div>
                        <div id="slides__11" class="slide">
                            <span class="slide__text">11</span>
                            <a class="slide__prev" href="#slides__10" title="Prev"></a>
                            <a class="slide__next" href="#slides__12" title="Next"></a>
                        </div>
                        <div id="slides__12" class="slide">
                            <span class="slide__text">12</span>
                            <a class="slide__prev" href="#slides__11" title="Prev"></a>
                            <a class="slide__next" href="#slides__1" title="Next"></a>
                        </div>
                        </div>

                        <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__1"></a>
                        <a class="slider__navlink" href="#slides__2"></a>
                        <a class="slider__navlink" href="#slides__3"></a>
                        <a class="slider__navlink" href="#slides__4"></a>
                        <a class="slider__navlink" href="#slides__5"></a>
                        <a class="slider__navlink" href="#slides__6"></a>
                        <a class="slider__navlink" href="#slides__7"></a>
                        <a class="slider__navlink" href="#slides__8"></a>
                        <a class="slider__navlink" href="#slides__9"></a>
                        <a class="slider__navlink" href="#slides__10"></a>
                        <a class="slider__navlink" href="#slides__11"></a>
                        <a class="slider__navlink" href="#slides__12"></a>
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
                        <div id="slides__1" class="slide">
                            <span class="slide__text">1</span>
                            <a class="slide__prev" href="#slides__12" title="Next"></a>
                            <a class="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" class="slide">
                            <span class="slide__text">2
                            02/01/2022: Application is open for NSF Summer REU on Imaging in Medicine and Biology for Underrepresented Minorities at University of Rochester</span>

                            <a class="slide__prev" href="#slides__1" title="Prev"></a>
                            <a class="slide__next" href="#slides__3" title="Next"></a>
                        </div>
                        <div id="slides__3" class="slide">
                            <span class="slide__text">3</span>
                            <a class="slide__prev" href="#slides__2" title="Prev"></a>
                            <a class="slide__next" href="#slides__4" title="Next"></a>
                        </div>
                        <div id="slides__4" class="slide">
                            <span class="slide__text">4</span>
                            <a class="slide__prev" href="#slides__3" title="Prev"></a>
                            <a class="slide__next" href="#slides__5" title="Prev"></a>
                        </div>
                        <div id="slides__5" class="slide">
                            <span class="slide__text">5</span>
                            <a class="slide__prev" href="#slides__4" title="Prev"></a>
                            <a class="slide__next" href="#slides__6" title="Next"></a>
                        </div>
                        <div id="slides__6" class="slide">
                            <span class="slide__text">6</span>
                            <a class="slide__prev" href="#slides__5" title="Prev"></a>
                            <a class="slide__next" href="#slides__7" title="Next"></a>
                        </div>
                        <div id="slides__7" class="slide">
                            <span class="slide__text">7</span>
                            <a class="slide__prev" href="#slides__6" title="Prev"></a>
                            <a class="slide__next" href="#slides__8" title="Next"></a>
                        </div>
                        <div id="slides__8" class="slide">
                            <span class="slide__text">8</span>
                            <a class="slide__prev" href="#slides__7" title="Prev"></a>
                            <a class="slide__next" href="#slides__9" title="Next"></a>
                        </div>
                        <div id="slides__9" class="slide">
                            <span class="slide__text">9</span>
                            <a class="slide__prev" href="#slides__8" title="Prev"></a>
                            <a class="slide__next" href="#slides__10" title="Next"></a>
                        </div>
                        <div id="slides__10" class="slide">
                            <span class="slide__text">10</span>
                            <a class="slide__prev" href="#slides__9" title="Prev"></a>
                            <a class="slide__next" href="#slides__11" title="Next"></a>
                        </div>
                        <div id="slides__11" class="slide">
                            <span class="slide__text">11</span>
                            <a class="slide__prev" href="#slides__10" title="Prev"></a>
                            <a class="slide__next" href="#slides__12" title="Next"></a>
                        </div>
                        <div id="slides__12" class="slide">
                            <span class="slide__text">12</span>
                            <a class="slide__prev" href="#slides__11" title="Prev"></a>
                            <a class="slide__next" href="#slides__1" title="Next"></a>
                        </div>
                        </div>

                        <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__1"></a>
                        <a class="slider__navlink" href="#slides__2"></a>
                        <a class="slider__navlink" href="#slides__3"></a>
                        <a class="slider__navlink" href="#slides__4"></a>
                        <a class="slider__navlink" href="#slides__5"></a>
                        <a class="slider__navlink" href="#slides__6"></a>
                        <a class="slider__navlink" href="#slides__7"></a>
                        <a class="slider__navlink" href="#slides__8"></a>
                        <a class="slider__navlink" href="#slides__9"></a>
                        <a class="slider__navlink" href="#slides__10"></a>
                        <a class="slider__navlink" href="#slides__11"></a>
                        <a class="slider__navlink" href="#slides__12"></a>
                        </div>
                    </div>
                </div>
                </month-slider>
            </div>
        </main>);
    }
}

export default News;