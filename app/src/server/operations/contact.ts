import { emailSender } from 'wasp/server/email';
import { HttpError } from 'wasp/server';

export const sendInquiryEmail = async (args: any, context: any) => {
  try {
    await emailSender.send({
      to: 'your-email@example.com', // Replace with your email
      subject: `New Web Scraping Inquiry from ${args.fullName}`,
      text: `
        New Web Scraping Inquiry

        Contact Information:
        Name: ${args.fullName}
        Email: ${args.email}

        Project Details:
        Budget Range: ${args.budget}

        URLs to Scrape:
        ${args.urls}

        Additional Details:
        ${args.message}

        Sent from your website contact form
      `,
      html: `
        <h2>New Web Scraping Inquiry</h2>
        
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${args.fullName}</p>
        <p><strong>Email:</strong> ${args.email}</p>
        
        <h3>Project Details:</h3>
        <p><strong>Budget Range:</strong> ${args.budget}</p>
        
        <h3>URLs to Scrape:</h3>
        <pre>${args.urls}</pre>
        
        <h3>Additional Details:</h3>
        <p>${args.message}</p>
        
        <hr>
        <p><em>Sent from your website contact form</em></p>
      `
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error sending inquiry email:', error);
    throw new HttpError(500, 'Failed to send inquiry email');
  }
}; 