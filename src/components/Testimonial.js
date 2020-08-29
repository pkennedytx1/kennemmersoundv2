import React from 'react';
import FadeIn from 'react-fade-in';

export default function Testimonial() {
    return(
        <>
        <div class="content">
        <FadeIn>
        <div id="test">
        <h1 id='proj'>Testimonials</h1>
        </div>

        <div class="testamonials">
            <p>“A lot of people see talent and friendliness as a choice to make, but working with Joseph is so easy. He immediately showed an understanding of both the story and emotion of my film and brought ideas to the table that demonstrated that exceedingly well. He takes notes incredibly well, in high spirits, and it felt more like working “with” someone than “at” someone. His enthusiasm for film and his work is infectious and makes you excited about even the tiniest nuances of sound and cinema. Joseph is an absolute pleasure to work with." 
            <br/><br/>-Jackson Lowen
            </p>
        </div>
        <div class="testamonials">
            <p>"Working with Joseph was a wonderful time. He always brought refreshing, yet fitting ideas into the room. I look forward to collaborating again!" 
            <br/><br/>-Nyles Washington
            </p>
        </div>
        <div class="testamonials">
            <p>“Joseph Kennemer is the most professional, creative sound designer I've worked with in Austin. He stretches what you think possible and only adds to the narrative. My experience with him has been nothing but delightful!” 
            <br/><br/>-Allison Webster
            </p>
        </div>
        <a id="yessum" class="btn btn-outline-light" href="contact.html" role="button"><i class="far fa-comments"></i> Contact Me</a>
        </FadeIn>
        </div>

        
        <footer class="footer">
            <p id="landingquote">“Sound has a life and a path of its own.
            <br/>-Skip Lievsay<br/></p>
            <p>Labradane Development &copy</p>
        </footer>
        </>
    )
}