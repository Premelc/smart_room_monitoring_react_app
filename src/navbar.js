import logo from "./img/cry.gif";
import './css/index.css';

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
            <a href={"index.js"} >HOME</a>
        </div>
        <div className="navbuttons">
            <a href={"#"} >SEARCH</a>
        </div>
        <div className="navbuttons">
            <a href={"#"} >DHMZ</a>
        </div>

        <div className="logo">
            <img src={logo}/>
        </div>

        <div className="navbuttons">
            <a href={"#"} >DHMZ</a>
        </div>

        <div className="navbuttons">
            <a href={"#"} >NOTIFICATIONS</a>
        </div>

        <div className="navbuttons">
            <a href={"#"} >ADRIA</a>
        </div>

        <div className="navbuttons">
            <a href={"#"}>LOG IN</a>
        </div>
    </div>);
}

export default Navbar;