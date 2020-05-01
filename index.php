<?php
?>
<!DOCTYPE html>
<html>

<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- CSS -->
    <link href='bootstrap/css/bootstrap.css' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Odibee+Sans|Special+Elite&display=swap" rel="stylesheet">
    <link href='css/style.css' rel='stylesheet' type='text/css'>
    <link href='fontello/css/fontello.css' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
</head>

<body id='myBody'>
    <?php require "html/header.html" ?>
    <main>
        <?php require "html/main.html" ?>
    </main>
    <?php require "html/footer.html" ?>
    <?php require "html/extra.html" ?>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- SLIDER -->
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <!-- React -->
    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script>
    <!-- <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script> -->

    <!-- <script src='js/skillsBabel.js' type='text/babel'></script> -->
    <script src='js/skillsReact.js' type='text/javascript'></script>
    <script src='js/otherSkillsReact.js' type='text/javascript'></script>
    <!-- <script src='js/projectsBabel.js' type='text/babel'></script> -->
    <script src='js/projectsReact.js' type='text/javascript'></script>
    <script src='js/classes.js' type='text/javascript'></script>
    <script>
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
            me.skills.push(new Skill("SQL", 4));
            me.skills.push(new Skill("Java", 3));
            me.skills.push(new Skill("C++", 2));

            me.initSkills();

            me.otherSkills.push(new Skill("English - C1", 5));
            me.otherSkills.push(new Skill("Polish - Native", 6));
            me.otherSkills.push(new Skill("Italian - A2", 2));
            me.otherSkills.push(new Skill("Communication", 6));
            me.otherSkills.push(new Skill("Adaptability", 6));
            me.otherSkills.push(new Skill("Time management", 5));
            me.otherSkills.push(new Skill("Decision making", 4));
            me.otherSkills.push(new Skill("Leadership", 4));

            me.initOtherSkills();

            me.projects.push(new Project("Dentist's website", "https://dissertationjb.000webhostapp.com/", "dentist.jpg", "Mock-up of dentist's website. I have made it in order to simplify work with future projects.", "https://github.com/Tosini13/dental-website"));
            me.projects.push(new Project("Bachelor's Dissertation", "https://poland13jakubartosik.000webhostapp.com", "dissertation.jpg", "Aim of my dissertation project was to create school management safety web application. In order to develop the website I used AJAX, React.js, PHP, MySQL and of course HTML5, CSS3.", "https://github.com/Tosini13/dissertationProject"));
            me.projects.push(new Project("Mesh Coach", "http://oczkotrenera.pl", "meshCoach.jpg", "Information page for 'Oczko Trenera'. I am doing webiste for tournament managing within this project as well."));
            me.projects.push(new Project("My previous porfolio", "https://myauxiliary.000webhostapp.com/", "oldPortfolio.jpg", "My previous portfolio made in July 2019. One of my first webpages"));
            me.update();

            me.initProjects();

            // design = new Design();
            // design.setBackgroundImgSet("html5.svg", "css3.svg", "js.svg");
            // design.initBackgroundAnimation();
    </script>
    <script src='js/functions.js' type='text/javascript'></script>
</body>

</html>