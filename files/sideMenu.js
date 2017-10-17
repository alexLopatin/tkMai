var objectsOpened = {}


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
