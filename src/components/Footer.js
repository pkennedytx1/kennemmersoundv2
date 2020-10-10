import React from 'react';
import createReactClass from 'create-react-class'
import { Route} from 'react-router-dom';

const Footer = createReactClass({
    render: function() {
        return (
            <div className='site-footer'>
                    <Route exact path='/'>
                        <p id="reelquote">“The role of sound is really exactly what the role of every other aspect of filmmaking is, and that is to tell stories.”<br/>-Mark Mangini<br/></p>
                    </Route>
                    <Route exact path='/about'>
                        <p id="reelquote">“Sound affects us in a deeper way than image”<br/>-Walter Murch<br/></p>
                    </Route>
                    <Route exact path='/testimonials'>
                        <p id="reelquote">“Sound has a life and a path of its own.<br/>-Skip Lievsay<br/></p>
                    </Route>
                    <Route exact path='/contact'>
                        <p id="reelquote">"Sound can create a world of things that don't exist." <br/>-Ben Burtt<br/></p>
                    </Route>
                    <Route exact path='/reel'>
                        <p id="reelquote">“The role of sound is really exactly what the role of every other aspect of filmmaking is, and that is to tell stories.”<br/>-Mark Mangini<br/></p>
                    </Route>
                    <Route exact path='/projects'>
                        <p id="landingquote">“Sound is half of the experience”<br />-George Lucas<br /></p>
                    </Route>
                    <Route exact path='/admin'>
                        <p id="landingquote">“Hey Joe! You rock mate!”<br />-Patrick Kennedy<br /></p>
                    </Route>
            </div>
        );
    }
});

export default Footer;