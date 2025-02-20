'use client'

import React, { useState } from 'react'

export default function ContactForm() {

    const initialState = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        result: '',
    };

    const [text, setText] = useState(initialState);

    const changeText = e => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, result: '' });
    };

    const handleSubmitMessage = e => {
        e.preventDefault();
        if (text.fullname === '' || text.email === '' || text.message === '') { //if empty
            setText({ ...text, result: 'incomplete' });
            return;
        }
        console.log('Form Submitted');
    };

  return (
    <form role='form' className='contact-form' onSubmit={handleSubmitMessage}>
        <div className='row'>
            <div className='col-md-6 mb-3'>
                <div className='form-group'>
                    <input 
                        type='text'
                        name='fullname'
                        className='form-control form-control form-control-a'
                        placeholder='Your name'
                        value={text.fullname}
                        onChange={changeText}
                    />
                </div>
            </div>
            <div className='col-md-6 mb-3'>
                <div className='form-group'>
                    <input 
                        type='email'
                        name='email'
                        className='form-control form-control form-control-a'
                        placeholder='Your Email'
                        value={text.name}
                        onChange={changeText}
                    />
                </div>
            </div>
            <div className='col-md-12 mb-3'>
                <div className='form-group'>
                    <input 
                        type='text'
                        name='subject'
                        className='form-control form-control form-control-a'
                        placeholder='Your Subject'
                        value={text.subject}
                        onChange={changeText}
                    />
                </div>
            </div>
            <div className='col-md-12'>
                <div className='form-group'>
                    <textarea 
                        name='message'
                        className='form-control'
                        cols="45"
                        rows="8"
                        placeholder='Message'
                        value={text.message}
                        onChange={changeText}
                    ></textarea>
                </div>
            </div>
            <div className='col-md-12 my-3'>
                <div className='mb-3'>
                    <div className='loading'> Loading</div>
                    {text.result === 'incomplete' && (
                        <div className='error-message'>
                            Please fill in all above details
                        </div>
                    )}
                    <div className='sent-message'>
                        Your message has been sent. Thank you!
                    </div>
                </div>
            </div>
            <div className='col-md-12 text-center'>
                <button type='submit' className='btn btn-a'>
                    Send Message
                </button>
            </div>
        </div>
    </form>
  )
}
