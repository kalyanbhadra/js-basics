function StopClock() {
    this.duration = 0.0;
    this.isStart = false;
    this.isStopped = false;

    start = function(){
        if(isStart){
            new Error("StopClock is already running.");
        }
        else{
            this.isStart = true;
            while(!this.isStopped){
                this.duration = this.duration + 0.01;
            }
        }
    }

    stop = function(){
        if(this.isStopped){
            new Error("StopClock is already stopped.");
        }
        else{
            this.isStopped = true;
        }
    }
    
    this.reset = function(){
        this.duration = 0.0;
    }
}

let clock = new StopClock();