import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';

export default class Notes extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">Learn The Notes On The Guitar</h1>
                <div className="main-element">
                    <h4 className="header-element"><a
                        href="https://www.leadguitarlessons.com/guitar-lessons/general/learn-the-notes-on-the-guitar.htm"
                        target="_blank"
                        rel="noopener noreferrer">Source</a></h4>
                    <p>One of the most important guitar lessons to master is learning the notes on the fretboard. Even
                        if you don’t know chord placement, you can still find chords if you know where each note is.
                        Don’t let the long fretboard scare you away. It’s far easier to learn the guitar fretboard than
                        you might think. Luckily, a little practice and a few tricks make it easy.</p>
                    <h2 className="header-element">The Natural Musical Alphabet</h2>
                    <div><p className="main-element">When learning how to play guitar, you should know the musical
                        alphabet is a little different than the alphabet you learned as a child. Learning notes starts
                        with some basic music theory. With the natural musical alphabet, you only have seven notes – A,
                        B, C, D, E, F, and G. They’re called natural since you have no flats or sharps. All your sharps
                        and flats occur between these notes. Once you know these, learning sharps and flats is as simple
                        as moving up or down.</p></div>
                    <img src={require("../img/notes/learn-fretboard-alphabet.png")} className="chords-img"
                         alt="Sorry.."/>
                    <h2 className="header-element">Sharps & Flats</h2>
                    <div><p className="main-element">
                        Sharps and flats are just half-steps away from the natural notes. So what’s the big difference
                        between the two? It’s all in how you move. Every half-step (or fret) changes the note.

                        Sharps are a half-step up from a natural note. For instance, a half-step above A is A#.

                        Flats are the exact opposite. One half-step down leads to a flat. For instance, if you step down
                        from A, you’d get Ab. The confusing part comes into play with a single note has two names and
                        the name depends mainly on the key you’re playing in. For instance, the note between D and E is
                        D# if you’re stepping up and Eb if you’re stepping down.
                    </p></div>
                    <img src={require("../img/notes/learn-fretboard-sharp-flat.png")} className="chords-img"
                         alt="Sorry.."/>
                    <div><p className="important">Pro Tip: An easy way to keep your sharps and flats straight is to
                        think of stepping on a bug. When you step down on the bug, it’s flat, just like notes on your
                        guitar.</p></div>
                    <h2 className="header-element">The BC & EF Rule</h2>
                    <div><p className="main-element">All natural notes have sharps and flats between them except BC and
                        EF. A half-step between these leads to the next natural note. Stepping up from B leads you to C.
                        Stepping down from F leads to E.</p></div>
                    <h2 className="header-element">String Names</h2>
                    <div><p className="main-element">
                        Using standard tuning, your strings are E, A, D, G, B, and E. If you played an open string,
                        meaning you’re not holding down a note at any fret, those would be the notes played. This
                        gives you a reference point to start learning. As you may notice, your high and low string
                        are both E, meaning they’ll have the same notes, giving you less to memorize.
                    </p></div>
                    <img src={require("../img/notes/string-names.png")} className="chords-img" alt="Sorry.."/>
                    <h2 className="header-element">Count Up The Frets On Each String</h2>
                    <div><p className="main-element">At this point, it’s a simple matter of counting up notes as you go
                        along the fretboard. As you can see from the following fretboard images, the first fret is one
                        half-step up from the string name or note. Just remember the BC and EF rule to keep your notes
                        in order.
                    </p></div>
                    <h3 className="header-element">E Strings:</h3>
                    <img src={require("../img/notes/fretboard-e-string.png")} className="chords-img" alt="Sorry.."/>
                    <h3 className="header-element">A Strings:</h3>
                    <img src={require("../img/notes/fretboard-a-string.png")} className="chords-img" alt="Sorry.."/>
                    <h3 className="header-element">D Strings:</h3>
                    <img src={require("../img/notes/fretboard-d-string.png")} className="chords-img" alt="Sorry.."/>
                    <h3 className="header-element">G Strings:</h3>
                    <img src={require("../img/notes/fretboard-g-string.png")} className="chords-img" alt="Sorry.."/>
                    <h3 className="header-element">B Strings:</h3>
                    <img src={require("../img/notes/fretboard-b-string.png")} className="chords-img" alt="Sorry.."/>
                    <h2 className="header-element">12th Fret Octave</h2>
                    <div><p className="main-element">Now for the next trick in helping you learn the guitar fretboard.
                        You only need to learn the first 12 frets as the notes begin repeating. For instance, look at
                        the B String image above. On fret 12, the note becomes B again. Fret 13 would then be C, the
                        same as fret 1. That’s much less to learn.
                    </p></div>
                    <h2 className="header-element">Octave Centers</h2>
                    <div><p className="main-element">
                        All you really have to learn is octave centers and your E and A strings. You can find any note
                        on the fretboard just by referencing octaves on these strings. References are always two strings
                        over. For instance, in the diagram below, you can see that we’re finding G on the D string by
                        referencing its location on the E string. You could then use the D string to find notes on the B
                        string.
                    </p></div>
                    <img src={require("../img/notes/octave-centers-1.png")} className="chords-img" alt="Sorry.."/>
                    <div><p className="main-element">
                        In the same way, you could use your A string to find the notes on the G string, then the G
                        string to find the notes on the high E string.
                    </p></div>
                    <img src={require("../img/notes/octave-centers-2.png")} className="chords-img" alt="Sorry.."/>
                    <h3 className="header-element">Putting It All Together</h3>
                    <div><p className="main-element">
                        Now, it’s time to start learning those notes on your E and A strings. Get those down and you’ll
                        quickly master the notes on the fretboard. Here is all notes together.
                    </p></div>
                    <img src={require("../img/notes/notes-all.png")} className="chords-img" alt="Sorry.."/>

                </div>
            </div>
        )
    }
}