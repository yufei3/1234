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
                <year>2022</year>
                <month-slider>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slides">
                        <div id="slides__1" class="slide">
                            <span class="slide__text">1</span>
                            <a class="slide__prev" href="#slides__4" title="Next"></a>
                            <a class="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" class="slide">
                            <span class="slide__text">2</span>
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
                            <a class="slide__next" href="#slides__1" title="Prev"></a>
                        </div>
                        </div>

                        <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__1"></a>
                        <a class="slider__navlink" href="#slides__2"></a>
                        <a class="slider__navlink" href="#slides__3"></a>
                        <a class="slider__navlink" href="#slides__4"></a>
                        </div>
                    </div>
                </div>
                </month-slider>

               
            </div>
        </main>);
    }
}

export default News;