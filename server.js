const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();



// nodemailerの設定
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POSTリクエストの処理
app.post('/submit', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${firstName} ${lastName}`,
        text: `名前: ${firstName} ${lastName}\nメール: ${email}\nメッセージ: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('メールの送信に失敗しました。');
        } else {
            console.log('Message sent: %s', info.messageId);
            res.send('メッセージを送信しました。');
        }
    });
});

app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しています。`);
});
