var imagenum = 7;
function AppendImages()
{
	//var imagenum = 7;
	for (var i = 0; i < imagenum; i++)
	{
		var newImage = "images/pic" + i + ".jpg";
        var id = "pic" + i;
		$("<img src=" + newImage + " id=" + id +">").appendTo("#sliderContainer");
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
        })
        if (i == 0)
            i = imagenum - 1;
        else
            i--; 
        id = "pic" + i;
        //$("#" + id).fadeTo(0, 1);
        console.log(id);
        SlidingUpLeft();
        ImagesLoop();
    });
    
    $("#rightButton").click(function(){
        clearTimeout(timer);
        $("#sliderContainer img").each(function(i)
        {
            $(this).fadeTo(0, 0);
        })
        if (i == imagenum - 1)
            i = 0;
        else
            i++;
        id = "pic" + i;
        //$("#" + id).fadeTo(0, 1);
        SlidingUpRight();
        ImagesLoop();    
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
        DisplayImages();
    }, 5000);
}

function SlidingUpLeft()
{
    var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": -imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "+=" + imageWidth
    }, 1000);   
}

function SlidingUpRight()
{
    var imageWidth = $("#" + id).width();
    $("#" + id).css({"right": imageWidth});
    $("#" + id).css({"opacity": 1});
    $("#" + id).animate({
        "right": "-=" + imageWidth
    }, 1000);   
}