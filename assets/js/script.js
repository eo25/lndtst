var arrayAnswers = [];
var currentObject = {};
var sumPoints = 0;
var isResultText1 = false;
var isResultText2 = false;
var isResultText3 = false;
// questions with img
var numLineQ14 = 1;
var sumPointsQ14 = 0;
var resultMarkQ14 = 0;
var counterSec = 0;
var timer = new Timer();
var currentCardQ15 = 1;
var sumPointsQ15 = 0;
var resultMarkQ15 = 0;
var isTestStarted = false;

$('#popoverData').popover();
$('#popoverData2').popover();

$('#section2-1').on("mousemove mouseenter mouseleave", function () {
    if(!$("#section2-1").hasClass( "state-open" )) {
        $('#section2').removeClass('fa-angle-up');
        $('#section2').addClass('fa-angle-down');
    } else if($("#section2-1").hasClass("state-open")) {
        $('#section2').removeClass('fa-angle-down');
        $('#section2').addClass('fa-angle-up');
    }
});

$('#section2-1').on("click", function () {
    if($( "#section2" ).hasClass( "fa-angle-up" )) {
        $('#section2').removeClass('fa-angle-up');
        $('#section2').addClass('fa-angle-down');
    } else if($( "#section2" ).hasClass( "fa-angle-down" )) {
        $('#section2').removeClass('fa-angle-down');
        $('#section2').addClass('fa-angle-up');
    }
});

$('#section1-1').on("mousemove mouseenter mouseleave", function () {
    if(!$("#section1-1").hasClass( "state-open" )) {
        $('#section1').removeClass('fa-angle-up');
        $('#section1').addClass('fa-angle-down');
    } else if($("#section1-1").hasClass("state-open")) {
        $('#section1').removeClass('fa-angle-down');
        $('#section1').addClass('fa-angle-up');
    }
});

$('#section1-1').on("click", function () {
    if($( "#section1" ).hasClass( "fa-angle-up" )) {
        $('#section1').removeClass('fa-angle-up');
        $('#section1').addClass('fa-angle-down');
    } else if($( "#section1" ).hasClass( "fa-angle-down" )) {
        $('#section1').removeClass('fa-angle-down');
        $('#section1').addClass('fa-angle-up');
    }
});

$('#section0-1').on("mousemove mouseenter mouseleave", function () {
    if(!$("#section0-1").hasClass( "state-open" )) {
        $('#section0').removeClass('fa-angle-up');
        $('#section0').addClass('fa-angle-down');
    } else if($("#section0-1").hasClass("state-open")) {
        $('#section0').removeClass('fa-angle-down');
        $('#section0').addClass('fa-angle-up');
    }
});

$('#section0-1').on("click", function () {
    if($( "#section0" ).hasClass( "fa-angle-up" )) {
        $('#section0').removeClass('fa-angle-up');
        $('#section0').addClass('fa-angle-down');
    } else if($( "#section0" ).hasClass( "fa-angle-down" )) {
        $('#section0').removeClass('fa-angle-down');
        $('#section0').addClass('fa-angle-up');
    }
});

function startTest() {
    if(!isTestStarted) {
        $('#aboutTest').removeClass("visibleNow");
        $('#aboutTest').addClass("hideNow");
        $('#startTest').removeClass("visibleNow");
        $('#startTest').addClass("hideNow");

        $('#q-1').removeClass("hideNow");
        $('#q-1').addClass("visibleNow");
        isTestStarted = true;
    }
};

