import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: #ff6347; 
`;

const SubmitButton = styled.button`
  background-color: #9CAF88;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1rem;

  &:hover {
    background-color: #819171;
  }
`;

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
      formIsValid = false;
    }

    if (!formData.subject || formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
      formIsValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      formIsValid = false;
    }

    if (!formData.body || formData.body.length < 3) {
      newErrors.body = 'Body must be at least 3 characters.';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Here, you might also want to send the data to your server or API
      navigate('/'); // Redirect to the homepage on successful submission
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>Full Name</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
      </FormField>
      <FormField>
        <Label>Subject</Label>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
      </FormField>
      <FormField>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormField>
      <FormField>
        <Label>Body</Label>
        <TextArea
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></TextArea>
        {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
      </FormField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default ContactPage;
