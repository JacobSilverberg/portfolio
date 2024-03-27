import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {  
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false); // Corrected state declaration
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const currentRef = contactRef.current;
                    if (currentRef) {
                        setTimeout(() => {
                            setContactVisible(true); // Corrected state setter
                        }, 500);
                        observer.unobserve(currentRef);
                    }
                }
            },
            { rootMargin: '-50% 0px' } // Adjust rootMargin to trigger when 50% of the contact section is visible
        );

        const currentRef = contactRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gmail_jstech', 'contact_form', form.current, {
                publicKey: 'USev2UtFeV4qirfsC',
            })
            .then(
                () => {
                    setIsSubmitted(true);
                    setIsError(false);
                },
                (error) => {
                    setIsError(true);
                    setIsSubmitted(true);
                },
            );
    };

    return (
        <div
            ref={contactRef}
            className={`container mx-auto py-8 ${isContactVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
        >
            <h2 className="font-atkinson text-4xl md:text-5xl font-bold mb-12 text-center">Contact</h2>
            {isSubmitted ? (
                isError ? (
                    <div className="max-w-lg mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Oops!</strong>
                        <span className="block sm:inline"> Something went wrong. Please try again later.</span>
                    </div>
                ) : (
                    <div className="max-w-lg mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline"> Your message has been sent successfully.</span>
                    </div>
                )
            ) : (
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 py-6"
                >
                    <div className="mb-4">
                        <label htmlFor="user_name" className="block text-lg font-semibold mb-2">Name</label>
                        <input type="text" id="user_name" name="user_name" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="block text-lg font-semibold mb-2">Email</label>
                        <input type="email" id="user_email" name="user_email" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                    </div>
                </form>
            )}
        </div>
    );
}
