$(function () {
    //console.log("ready!");

    function setTime() {
        var now            = new Date(),
            hour           = now.getHours(),
            hourClass,
            minutes        = now.getMinutes(),
            minutesClass   = 'zero',
            minutesNumeric = false;

        $('.active').removeClass('active');

        //minutes = now.getSeconds();
        //hour = 23;
        //minutes = 45;
        //console.log(minutes);

        //set minute class
        if (minutes > 2 && minutes <= 7 || minutes > 53 && minutes < 58) { //five
            minutesClass = 'five';
            minutesNumeric = true;

        } else if (minutes > 7 && minutes <= 13 || minutes > 47 && minutes <= 53) { //ten
            minutesClass = 'ten';
            minutesNumeric = true;

        } else if (minutes > 13 && minutes <= 17 || minutes > 42 && minutes <= 47) { //quarter
            minutesClass = 'quarter';

        } else if (minutes > 17 && minutes <= 25 || minutes > 35 && minutes <= 42) { //twenty
            minutesClass = 'twenty';
            minutesNumeric = true;

        } else if (minutes > 25 && minutes <= 35) { //half
            minutesClass = 'half';
        }

        if (minutesClass !== 'zero') {
            if (minutes <= 35) {
                $('.minutes.past').addClass('active');
            } else {
                $('.minutes.to').addClass('active');
                hour++;
            }
        } else {
            if (minutes >= 30) {
                hour++;
            }
            $('.hour.oclock').addClass('active');
        }

        if (minutesNumeric) {
            $('.minutes.numeric').addClass('active');
        } else {
            if (minutesClass !== 'zero') {
                $('.minutes.a').addClass('active');
            }
        }

        //set hour class
        switch (hour) {
            case 1:
            case 13:
                hourClass = 'one';
                break;

            case 2:
            case 14:
                hourClass = 'two';
                break;

            case 3:
            case 15:
                hourClass = 'three';
                break;

            case 4:
            case 16:
                hourClass = 'four';
                break;

            case 5:
            case 17:
                hourClass = 'five';
                break;

            case 6:
            case 18:
                hourClass = 'six';
                break;

            case 7:
            case 19:
                hourClass = 'seven';
                break;

            case 8:
            case 20:
                hourClass = 'eight';
                break;

            case 9:
            case 21:
                hourClass = 'nine';
                break;

            case 10:
            case 22:
                hourClass = 'ten';
                break;

            case 11:
            case 23:
                hourClass = 'eleven';
                break;

            case 0:
            case 12:
            case 24:
                hourClass = 'twelve';
                break;
        }

        //console.log(hour);
        //console.log(hourClass);

        $('.hour.' + hourClass).addClass('active');
        $('.minutes.' + minutesClass).addClass('active');
    }

    setTime();
    setInterval(function () {
        setTime();
    }, 5000);
});