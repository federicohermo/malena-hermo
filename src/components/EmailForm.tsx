// src/components/EmailForm.tsx
import React, { useState } from 'react';
import '../styles/EmailForm.css';

interface EmailData {
  sender: string;
  subject: string;
  message: string;
}

// Define props for the EmailForm
interface EmailFormProps {
  handleSubmit: (emailData: EmailData) => Promise<void>; // Passing form submission logic via props
}

const EmailForm: React.FC<EmailFormProps> = ({ handleSubmit }) => {
  // State to handle form input with typed EmailData
  const [emailData, setEmailData] = useState<EmailData>({
    sender: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Wrap the form submission to handle it with the prop function
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(emailData);
  };

  return (
    <div className='email-form'>
      <form onSubmit={onSubmit}>
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

        <button type="submit">Enviar →</button>

      </form>
    </div>
  );
};

export default EmailForm;
