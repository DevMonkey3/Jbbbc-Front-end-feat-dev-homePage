import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json(); // { name, company, phone, address, email, agree }

    // Debug logs
    console.log("Form Data Received:", data);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS ? "*****" : "Not set");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    if (!data.agree) {
      return new Response(JSON.stringify({ error: "個人情報同意なし / Consent not given" }), { status: 400 });
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to admin
    try {
      await transporter.sendMail({
        from: `"セミナーフォーム / Seminar Form" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "新しいセミナー申し込み / New Seminar Registration",
        text: `
新しい申し込みがありました:
名前: ${data.name}
会社名: ${data.company}
電話番号: ${data.phone}
住所: ${data.address}
メール: ${data.email}

A new seminar registration has been received:
Name: ${data.name}
Company: ${data.company}
Phone: ${data.phone}
Address: ${data.address}
Email: ${data.email}
        `,
      });
      console.log("Admin email sent successfully!");
    } catch (err) {
      console.error("Failed to send admin email:", err);
      throw err;
    }

    // Send email to user
    try {
      await transporter.sendMail({
        from: `"セミナーフォーム / Seminar Form" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: "セミナー申し込みありがとうございます / Thank you for registering",
        text: `
こんにちは ${data.name} さん,

セミナーへのお申し込みありがとうございます。追ってご連絡いたします。

Hello ${data.name},

Thank you for registering for our seminar. We will contact you shortly.
        `,
      });
      console.log("User email sent successfully!");
    } catch (err) {
      console.error("Failed to send user email:", err);
      throw err;
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Error in /api/seminar:", err);
    return new Response(JSON.stringify({ error: "送信に失敗しました / Failed to send email" }), { status: 500 });
  }
}
