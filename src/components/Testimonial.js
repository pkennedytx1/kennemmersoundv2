import React from 'react';
import FadeIn from 'react-fade-in';

export default function Testimonial() {
    return(
        <>
            <div className="content">
                <FadeIn>
                    <div id="test">
                        <h1 id='proj'>Testimonials</h1>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Diego Lozano</b><br/>Director
                        <br/><br/>
                        <p>“It is rare that you find the perfect collaborator and that’s what Joseph is to me. My favorite thing about working with him is his creativity. He’s not someone you have to micromanage, he’s someone that’s going to come in and enhance your movie through the art of sound design. He will make your film make more sense and feel larger through his creative use of sound. I’m proud to work with him because I feel like he understands the process and is truly a professional that brings a lot to the table. I wouldn’t work with anyone else and I sincerely recommend Joseph for all commercial/film projects requiring Hollywood level sound.”
                        </p>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Leo Aguirre</b>
                        <br/><br/>
                        <p>“Joseph was an instrumental part of the process for this project. Joseph introduced elements that spoke to audial elements that transcended technical choices to speak to the experience of being from these two worlds (Mexico and the United States). Joseph, apart from being super receptive to feedback, was able to bring his own craft to the film. I'm looking forward to working on my next project with him.”
                        </p>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Jackson Lowen</b><br/>Screenwriter/Director
                        <br/><br/>
                        <p>“A lot of people see talent and friendliness as a choice to make, but working with Joseph is so easy. He immediately showed an understanding of both the story and emotion of my film and brought ideas to the table that demonstrated that exceedingly well. He takes notes incredibly well, in high spirits, and it felt more like working “with” someone than “at” someone. His enthusiasm for film and his work is infectious and makes you excited about even the tiniest nuances of sound and cinema. Joseph is an absolute pleasure to work with." 
                        </p>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Nyles Washington</b><br/>Actor/Screenwriter/Director
                        <br/><br/>
                        <p>"Working with Joseph was a wonderful time. He always brought refreshing, yet fitting ideas into the room. I look forward to collaborating again!" 
                        </p>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Allison Webster</b><br/>Actor/Screenwriter/Director
                        <br/><br/>
                        <p>“Joseph Kennemer is the most professional, creative sound designer I've worked with in Austin. He stretches what you think possible and only adds to the narrative. My experience with him has been nothing but delightful!” 
                        </p>
                    </div>
                    <a href='/contact' id="yessum" className="btn btn-outline-light" role="button"><i className="far fa-comments"></i> Contact Me</a>
                </FadeIn>
            </div>
        </>
    )
}