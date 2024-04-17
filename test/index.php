<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>DeveXe Consultancy Services</title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
    <link rel="stylesheet" href="css/style2.css"/>
    <link rel='shortcut icon' href='images/favicon.ico' type='image/x-icon' />
  </head>
  <body>

    <?php
    // define variables and set to empty values
    $name = $email = $message = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if(empty($_POST["name"])) {
        $nameErr = "Name is required";
      } else {
        $name = clean_input($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
          $nameErr = "Only letters and white space allowed";
        }
      }
      if(empty($_POST["email"])) {
        $emailErr = "Email is requried";
      } else {
        $email = clean_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }
      if(empty($_POST["message"])) {
        $message = "";
      } else {
        $message = clean_input($_POST["message"]);
      }
      $toEmail = "enquiries@devexe.co.uk";
      $mailHeaders = "Name: " . $name .
      "\r\n Email: " . $email .
      "\r\n Message: " . $message . "\r\n";
      if(mail($toEmail, "Website enquiry", $mailHeaders)){
        $response = "Thank you. We will be in touch.";
      } else {
        $response = "There was an error";
      }
    }

    function clean_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    ?>

    <div class="w3-mobile">
      <div class="w3-bar w3-center w3-padding-large">
        <span class="w3-mobile">
          <img src="images/DeveXe_logo_1000px.png" height="120"/>
        </span>
      </div>
    </div>



    <!-- Page Content -->


    <div class="w3-row branding">
      <div class="w3-quarter w3-container"></div>
      <div class="w3-half w3-container devexe-red" style="padding-left:0px">
        <!-- Sidebar -->
        <div class="w3-sidebar w3-bar-block w3-border-right w3-animate-opacity w3-xlarge" style="display:none;width:auto" id="mySidebar">
          <button onclick="w3_close()" class="w3-bar-item w3-xlarge devexe-red">&times;</button>
          <a href="#about" class="w3-bar-item w3-button" style="color:black" onclick="w3_close()">Who we are</a>
          <a href="#clients" class="w3-bar-item w3-button" style="color:black" onclick="w3_close()">Our clients</a>
          <a href="#philosophy" class="w3-bar-item w3-button" style="color:black" onclick="w3_close()">Our philosophy</a>
          <a href="#specialisms" class="w3-bar-item w3-button" style="color:black" onclick="w3_close()">Our specialisms</a>
          <a href="#contact" class="w3-bar-item w3-button" style="color:black" onclick="w3_close()">Contact us</a>
        </div>
        <button class="w3-button devexe-red w3-xlarge" onclick="w3_open()">☰</button>
      </div>
      <div class="w3-quarter w3-container"></div>
    </div>

    <section class="w3-row">
      <div class="w3-quarter w3-container"></div>
      <div class="w3-large w3-half w3-container w3-card w3-justify" onclick="w3_close()">
        <div id="about" class="w3-card w3-padding w3-margin-top w3-round-xlarge">
          <h2>Who we are</h2>
          <p>Devexe was founded in 2012 as a specialist software engineer consultancy offering expert computer programming, data architecture and technical leadership services to UK and international clients.</p>
          <p>We are data experts. We understand the importance of our client’s data, whether that be scientific measurements, financial information, technical documentation, or archival records. We have a deep knowledge of data storage techniques and data formats, as well as data optimisation, validation, querying, and transformation. We know how to deliver data securely to our client’s users so that the information they need is always at their fingertips when they need it.</p>
        </div>
        <div id="clients" class="w3-card w3-padding w3-margin-top w3-round-xlarge">
          <h2>Our clients</h2>
          <p>Our clients include major international airlines, aircraft engine manufacturers, legal publishers, government departments and national archives. Working on projects alongside our clients, we have helped them to achieve their digital transformation goals. Whether that be replacing paper-based systems with digital or replacing first generation digital systems with the state of the art.</p>
        </div>
        <div id="philosophy" class="w3-card w3-padding w3-margin-top w3-round-xlarge">
          <h2>Our philosophy</h2>
          <p>Devexe is a strong advocate of international standardisation. We believe our clients should be able to move their data between different storage solutions without being locked in to proprietary formats. We strongly support standards bodies such the <a href="https://www.w3.org/" target="_blank">W3C</a> and <a href="https://www.asd-europe.org/" target="_blank">ASD</a>.</p>
          <p>We are also firm advocates of developing and using open-source software wherever this can be clearly demonstrated to benefit our clients. We believe open-source software frequently offers more flexibility and cost savings compared to proprietary software.</p>
        </div>
        <div id="specialisms" class="w3-card w3-padding w3-margin-top w3-margin-bottom w3-round-xlarge" style="padding-bottom:24px!important">
          <h2>Our specialisms</h2>
          <p class="w3-large">Some of the key skills Devexe have employed on previous projects are listed below. This is not an exhaustive list but rather intended to give an idea about the kind of technical know-how Devexe has accumulated. It should be noted however that Devexe is a firmly forward-looking company and is continuously seeking new and innovative ways to deliver for our clients.</p>
          <button onclick="myFunction('languages')" class="w3-btn w3-block w3-center devexe-red w3-xlarge w3-hide-medium w3-hide-small w3-round-large">Programming, query and transformation languages</button>
          <button onclick="myFunction('languages')" class="w3-btn w3-block w3-center devexe-red w3-xlarge w3-hide-large w3-round-large">Languages</button>
          <div id="languages" class="w3-container w3-hide w3-light-grey">
            <ul class="w3-ul w3-card-4 w3-center w3-xlarge">
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Scala_(programming_language)" target="_blank">Scala</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/SPARQL" target="_blank">SPARQL</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/XQuery" target="_blank">XQuery</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/XSLT" target="_blank">XSLT</a></li>
            </ul>
          </div>
          <button onclick="myFunction('standards')" class="w3-btn w3-block w3-center devexe-red w3-xlarge w3-margin-top w3-hide-medium w3-hide-small w3-round-large">International Standards &amp; Specifications</button>
          <button onclick="myFunction('standards')" class="w3-btn w3-block w3-center devexe-red w3-xlarge w3-margin-top w3-hide-large w3-round-large">Standards</button>
          <div id="standards" class="w3-container w3-hide w3-light-grey">
            <ul class="w3-ul w3-card-4 w3-center w3-xlarge">
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/CSS" target="_blank">Cascading Style Sheets (CSS)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/XML" target="_blank">Extensible Markup Language (XML)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">Hypertext Markup Language (HTML)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Resource_Description_Framework" target="_blank">Resource Description Framework (RDF)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/ODRL" target="_blank">Open Digital Rights Language (ODRL)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/S1000D" target="_blank">S1000D</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System" target="_blank">Simple Knowledge Organization System (SKOS)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Turtle_(syntax)" target="_blank">Terse RDF Triple Language (Turtle)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank">The Semantic Web</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Web_Ontology_Language" target="_blank">Web Ontology Language (OWL)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/XPath" target="_blank">XML Path Language (XPath)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/XML_Schema_(W3C)" target="_blank">XML Schema Definition (XSD)</a></li>
            </ul>
          </div>
          <button onclick="myFunction('frameworks')" class="w3-btn w3-block w3-center devexe-red w3-xlarge w3-margin-top w3-round-large">Frameworks</button>
          <div id="frameworks" class="w3-container w3-hide w3-light-grey">
            <ul class="w3-ul w3-card-4 w3-center w3-xlarge">
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Apache_Jena" target="_blank">Apache Jena</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Pentaho" target="_blank">Pentaho</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Play_Framework" target="_blank">Play Framework</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/RDF4J" target="_blank">RDF4J</a></li>
            </ul>
          </div>
          <button onclick="myFunction('databases')" class="w3-btn w3-block w3-centre devexe-red w3-xlarge w3-margin-top w3-hide-medium w3-hide-small w3-round-large">Database and document management systems</button>
          <button onclick="myFunction('databases')" class="w3-btn w3-block w3-centre devexe-red w3-xlarge w3-margin-top w3-hide-large w3-round-large">Storage</button>
          <div id="databases" class="w3-container w3-hide w3-light-grey">
            <ul class="w3-ul w3-card-4 w3-center w3-xlarge">
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Amazon_Neptune" target="_blank">Amazon Neptune</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Amazon_S3" target="_blank">Amazon S3</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Common_Source_Data_Base" target="_blank">Common Source Data Base (CSDB)</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/EXist" target="_blank">eXist-db</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/MarkLogic_Server" target="_blank">Marklogic Server</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Microsoft_SQL_Server" target="_blank">Microsoft SQL Server</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Neo4j" target="_blank">Neo4j</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Oracle_Database" target="_blank">Oracle</a></li>
              <li class="w3-hover-dark-grey"><a href="https://en.wikipedia.org/wiki/Prot%C3%A9g%C3%A9_(software)" target="_blank">Protege</a></li>
            </ul>
          </div>
        </div>
        <div id="contact" class="w3-card w3-padding w3-margin-top w3-round-xlarge">
          <h2>Contact us</h2>
          <p class="w3-large">If you would like to discuss a project with us or have any further questions please get in touch using the form below.</p>
          <div class="w3-card-4 w3-light-grey w3-margin-bottom w3-round-xlarge">
            <form class="w3-container w3-padding-large" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
              <label class="w3-label">Name</label>
              <input class="w3-input w3-border" type="text" name="name" value="<?php echo $name;?>"/>
              <span class="error"><?php echo $nameErr;?></span>
              <div style="padding-top:10px">
                <label class="w3-label" style="padding-top:10px!important">Email</label>
                <input class="w3-input w3-border" type="text" name="email" value="<?php echo $email;?>"/>
                <span class="error"><?php echo $emailErr;?></span>
              </div>
              <div style="padding-top:10px">
                <label class="w3-label">Message</label>
                <textarea class="w3-input w3-border" style="resize:none" name="message"><?php echo $message;?></textarea>
              </div>
              <button type="submit" class="w3-btn devexe-red w3-xlarge w3-margin-top w3-round-large">Submit</button>
              <?php if(!empty($response)) { ?>
              <div class="w3-panel w3-pale-green w3-center">
                <?php echo $response; ?>
              </div>
              <?php } ?>
              <br/><br/>
            </form>
          </div>
        </div>
      </div>
      <div class="w3-quarter w3-container"></div>
    </section>

    <footer class="w3-row">
      <div class="w3-quarter w3-container"></div>
      <div class="w3-half w3-container w3-black w3-padding-xlarge w3-center w3-large">
        <p>DeveXe Consultancy Services &copy; 2024</p>
      </div>
      <div class="w3-quarter w3-container"></div>
    </footer>

    <script src="./dist/wikipedia-preview.umd.cjs"></script>
    <script type="text/javascript">
      wikipediaPreview.init({
        detectLinks: true
      })
    </script>
    <script>

      function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
        } else {
          x.className = x.className.replace(" w3-show", "");
        }
      }

      function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }

      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }
    </script>
  </body>
</html>
