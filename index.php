<?php
?>
<!DOCTYPE html>
<html>

<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- CSS -->
    <link href='bootstrap/css/bootstrap.css' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet">
    <link href='css/style.css' rel='stylesheet' type='text/css'>
    <link href='fontello/css/montserrat.css' rel='stylesheet' type='text/css'>
</head>

<body id='myBody'>
    <header>
        <nav>
            <div class="media">
                <ul>
                    <li><a href="https://www.facebook.com/tosini13" target="_blank"><i class="icon-facebook"></a></i></li>
                    <li><a href="#insta" target="_blank"><i class="icon-instagram"></i></a></li>
                    <li><a href="https://github.com/Tosini13" target="_blank"><i class="icon-github-circled-alt2"></i></a></li>
                </ul>
            </div>
            <a id='hamburger' class="btn mobile"><i class="icon-menu"></i></a>
            <ul class="menu desktop">
                <li>
                    <a>portfolio</a>
                    <ul>
                        <li><a href='#' class="current">intro</a></li>
                        <li><a href='#'>skills</a></li>
                        <li><a href='#'>experience</a></li>
                        <li><a href='#'>prizes</a></li>
                    </ul>
                </li>
                <li>
                    <a>about me</a>
                    <ul>
                        <li><a href='#'>my story</a></li>
                        <li><a href='#'>hobbies</a></li>
                        <li><a href='#'>plans</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="aboutMe">
            <h1>About Me</h1>
            <img src="images/meLess.jpg" alt="My photo" id="myPhoto">
            <p>
                My name is Jakub Bartosik. I was born on 20th of July 1997 in Szczecin, Poland.
                My hobby from an early age is football. I was playing in SL Salos Szczecin
                and MKS Pogon Szczecin for 14 years. In 2016 I started study
                Computer Science in West Pomeranian University of Technology in Szczecin.
                After two years of studying I decided to take part in "Erasmus+" student exchange programme and go to
                Cyprus, where in PA Collage I was studying for one year.
                This oportunity allowed my develop a lot of
                skills (among others level of English and programming).
                I found another adventage in Cyprus and I participated in internship
                at DOREA Educational Institute within Erasmus as well, that lasted 2 months, where I took care of
                website and got experience in using wordpress. Meanwhile, I
                attended course about <a class="textLink" data-src="images/prizes/declaration_of_obtained_competences.jpeg">"Cyber Security"</a>. After I came back to Poland I was taking part in
                <a class="textLink" data-src="images/prizes/IAI_dyplom.jpeg">front-end webcamp</a> in IAI in Szczecin, where I gained professional approach with
                creating websites.
                Currently I am about to finish my dissertation and the aim is
                to create secure website for managing dance school. Since I had started to learn how to create websites
                I had a few projects that results you can check in projects section.
            </p>
        </section>
        <section id="experience">
            <h1>experience</h1>
            <ul>
                <li>
                    <div>2004-2012</div>
                    <div>Playing football in SL Salos Szczecin</div>
                </li>
                <li>
                    <div>2012-2018</div>
                    <div>Playing football in MKS Pogon Szczecin</div>
                </li>
                <li>
                    <div>10.2016 - still</div>
                    <div>Studying computer science in ZUT, Szczecin</div>
                </li>
                <li>
                    <div>10.2018 - 06.2019</div>
                    <div>Studying computer science in PA Collage, Larnaca</div>
                </li>
                <li>
                    <div>06.2018 - 07.2019</div>
                    <div>Internship in DOREA, Limassol</div>
                </li>
                <li>
                    <div>03.2020</div>
                    <div>webcamp in IAI, Szczecin</div>
                </li>
            </ul>
        </section>
        <section id="skills">
            <h1>skills</h1>
            <table>
            </table>
        </section>
        <section id="prizes">
            <a href='#' data-popup-src='images/prizes/certificate_of_participation.jpeg'>Cyber Security Education for Online Safety</a>
        </section>
    </main>
    <footer>
    </footer>
    <div id="popupPhoto" class="popup">
        <a class="cancel">
            <i class="icon-cancel"></i>
        </a>
        <img src="images/prizes/IAI_dyplom.jpeg" alt="photo">
    </div>
    <!-- JS -->
    <!-- jQuery -->
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script> -->
    <!-- BOOTSTRAP -->
    <!-- <script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script> -->
    <!-- JavaScript -->
    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <!-- My -->
    <!-- <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src='bootstrap/js/bootstrap.js' type='text/javascript'></script> -->
    <!-- <script src='js/skills.js' type='text/babel'></script> -->
    <script src='js/newSkills.js' type='text/javascript'></script>
    <script src='js/classes.js' type='text/javascript'></script>
    <script src='js/functions.js' type='text/javascript'></script>
</body>

</html>