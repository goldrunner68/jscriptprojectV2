<?php
if ((empty($_GET['page']))) {
        $page = 'home';
        $views = 'View/'.$page.'.php';
        require_once "Controller/mailo.php";
    require_once 'Controller/formulaire_verif.php';
include_once 'View/head.php';
include_once 'View/navbar.php';
include_once $views;
    echo'<script type="module" src="main.js"></script>';
include_once 'View/footer.php';
    echo'</body>';
    echo'</html>';
    }
if ((isset($_GET['page']))) {
        $page = $_GET['page'];
        $views = 'View/'.$page.'.php';
        if (file_exists($views)) {
 require_once "Controller/mailo.php";
            require_once 'Controller/formulaire_verif.php';
include_once 'View/head.php';
include_once 'View/navbar.php';
include_once $views;

echo'<script type="module" src="main.js"></script>';
include_once 'View/footer.php';
            echo'</body>';
            echo'</html>';
        }
    }

