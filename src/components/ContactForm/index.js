import React, { useState } from 'react';
import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai';


const ContactForm = () => {
    const [formData, setFormData] = useState([]);

    function handleInputChange(event) {
        const {name, value} = event.target;

        setFormData({ ...formData, [name]: value });
    }

    function submitForm(event) {
        event.preventDefault();
        
        console.log(formData);
        alert('Formulário Enviado com Sucesso o/ \n Obrigado pelo Contato!');
    }

    return(
        <div className="is-8-desktop column space-left">
            <div className="card">
                <div className="card-content">
                    <form onSubmit={submitForm}>
                        <div className="field">
                            <label className="label">Name</label>
                            
                            <div className="control has-icons-left">
                                <input className="input" type="text" name="name" placeholder="Digite seu Nome" onChange={handleInputChange} />
                                
                                <span className="icon is-small is-left">
                                    <AiOutlineUser />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            
                            <div className="control has-icons-left">
                                <input className="input" type="email" name="email" placeholder="Digite seu Email" onChange={handleInputChange} />
                                
                                <span className="icon is-small is-left">
                                <AiOutlineMail />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Mensagem</label>
                            
                            <div className="control">
                                <textarea className="textarea" name="textarea" placeholder="Digite sua Mensagem"  onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button type="sumit" className="button is-dark">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;