import React, { useState } from "react";
import './contact.css';
/*import{ init } from 'emailjs-com';*/

const Contact= (props) =>{ 
   /* init("user_ePuvOiCN6rwGVGGlSb703");*/
   /*const [form, setValues]= useState({
      name:"",
      company:"",
      telephone:"",
      emails: "",
      message: "",
      
    }) */
    const [name, company, email, message, phone] = useState("");

  const handleChange=(e) =>{
   /*setValues({ [e.target.name] : e.target.value}) */
  
  }
  const handleSubmit=(e) =>{
    e.preventDefault();
   /* let {name, company, phone, email, message} = useState ({
      name:"",
      company:"",
      telephone:"",
      emails: "",
      message: "",
    }) */
    let nameS = document.getElementById('name');
    let emailS = document.getElementById('email');
    let messageS = document.getElementById('message');
    let formMess = document.querySelector('.form-message');

    const isEmail = () => {
      let isMail = document.getElementById('not-mail')
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.match(regex)) {
        isMail.style.display = 'none';
        return true;
      } else {
        isMail.style.display = 'block';
        isMail.style.animation = 'dongle 1s';
        setTimeout(() => {
          isMail.style.animation = 'none';
        }, 1000);
        return false;
      }
    }

    if (name && isEmail() && message){
      const templateId = "template_evj2w8i";

      nameS.classList.remove('red');
      emailS.classList.remove('red');
      messageS.classList.remove('red');

   /*   sendFeedback (templateId, [name,
        company,
        phone,
        email,
        message])*/
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = 'rgb(253, 87, 87)';
      formMess.style.opacity = '1';

      function error(type, path){
        if (!type) {
          path.classList.add('error');
        }
      }
      error(name,nameS);
      error(email, emailS);
      error(message, messageS);
    }
  }

  /*const sendFeedback= (templateId, variables) => {
    let formMess = document.querySelector('.form-message');

    window.emailjs
      .send("service_csj42s1", templateId, variables)
      .then((res) => {
        formMess.innerHTML = "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.background = '#00c1ec';
        formMess.style.opacity = '1';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        /*setState({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          formMess.style.opacity = '0';
        }, 5000);
      })
      .catch((err) =>
        formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer."
      );
    }*/

 
    return (
      /*
      <div className="formContact">
      <form className="contact-form">
        <h2 className="contact-form-title">Si mon profil vous interesse, contactez moi via ce formulaire, je me ferai une joie de vous répondre dans les plus brefs délais </h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange.bind(this)}
            placeholder="Nom *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleChange.bind(this)}
            placeholder="Entreprise"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange.bind(this)}
            placeholder="Téléphone"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={handleChange.bind(this)}
              placeholder="Email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={handleChange.bind(this)}
            placeholder="Message *"
            required
            value={message}
          />
        </div>
        <input className="formButton" type="button" value="Envoyer" onClick={handleSubmit.bind(this)} />
        <div className="end.form-message"></div>
      </form>
      </div>*/
      <div></div>
    ); 
  }

export default Contact;