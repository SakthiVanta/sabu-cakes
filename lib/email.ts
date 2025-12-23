import nodemailer from 'nodemailer';
import type { OrderFormData, CustomCakeFormData, ContactFormData } from './validation';

// Email template types
type EmailType = 'order' | 'custom' | 'contact';

interface EmailConfig {
  to: string;
  subject: string;
  html: string;
}

// Create transporter using SMTP config
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Generate HTML email template for order
function generateOrderEmail(data: OrderFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f7fc; }
        .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .order-details { background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { display: flex; margin: 12px 0; }
        .detail-label { font-weight: bold; color: #667eea; width: 150px; }
        .detail-value { flex: 1; }
        .footer { background: #f8f9ff; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        .badge { display: inline-block; background: #667eea; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍰 New Cake Order!</h1>
          <p>Sabu Cakes - Order Request</p>
        </div>
        <div class="content">
          <h2 style="color: #667eea;">Order Details</h2>
          <div class="order-details">
            <div class="detail-row">
              <span class="detail-label">Customer Name:</span>
              <span class="detail-value">${data.customerName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${data.phone}</span>
            </div>
            ${data.email ? `
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${data.email}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Cake Name:</span>
              <span class="detail-value"><strong>${data.cakeName}</strong></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Weight:</span>
              <span class="detail-value">${data.weight === 'half_kg' ? '0.5 KG' : data.weight === 'one_kg' ? '1 KG' : '2 KG'}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Delivery Date:</span>
              <span class="detail-value">${data.deliveryDate}</span>
            </div>
            ${data.deliveryTime ? `
            <div class="detail-row">
              <span class="detail-label">Delivery Time:</span>
              <span class="detail-value">${data.deliveryTime}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Delivery Address:</span>
              <span class="detail-value">${data.deliveryAddress}</span>
            </div>
            ${data.cakeMessage ? `
            <div class="detail-row">
              <span class="detail-label">Cake Message:</span>
              <span class="detail-value">"${data.cakeMessage}"</span>
            </div>
            ` : ''}
            ${data.specialRequests ? `
            <div class="detail-row">
              <span class="detail-label">Special Requests:</span>
              <span class="detail-value">${data.specialRequests}</span>
            </div>
            ` : ''}
          </div>
          <p style="color: #667eea; font-weight: bold; margin-top: 20px;">📞 Please contact the customer to confirm the order!</p>
        </div>
        <div class="footer">
          <p><strong>Sabu Cakes by Sabarika</strong></p>
          <p>Fantasy Street, Ondipudur, Coimbatore</p>
          <p>+91 90038 17379 | sakthi.vana@gmail.com</p>
          <p style="margin-top: 15px; color: #999;">Baked with love ❤️</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate HTML email template for custom cake
function generateCustomCakeEmail(data: CustomCakeFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f7fc; }
        .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .order-details { background: #fff5f8; border-left: 4px solid #764ba2; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { display: flex; margin: 12px 0; }
        .detail-label { font-weight: bold; color: #764ba2; width: 150px; }
        .detail-value { flex: 1; }
        .highlight { background: #fff5f8; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .footer { background: #f8f9ff; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎨 Custom Cake Request!</h1>
          <p>Sabu Cakes - Custom Design</p>
        </div>
        <div class="content">
          <h2 style="color: #764ba2;">Customer Information</h2>
          <div class="order-details">
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${data.customerName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${data.phone}</span>
            </div>
            ${data.email ? `
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${data.email}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Occasion:</span>
              <span class="detail-value">${data.occasion}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Servings:</span>
              <span class="detail-value">${data.servings} people</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Delivery Date:</span>
              <span class="detail-value">${data.deliveryDate}</span>
            </div>
            ${data.budget ? `
            <div class="detail-row">
              <span class="detail-label">Budget:</span>
              <span class="detail-value">₹${data.budget}</span>
            </div>
            ` : ''}
          </div>
          
          <h2 style="color: #764ba2; margin-top: 30px;">Design Preferences</h2>
          <div class="highlight">
            <p><strong>Flavor:</strong> ${data.flavorPreference}</p>
            <p><strong>Design Description:</strong></p>
            <p style="margin: 10px 0; padding: 10px; background: white; border-radius: 5px;">${data.designDescription}</p>
            
            ${data.referenceImages ? `
            <p><strong>Reference Image:</strong></p>
            <p><a href="${data.referenceImages}" style="color: #764ba2;">${data.referenceImages}</a></p>
            ` : ''}
            
            ${data.additionalNotes ? `
            <p><strong>Additional Notes:</strong></p>
            <p style="margin: 10px 0; padding: 10px; background: white; border-radius: 5px;">${data.additionalNotes}</p>
            ` : ''}
          </div>
          
          <p style="color: #764ba2; font-weight: bold; margin-top: 20px;">🎨 Custom design opportunity! Contact customer to discuss possibilities!</p>
        </div>
        <div class="footer">
          <p><strong>Sabu Cakes by Sabarika</strong></p>
          <p>Fantasy Street, Ondipudur, Coimbatore</p>
          <p>+91 90038 17379 | sakthi.vana@gmail.com</p>
          <p style="margin-top: 15px; color: #999;">Baked with love ❤️</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate HTML email template for contact
function generateContactEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f7fc; }
        .container { max-width: 600px; margin: 30px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 30px; }
        .message-box { background: #f0f9ff; border-left: 4px solid #4facfe; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { margin: 10px 0; }
        .detail-label { font-weight: bold; color: #4facfe; }
        .footer { background: #f8f9ff; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Message</h1>
          <p>Sabu Cakes</p>
        </div>
        <div class="content">
          <div class="message-box">
            <div class="detail-row">
              <span class="detail-label">From:</span> ${data.name}
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span> ${data.phone}
            </div>
            ${data.email ? `
            <div class="detail-row">
              <span class="detail-label">Email:</span> ${data.email}
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Subject:</span> ${data.subject}
            </div>
          </div>
          
          <h3 style="color: #4facfe;">Message:</h3>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p>${data.message}</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>Sabu Cakes by Sabarika</strong></p>
          <p>+91 90038 17379 | sakthi.vana@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Main send email function
export async function sendEmail(
  type: EmailType,
  data: OrderFormData | CustomCakeFormData | ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    const transporter = createTransporter();

    let emailConfig: EmailConfig;

    switch (type) {
      case 'order':
        emailConfig = {
          to: process.env.SMTP_TO || '',
          subject: `🍰 New Cake Order from ${(data as OrderFormData).customerName}`,
          html: generateOrderEmail(data as OrderFormData),
        };
        break;

      case 'custom':
        emailConfig = {
          to: process.env.SMTP_TO || '',
          subject: `🎨 Custom Cake Request from ${(data as CustomCakeFormData).customerName}`,
          html: generateCustomCakeEmail(data as CustomCakeFormData),
        };
        break;

      case 'contact':
        emailConfig = {
          to: process.env.SMTP_TO || '',
          subject: `📧 Contact: ${(data as ContactFormData).subject}`,
          html: generateContactEmail(data as ContactFormData),
        };
        break;

      default:
        throw new Error('Invalid email type');
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      ...emailConfig,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
}
