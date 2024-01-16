const nodemailer = require("nodemailer");

export default async function POST(req, res) {
    try {
        const { name, email, phone, message, IP, currentdate, pageUrl } = await req.body;
        const brandname = 'Crystallite'
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'info@crystal-lite.net',
                pass: "10@Kskwoks"
            }
        })

        const mailOptions = {
            from: 'info@crystal-lite.net',
            to: 'info@crystal-lite.net',
            subject: `New Lead Generated By Crystallite`,
            html: `
            <table>
                <tr>
                    <th>Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>${message}</td>
                </tr>
                <tr>
                    <th>IP</th>
                    <td>${IP}</td>
                </tr>
                <tr>
                    <th>Currentdate</th>
                    <td>${currentdate}</td>
                </tr>
                <tr>
                    <th>pageUrl</th>
                    <td>${pageUrl}</td>
                </tr>
                <tr>
                    <th>Brand Name</th>
                    <td>${brandname}</td>
                </tr>
            </table>`
        }

        await transporter.sendMail(mailOptions);

        return res.json({ "message": "Email send sucessfully", "data": [name, email, phone, message, brandname, IP, currentdate, pageUrl], "status": 200 });
    } catch (error) {
        return res.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}