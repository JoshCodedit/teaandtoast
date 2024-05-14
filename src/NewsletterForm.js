import React, { useState } from 'react';

function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email submitted:', email);
        setSubscribed(true);
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            {subscribed ? (
                <p>Thank you for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2 className='join'>Join Our Newsletter</h2>
                    <h4 className='form-info'>Sign up to our newsletter to receive latest news and exclusive offers.</h4>
                    <input className='email-input' type="email" value={email} onChange={handleChange} placeholder="Enter your email" required /><br/>
                    <button className='submit' type="submit">Subscribe</button>
                </form>
            )}
        </div>
    );
}

export default NewsletterForm;
