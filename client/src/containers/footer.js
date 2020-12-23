import React from "react";
import Footer from "../components/Footer";
import { 
    DiMysql, 
    DiJavascript1, 
    DiMongodb,
    DiReact,
    DiHtml5,
    DiCss3,
    DiNodejsSmall,   
} from "react-icons/di";

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>    
                <Footer.Link href="/">dana weijers 2020</Footer.Link>
                {/* <Footer.Link href="#">linkedin</Footer.Link>
                <Footer.Link href="#">github</Footer.Link> */}
                {/* <DiJavascript1 />
                <DiReact />
                <DiNodejsSmall />
                <DiMongodb />
                <DiMysql />
                <DiHtml5 />
                <DiCss3 /> */}
            </Footer.Wrapper>
        </Footer>
    );
};


 