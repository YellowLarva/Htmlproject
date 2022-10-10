// Tic Tac Toe game Computer vs Player 

//           ************************************************************************************       //

let mark = "X"                    // Mark of the pointer
let isgameover = false;          // return the state of the game
let player = true;          // marks if player is playing ( true ) or computer is playing ( false ) 
let whowon = "";              // decide who won in the end
let canrun = 0;                // return the step a computer can run

let computerwin = 0;          // show the count of  computerwin
let tiecount = 0;             // show the count of  ties
let playerwin = 0;            // show the count of  playerwin  

let comboxtext = document.getElementsByClassName('boxtext');    // selects the classname having boxtext
let checkwincount = 0;


//           ************************************************************************************       //



//           ************************************************************************************       //

// function to check if someone has won the game or is it a tie

const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');     // selects the classname having boxtext

//           ************************************************************************************       //

    // all of the possibilities to win th game ( combinations for winning the game  )
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

//           ************************************************************************************       //

    // displays who won if someone is actually going to won the game
    if( player == true){
        whowon = "Player";
    }
    if( player == false){
        whowon = "Computer";
    }

    let displatie = true;
    console.log("isgameover checwin",isgameover);
    console.log("displatie checkwin",displatie);
    checkwincount += 1
    console.log("checkwin count",checkwincount);

//           ************************************************************************************       //

    // iterate over the wins array element and check the contents of array element
    wins.forEach(e =>{
        //           ************************************************************************************       //


        // checks if the array element in wins have the same context ( "x" or "o" ) if true then displays the winner
        
        if((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && (boxtext[e[0]].innerText != "") ){

            // document.querySelector('.info').innerText = whowon + " Won"
            document.querySelector('.info').style.visibility = 'hidden';
            // window.setTimeout(rreset, 500);
            displatie = false;
            checkwincount = 0;
            
            isgameover = true                      //  change the state to true means game is over
            if ( whowon == 'Player' ){             //  change the score card of the player
                playerwin = playerwin + 1;
                document.getElementById("plsc").innerText = playerwin;
                swal({
                    title :  whowon + " has won ",
                    buttons: {
                      cancel: "Reset Borad",
                      catch: {
                        text: "Reset Score",
                        value: "catch",
                      }
                    }
                  })
                  .then((value) => {
                    switch (value) {
                   
                      case "defeat":
                        swal(window.setTimeout(rreset, 500), document.querySelector('.info').style.visibility = 'visible');
                        break;
                   
                      case "catch":
                        swal(window.setTimeout(screset, 500), document.querySelector('.info').style.visibility = 'visible');
                        break;
                   
                      default:
                        swal(window.setTimeout(rreset, 500),document.querySelector('.info').style.visibility = 'visible');
                    }
                  });
            }


            // console.log("gameover",isgameover);
        }

        //           ************************************************************************************       //

        // checks condition if all array element is filled then it displays game is tied and changes the score card for tie count

        if( isgameover == false && checkwincount == 9 ){

            // document.querySelector('.info').innerText = "It's a Tie"
            isgameover = true                     //  change the state to true means game is over
            displatie = true
            tiecount = tiecount + 1;              
            document.getElementById('tisc').innerText = tiecount;     //  change the score card for th Tie count
            document.querySelector('.info').style.visibility = 'hidden';
            console.log("tie 9 blocks",isgameover);
            if ( isgameover == true ){
                swal({
                    title :  "It's a tie ",
                    buttons: {
                      cancel: "Reset Borad",
                      catch: {
                        text: "Reset Score",
                        value: "catch",
                      }
                    }
                  })
                  .then((value) => {
                    switch (value) {
                   
                      case "defeat":
                        swal(window.setTimeout(rreset, 500), document.querySelector('.info').style.visibility = 'visible');
                        break;
                   
                      case "catch":
                        swal(window.setTimeout(screset, 500), document.querySelector('.info').style.visibility = 'visible');
                        break;
                   
                      default:
                        swal(window.setTimeout(rreset, 500),document.querySelector('.info').style.visibility = 'visible');
                    }
                  });
            }

        }
        
    })

//           ************************************************************************************       //    

    if( isgameover == false ){
        player = false;
    }
}


//           ************************************************************************************       //

// function to change the mark symbol 
const changemark = ()=>{
    if ( mark == "X" ){
        mark = "0"}
    else mark = "X"
    return mark;
}


//           ************************************************************************************       //


//   boxes refers to the classname having box as its class 
let boxes = document.getElementsByClassName("box");

// it create an array by using boxes and iterate over these array by using foreach


// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
Array.from(boxes).forEach(element =>{    // here element is the one of element in the box.
    // The forEach() method calls a function for each element in an array.

    // queryselector select all the class name have .boxtext in it.
    let boxtext = element.querySelector('.boxtext');

    // check the state of gameover so that the game is over the condition is not met.
    if ( isgameover == false){
        // if we click the element then the element in which we have boxtext class will chage the text to the mark symbol
        element.addEventListener('click', ()=>{
            if(boxtext.innerText == ''){
                boxtext.innerText = mark;
                mark = changemark();           // chage the mark symbol
                player = true;                // make player to true so if the player won it display player name
                checkWin();                   // function call for checkwin 
                if (!isgameover){       
                    document.getElementsByClassName("info")[0].innerText  = "Turn for " + mark;        // change the text for info classname
                }
                console.log("Gameover array",isgameover);          // displays the state of game over on console
                if ( player == false ){  window.setTimeout(computerMove, 500);};     // settimout call computermove finction after 1sec
            }
        })  
    }   
})


//           ************************************************************************************       //

// click event on reset btn to clear the board and all default parameter to its initial position 
rreset = ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    mark = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for X ( X go First )";
    player = true;
    whowon = "";
    canrun = 0;
    checkwincount = 0;
}


//           ************************************************************************************       //


//           ************************************************************************************       //


// click event on scorecard btn to clear the board ,all default parameter and scorecard to its initial position 
screset = ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    mark = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for X ( X go First )";
    player = true;
    whowon = "";
    canrun = 0;
    computerwin = 0;          // show the count of  computerwin
    tiecount = 0;             // show the count of  ties
    playerwin = 0;
    document.getElementById('tisc').innerText = 0;
    document.getElementById('cosc').innerText = 0;
    document.getElementById('plsc').innerText = 0;
    checkwincount = 0;

}


//           ************************************************************************************       //

// click event on scorecard btn to clear the board ,all default parameter and scorecard to its initial position 
sccreset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    mark = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for X ( X go First )";
    player = true;
    whowon = "";
    canrun = 0;
    computerwin = 0;          // show the count of  computerwin
    tiecount = 0;             // show the count of  ties
    playerwin = 0;
    document.getElementById('tisc').innerText = 0;
    document.getElementById('cosc').innerText = 0;
    document.getElementById('plsc').innerText = 0;
    checkwincount = 0;

})




//           ************************************************************************************       //

// function for computer to make its move 
computerMove = () =>{
    canwrite = false;      // set status to false means computer can't mark the position on the Tic Tac Toe Board

    // do - while loop     
    do {
        let position = Math.floor(Math.random() * 8);       // random position generation
        if (comboxtext[position].innerText == ""  ){     // check if the position for mark symbol is empty
            comboxtext[position].innerText = mark;       // marks the synbol at that position
            canwrite = true;                // change th state to true
            checkWin();     // check if computer wins or not
            canrun = canrun + 1;               // increment canrun ( if canrun is less than 4 then while loop will work )  
        }
    }while (canwrite == false && canrun < 4);      

    // change the mark for player ( x )
    mark = changemark();

    // set the player to true means chance for player
    player = true;   

    // displays who turn is pending
    if ( isgameover == false){
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + mark;
    }
    // checks if game is over and whowon is equal to computer
    if ( whowon == 'Computer' && isgameover == true){
        // increment the count for computer wins
        computerwin = computerwin + 1;
        // set the scorecard for th ecomputer win
        document.getElementById("cosc").innerText = computerwin;
        document.querySelector('.info').style.visibility = 'hidden';
        swal({
            title :  whowon + " has won ",
            buttons: {
              cancel: "Reset Borad",
              catch: {
                text: "Reset Score",
                value: "catch",
              }
            }
          })
          .then((value) => {
            switch (value) {
           
              case "defeat":
                swal(window.setTimeout(rreset, 500), document.querySelector('.info').style.visibility = 'visible');
                break;
           
              case "catch":
                swal(window.setTimeout(screset, 500), document.querySelector('.info').style.visibility = 'visible');
                break;
           
              default:
                swal(window.setTimeout(rreset, 500),document.querySelector('.info').style.visibility = 'visible');
            }
          });
    }
}



//           ************************************************************************************       //


// // $("#showAlert").click(function(){
// //     Swal.fire(
// //         whowon + 'won',
// //     )
// // });

// document.querySelector(".showAl").addEventListener('click', function(){
//     Swal.fire({
//         title: whowon + " has won",
//         type: "info",
//         // background: 'red',
//         confirmButtonText: "Reset",
//         confirmButtonColor: "#ff0055",
//         reverseButtons: true,
//         focusConfirm: false,
//         focusCancel: true,
//       });
// });
    
//           ************************************************************************************       //
 