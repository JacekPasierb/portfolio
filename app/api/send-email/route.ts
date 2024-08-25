import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const msg = {
      to: "jack_byk@o2.pl",
      from: `jack_byk@o2.pl`,
      subject: `Nowa wiadomość z PORTFOLIO od ${name} z email: ${email}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
