import nodemailer, {createTransport} from 'nodemailer'

export default async function  emailController (data) {
    const {name, email, message} = data;

    const transporter = createTransport({
        service: 'Gmail',
        auth:{
            user:'nodemailertestedc@gmail.com',
            pass:'nodemailer_edc'
        },
    });

    const mailOptions = {
        from: email,
        to: 'nodemailertestedc@gmail.com',
        subject: 'Someone tried to contact EDC, VIIT',
        html: `<p>Name: ${name}</p><p>Email:${email}<p>Message: ${message}</p>`
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log("Sent successfully");
    }catch(error){
        console.log(error)
    }
};

// module.exports = emailController;