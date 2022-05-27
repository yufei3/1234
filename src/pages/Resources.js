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
                    perPage: 3,
                    focus    : 'center',
                    autoWidth: true,
                    }
                        } aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="https://s2.loli.net/2022/01/23/1VlaYOWy8kIbpqx.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://s2.loli.net/2022/01/23/XvPJKCsqSb5FRlc.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://s2.loli.net/2022/01/23/7UWpkFO65XygDEG.jpg" alt="Image 3" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://s2.loli.net/2022/01/23/corxTNekOUCWnDz.jpg" alt="Image 4" />
                    </SplideSlide>
                </Splide>
            </div>

        </main>);
    }
}

export default Resources;