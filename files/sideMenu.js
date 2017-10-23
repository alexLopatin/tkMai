var objectsOpened = {}


function ResizeContent()
{
	var footer = document.getElementsByClassName('site-footer')[0].clientHeight;
	 footer = document.getElementsByClassName('site-footer')[0].offsetHeight;
	 footer = document.getElementsByClassName('site-footer')[0].scrollHeight;


	var header = document.getElementsByClassName('site-header')[0].clientHeight;
	 header = document.getElementsByClassName('site-header')[0].offsetHeight;
	 header = document.getElementsByClassName('site-header')[0].scrollHeight;


	var h = window.innerHeight;

	var content = document.getElementsByClassName('container')[0].clientHeight;
	 content = document.getElementsByClassName('container')[0].offsetHeight;
	 content = document.getElementsByClassName('container')[0].scrollHeight;

	if(h>=content+footer+header)
		document.getElementsByClassName("container")[0].style.height = (h -footer-header)+"px";	
	else
	{
		console.log(h);
		console.log(content+footer+header);
		document.getElementsByClassName("container")[0].style.height = "100%";	
	}
}

ResizeContent();
window.onresize = function(event) {
	console.log("resized");
    ResizeContent();
};


function openNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "250px";
}


function OpenObject(objectName)
{

	if(!objectsOpened[objectName])
    	document.getElementById(objectName).style.display = 'block';
	else
		document.getElementById(objectName).style.display = 'none';
    objectsOpened[objectName] = !objectsOpened[objectName];
}



function closeNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "0";
}
