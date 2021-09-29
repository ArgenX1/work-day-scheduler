const timeBlock = $(".time-block");
var savedText = {}

function initialize() {
    setInterval(() => $("#currentDay").text(moment().format("LLLL")),1000);
    savedText = JSON.parse(localStorage.getItem("savedText"));
    timeBlock.each(function() {
        if(moment().format("H") > $(this).data("hour"))$(this).children("textarea").addClass("past");
        else if(moment().format("H") == $(this).data("hour"))$(this).children("textarea").addClass("present");
        else $(this).children("textarea").addClass("future");
        ($(this).children("textarea").text(savedText[$(this).data("hour")]));
    });
}
initialize();

$(".saveBtn").click(function(){
    savedText[$(this).parent().data("hour")] = $(this).siblings("textarea").val();
    localStorage.setItem("savedText", JSON.stringify(savedText));
});