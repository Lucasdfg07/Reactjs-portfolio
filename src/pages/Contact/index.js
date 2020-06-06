import React from 'react';
import ContactForm from '../../components/ContactForm';
import Info from '../../components/Info';

const Contact = () => {
    return(
        <>
            <div className="column is-3-desktop is-5-tablet">
              <Info />
            </div>

            <ContactForm />
        </>
    )
}

export default Contact;