
var objectsOpened = {ready: false, intro: false}


function openNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "250px";
}


function OpenObject(objectName)
{
	if(!objectsOpened[objectName])
    	document.getElementsByClassName(objectName)[0].style.display = 'block';
	else
		document.getElementsByClassName(objectName)[0].style.display = 'none';
    objectsOpened[objectName] = !objectsOpened[objectName];
}



function closeNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "0";
}
