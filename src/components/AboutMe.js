import React from 'react'
import FadeIn from 'react-fade-in';

export default function AboutMe() {
    return(
    <>
        <div className="amcontent">
            <FadeIn>
        <h1 id="proj">About Me</h1><br/>
        <img alt='Jospeh Kennemmer' id="hs" src="joe.jpg" className="img-fluid" />
            <div className="amtext">
                <p id="thetext"><br/>Sound is the puppet master of emotion. Let’s make your audience <strong><i>feel</i></strong> your story. <br/><br/>
                    
                    If you make commercials, films, or tv and need industry standard audio repair, sound effects that tell a story, or just need your project to sound cinematic, you’re in the right place. No matter what you have on your hands, We’ll make sure it sounds its absolute best.<br/><br/>
                    
                    I began working with sound in film at The University of Texas at Austin and have been fortunate to work on all kinds of projects since, from short documentaries to feature films, as a dialogue editor, sound designer, and re-recording mixer.<br/><br/>
                    
                    Since I was a child, movies have been at the forefront of my imagination. Soon after making films of my own, the power and mystery of sound in storytelling gripped me, propelling me into film sound. If I’m not re-watching Paul Thomas Anderson’s filmography, listening to the Allman brothers, or enjoying the great state of Texas, I’m probably manipulating recordings of baby tigers to create the sound of Cthulhu.<br/><br/>
                    
                    So let’s work together on your project! Whether it’s a feature film destined for festivals or a D&D podcast fan film that’ll make waves online, together, we’ll make it sound perfect.
                    <br/><br/>
                </p>
                <a id="yessum" className="btn btn-outline-light" href='/contact' role="button"><i className="far fa-comments"></i> Contact Me</a>
            </div>
            </FadeIn>
        </div>
    </>
    )
}