// Tic Tac Toe game Computer vs Player 

//           ************************************************************************************       //

let mark = "X"                    // Mark of the pointer
let isgameover = false;          // return the state of the game
let player = true;          // marks if player is playing ( true ) or computer is playing ( false ) 
let whowon = "";              // decide who won in the end
let canrun = 1;                // return the step a computer can run

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
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
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
    // console.log("displatie checkwin",displatie);
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
            console.log("setgameovertrue",isgameover);
            if ( isgameover == true ){             //  change the score card of the player
                
                if ( whowon == "Computer"){
                  computerwin += 1
                }else{
                  playerwin = playerwin + 1;
                }
              
                document.getElementById("plsc").value = playerwin;
                document.getElementById("cosc").value = computerwin;

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
            console.log("setgameovertrue",isgameover);
            displatie = true
            tiecount = tiecount + 1;              
            // document.getElementById('tisc').innerText = tiecount;     //  change the score card for th Tie count
            document.getElementById("tisc").value = tiecount;     //  change the score card for th Tie count
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
    canrun = 1;
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
    canrun = 1;
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
    canrun = 1;
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
        window.setTimeout(computerposition, 1000);
        canwrite = true;                // change th state to true      
      }while (canwrite == false && canrun <= 9);      


    // change the mark for player ( x )
    // mark = changemark();

    // set the player to true means chance for player
    player = true;   

    // displays who turn is pending
    // if ( isgameover == false){
    //   document.getElementsByClassName("info")[0].innerText  = "Turn for " + mark;
    // }

}



