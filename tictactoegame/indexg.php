<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.8/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>     
  </head>
  <body >
    <div class="head">
      <a href="index.php">Welcome To Tic Tac Toe Game</a>
      <div>
        <div id="SignUp" onclick="mysignupshow()">
          Sign Up           
        </div>
        <div id="SignIn" onclick="mysigninshow()">
          Sign In
        </div>
      </div>
    </div>
    <br>
    <br>

    <div id="signupcon" >

      <form action="registration.php" method ='post' style="border:1px solid #ccc" >

          <div class="containersignin">

              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr>
                  
              <label for="email"><b>Email</b></label>
              <input type="text"  id="email" placeholder="Enter Email" name="email" required>

              <label for="psw"><b>Password</b></label>
              <input type="password" id="password" placeholder="Enter Password" name="psw" required>

              <label for="firstname"><b>Full Name</b></label>
              <input type="text" id="fname" placeholder="Enter Full name" name="firstname" required>
              
              
              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password"  id="RPassword" placeholder="Repeat Password" name="psw-repeat" required>
          
              <div class="clearfix">
                  <div>
                      <button type="button" class="cancelbtn">Cancel</button>
                  </div>
                  <span></span>
                  <div>
                      <button type="button" class="signupbtn" onclick="feedsignupdata()"> Sign Up</button>
                  </div>
              </div>

          </div>
      </form>

  </div>


    <div id="signincon" >

      <form action="signin.php" method ='post' style="border:1px solid #ccc" >

          <div class="containersignin">

              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr>
                  
              <label for="email"><b>Email</b></label>
              <input type="text"  id="email" placeholder="Enter Email" name="email" required>

              <label for="psw"><b>Password</b></label>
              <input type="password" id="password" placeholder="Enter Password" name="psw" required>
          
              <div class="clearfix">
                  <div>
                      <button type="button" class="cancelbtn">Cancel</button>
                  </div>
                  <span></span>
                  <div>
                      <button type="button" class="signupbtn" onclick="feedsignupdata()"> Sign Up</button>
                  </div>
              </div>

          </div>
      </form>

  </div>

    <div class="gameset">

      <div class="gameContainer">
      
        <div class="container">
            <div class="box bt-0 bl-0"><span class="boxtext"></span></div>
            <div class="box bt-0 "><span class="boxtext"></span></div>
            <div class="box bt-0 br-0 "><span class="boxtext"></span></div>
            <div class="box bl-0 "><span class="boxtext"></span></div>
            <div class="box "><span class="boxtext"></span></div>
            <div class="box br-0 "><span class="boxtext"></span></div>
            <div class="box bl-0 bb-0 "><span class="boxtext"></span></div>
            <div class="box bb-0 "><span class="boxtext"></span></div>
            <div class="box bb-0 br-0 "><span class="boxtext"></span></div>
          </div>
      
          <div class="gameInfo">
            <!-- <div class="chose">
              <h3>Choose Your Mark</h3>
              <input type="radio" name="player-choice" id="player-choice-1" value="X" /> X  &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp
              <input type="radio" name="player-choice" id="player-choice-1" value="X" /> O
            </div> -->
      
            <div>
              <span class="info">Turn for X ( X go First )</span>
              <button id="reset">Reset</button>
            </div>
      
            <h4 id="sccard">Scorecard</h4>
      
            <div class="scorecard">
              <div class="schd">
                Computer
              </div>
              <div class="schd">
                Player
              </div>
              <div class="schd">
                Tie
              </div>
              <div id="cosc">
                0
              </div>
              <div id="plsc">
                0
              </div>
              <div id="tisc">
                0
              </div>
            </div>
            
            <div id="scresetdiv">
              <button id="sccreset" >Reset Score</button>
            </div>
          </div>
    </div>

  </div>

    
      
    <div id="tablecontainer">

      <div>
      <?php

      // $conn = mysqli_connect("localhost","id19687934_navneet","cUpL&Pm2AY+APuG~","id19687934_userscoretb") or die("Connection Failed");
      $conn = mysqli_connect("localhost","root","","scorecard") or die("Connection Failed");

      $squery = "Select * from score where Fname = 'Navneet Chauhan';";

      $result = mysqli_query($conn,$squery) or die("Query Unsuccessful.");

      if ( mysqli_num_rows($result) > 0 ){

      ?>

      <?php
        while($row = mysqli_fetch_assoc($result)){
        
        echo "Player Name: ",$row['Fname']  ;
        echo "<br>"; 
        echo "Computer Score  : ",$row['cscore']  ;
        echo "<br>"; 
        echo "Player Score  : ",$row['pscore']  ;
        echo "<br>"; 
        echo "Tie Score  : ",$row['tscore']  ;

        }
      }
      ?>


      <?php 
      mysqli_close($conn);
      ?>
      </div>
      


    </div>

    <script src="script.js"></script>

      <br>
      <br>
      <br>
      <br>
  </body>
</html>