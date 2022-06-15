import logo from "./crying-black-guy-meme (1).gif";
import './index.css';
import './sidebar.css';
import './popup.css';

let flag = false;

function toggleNav(){
    if(flag === true){
        console.log(flag)
        closeNav();
    }else if(flag === false){
        console.log(flag);
        openNav();
    }
};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    fadeOut( document.getElementById("right") , document.getElementById("middle"));
    flag = true;

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    fadeIn( document.getElementById("right"), document.getElementById("middle"));
    flag = false;

}

function fadeOut(element1, element2) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.3){
            clearInterval(timer);
        }
        element1.style.opacity = op;
        element1.style.filter = 'alpha(opacity=' + op * 100 + ")";
        element2.style.opacity = op;
        element2.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

function fadeIn(element1, element2) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element1.style.opacity = op;
        element1.style.filter = 'alpha(opacity=' + op * 100 + ")";
        element2.style.opacity = op;
        element2.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 15);
}



function Navbar(){
    return ( <div className="navbar">
        <button className="openbtn" onClick={event => toggleNav()} id="openBtnId">☰ Quick Access</button>
        <div className="navbuttons">
            HOME
        </div>
        <div className="navbuttons">
            SEARCH
        </div>
        <div className="navbuttons">
            DHMZ
        </div>

        <div className="logo">
            <img src={logo}/>
        </div>

        <div className="navbuttons">
            WARNINGS
        </div>

        <div className="navbuttons">
            NOTIFICATIONS
        </div>

        <div className="navbuttons">
            ADRIA
        </div>
    </div>);
}

export default Navbar;