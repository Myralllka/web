// main part is from here https://daveceddia.com/react-practice-projects/
// https://codesandbox.io/s/9oy853m8xy?file=/src/App.js:42-88

import React, {Component} from 'react'
import '../styles/metronome.scss'
import '../styles/main.css'
import click1 from '../sounds/click1.wav'
import click2 from '../sounds/click2.wav'

export default class Metronome extends Component {
    constructor() {
        super();
        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4,
        }
        this.click1 = new Audio(click1)
        this.click2 = new Audio(click2)
    }

    handleBpmChange = e => {
        const bpm = e.target.value
        if (this.state.playing) {
            clearInterval(this.timer)
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000)

            this.setState({
                count: 0,
                bpm
            })
        } else {
            this.setState({bpm})
        }
    }

    startStop = () => {
        if (this.state.playing) {
            clearInterval(this.timer)
            this.setState({
                playing: false
            })
        } else {
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            )
            this.setState(
                {
                    count: 0,
                    playing: true,
                },
                this.playClick
            )
        }
    }

    playClick = () => {
        const {count, beatsPerMeasure} = this.state
        if (count % beatsPerMeasure === 0) {
            this.click2.play()
        } else {
            this.click1.play()
        }
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }))
    }

    componentDidMount() {
        clearInterval(this.timer)
        this.setState({
            playing: false
        })
    }

    render() {
        const {playing, bpm} = this.state

        return (
            <div className='metronome'>
                <div className='bpm-slider'>
                    {bpm} BPM
                    <input
                        type='range'
                        min='60'
                        max='240'
                        value={bpm}
                        onChange={this.handleBpmChange}
                    />
                </div>
                <button onClick={this.startStop}>
                    {playing ? 'Stop' : 'Play'}
                </button>

            </div>
        )
    }
}