import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';
import '../img/chords/E-major.jpg'

export default class Chords extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">Guitar chords</h1>
                <div className="main-element">
                    <h4 className="header-element"><a
                        href="https://www.libertyparkmusic.com/read-guitar-chord-diagrams/" target="_blank"
                        rel="noopener noreferrer">Source</a></h4>
                    <h2 className="header-element">What does a chord diagram look like?</h2>
                    <div className="main-element">Most chord diagrams will look very similar to the following image:</div>
                    <img src={require("../img/chords/E-major.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">Before getting into what all those numbers, dots, and letters mean,
                        let’s take a look at a blank diagram and break that down first:</div>
                    <img src={require("../img/chords/Guitar-chord-diagram.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">Beginning at the very top, the thick black bar represents the guitar’s
                        nut (the white, sometimes cream colored or black, object at the top of the fretboard on the
                        guitar that elevates the strings over the fretboard):</div>
                    <img src={require("../img/chords/Guitar-nut.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">The boxes that follow below the nut represent the different frets. The
                        first row of boxes represent the first fret, second row represents the second fret, and so
                        on.</div>
                    <img src={require("../img/chords/Guitar-fret.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element"><p className="important">The vertical lines that run down the diagram
                        represent the six strings on the guitar.</p> The leftmost line represents the sixth string:
                        which is the thickest string, the one that is closest to your head; and the line all the way to
                        the right represents the first string, which is the thinnest string, furthest away from your
                        head.
                    </div>
                    <img src={require("../img/chords/Guitar-strings.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">Now that we have gone through a blank diagram, let’s find out what those
                        numbers below the diagram mean.</div>
                    <h2 className="header-element">Finger Numbers</h2>
                    <p className="main-element">The numbers are telling you which finger you are going to use. The
                        fingers on your left hand are numbered from one through four. Here is what each number
                        represents:</p>
                    <img src={require("../img/chords/Fingering.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">Occasionally, you will see a “T” symbol instead of numbers. In this
                        case, that symbol is telling you to use your thumb to fret that particular note.</div>
                    <h2 className="header-element">What about the dots?</h2>
                    <div className="main-element"><p className="imortant">The black dots found on the chord diagrams tell
                        you which fret to press down, and on which string and with which numbered
                        finger. </p>Additionally, you will sometimes see circles above the nut. These circles tell you
                        to play that open string without pressing any fret. So using what we know so far about strings,
                        finger numbers, and dots, let’s check out that same chord diagram again:
                    </div>
                    <img src={require("../img/chords/E-major.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">In this diagram, we will place our middle finger on the second fret of
                        the fifth (A) string, ring finger on the second fret of the fourth (D) string, and index finger
                        on the first fret of the third (G) string. Since there are circles above the sixth (E), second
                        (B), and first (E) strings, we will also play those open strings.</div>
                    <h2 className="header-element">What are those letters above the diagram?</h2>
                    <div className="main-element">If we follow the previous diagram exactly as it is displayed, we will
                        create an E major chord. The large “E” above the diagram simply represents the chord that we are
                        currently playing. These letters can get really complicated, but as a beginner, you will mostly
                        likely be playing basic major and minor chords for a while.</div>
                    <h3 className="header-element">“X” symbol</h3>
                    <div className="main-element"><p className="important">Often, you will see X’s above the nut instead
                        of just O’s. These X’s tell you that you should not play that string for the current chord.</p>
                    </div>
                    <img src={require("../img/chords/D-major.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">In this diagram, we will only play strings four, three, two, and one.
                        Strings five and six have X’s above them, which means we will mute them, or avoid striking them
                        with our pick (or fingers).</div>
                    <h2 className="header-element">Barre symbol</h2>
                    <div className="main-element">For those of you who have gotten into playing barre chords already,
                        here's what a F major barre chord looks like:</div>
                    <img src={require("../img/chords/F-major.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">This curved line above the nut is letting you know that you will have to
                        use a barre technique to play this chord. If you’re curious about barre chords, please check
                        out <a
                            href="https://www.libertyparkmusic.com/barre-chords-made-easy/">this</a> article.</div>
                    <h2 className="header-element">What about notes above the fifth fret?</h2>
                    <div className="main-element">As you progress beyond open chords (chords with notes on open strings),
                        you will encounter chords with notes above the fifth fret.</div>
                    <img src={require("../img/chords/Eb-minor.jpg")} className="chords-img" alt="Sorry.."/>
                    <div className="main-element">In this Eb minor chord diagram, you will notice a “6fr” symbol to the
                        right of the diagram. This is to tell you that this diagram begins on the sixth fret.
                        Occasionally, you will see symbols like “VI” or just a “6” to let you know that the diagram
                        begins on the sixth fret.</div>
                    <h2 className="header-element">You’re ready to play!</h2>
                    <div className="main-element">That’s really all there is to it. It’s a very simple and easy to grasp
                        concept that can be understood within five minutes, but in order to remember and master this
                        concept, you will have to practice!</div>
                    <h1 className="header-element">More chords</h1>
                    <div className="main-element">Here you can find more chords to learn! Good luck.</div>
                    <img src={require("../img/chords/guitar-chord-chart.png")} className="chords-img" alt="Sorry.."/>
                </div>
            </div>

        )
    }
}