computerposition = ()=>{
  
  console.log("Player",player);
  console.log("canrun",canrun);
  var pos = -1;
  
  if ( canrun == 1 ){
    
    if ( ( comboxtext[0].innerText == "X" || comboxtext[2].innerText == "X" || comboxtext[6].innerText == "X" || comboxtext[8].innerText == "X" 
           || comboxtext[1].innerText == "X"  || comboxtext[3].innerText == "X" || comboxtext[5].innerText == "X" || comboxtext[7].innerText == "X"  ) && player == true ){
      comboxtext[4].innerText = mark;
      player = false
    }
  
    if (  comboxtext[4].innerText == "X"  && player == true  ){
      var arr1 = [0,2,6,8];
      var posi = Math.floor(Math.random() * 4);
      var cmpo = arr1[posi];
      pos = cmpo;
      comboxtext[pos].innerText = mark;
      player = false;
    }
  }

  if ( canrun == 2 ){

    
    if(player == true){
    
      let found = false
      var arr1 = [ [0, 1, 2],
                   [0, 3, 6],
                   [0, 4, 8],
                   [1, 4, 7],
                   [2, 5, 8],
                   [2, 4, 6],
                   [3, 4, 5],
                   [6, 7, 8] ];
        
        for(i=0;i <= 7 && found == false;i++){
  
          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "" &&  found == false ){
            pos = arr1[i][2]
            found = true;
            player = false;
          }
  
          if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
            pos = arr1[i][0]
            found = true;
            player = false;
          }
  
          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "" && found == false ){
            pos = arr1[i][1]
            found = true;
            player = false;
          }
  
          if ( found ){
            comboxtext[pos].innerText = mark;
          }
          
        }
  
    }

    if(player == true){
    
      let found = false
      var arr1 = [ [0,1,3],
                   [3,6,7],
                   [7,8,5],
                   [1,2,5] ];
        
        for(i=0;i <= 3 && found == false;i++){
  
          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "" &&  found == false ){
            pos = arr1[i][2]
            found = true;
            player = false;
          }
  
          if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
            pos = arr1[i][0]
            found = true;
            player = false;
          }
  
          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "" && found == false ){
            pos = arr1[i][1]
            found = true;
            player = false;
          }
  
          if ( found ){
            comboxtext[pos].innerText = mark;
          }
          
        }
  
    }

    if(player == true){
    
      let found = false
      var arr1 = [ [1,4,7]];
      var arr2 = [ [3,4,5]];
        
        for(i=0;i <= 0 && found == false;i++){

          console.log("22222222222dfsddddddfsdggggggggggggggggggggffff");
  
          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "0" && comboxtext[arr1[i][2]].innerText == "" &&  found == false ){
            pos = arr1[i][0]
            found = true;
            player = false;
          }
  
          // if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "0" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
          //   pos = arr2[i][0]
          //   found = true;
          //   player = false;
          // }
  
          if(comboxtext[arr1[i][1]].innerText == "0" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "" && found == false ){
            pos = arr2[i][2]
            found = true;
            player = false;
          }
  
          if ( found ){
            comboxtext[pos].innerText = mark;
          }
          
        }

        for(i=0;i <= 0 && found == false;i++){
          console.log("222222222222222222222dsafsdfffffffffffff");

          if(comboxtext[arr2[i][0]].innerText == "X" && comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "" &&  found == false ){
            pos = arr1[i][0]
            found = true;
            player = false;
          }
  
          // if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "0" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
          //   pos = arr2[i][0]
          //   found = true;
          //   player = false;
          // }
  
          if(comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "X" && comboxtext[arr2[i][0]].innerText == "" && found == false ){
            pos = arr1[i][2]
            found = true;
            player = false;
          }
  
          if ( found ){
            comboxtext[pos].innerText = mark;
          }
          
        }
  
    }

    if(player == true){
      
      let found = false
      var arr1 = [1,3,5,7];
      console.log("canruuuuuuuuunnnnnnnnnn part 3")
      let run = 0

      while(found == false && run < 25){

        var posi = Math.floor(Math.random() * 4);
        var cmpo = arr1[posi];

        if( comboxtext[cmpo].innerText == "" ){
          found = true;
          player = false;
          pos = cmpo;
          comboxtext[pos].innerText = mark;

        }

        console.log(run);

        run = run + 1
      }

    }




  }

  if ( canrun == 3 ){

    if(player == true){

      console.log("canruuuuuuuuunnnnnnnnnn part 1")
      let found = false
      var arr2 = [[0,1,2],
                  [0,3,6,],
                  [0,4,8],
                  [1,4,7],
                  [2,5,8],
                  [2,4,6],
                  [3,4,5],
                  [6,7,8]];

      run = 0;
      
      for(i=0;i <= 7 && found == false ;i++){

        if(comboxtext[arr2[i][0]].innerText == "0" && comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == ""){
          pos = arr2[i][2]
          found = true;
          player = false;
        }

        if(comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "0" && comboxtext[arr2[i][0]].innerText == ""){
          pos = arr2[i][0]
          found = true;
          player = false;
        }

        if(comboxtext[arr2[i][0]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "0" && comboxtext[arr2[i][1]].innerText == ""){
          pos = arr2[i][1]
          found = true;
          player = false;
        }

        if ( found ){
          comboxtext[pos].innerText = mark;
        }
        
      }

    }
    
    if(player == true){

      console.log("canruuuuuuuuunnnnnnnnnn part 2")
      
      let found = false
      var arr1 = [[0,1,2],
                  [0,3,6,],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6],
                  [1,4,7],
                  [3,4,5],
                  [6,7,8]];
        
        for(i=0;i <= 7 && found == false;i++){

          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "" &&  found == false ){
            pos = arr1[i][2]
            found = true;
            player = false;
          }

          if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
            pos = arr1[i][0]
            found = true;
            player = false;
          }

          if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "" && found == false ){
            pos = arr1[i][1]
            found = true;
            player = false;
          }

          if ( found ){
            comboxtext[pos].innerText = mark;
          }
          
        }

    }

    if(player == true){
      
      let found = false
      var arr1 = [0,2,6,8];
      console.log("canruuuuuuuuunnnnnnnnnn part 3")
      let run = 0

      while(found == false && run < 25){

        var posi = Math.floor(Math.random() * 4);
        var cmpo = arr1[posi];

        if( comboxtext[cmpo].innerText == "" ){
          found = true;
          player = false;
          pos = cmpo;
          comboxtext[pos].innerText = mark;

        }

        console.log(run);

        run = run + 1
      }

    }

    if(player == true){
      
      let found = false
      var arr1 = [0,1,2,3,4,5,6,7,8];
      console.log("canruuuuuuuuunnnnnnnnnn part 4")

      while(found == false){

        var posi = Math.floor(Math.random() * 9);
        var cmpo = arr1[posi];

        if( comboxtext[cmpo].innerText == "" ){
          found = true;
          player = false;
          pos = cmpo;
          comboxtext[pos].innerText = mark;

        }
      }

    }
}

