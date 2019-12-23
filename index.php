<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ДЕНЬ РОЖДЕНИЯ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="./css/slick-theme.css"/>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
    <link rel="stylesheet" href="./css/style.css?<?=time()?>">
</head>
<body>
<div class="menu">
    <div class="menu__item" data-id="questionnaire">Тест</div>
    <div class="menu__item" data-id="gallery">Галлерея</div>
</div>
<div class="wrapper">
    <?require_once 'parts/questionnaire.php'?>
    <?require_once 'parts/gallery.php'?>
</div>
<script src="./js/script.js?<?=time()?>"></script>
</body>
</html>
