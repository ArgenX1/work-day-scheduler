const timeBlock = $(".time-block")

function initialize() {
    setInterval(() => $("#currentDay").text(moment().format("LLLL")),1000)
    timeBlock.each(function() {
        if(moment().format("H") > $(this).data("hour"))$(this).children("textarea").addClass("past")
        else if(moment().format("H") == $(this).data("hour"))$(this).children("textarea").addClass("present")
        else $(this).children("textarea").addClass("future")
    })
} 
initialize()

