import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import styles from './contact.module.css'

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact US</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>Contact Form</h2>
          <p>We 'd love to hear <span> from you </span></p>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9805.66405682516!2d-80.08923571731768!3d43.92944155850557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b00f27043f0b3%3A0x5828d986b10b35ce!2sHeadwaters%20Health%20Care%20Centre!5e0!3m2!1sen!2sca!4v1685044543606!5m2!1sen!2sca" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
         className={styles.mapping}>

      </iframe>
    </>
  )
}

export default Contact