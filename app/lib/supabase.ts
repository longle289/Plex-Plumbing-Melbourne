import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are missing. Contact form will not function properly.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to submit contact form data to Supabase
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  try {
    // Insert the form data into the 'contact_submissions' table
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          service: formData.service || '',
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error: error.message };
    }

    // Send email notification (this would typically be handled by a Supabase Edge Function or webhook)
    // For now, we'll just log it
    console.log(`Email notification would be sent to admin@plexplumbing.com.au for submission from ${formData.email}`);

    return { success: true, data };
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
