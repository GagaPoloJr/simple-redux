import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

import {
    type ContactState,
    addContact,
    deleteContact,
} from "../store/state/contact";
import "./Counter.module.css";
import { UpdateContact } from "./UpdateContact";

interface AddContactFormElements extends React.FormEvent<HTMLFormElement> { }
export function Contact() {
    const contactData = useAppSelector((state) => state.contact);
    const dispatch = useAppDispatch();
    const [isShowContactForm, setIsShowContactForm] = useState<Record<string, boolean>>({});

    const handleSubmit = (e: AddContactFormElements) => {
        e.preventDefault();
        const payload: ContactState = {
            id: Math.random().toString(36).substr(2, 9),
            name: e.currentTarget.fullname.value,
            email: e.currentTarget.email.value,
            phone: e.currentTarget.phone.value,
        };

        dispatch(addContact(payload));
        e.currentTarget.reset();
    };

    const handleShowEditForm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        setIsShowContactForm((contactForm) => {
            const objKey = Object.keys(contactForm)
            const findCurrentId = objKey.find(key => key === id)
            return {
                ...contactForm,
                // for handle toggle hide and show form
                [id]: id === findCurrentId ? contactForm[id] === true ? false : true  : false,
            }
        });

    };

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        dispatch(deleteContact(id));
    };

    return (
        <>
            <div className="contact-form">
                <h1>Contact Form Data</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullname" placeholder="fullname" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="text" name="phone" placeholder="phone" />
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="card-wrapper">
                {contactData.map((contact) => (
                    <div key={contact.id} className="card-item">
                        <h2 className="card-item__title">Name: {contact.name}</h2>
                        <p className="card-item__email">Email: {contact.email}</p>
                        <p className="card-item__phone">Phone: {contact.phone}</p>
                        <div className="flex flex-centered gap-10">
                            <button
                                onClick={(e) => handleShowEditForm(e, contact.id)}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={(e) => handleDelete(e, contact.id)}
                            >
                                Delete
                            </button>
                        </div>
                        <div>
                            <UpdateContact contactId={contact.id} isShowContact={isShowContactForm[contact.id]} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
