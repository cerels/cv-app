import { useState } from "react";
import '../styles/General.css';
export default function Educational() {
  const [experiences, setExperiences] = useState([
    { id: 1, school: "School Name", title: "Title of Study", date: "Date of Study" }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null); // Track experience being edited

  const handleEditClick = (experience = null) => {
    setCurrentExperience(experience);
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { id, school, title, date } = e.target.elements;
    const updatedExperience = {
      id: id ? id.value : Date.now(),
      school: school.value,
      title: title.value,
      date: date.value
    };

    if (currentExperience) {
      // Update existing experience
      setExperiences(experiences.map(exp => exp.id === currentExperience.id ? updatedExperience : exp));
    } else {
      // Add new experience
      setExperiences([...experiences, updatedExperience]);
    }

    setIsEditing(false);
    setCurrentExperience(null);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div id="edu">
      <div className="header">
        <h1>Educational Experience</h1>
        <button onClick={() => handleEditClick()}>Add New</button>
      </div>

      <ul>
        {experiences.map(({ id, school, title, date }) => (
          <li key={id}>
            <p>{school}</p>
            <p>{title}</p>
            <p>{date}</p>
            <button onClick={() => handleEditClick({ id, school, title, date })}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>

      {isEditing && (
        <form onSubmit={handleSave}>
          {currentExperience && <input type="hidden" name="id" defaultValue={currentExperience.id} />}
          <input type="text" name="school" placeholder="Enter school name" defaultValue={currentExperience ? currentExperience.school : ''} />
          <input type="text" name="title" placeholder="Enter title of study" defaultValue={currentExperience ? currentExperience.title : ''} />
          <input type="text" name="date" placeholder="Enter date of study" defaultValue={currentExperience ? currentExperience.date : ''} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => { setIsEditing(false); setCurrentExperience(null); }}>Cancel</button>
        </form>
      )}
    </div>
  );
}