if ( canrun == 4 ){

  if(player == true){

    console.log("canruuuuuuuuunnnnnnnnnn part 1")
    let found = false
    var arr2 = [[0,1,2],
                [0,3,6,],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]];

    run = 0;
    
    for(i=0;i <= 7 && found == false ;i++){

      if(comboxtext[arr2[i][0]].innerText == "0" && comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == ""){
        pos = arr2[i][2]
        found = true;
        player = false;
      }

      if(comboxtext[arr2[i][1]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "0" && comboxtext[arr2[i][0]].innerText == ""){
        pos = arr2[i][0]
        found = true;
        player = false;
      }

      if(comboxtext[arr2[i][0]].innerText == "0" && comboxtext[arr2[i][2]].innerText == "0" && comboxtext[arr2[i][1]].innerText == ""){
        pos = arr2[i][1]
        found = true;
        player = false;
      }
      
      run = run + 1;
      console.log("runnnn",run);
      console.log("found",found);
      console.log("player",player);

      if ( found ){
        comboxtext[pos].innerText = mark;
      }
      
    }

  }
  
  if(player == true){

    console.log("canruuuuuuuuunnnnnnnnnn part 2")
    
    let found = false
    var arr1 = [[0,1,2],
                [0,3,6,],
                [2,5,8],
                [0,4,8],
                [2,4,6],
                [1,4,7],
                [3,4,5],
                [6,7,8]];

for(i=0;i <= 7 && found == false;i++){

        if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "" &&  found == false ){
          pos = arr1[i][2]
          found = true;
          player = false;
        }

        if(comboxtext[arr1[i][1]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][0]].innerText == "" && found == false ){
          pos = arr1[i][0]
          found = true;
          player = false;
        }

        if(comboxtext[arr1[i][0]].innerText == "X" && comboxtext[arr1[i][2]].innerText == "X" && comboxtext[arr1[i][1]].innerText == "" && found == false ){
          pos = arr1[i][1]
          found = true;
          player = false;
        }

        if ( found ){
          comboxtext[pos].innerText = mark;
        }
        
      }

  }

  if(player == true){
      
    let found = false
    var arr1 = [0,2,6,8];
    console.log("canruuuuuuuuunnnnnnnnnn part 3")
    let run = 0

    while(found == false && run < 25){

      var posi = Math.floor(Math.random() * 4);
      var cmpo = arr1[posi];

      if( comboxtext[cmpo].innerText == "" ){
        found = true;
        player = false;
        pos = cmpo;
        comboxtext[pos].innerText = mark;

      }

      console.log(run);

      run = run + 1
    }

  }

  if(player == true){
    
    let found = false
    var arr1 = [0,1,2,3,4,5,6,7,8];
    console.log("canruuuuuuuuunnnnnnnnnn part 4")

    while(found == false){

      var posi = Math.floor(Math.random() * 9);
      var cmpo = arr1[posi];

      if( comboxtext[cmpo].innerText == "" ){
        found = true;
        player = false;
        pos = cmpo;
        comboxtext[pos].innerText = mark;

      }
    }

  }
}



// console.log("pos",pos);
canrun = canrun + 1;               // increment canrun ( if canrun is less than 4 then while loop will work )

console.log("Player",player);
console.log("canrun",canrun);
mark = changemark();
document.getElementsByClassName("info")[0].innerText  = "Turn for " + mark;
checkWin();     // check if computer wins or no
}


function mysignupshow(){
  
  document.getElementById("signupcon").style.display = "block";
  document.querySelector(".gameset").style.display = 'none';
  document.querySelector("#signincon").style.display = 'none';

}

function mysigninshow(){
  
  document.getElementById("signincon").style.display = "block";
  document.querySelector(".gameset").style.display = 'none';
  document.querySelector("#signupcon").style.display = 'none'; 

}



function feedsignupdata(){
  emailr = document.getElementById("email").value;
  passwordr = document.getElementById("password").value;
  fnamer = document.getElementById("fname").value;
  rpasswordr = document.getElementById("RPassword").value;

  console.log(emailr)
  console.log(passwordr)
  console.log(fnamer)
  console.log(rpasswordr)

  document.querySelector(".gameset").style.display = 'block';
  document.querySelector("#signupcon").style.display = 'none';
  document.querySelector("#signincon").style.display = 'none';
  

}


function feedsignipdata(){

  document.querySelector(".gameset").style.display = 'block';
  document.querySelector("#signupcon").style.display = 'none';
  document.querySelector("#signincon").style.display = 'none';
  document.querySelector("#sccreset").style.display = 'block';


}
