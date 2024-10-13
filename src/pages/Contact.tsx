// src/pages/Contact.tsx
import React, { useState } from 'react';
import EmailForm from '../components/EmailForm';
import Loading from '../components/Loading';

interface EmailData {
  sender: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle the form submission and make the API request
  const handleEmailSubmit = async (emailData: EmailData) => {
    setLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:8000/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData), // Send email data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('E-mail enviado exitosamente!');
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      setResponseMessage('Ha ocurrido un error al enviar el e-mail.');
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="contacts">
        {loading && <Loading />}
        {responseMessage ? <p>{responseMessage}</p> : <EmailForm handleSubmit={handleEmailSubmit} />}
    </div>
  );
};

export default Contact;
