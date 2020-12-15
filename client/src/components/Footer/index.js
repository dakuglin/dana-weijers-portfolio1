import React from "react";
import { Container, Row, Column, Wrapper, Link, Title } from "./styles/footer";


export default function Footer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container> 
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}


// import { 
//     DiMysql, 
//     DiJavascript1, 
//     DiMongodb,
//     DiReact,
//     DiHtml5,
//     DiCss3,
//     DiNodejsSmall,
//     DiGithubBadge,
    
// } from "react-icons/di";
// import "./footer.css";

 // return(
    //     <>
    //     <div>
    //         <p className="footer"> dana weijers 2020</p>
    //         <div>
    //             <DiJavascript1 />
    //             <DiReact />
    //             <DiNodejsSmall />
    //             <DiMysql />
    //             <DiMongodb />
    //             <DiHtml5 />
    //             <DiCss3 />
    //             <DiGithubBadge />
                

    //         </div>
    //     </div>
        
    //     </>
    // );