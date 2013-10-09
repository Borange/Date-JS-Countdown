this.countDown = this.countDown || {};

$(function(){

    var Counter = function(day, hours, minute, second){
        this.init(day, hours, minute, second);
    };

    var prototype = Counter.prototype;

    prototype.timerIntervallIndex = null;

    prototype.days = 0;

    prototype.hours = 0;

    prototype.minutes = 0;

    prototype.seconds = 0;

    prototype.target_date = null;

    countDown.pointer = null;

    prototype.init = function(day, hours, minute, second){

    	var date = new Date();
    	date.setDate(day);
    	date.setHours(hours, minute, second);
    	this.target_date = date.getTime();
    };

    prototype.startTimer = function(){
    	var thisPointer = this;
	    setInterval(function () {
	        thisPointer.updateTimerView();
	    }, 1000);
    };

    prototype.updateTimerView = function(){
    	var current_date = new Date().getTime();
        var seconds_left = (this.target_date - current_date) / 1000;
     
        this.days = parseInt(seconds_left / 86400);
        this.seconds_left = seconds_left % 86400;
         
        this.hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        this.minutes = parseInt(seconds_left / 60);
        this.seconds = parseInt(seconds_left % 60);    
        
        var countdown = document.getElementById("countdown");
        countdown.innerHTML = this.convertTimeString(this.days) + "d, " + this.convertTimeString(this.hours) + 
        "h, " + this.convertTimeString(this.minutes) + "m, " + this.convertTimeString(this.seconds) + "s";
    };


    prototype.convertTimeString = function(time){
    	if (time < 10) {
    		return "0" + time;
    	};
    	return time;
    }

    countDown.Counter = Counter;
});
