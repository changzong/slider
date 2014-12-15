
function AppendImages()
{
	var imagenum = 7;
	for (var i = 0; i < imagenum; i++)
	{
		var newImage = "images/pic" + i + ".jpg";
		$("<img src=" + newImage + ">").appendTo("#sliderContainer");
	}
}

function DisplayImages()
{
	$("#sliderContainer img").each(function(i)
	{
		$(this).delay(i * 2000).fadeTo(1000, 1);
		$(this).fadeTo(1000, 0);
	});
}