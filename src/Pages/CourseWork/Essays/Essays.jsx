import styled from 'styled-components';

/* Component ---------------------------*/

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question='01: What is the difference between HTML, CSS and JavaScript?'>
                <p><strong>HTML:</strong> Hyper Text Markup language is a web-based code language (though some might argue differently) that is focused mainly on content. The words on the page, the images, etc. Though styling and some minor interactive options exists inside of HTML its focus is the content seen online.</p>

                <p><strong>CSS:</strong> Cascading Style Sheets is a web-based code language that focuses on styling, or the look of things. Colors, typography, layout, etc. With more advanced application it can do some minor content creation and some solid interactive abilities with things like hovers and transitions.</p>

                <p><strong>JavaScript:</strong> JavaScript is a web-based coding language which was initially focused mainly on interactivity online. Lightboxes/pup-ups, slideshow/carousels, etc. It has now blow up in the modern web development world to more or less to most of the bulk of the work online. Though HTML and CSS are still needed if you are good enough with JavaScript it can be the majority of what you code in a modern site these days.</p>

            </Essay>
            <Essay question='02: What is the difference between Git and Github?'>
                <p><strong>Git:</strong> is the actual system that makes versioning possible</p>

                <p><strong>GitHub:</strong> is an online profile that uses Git for versioning your code and allows you to have a shared space to allow you and your team members use Git to work more effectively with your code.</p>

            </Essay>
            <Essay question='03: What is the difference between JQuery and React?'>
                <p><strong>JQuery:</strong> Though both are a version of JS jQuery is more interactive focused and is meant to be added to pages of HTML and CSS. It’s not impossible, but difficult and demanding to build up things like HTML and CSS with jQuery</p>

                <p><strong>React:</strong> Still a version of JS but more all-encompassing that jQuery. React and do structural work, help you with separating and organizing your site into more adaptable modular elements, and you can create HTML and CSS easier inside of React, even though you will still use direct HTML and CSS from time to time.</p>

            </Essay>
            <Essay question='04: What is the difference between What is the difference between a Front-End and Back-End Developer?'>
                <p><strong>Front-End Developer</strong> is referred to a coder that focuses more on the look of a site. They deal with HTML, CSS, and JS mainly.</p>

                <p><strong>Back-End Developer</strong> is referred to a coder that focuses more on the functionality of a website. Usually they will be deal with things like JS, PHP, MySQLi, Python, etc.</p>

            </Essay>
            <Essay question='05: What are the different ways we can link files/resources to our application?'>
                <p><strong>Document relative paths</strong> are links based off of the files that you are working on. ../ will move you back out of the directory that the file you are working on is found on, and folderName/ will take you into a folder or directory instead.</p>

                <p><strong>Absolute link</strong> jumps past all the folder systems based off of where your file is and sends you directly to a file no matter where the file you are working on is.</p>

            </Essay>
            <Essay question='06: What is the difference between jpg, gif, png and svg images?'>
                <p><strong>Jpg:</strong> pixel based (or bitmap), millions of colors, compressible, but no transparency. Great for photographs</p>

                <p><strong>Gif:</strong> pixel based (or bitmap), transparency capable, limited to 255 colors and is compressed by limited the number of colors use. It’s main claim to fame is that it can be animated. Best for classic and simple animations. Also I don’t think it should be pronounced Jif, because Jif already exists and it’s a peanut butter.</p>

                <p><strong>Png:</strong> pixel based (or bitmap), but technically has two camps png-8 and png-24. png-8 is more or less a Gif without animation, and a png-24 is like a jpg but it has true transparency or value based transparency. However these file types are non-compressible which makes them heavier than all other image types.</p>

                <p><strong>Svg:</strong> stands for scalable vector graphic and is described best as that. It’s a vector file instead and pixel based (or bitmap) thus it makes it “infinitely” scalable. Another cool thing about SVG files is that you can program the points and lines between them which means you can do some really awesome animation with them too.</p>
            </Essay>
            <Essay question='07: Define the Agile roles'>
                <p><strong>Product Owner:</strong></p>

                <p><strong>Product Manager:</strong></p>

                <p><strong>Business Analyst:</strong></p>

                <p><strong>Scrum Master:</strong></p>

                <p><strong>UX designer:</strong></p>

                <p><strong>Developer/Engineer:</strong></p>

                <p><strong>QA/SDET:</strong></p>

                <p><strong>DevOps:</strong></p>
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;