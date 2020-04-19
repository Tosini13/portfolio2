<?php
?>
<!DOCTYPE html>
<html>

<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- CSS -->
    <link href='bootstrap/css/bootstrap.css' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap" rel="stylesheet">
    <link href='css/style.css' rel='stylesheet' type='text/css'>
    <link href='fontello/css/montserrat.css' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
</head>

<body id='myBody'>
    <?php require "html/header.html" ?>
    <main>
        <?php require "html/main.html" ?>
    </main>
    <?php require "html/footer.html" ?>
    <div id="popupPhoto" class="popup">
        <div class="popupHeader">
            <p class="popupTitle"></p>
            <a class="cancel">
                <i class="icon-cancel"></i>
            </a>
        </div>
        <img src="images/prizes/IAI_dyplom.jpeg" alt="photo">
    </div>
    <div id="myPopup" class="popup">
        <div class="popupHeader">
            <p class="popupTitle"></p>
            <a class="cancel">
                <i class="icon-cancel"></i>
            </a>
        </div>
        <div class="mainPopup">
        </div>
    </div>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- SLIDER -->
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#projectsSlick").slick({
                prevArrow: '<i class="icon-left-open slickArrowLeft"></i>',
                nextArrow: '<i class="icon-right-open slickArrowRight"></i>',
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                dots: true,
                arrows: true,
                centerMode: false,
                responsive: [{
                    breakpoint: 980,
                    settings: {
                        dots: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }, {
                    breakpoint: 650,
                    settings: {
                        dots: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });


            me.skills.push(new Skill("HTML 5", 5));
            me.skills.push(new Skill("CSS 3", 5));
            me.skills.push(new Skill("SASS", 5));
            me.skills.push(new Skill("LESS", 4));
            me.skills.push(new Skill("JavaScript", 5));
            me.skills.push(new Skill("jQuery", 4));
            me.skills.push(new Skill("Bootstrap", 3));
            me.skills.push(new Skill("React.js", 3));
            me.skills.push(new Skill("PHP", 4));
            me.skills.push(new Skill("MySQL", 4));
            me.skills.push(new Skill("Java", 3));
            me.skills.push(new Skill("C++", 2));


            me.initSkills();

            me.projects.push(new Project("Bachelor's Dissertation", "https://poland13jakubartosik.000webhostapp.com", "Aim of my dissertation project was to create school management safety web application. In order to develop the website I used AJAX, React.js, PHP, MySQL and of course HTML5, CSS3.", "https://github.com/Tosini13/dissertationProject"));
            me.projects.push(new Project("Mesh Coach", "http://oczkotrenera.pl", "Information page for 'Oczko Trenera'. I am doing webiste for tournament managing within this project as well."));
            me.projects.push(new Project("My previous porfolio", "https://myauxiliary.000webhostapp.com/", "My previous portfolio made in July 2019. One of my first webpages"));
            me.update();

            me.initProjects();

        });
    </script>
    <!-- React -->
    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script>
    <!-- <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script> -->

    <!-- <script src='js/skillsBabel.js' type='text/babel'></script> -->
    <script src='js/skillsReact.js' type='text/javascript'></script>
    <!-- <script src='js/projectsBabel.js' type='text/babel'></script> -->
    <script src='js/projectsReact.js' type='text/javascript'></script>
    <script src='js/classes.js' type='text/javascript'></script>
    <script src='js/functions.js' type='text/javascript'></script>
</body>

</html>