<?php

$username = $_POST['username'];
$email = $_POST['mail'];

// Обработка входных данных
$username = htmlspecialchars($username);
$email = htmlspecialchars($email);
$username = urldecode($username);
$email = urldecode($email);
$username = trim($username);
$email = trim($email);

$subject = "Спасибо за ваш заказ в Cleaning Company!";

// Заголовки
$headers =  "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: cleaningcompany@gmail.com" . "\r\n"; // Замените на ваш адрес отправителя

// Тело письма
$message = '
<!DOCTYPE html>
<html lang="ru"
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Спасибо за заказ</title>
    <style>
        body {
            color: #FFFFFF;
            font-family: Arial, sans-serif;
            padding: 20px;
            margin: 0;
        }
        .header {
            background-color: #54AD36;
            padding: 20px;
        }
        h1 {
            color: #FFFFFF;
        }
        img {
            max-width: 100%; /* Адаптивное изображение */
            height: auto;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Спасибо за ваш заказ в Cleaning Company!</h1>
    </div>
    <img src="https://ideastone.by/files/resized/547x320-about_banner-ru-about_banner-ru-about.834fb856_1.png" alt="Office image" />
    <p>Уважаемый(ая) ' . $username . ',</p>
    <p>Благодарим вас за выбор Cleaning Company! Мы рады сообщить, что ваш заказ успешно принят и в ближайшее время наши специалисты свяжутся с вами для уточнения всех деталей.</p>
    <p>Ваш комфорт и удовлетворение — наша главная задача, и мы сделаем все возможное, чтобы предоставить вам услуги на самом высоком уровне.</p>
    <p>Если у вас возникнут дополнительные вопросы или пожелания, не стесняйтесь обращаться к нам.</p>
    <p>С уважением,<br>Команда Cleaning Company</p>
</body>
</html>
';

// Отправка письма
if(mail($email, $subject, $message, $headers)) {
    echo "Письмо успешно отправлено.";
} else {
    echo "Ошибка при отправке письма.";
}
?>