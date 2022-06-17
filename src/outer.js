import './css/index.css';
import './css/sidebar.css';
import './css/popup.css';
import React, { useState, useEffect , useRef} from 'react'
import root from  './index.js';
import * as ReactDOM from 'react-dom/client';

import {DataRepository} from "./services/DataRepository";


function Outer(props){
        const mainRef = useRef();
        const [adriaData , setAdriaData] = useState(
            <div>
                <h2>ROOM NUMBER: {document.getElementById("roomNum").value}</h2>
                <h3>VRIJEME: {data.vrijeme}</h3>
                <h3>ZADANA: {data.zadana}</h3>
                <h3>IZMJERENA: {data.izmjerena}</h3>
                <h3>STATUS KLIME: {data.statusKlime}</h3>
                <h3>BRZINA PUHANJA: {data.brzinaPuhanja}</h3>
                <h3>VENTIL: {data.ventil}</h3>
                <h3>PRISUTNOST: {data.prisutnost}</h3>
                <h3>PROZOR: {data.prozor}</h3>
                <h3>MOD KLIME: {data.modKlime}</h3>
                <h3>WC SET: {data.wcSet}</h3>
                <h3>WC MJERENJA: {data.wcMjerenja}</h3>
            </div>
        ) ;




    let flag = false;


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

    async function fetchCurrentRoomState(){
        let repository = new DataRepository();
        let data = await repository.fetchData(document.getElementById("roomNum").value);
        closeRoomStatusForm();

        return (
        <div>
            <h2>ROOM NUMBER: {document.getElementById("roomNum").value}</h2>
            <h3>VRIJEME: {data.vrijeme}</h3>
            <h3>ZADANA: {data.zadana}</h3>
            <h3>IZMJERENA: {data.izmjerena}</h3>
            <h3>STATUS KLIME: {data.statusKlime}</h3>
            <h3>BRZINA PUHANJA: {data.brzinaPuhanja}</h3>
            <h3>VENTIL: {data.ventil}</h3>
            <h3>PRISUTNOST: {data.prisutnost}</h3>
            <h3>PROZOR: {data.prozor}</h3>
            <h3>MOD KLIME: {data.modKlime}</h3>
            <h3>WC SET: {data.wcSet}</h3>
            <h3>WC MJERENJA: {data.wcMjerenja}</h3>
        </div>
        );
    }

 return (
     <div>
     <div className="Outer" id="main">
         <div id="mySidebar" className="sidebar">
             <a >About</a>
             <a >Services</a>
             <a >Clients</a>
             <a href="contact.js">Contact</a>
             <a  onClick={async event => await openRoomArchiveStatusForm()}>Room history</a>
             <a onClick={async event => await openRoomStatusForm()}>Room status</a>
         </div>
         <div className="main" id="middle" ref={mainRef}>
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
                     <form action=" " className="formContainer">
                         <h2>Check room status</h2>
                         <label htmlFor="roomNum">
                             <strong>Room Number</strong>
                         </label>
                         <input type="text" id="roomNum" placeholder="123" name="Room Number" required maxLength="3"/>
                         <button type="submit" className="btn" onClick={event =>fetchCurrentRoomState()}>Check Status</button>
                         <button type="button" className="btn cancel" onClick={event => closeRoomStatusForm()}>Close</button>
                     </form>
                 </div>
             </div>
             <h1>MAIN ADRIA DATA</h1>
             <div id={"mainContent"}>
                 {adriaData}
             </div>
         </div>

         <div className="right" id="right">
             <h1>DHMZ DATA</h1>

         </div>
   </div>

     </div>
 );
}

export default Outer;