function sendEmail(sendTo) {
    if (isResultText1) {
        var emailTextBase = $('#result1').text(); // Test Result 1
    } else if (isResultText2) {
        var emailTextBase = $('#result2').text(); // Test Result 2
    } else if (isResultText3) {
        var emailTextBase = $('#result3').text(); // Test Result 3
    }

    //
    // parameter  sendTo  - recepient of email
    //

    //
    // "Результат тестирования Вашего ребенка" - header of email
    //
      
    //
    // emailTextBase  -  result text (this is one of the three options)
    //
    
    //
    // sumPoints - sum of all points (was inserted in email)
    //
};

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function nextQuestion(num, fieldName) {
    if (parseInt(fieldName.slice(8, fieldName.length)) < 14) {
        var valueRadio = $('input[name="' + fieldName + '"]:checked').val();
    } else {
        if (num === 15) {
            var valueRadio = resultMarkQ14.toString();
            //init state - show first card (Q15)
            runCardsTimer();
        } else if (num === 16) {
            $('#finishTestBtn').removeClass('hideNow');
            $('#nextCardsBtn').addClass('hideNow');

            var valueRadio = resultMarkQ15.toString();
        }
    }

    currentObject = {number: parseInt(fieldName.slice(8, fieldName.length)), value: valueRadio};
    arrayAnswers.push(currentObject);

    console.log(currentObject);
    console.log(arrayAnswers);

    if (num < 16) {
        var currentQuestion = '#q-'+ fieldName.slice(8, fieldName.length);
        var nextQuestion = '#q-' + num;
    
        $(currentQuestion).removeClass("visibleNow");
        $(currentQuestion).addClass("hideNow");

        $(nextQuestion).removeClass("hideNow");
        $(nextQuestion).addClass("visibleNow");
    } else {
        $('#q-15').removeClass("visibleNow");
        $('#q-15').addClass("hideNow");

        $('#result-f').addClass("visibleNow");
        $('#result-f').removeClass("hideNow");
    }
};

function nextLine() {
    if(numLineQ14 < 10) {
        // value of checked radio
        var checkedValueLeft = parseInt($('input[name="q14-lines"]:checked').val());
        var checkedValueRight = parseInt($('input[name="q14-lines-a"]:checked').val());
        // check answers
        if(checkedValueLeft === 1) {
            checkedValueRight === 7 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 2) {
            checkedValueRight === 3 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 3) {
            checkedValueRight === 4 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 4) {
            checkedValueRight === 5 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 5) {
            checkedValueRight === 1 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 6) {
            checkedValueRight === 10 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 7) {
            checkedValueRight === 2 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 8) {
            checkedValueRight === 6 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 9) {
            checkedValueRight === 9 ? sumPointsQ14 += 1 : false;
        } else if(checkedValueLeft === 10) {
            checkedValueRight === 8 ? sumPointsQ14 += 1 : false;
        }
        // show next radio
        var lineName = 'l-q14-lines-' + (numLineQ14+1);
        $('#'+lineName).removeClass("hideNow");
        $('#'+lineName).addClass("visibleNow");
        // check next radio
        $('#'+lineName).click();
        // hide prev radio
        var lineNameHide = 'l-q14-lines-' + numLineQ14;
        $('#'+lineNameHide).removeClass("visibleNow");
        $('#'+lineNameHide).addClass("hideNow");
        // go to next line
        numLineQ14++;
    } else {
        // enable / disable buttons
        $('#nextGraphQuest15').removeClass("hideNow");
        $('#nexLineBtn').addClass("hideNow");
        // set result mark for question #14
        if ((sumPointsQ14 >= 0) && (sumPointsQ14 <= 4)) {
            resultMarkQ14 = 0;
        } else if ((sumPointsQ14 >= 5) && (sumPointsQ14 <= 6)) {
            resultMarkQ14 = 5;
        } else if ((sumPointsQ14 >= 7) && (sumPointsQ14 <= 10)) {
            resultMarkQ14 = 10;
        } else {
            resultMarkQ14 = 0;
        }
    }
};

function runCardsTimer() {
    $('#q15-'+currentCardQ15+'-1').removeClass('hideNow');
    $('#nextCardsBtn').attr('disabled',true);

    timer.addEventListener('secondsUpdated', function (e) {
        console.log(timer.getTimeValues().seconds);
        if(timer.getTimeValues().seconds > 18) {
            timer.stop();
            $('#q15-'+currentCardQ15+'-1').addClass('hideNow');
            $('#q15-empty').removeClass('hideNow');
            resetCheckboxState();
            $('#nextCardsBtn').attr('disabled',false);
            currentCardQ15++;
        }
        $('#counter').html(timer.getTimeValues().seconds);
    });

    timer.start();
}

