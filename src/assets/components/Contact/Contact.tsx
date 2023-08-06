import "./Contact.scss";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact">
      <div className="text-container">
        <h3 className="small-text-bg">Contact me</h3>
        <h4 className="big-text-bg">Contact</h4>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
