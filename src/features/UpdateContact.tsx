import { useAppDispatch } from "../hooks/hook";
import { ContactState, updateContact } from "../store/state/contact";

interface AddContactFormElements extends React.FormEvent<HTMLFormElement> {}

interface UpdateContactForm {
  contactId: string;
  isShowContact: boolean;
}
export function UpdateContact({ contactId, isShowContact }: UpdateContactForm) {

  const dispatch = useAppDispatch();
  
  const handleSubmit = (e: AddContactFormElements) => {
    e.preventDefault();
    const payload: ContactState = {
      id: contactId,
      name: e.currentTarget.fullname.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
    };
    dispatch(updateContact(payload));
    e.currentTarget.reset();
    alert("Contact updated successfully gan");
  };
  return (
    isShowContact && (
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="fullname" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="phone" placeholder="phone" />
        <button type="submit">Update</button>
      </form>
    )
  );
}
