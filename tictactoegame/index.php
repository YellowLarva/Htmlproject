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
    <!-- <div class="head">
      <div>
        <a href="index.php">Welcome To Tic Tac Toe Game</a>
        <div id="SignUp" onclick="mysignupshow()">
          Sign Up           
        </div>
        <div id="SignIn" onclick="mysigninshow()">
          Sign In
        </div>
      </div>
    </div>
    <br>
    <br> -->

    <div id="welhead" >
      <a href="index.php">Welcome To Tic Tac Toe Game</a>
    </div>

    <div class="head">
        <div id="SignUp" onclick="mysignupshow()">
          Sign Up           
        </div>
        <div id="SignIn" onclick="mysigninshow()">
          Sign In
        </div>
    </div>


    <?php

      $email = "656";
      echo "globalem",$email,"<br>";

      if(isset($_POST['create'])){

        $fullname = $_POST['firstname'];
        $email = $_POST['email'];
        $password = $_POST['psw'];
        $cscore = 0;
        $pscore = 0;
        $tscore = 0;

        // echo $fullname + " " + $email + " " + $password;
        echo $fullname,$email;

        if( !empty($email) || !empty($fullname) || !empty($password) ){

          $host = "localhost";
          $dbuser = "root";
          $dbpaswd = "";
          $dbname = "scorecard";

          // create connection
          $connstore = new mysqli($host,$dbuser,$dbpaswd,$dbname);

          if (mysqli_connect_error()){
            die("Connection Failed");
          }
          else{
            $Select = "Select email from score where email = ? Limit 1";
            
            $Insert = "Insert into score values (?,?,?,?,?,?)";

            $stmt = $connstore->prepare($Select);
            $stmt->bind_param("s",$email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ( $rnum == 0){
              $stmt->close();

              $stmt = $connstore->prepare($Insert);
              $stmt->bind_param("ssiiis",$email,$fullname,$cscore,$pscore,$tscore,$password);
              $stmt->execute();
              echo "New Record Inserted Succesfully";

            }
            else{
              echo "Already registered with this email ";
            }
            $stmt->close();
            $connstore->close();
          }
        }
        else{
          echo "All Field are required";
        }
        
      }
      
      if(isset($_POST['setinfo'])){

        // echo "withoue em",$email,"<br>";
        $email = $_POST['emails'];
        global $email;
        // echo "global",$email,"<br>";

        $password = $_POST['psws'];

        if( !empty($email) || !empty($password) ){

          $host = "localhost";
          $dbuser = "root";
          $dbpaswd = "";
          $dbname = "scorecard";

          // create connection
          $connstore = new mysqli($host,$dbuser,$dbpaswd,$dbname);

          if (mysqli_connect_error()){
            die("Connection Failed");
          }
          else{
            // $Select = "Select email from score where email = ? and password = ? Limit 1";
            $Select = "Select email,Fname,cscore,pscore,tscore from score where email = ? and password = ? Limit 1";
            $Select = "Select email,Fname,cscore,pscore,tscore from score where email = ? and password = ? Limit 1";

            $stmt = $connstore->prepare($Select);
            $stmt->bind_param("ss",$email,$password);
            // echo "after Select ",$email,"<br>";
            // $stmt->bind_param("s",$email);
            $stmt->execute();
            // $stmt->bind_result($email);
            $stmt->bind_result($email,$fname,$csc,$psc,$tsc);
            // echo "after bind params ",$email,"<br>";
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ( $rnum == 1){

            ?>
            <div style="color: White; padding: 20px;">

              <?php

              while($stmt->fetch()){

              ?>

              <div id="useremail" style="display: none;">
              <!-- <div id="useremail"> -->
                <?php
                  echo $email,"<br>";  
                ?>
              </div>

              <?php

                echo "All Time Score","<br>";
                echo "Name : ",$fname,"<br>";
                echo "Computer Score : ",$csc,"<br>";
                echo "Player Score : ",$psc,"<br>";
                echo "Tie Score : ",$tsc,"<br>";
                // echo $email;
              }
              $stmt->close();
              
            }
            else{
              echo "No user Found ";
            }
            $connstore->close();
          }
        }
        else{
          echo "All Field are required";
        }
        
        ?>
      </div>
        
        <?php

      }

    if(isset($_POST['updatescore'])){

      $cscore = $_POST['csc'];
      $pscore = $_POST['psc'];
      $tscore = $_POST['tsc'];
      $em = "dsfgfg23";


      if( $cscore != 0 || $pscore != 0 || $tscore != 0  ){

        $host = "localhost";
        $dbuser = "root";
        $dbpaswd = "";
        $dbname = "scorecard";
        // create connection

        $connstore = new mysqli($host,$dbuser,$dbpaswd,$dbname);

        if (mysqli_connect_error()){
          die("Connection Failed");
        }
        else{
          // $Select = "Select email from score where email = ? and password = ? Limit 1";

          // $Select = "Select email,fname,cscore,pscore,tscore from score where email = ?  Limit 1";

          $Select = "Select email from score where email = ? Limit 1";
            
          // $Insert = "Insert into score values (?,?,?,?,?,?)";

          $stmt = $connstore->prepare($Select);
          $stmt->bind_param("s",$em);
          $stmt->execute();
          $stmt->bind_result($em);
          $stmt->store_result();
          $rnum = $stmt->num_rows;


          // $stmt = $connstore->prepare($Select);
          // $stmt->bind_param("s",$em);
          echo "innerem",$em,"<br>";
          
          // $stmt->execute();
          // $stmt->bind_result($e,$n,$c,$p,$t);
          // $stmt->store_result();
          // $rnum = $stmt->num_rows;

          if ( $rnum == 1){
              $stmt->close();

            $Select = "Select email,fname,cscore,pscore,tscore from score where email = ?  Limit 1;";

            $stmt = $connstore->prepare($Select);
            $stmt->bind_param("s",$em);
            $stmt->execute();
            $stmt->bind_result($e,$n,$c,$p,$t);
            $stmt->store_result();
            $stmt->fetch();
            $stmt->close();
            
            $cscore = $cscore+$c;
            $pscore = $pscore+$p;
            $tscore = $tscore+$t;

            $Update = "Update score SET cscore = ? , pscore = ? , tscore = ?  where email = ? ";

            $stmt = $connstore->prepare($Update);
            $stmt->bind_param("iiis",$cscore,$pscore,$tscore,$em);
            // $stmt->bind_param("s",$email);
            $stmt->execute();
            $stmt->close();

            

            $Select = "Select email,fname,cscore,pscore,tscore from score where email = ?  Limit 1;";

            $stmt = $connstore->prepare($Select);
            $stmt->bind_param("s",$em);
            $stmt->execute();
            $stmt->bind_result($e,$n,$c,$p,$t);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ( $rnum == 1){

            ?>
            <div style="color: White; padding: 20px;">

              <?php

              while($stmt->fetch()){

                echo "All Time Score","<br>";
                echo "Name : ",$n,"<br>";
                echo "Computer Score : ",$c,"<br>";
                echo "Player Score : ",$p,"<br>";
                echo "Tie Score : ",$t,"<br>";
                // echo $email;
              }
              $stmt->close();
              
            }
            else{
              echo "No user Found ";
            }
          
          
          }
          else{
            echo "Check User ";
          }

          
          $connstore->close();
        }
      }
      else{
        echo "All Fields are required";
      }
      
      ?>
    </div>
      
      <?php

    }

    ?>

    

    <div id="signupcon" >

      <form action="index.php" method ='post' >

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
          
              <div class="clearfix">
                  <div>
                      <button type="button" class="cancelbtn">Cancel</button>
                  </div>
                  <span></span>
                  <div>
                      <button type="sumbit" class="signupbtn" name = "create" onclick="feedsignupdata()"> Sign Up</button>
                  </div>
              </div>

          </div>
      </form>

  </div>


    <div id="signincon" >

      <form action="index.php" method ='post' >

          <div class="containersignin">

              <h1>Sign IN</h1>
              <p>Please fill in this form to Log in to your account.</p>
              <hr>
                  
              <label for="email"><b>Email</b></label>
              <input type="text"  id="emails" placeholder="Enter Email" name="emails" required>

              <label for="psw"><b>Password</b></label>
              <input type="password" id="passwords" placeholder="Enter Password" name="psws" required>
          
              <div class="clearfix">
                  <div>
                      <button type="button" class="cancelbtn">Cancel</button>
                  </div>
                  <span></span>
                  <div>
                      <button type="submit" class="signupbtn" name="setinfo" onclick="feedsignipdata()"> Sign In</button>
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

            <form action="index.php" method="post">

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

                
                <input type="text" id="cosc" name="csc" value="0"  style ="color: white; background: transparent;border: none;;font-size:1.5rem;text-align:center;" readonly>
                <input type="text" id="plsc" name="psc" value="0" style ="color: white; background: transparent;border: none;;font-size:1.5rem;text-align:center;" readonly>
                <input type="text" id="tisc" name="tsc" value="0"  style ="color: white; background: transparent;border: none;;font-size:1.5rem;text-align:center;" readonly>
<!--                 
                <div id="cosc" name="csc">
                  0
                </div>
                <div id="plsc" name="psc">
                  0
                </div>
                <div id="tisc" name="tsc">
                  0
                </div> -->
              </div>
              
              <div id="scresetdiv">
                <button id="sccreset" type="submit" name="updatescore">Reset Score</button>
              </div>

            </form>
          </div>
    </div>

  </div>

      <script src="script.js"></script>
      
    <!-- <div id="tablecontainer">
      
      <?php

      // $conn = mysqli_connect("localhost","id19687934_navneet","cUpL&Pm2AY+APuG~","id19687934_userscoretb") or die("Connection Failed");
      $conn = mysqli_connect("localhost","root","","scorecard") or die("Connection Failed");

      $squery = "Select * from score where Fname = 'Navneet Chauhan';";

      $result = mysqli_query($conn,$squery) or die("Query Unsuccessful.");

      if ( mysqli_num_rows($result) > 0 ){

      ?>

      <table cellpadding = "7px" class="tttt"  >
          <thead>
              <th>Email</th>
              <th>Name</th>
              <th>Computer Score</th>
              <th>Player Score</th>
              <th>Tie Score</th>
          </thead>
          <tbody>
              <tr>
                  <td>@gm</td>
                  <td>JHHHHH</td>
                  <td>6</td>
                  <td>5</td>
                  <td>78</td>
              </tr>
              <?php
                  while($row = mysqli_fetch_assoc($result)){
              ?>
              <tr>
                  <td> <?php echo $row['email'] ?> </td>
                  <td> <?php echo $row['Fname'] ?> </td>
                  <td> <?php echo $row['cscore'] ?> </td>
                  <td> <?php echo $row['pscore'] ?> </td>
                  <td> <?php echo $row['tscore'] ?> </td>
              </tr>

              <?php } ?>
          </tbody>

      </table>

      <?php }  else {
          echo " <h2>No record Found";

      }
      mysqli_close($conn);
      ?>

    </div> -->

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

  </body>
</html>
