import React, { Component } from "react";
import './contact.css';
import{ init } from 'emailjs-com';
import { motion } from 'framer-motion'


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    };
    this.contact_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    init("user_ePuvOiCN6rwGVGGlSb703");
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, company, phone, email, message} = this.state;
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

      this.sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
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

  sendFeedback(templateId, variables) {
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

        this.setState({
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
  }

  render() {
    
    return (
      <motion.div className="container resume"

      variants={this.contact_variants}
      initial="hidden"
      animate="visible"
      exit="exit"

  >
      <div className="formContact">      
      <h2 className="contact-form-title">Si mon profil vous intéresse, contactez moi via ce formulaire, je me ferai une joie de vous répondre dans les plus brefs délais </h2>

      <form className="contact-form">
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={this.handleChange.bind(this)}
            placeholder="Nom *"
            value={this.state.name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={this.handleChange.bind(this)}
            placeholder="Entreprise"
            value={this.state.company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder="Téléphone"
            value={this.state.phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={this.handleChange.bind(this)}
              placeholder="Email *"
              value={this.state.email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={this.handleChange.bind(this)}
            placeholder="Message *"
            required
            value={this.state.message}
          />
        </div>
        <input className="formButton" type="button" value="Envoyer" onClick={this.handleSubmit.bind(this)} />
        <div className="end.form-message"></div>
      </form>
      </div>
      </motion.div>
    );
  }
}
