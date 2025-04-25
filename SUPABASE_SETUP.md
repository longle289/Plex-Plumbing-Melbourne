# Supabase Setup for Contact Form

This document provides instructions for setting up Supabase to handle contact form submissions for the Plex Plumbing Melbourne website.

## Prerequisites

- A Supabase account (sign up at [supabase.com](https://supabase.com))
- Access to the website codebase

## Setup Steps

### 1. Create a Supabase Project

1. Log in to your Supabase account
2. Click "New Project"
3. Enter a name for your project (e.g., "plex-plumbing-melbourne")
4. Choose a database password (save this securely)
5. Select a region closest to your users (e.g., Sydney for Australian users)
6. Click "Create new project"

### 2. Create a Table for Contact Form Submissions

1. In your Supabase project dashboard, go to the "Table Editor" in the left sidebar
2. Click "New Table"
3. Set the table name to `contact_submissions`
4. Add the following columns:
   - `id` (type: uuid, primary key, default: `uuid_generate_v4()`)
   - `created_at` (type: timestamptz, default: `now()`)
   - `name` (type: text, not null)
   - `email` (type: text, not null)
   - `phone` (type: text)
   - `service` (type: text)
   - `message` (type: text, not null)
5. Click "Save" to create the table

### 3. Set Up Row Level Security (RLS)

1. Go to the "Authentication" section in the left sidebar
2. Click on "Policies"
3. Find your `contact_submissions` table
4. Enable RLS by toggling the switch
5. Add a policy for INSERT:
   - Policy name: `Allow anonymous inserts`
   - Policy definition: `true`
   - Target roles: `anon, authenticated`
   - Operations: `INSERT`
6. Click "Save Policy"

### 4. Get API Keys

1. Go to the "Settings" section in the left sidebar
2. Click on "API"
3. Copy the "URL" and "anon public" key

### 5. Configure Environment Variables

1. Update the `.env.local` file in your project with the Supabase URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Restart your development server if it's running

### 6. Set Up Email Notifications (Optional)

To receive email notifications when a new contact form submission is received:

#### Option 1: Using Supabase Edge Functions

1. Install the Supabase CLI
2. Create a new Edge Function:
   ```bash
   supabase functions new contact-form-notification
   ```
3. Implement the function to send emails using a service like SendGrid or Mailgun
4. Deploy the function:
   ```bash
   supabase functions deploy contact-form-notification
   ```
5. Set up a database trigger to call the function when a new row is inserted into the `contact_submissions` table

#### Option 2: Using a Third-Party Service

1. Use a service like Zapier or Make (formerly Integromat) to connect to your Supabase database
2. Set up a trigger for new rows in the `contact_submissions` table
3. Configure an action to send an email to admin@plexplumbing.com.au

## Testing

1. Fill out the contact form on your website
2. Check the `contact_submissions` table in Supabase to verify the data was inserted correctly
3. If you set up email notifications, verify that you received an email

## Troubleshooting

- If form submissions are not being saved, check the browser console for errors
- Verify that the environment variables are correctly set
- Check that RLS policies are properly configured
- Ensure the table schema matches what the application expects

## Security Considerations

- The anon key is safe to include in client-side code as it has limited permissions
- Use RLS policies to control what operations are allowed
- Consider implementing rate limiting to prevent abuse
- Regularly review the logs and submissions for any suspicious activity
