import './css/index.css';
import './css/sidebar.css';
import './css/popup.css';
import {DataRepository} from "./DataRepository";
    var flag = false;

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        fadeOut( document.getElementById("right") , document.getElementById("middle"));
        flag = true;

    }

    function closeNav (){
        document.getElementById("mySidebar").style.width = "0";
        fadeIn( document.getElementById("right"), document.getElementById("middle"));
        flag = false;
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


    async function openRoomArchiveStatusForm (){
        const repository = new DataRepository();

        const data = await repository.fetchData("005")

        console.log("data in controller",data)

        closeNav();
        closeRoomStatusForm();
        document.getElementById("roomArchiveStatusForm").style.display = "block";
    }
    function closeRoomArchiveStatusForm(){
        document.getElementById("roomArchiveStatusForm").style.display = "none";
    }
    function closeRoomStatusForm(){
        document.getElementById("roomStatusForm").style.display = "none";
    }
    function openRoomStatusForm(){
        closeNav();
        closeRoomArchiveStatusForm();
        document.getElementById("roomStatusForm").style.display = "block";
    }

function Outer(props){

 return (
     <div>
     <div className="Outer" id="main">
         <div id="mySidebar" className="sidebar">
             <a href="javascript:void(0)" className="closebtn" onClick={event => closeNav()}>×</a>
             <a href="#">About</a>
             <a href="#">Services</a>
             <a href="#">Clients</a>
             <a href="contact.js">Contact</a>
             <a href="#" onClick={async event => await openRoomArchiveStatusForm()}>Room history</a>
             <a href="#" onClick={event => openRoomStatusForm()}>Room status</a>
         </div>
         <div className="main" id="middle">
             <div className="Popup">
                 <div className="formPopup" id="roomArchiveStatusForm">
                     <form action="PLACEHOLDER" className="formContainer">
                         <h2>Check archive for room <span className="glyphicon glyphicon-question-sign"
                                                          aria-hidden="true"></span></h2>
                         <label htmlFor="roomNum">
                             <strong>Room Number</strong>
                         </label>
                         <input type="text" id="roomNum2" placeholder="123" name="Room Number" required maxLength="3"/>
                         <label htmlFor="dateFrom">
                             <strong>Date from</strong>
                         </label>
                         <input type="date" id="dateFrom" placeholder="dd/mm/yyyy" name="Date From" required/>
                         <label htmlFor="dateTo">
                             <strong>Date To</strong>
                         </label>
                         <input type="date" id="dateTo" placeholder="dd/mm/yyyy" name="Date To" required/>

                         <button type="submit" className="btn">Check</button>
                         <button type="button" className="btn cancel"
                                 onClick={event => closeRoomArchiveStatusForm()}>Close
                         </button>
                     </form>
                 </div>
                 <div className="formPopup" id="roomStatusForm">
                     <form action="PLACEHOLDER" className="formContainer">
                         <h2>Check room status</h2>
                         <label htmlFor="roomNum">
                             <strong>Room Number</strong>
                         </label>
                         <input type="text" id="roomNum" placeholder="123" name="Room Number" required maxLength="3"/>
                         <button type="submit" className="btn">Check Status</button>
                         <button type="button" className="btn cancel" onClick={event => closeRoomStatusForm()}>Close</button>
                     </form>
                 </div>
             </div>
             <h1>MAIN ADRIA DATA</h1>
         </div>

         <div className="right" id="right">
             <h1>DHMZ DATA</h1>
         </div>
   </div>

     </div>
 );
}

export default Outer;