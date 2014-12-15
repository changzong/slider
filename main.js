var imagenum = 7;
var pagenum = 4;
function AppendImages()
{
	//var imagenum = 7;
	for (var i = 0; i < imagenum; i++)
	{
		var newImage = "images/pic" + i + ".jpg";
        var id = "pic" + i;
		$("<img src=" + newImage + " id=" + id +">").appendTo("#sliderContainer");
	}
    
    for (var i = 0; i < pagenum; i++)
	{
		var newImage = "images/page" + i + ".png";
        var id = "page" + i;
		$("<img src=" + newImage + " id=" + id +">").appendTo("#pageContainer");
	}
}

/* function DisplayImages()
{
	$("#sliderContainer img").each(function(i)
	{
		$(this).delay(i * 2000).fadeTo(1000, 1);
		$(this).fadeTo(1000, 0);
	});
} */
var i = 0;
var j = -1;
var timer;
var id = "pic" + i;
function DisplayImages()
{
    $("#" + id).fadeTo(1000, 1);
    
        $("#leftButton").click(function(){
            clearTimeout(timer);
            $("#sliderContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            if (i == 0)
                i = imagenum - 1;
            else
                i--; 
            id = "pic" + i;
            //$("#" + id).fadeTo(0, 1);
            SlidingLeft();
            ImagesLoop();
        });
        
        $("#rightButton").click(function(){
            clearTimeout(timer);
            $("#sliderContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            if (i == imagenum - 1)
                i = 0;
            else
                i++;
            id = "pic" + i;
            //$("#" + id).fadeTo(0, 1);
            console.log(id);
            SlidingRight();
            ImagesLoop();    
        }); 
        
        $("#bottomButton").click(function(){
            clearTimeout(timer);
            $("#sliderContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            $("#pageContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            if (j == pagenum - 1)
            {
                $("#bottomButton").off("click");
                $("#bottomButton").css({"opacity": 0});
            }
            else
            {
                j++; 
                id = "page" + j;
                //$("#" + id).fadeTo(0, 1);
            }
            SlidingUp();
        });
        
        $("#topButton").click(function(){
            clearTimeout(timer);
            $("#sliderContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            $("#pageContainer img").each(function(i)
            {
                $(this).fadeTo(0, 0);
            });
            if (j == 0)
            {
                $("#topButton").off("click");
                $("#topButton").css({"opacity": 0});
                id = "pic" + i;
                ImagesLoop();
            }
            else
            {
                j--; 
                id = "page" + j;
                //$("#" + id).fadeTo(0, 1);
            }
            SlidingDown();
        });

    ImagesLoop();
}

function ImagesLoop()
{
    timer = setTimeout(function(){ 
        $("#" + id).fadeTo(1000, 0); 
        if (i == imagenum - 1)
            i = 0;
        else
            i++;
        id = "pic" + i;
        $("#leftButton").off("click");
        $("#rightButton").off("click");
        $("#bottomButton").off("click");
        $("#topButton").off("click");
        DisplayImages();
    }, 5000);
}

function SlidingLeft()
{
    var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": -imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "+=" + imageWidth
    }, 1000);   
}

function SlidingRight()
{
    var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "-=" + imageWidth
    }, 1000);   
}

function SlidingUp()
{
    var imageHeight = $("#" + id).height();
    $("#" + id).css({"bottom": -imageHeight});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "bottom": "+=" + imageHeight
    }, 1000);   
}

function SlidingDown()
{
    var imageHeight = $("#" + id).height();
    $("#" + id).css({"bottom": imageHeight});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "bottom": "-=" + imageHeight
    }, 1000);   
}