function MainApp() {

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    console.log([hour, minute, second]);

    var hourSlider = new Slider(hour, { hour: true });
    var minuteSlider = new Slider(minute, { hour: false });
    var secondSlider = new Slider(second, { hour: false });

    hourSlider.initClock();
    minuteSlider.initClock();
    secondSlider.initClock();


    //set time out

    setInterval(function () {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        hourSlider.changeHighlightItem(h, 0);
        minuteSlider.changeHighlightItem(m, 1);
        secondSlider.changeHighlightItem(s, 2);
    }, 1000);
}


MainApp();