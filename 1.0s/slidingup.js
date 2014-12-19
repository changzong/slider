
/* var headNum = 1;
var headRowArray = new Array();
var containerWidth = 0;
var currentClass = ".mainPage";
var previousClass; */
//Counting row and column from the next of mainpage
var main_page_pattern = /mainPage/;
var main_sub_pattren = /mainSub[0-9]/;
var head_page_pattern = /headPage[0-9]/;
var head_sub_pattern = /head[0-9]Sub[0-9]/;

function initialize()
{   
    $(".sliderContainer img").each(function(i)
    {
        console.log(i);
        if (main_page_pattern.test($(this).attr("id")) || main_sub_pattren.test($(this).attr("id")) || head_page_pattern.test($(this).attr("id")) || head_sub_pattern.test($(this).attr("id")))
            console.log("Got it!");
    });
    
    headRowArray.push(".mainPage");
    for (var i=0; i<headNum; i++)
    {
        headRowArray.push(".headPage" + i);
    }
    for (var i=0; i<headNum+1; i++)
    {
        $("div > div", headRowArray[i]).children('img').css({"left": containerWidth});
        containerWidth += $("div > div", headRowArray[i]).children('img').width();
    }
}

/* function SlidingListener()
{
    var currentIndex = -1;
    $("#leftButton").click(function(){
        if (currentIndex == -1)
        {
            previousClass = ".mainPage";
            currentIndex++;
            currentClass = ".headPage" + currentIndex;
        }
        if (currentIndex == headNum - 1)
        {
            previousClass = ".headPage" + currentIndex;
            currentIndex = -1;
            currentClass = ".mainPage";
        }
        else
        {
            previousClass = ".headPage" + currentIndex;
            currentIndex++;
            currentClass = ".headPage" + currentIndex;
        }
        console.log(previousClass, currentClass);
        SlidingLeft();
    });
}

function SlidingLeft()
{
    $("div > div", previousClass).children('img').fadeTo(0, 1);
    $("div > div", currentClass).children('img').fadeTo(0, 1);
    if (currentClass == ".mainPage")
    {
        for (var i=0; i<headNum+1; i++)
        {
            $("div > div", headRowArray[i]).children('img').animate({
                "left": "+=" + containerWidth
            }, 1000);
        }    
    }
    else
    {
        for (var i=0; i<headNum+1; i++)
        {
            $("div > div", headRowArray[i]).children('img').animate({
                "left": "-=" + $(this).width()
            }, 1000);
        }
    }
    
    var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": -imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "+=" + imageWidth
    }, 1000);   
} */