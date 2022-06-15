import './index.css';
import './sidebar.css';
import './popup.css';
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


    function openRoomArchiveStatusForm (){
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

function Outer(){
 return (
     <div className="Outer" id="main">

         <div id="mySidebar" className="sidebar">
             <a href="javascript:void(0)" className="closebtn" onClick={event => closeNav()}>×</a>
             <a href="#">About</a>
             <a href="#">Services</a>
             <a href="#">Clients</a>
             <a href="#">Contact</a>
             <a href="#" onClick={event => openRoomArchiveStatusForm()}>Room history</a>
             <a href="#" onClick={event => openRoomStatusForm()}>Room status</a>
         </div>



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

         <div className="main" id="middle">

             <h1>MAIN ADRIA DATA</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
             <h1>GeeksforGeeks</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
             <h1>GeeksforGeeks</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
         </div>

         <div className="right" id="right">
             <h1>DHMZ DATA</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
             <h1>GeeksforGeeks</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
             <h1>GeeksforGeeks</h1>
             <p>How many times were you frustrated while looking out
                 for a good collection of programming/algorithm/interview
                 questions? What did you expect and what did you get?
                 This portal has been created to provide well written,
                 well thought and well-explained solutions for selected
                 questions.
             </p>
             <h2>GeeksforGeeks</h2>
             <p>GCET is an entrance test for the extensive classroom
                 programme by GeeksforGeeks to build and enhance Data
                 Structures and Algorithm concepts, mentored by Sandeep
                 Jain (Founder & CEO, GeeksforGeeks).He has 7 years of
                 teaching experience and 6 years of industry experience.
             </p>
         </div>
         <div className="bottombar">

         </div>
   </div>
 );
}

export default Outer;