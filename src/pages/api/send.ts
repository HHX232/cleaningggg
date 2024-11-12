// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { firstName, mail } = req.body;
    console.log(firstName)
    console.log(mail)

    // Обработка входных данных
    const sanitizedUsername = decodeURIComponent(firstName.trim());
    const sanitizedEmail = decodeURIComponent(mail.trim());

    const subject = "Спасибо за ваш заказ в Cleaning Company!";

    // Настройка транспортера
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Замените на ваш SMTP сервер
      port: 587, // Обычно 587 для TLS
      secure: false, // true для 465, false для других портов
      auth: {
        user: 'cleaningcompany@gmail.com', // Ваш email
        pass: 'your-email-password', // Ваш пароль
      },
    });

    // Тело письма
    const message = `
      <!DOCTYPE html>
      <html lang="ru">
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
          <p>Уважаемый(ая) ${sanitizedUsername},</p>
          <p>Благодарим вас за выбор Cleaning Company! Мы рады сообщить, что ваш заказ успешно принят и в ближайшее время наши специалисты свяжутся с вами для уточнения всех деталей.</p>
          <p>Ваш комфорт и удовлетворение — наша главная задача, и мы сделаем все возможное, чтобы предоставить вам услуги на самом высоком уровне.</p>
          <p>Если у вас возникнут дополнительные вопросы или пожелания, не стесняйтесь обращаться к нам.</p>
          <p>С уважением,<br>Команда Cleaning Company</p>
      </body>
      </html>
    `;

    // Настройка письма
    const mailOptions = {
      from: 'cleaningcompany@gmail.com', // Замените на ваш адрес отправителя
      to: sanitizedEmail, // Кому отправить
      subject: subject,
      html: message,
    };

    // Отправка письма
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Письмо успешно отправлено.' });
    } catch (error) {
      console.error('Ошибка при отправке почты:', error);
      res.status(500).json({ error: 'Ошибка при отправке письма.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен.`);
  }
}