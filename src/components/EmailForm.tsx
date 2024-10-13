// src/components/EmailForm.tsx
import React, { useState } from 'react';
import '../styles/EmailForm.css'

// Define the email form data type
interface EmailData {
  sender: string;
  subject: string;
  message: string;
}

const EmailForm: React.FC = () => {
  // State to handle form input with typed EmailData
  const [emailData, setEmailData] = useState<EmailData>({
    sender: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make a POST request to the FastAPI backend
    try {
      const response = await fetch('http://127.0.0.1:8000/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData) // Send email data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Email sent successfully!');
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while sending the email.');
    }
  };

  return (
    <div className='email-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-elements'>
            <div className='form-element'>
                <label htmlFor="sender">E-mail   :</label>
                <input
                    type="email"
                    id="sender"
                    name="sender"
                    value={emailData.sender}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-element'>
                <label htmlFor="subject">Asunto :</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={emailData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-element'>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={emailData.message}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>

        <button type="submit">Send →</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default EmailForm;
