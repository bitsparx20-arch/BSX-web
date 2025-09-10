# EmailJS Setup Instructions

## Overview
The contact form has been configured to work with EmailJS. Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{name}}

Full Name: {{name}}
Email Address: {{email}}
Company: {{company}}
Phone Number: {{phone}}
Service Interest: {{service}}
Project Details: {{details}}

---
This message was sent from the Bitsparx contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## 5. Configure Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note:** Service ID (`service_kqpsvo5`) and Template ID (`template_fgrrkob`) are already configured in the code.

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Used
The form sends these variables to your EmailJS template:
- `{{name}}` - Full Name
- `{{email}}` - Email Address  
- `{{company}}` - Company
- `{{phone}}` - Phone Number
- `{{service}}` - Service Interest
- `{{details}}` - Project Details

## Troubleshooting
- Make sure all environment variables are set correctly
- Check that your EmailJS service is active
- Verify the template ID matches your created template
- Check browser console for any error messages

## Security Notes
- Never commit your `.env.local` file to version control
- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
