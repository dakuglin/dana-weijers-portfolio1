import React from "react";
import { 
    DiMysql, 
    DiJavascript1, 
    DiMongodb,
    DiReact,
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiGithubBadge,
    
} from "react-icons/di";

function Footer() {
    return(
        <>
        <div>
            <p className="footer"> dana weijers 2020</p>
            <div>
                <DiJavascript1 />
                <DiReact />
                <DiNodejsSmall />
                <DiMysql />
                <DiMongodb />
                <DiHtml5 />
                <DiCss3 />
                <DiGithubBadge />
                

            </div>
        </div>
        
        </>
    );
};

export default Footer;