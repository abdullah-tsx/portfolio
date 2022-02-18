import emailjs from '@emailjs/browser';


export const sendEmail = async (formData) => {
  try {
    await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_USER_ID);
  } catch (e) {
  }
}