function nextCards() {
    switch (currentCardQ15) {
        case 1:
        break;

        case 2:
        if($("#q15-cards-14").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-42").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer(); 
        break;

        case 3:
        if($("#q15-cards-13").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-32").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();  
        break;

        case 4:
        if($("#q15-cards-14").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-22").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-33").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();    
        break;

        case 5:
        if($("#q15-cards-13").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-24").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-32").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-33").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();   
        break;

        case 6:
        if($("#q15-cards-13").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-34").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-32").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-42").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-43").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();  
        break;

        case 7:
        if($("#q15-cards-11").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-22").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-24").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-32").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-33").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-42").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-44").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();  
        break;
        
        case 8:
        if($("#q15-cards-12").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-23").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-24").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-32").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-33").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-41").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-44").is(':checked')) {
            sumPointsQ15++;
        }
        $('#q15-empty').addClass('hideNow');
        runCardsTimer();  
        break;

        case 9:
        if($("#q15-cards-11").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-13").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-21").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-22").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-31").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-33").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-34").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-42").is(':checked')) {
            sumPointsQ15++;
        }
        if($("#q15-cards-43").is(':checked')) {
            sumPointsQ15++;
        }
        // set result mark for question #15
        if (sumPointsQ15 >= 15) {
            resultMarkQ15 = 10;
        } else if ((sumPointsQ15 >= 6) && (sumPointsQ15 <= 13)) {
            resultMarkQ15 = 5;
        } else if ((sumPointsQ15 >= 3) && (sumPointsQ15 <= 5)) {
            resultMarkQ15 = 0;
        } else {
            resultMarkQ15 = 0;
        }
        $('#nextCardsBtn').addClass('hideNow');
        $('#finishTestBtn').removeClass('hideNow');
        $('#q15-empty').addClass('hideNow');
        break;
      }
};

function getResults() {
    if (validateEmail($('#user-email').val())) {
        for(var i = 0; i < arrayAnswers.length; i++) {
            sumPoints += parseFloat(arrayAnswers[i].value);
        }

        console.log(sumPoints);

        $('#result-f').removeClass("visibleNow");
        $('#result-f').addClass("hideNow");
        $('#result-show').removeClass("hideNow");
        $('#result-show').addClass("visibleNow");

        if(sumPoints <= 22) { //if((sumPoints >= 13) && (sumPoints <= 37)) {
            $('#result3').removeClass("hideNow");
            $('#result3').addClass("visibleNow");
            isResultText3 = true;
        } else if((sumPoints >= 23) && (sumPoints <= 34)) { //} else if((sumPoints >= 38) && (sumPoints <= 49)) {
            $('#result2').removeClass("hideNow");
            $('#result2').addClass("visibleNow");
            isResultText2 = true;
        } else if((sumPoints >= 35) && (sumPoints <= 45)) { //} else if((sumPoints >= 50) && (sumPoints <= 60)) {
            $('#result1').removeClass("hideNow");
            $('#result1').addClass("visibleNow");
            isResultText1 = true;
        } else {
            $('#result3').removeClass("hideNow");
            $('#result3').addClass("visibleNow");
            isResultText3 = true;
        }

        sendEmail($('#user-email').val());
    } else {
        $('#user-email').css('border-color','red')
        $('#user-email-addon').css('border-color','red')
    }
};

function resetCheckboxState() {
    $("#q15-cards-11").checkbox('uncheck'); 
    $("#q15-cards-12").checkbox('uncheck'); 
    $("#q15-cards-13").checkbox('uncheck'); 
    $("#q15-cards-14").checkbox('uncheck'); 
    $("#q15-cards-21").checkbox('uncheck'); 
    $("#q15-cards-22").checkbox('uncheck'); 
    $("#q15-cards-23").checkbox('uncheck'); 
    $("#q15-cards-24").checkbox('uncheck'); 
    $("#q15-cards-31").checkbox('uncheck'); 
    $("#q15-cards-32").checkbox('uncheck'); 
    $("#q15-cards-33").checkbox('uncheck'); 
    $("#q15-cards-34").checkbox('uncheck'); 
    $("#q15-cards-41").checkbox('uncheck'); 
    $("#q15-cards-42").checkbox('uncheck'); 
    $("#q15-cards-43").checkbox('uncheck'); 
    $("#q15-cards-44").checkbox('uncheck'); 
};

function moreDetails() {
    window.open('https://www.akmecenter.com/', '_blank');
};