
var headNum = 1;
var headRowArray = new Array();
var containerWidth = 0;
var currentClass = ".mainPage";
var previousClass;

function initialize()
{   
    $(".mainPage div").each(function(i)
    {
        $(this).fadeTo(0, 0);
        console.log("hhhhhhhhhhhh");
    });
    
    headRowArray.push(".mainPage");
    for (var i=0; i<headNum; i++)
    {
        headRowArray.push(".headPage" + i);
    }
    console.log(headRowArray);
    for (var i=0; i<headNum+1; i++)
    {
        $("div > div", headRowArray[i]).children('img').css({"left": containerWidth});
        containerWidth += $("div > div", headRowArray[i]).children('img').width();
    }
}

function SlidingListener()
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
    
/*     var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": -imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "+=" + imageWidth
    }, 1000);   */ 
}