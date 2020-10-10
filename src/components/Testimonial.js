import React from 'react';
import { Link } from 'react-router-dom';
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
                        <b style={{fontSize: '18px'}}>Nyles Washington</b>
                        <br/><br/>
                        <p>"Working with Joseph was a wonderful time. He always brought refreshing, yet fitting ideas into the room. I look forward to collaborating again!" 
                        </p>
                    </div>
                    <div className="testamonials">
                        <b style={{fontSize: '18px'}}>Allison Webster</b>
                        <br/><br/>
                        <p>“Joseph Kennemer is the most professional, creative sound designer I've worked with in Austin. He stretches what you think possible and only adds to the narrative. My experience with him has been nothing but delightful!” 
                        </p>
                    </div>
                    <Link to='/contact' id="yessum" className="btn btn-outline-light" role="button"><i className="far fa-comments"></i> Contact Me</Link>
                </FadeIn>
            </div>
        </>
    )
}