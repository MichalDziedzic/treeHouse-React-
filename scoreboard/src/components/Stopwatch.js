import React, {Component} from 'react';

class Stopwatch extends Component {

    state={
        isRunning:false,
        elapsedTime:0,
        previousTime:0,
    }
    handleStopwatch=()=>
    {
        console.log(this.state.isRunning)
        this.setState((prevState)=>({isRunning:!prevState.isRunning}));
        console.log(this.state.isRunning)
        if(!this.setState.isRunning)
            this.setState({previousTime:Date.now()})
    }
    componentDidMount()
    {
        this.intervalID=setInterval(() =>this.tick(),100);
    }
    tick = () => 
    {
        console.log('test');
       if(this.state.isRunning)
       {
           const now=Date.now();
           this.setState(prevState=>({
               previousTime:now,
               elapsedTime:prevState.elapsedTime + (now - this.state.previousTime)
           }))
       }
    }
    render()
    {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime / 1000)}</span>
                <button onClick={this.handleStopwatch}>
                { this.state.isRunning ? 'Stop' : 'Start'}
                </button> 
                <button>Reset</button>
            </div>

        )
    }

}
export default Stopwatch ;