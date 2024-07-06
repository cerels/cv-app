import { useState } from "react";
import "../styles/General.css";
export default function General() {
  const [name, setName] = useState("Name");
  const [mail, setMail] = useState("Mail");
  const [phone, setPhone] = useState("Phone");
  const [isEditing, setIsEditing] = useState(false); // Add state to control form visibility

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Show the form when the button is clicked
  };

  return (
    <>
      <div id="general">
        <div className="header">
          <h1>General</h1>
          <button onClick={handleEditClick}>Edit</button>
        </div>
        <div id="genInfo">
          <p key={name}>{name}</p>
          <p key={mail}>{mail}</p>
          <p key={phone}>{phone}</p>
        </div>
        
        {isEditing && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName(e.target.name.value);
              setMail(e.target.mail.value);
              setPhone(e.target.phone.value);
              setIsEditing(false);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              defaultValue={name}
            />
            <input
              type="email"
              name="mail"
              placeholder="Enter mail"
              defaultValue={mail}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone"
              defaultValue={phone}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        )}
        
      </div>
    </>
  );
}
