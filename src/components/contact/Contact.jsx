import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const handleCopyAndOpenThreema = () => {
    const threemaId = "YX47P57C"; // Replace with your actual Threema ID
    navigator.clipboard.writeText(threemaId).then(() => {
      alert("Threema ID copied to clipboard!");
      window.open("https://threema.id/" + threemaId, "_blank");
    }).catch((err) => {
      console.error("Failed to copy ID: ", err);
    });
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail} id="contact">
      <div className="cSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem" style={{display: "none"}}>
            <label>Name</label>
            <input type="text" name="user_username" placeholder="Name" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Have a question or an order? Share your thoughts here!"
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
          <div className="vipContact">
            <div className="dividerWrapper">
        <div className="divider"></div>
        <span> OR </span>
        <div className="divider"></div>
          </div>
          <div className="vipContactItem" onClick={handleCopyAndOpenThreema}>
          <img src="/threema.png" alt="" />
          <p>Threema Messenger</p>
          </div>
        </div>
        </motion.form>
       
      </div>
      
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;
