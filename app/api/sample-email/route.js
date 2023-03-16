import { sendEmail } from "@/utils/send-email";
import { render } from "@react-email/render";
import SampleEmailTemplate from "@/components/SampleEmailTemplate";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const emailTemplate = render(<SampleEmailTemplate data={body} />);
  await sendEmail({
    to: "kokweikhong@gmail.com",
    subject: "New Sample Request From k-floorings",
    html: emailTemplate,
  });
  return new Response("Email Sent!");
}
