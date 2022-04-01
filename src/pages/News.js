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
        </main>);
    }
}

export default News;