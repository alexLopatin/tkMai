var IsIntroOpened = false;
var IsReadyOpened = false;

function openNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "250px";
}

function openIntro() {
	if(!IsIntroOpened)
    	document.getElementsByClassName("intro")[0].style.display = 'block';
	else
		document.getElementsByClassName("intro")[0].style.display = 'none';
    IsIntroOpened = !IsIntroOpened;
}

function openReady() {
	if(!IsReadyOpened)
    	document.getElementsByClassName("ready")[0].style.display = 'block';
	else
		document.getElementsByClassName("ready")[0].style.display = 'none';
    IsReadyOpened = !IsReadyOpened;
}

function closeNav() {
    document.getElementsByClassName("SideNav")[0].style.width = "0";
}
