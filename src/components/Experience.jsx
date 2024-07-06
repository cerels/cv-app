import { useState } from "react";

export default function Practical() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "Company Name",
      position: "Position Title",
      responsibilities: "Main Responsibilities",
      dateFrom: "Date From",
      dateTo: "Date To"
    }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  const handleEditClick = (experience = null) => {
    setCurrentExperience(experience);
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { id, company, position, responsibilities, dateFrom, dateTo } = e.target.elements;
    const updatedExperience = {
      id: id ? id.value : Date.now(),
      company: company.value,
      position: position.value,
      responsibilities: responsibilities.value,
      dateFrom: dateFrom.value,
      dateTo: dateTo.value
    };

    if (currentExperience) {
      setExperiences(experiences.map(exp => exp.id === currentExperience.id ? updatedExperience : exp));
    } else {
      setExperiences([...experiences, updatedExperience]);
    }

    setIsEditing(false);
    setCurrentExperience(null);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div id="practical">
      <div className="header">
        <h1>Practical Experience</h1>
        <button onClick={() => handleEditClick()}>Add New</button>
      </div>

      <ul>
        {experiences.map(({ id, company, position, responsibilities, dateFrom, dateTo }) => (
          <li key={id}>
            <div className="info">
              <p className="company">{company}</p>
              <p className="position">{position}</p>
              <p className="responsibilities">{responsibilities}</p>
            </div>
            <p className="dates">{dateFrom} - {dateTo}</p>
            <div className="actions">
              <button onClick={() => handleEditClick({ id, company, position, responsibilities, dateFrom, dateTo })}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {isEditing && (
        <form onSubmit={handleSave}>
          {currentExperience && <input type="hidden" name="id" defaultValue={currentExperience.id} />}
          <input type="text" name="company" placeholder="Enter company name" defaultValue={currentExperience ? currentExperience.company : ''} />
          <input type="text" name="position" placeholder="Enter position title" defaultValue={currentExperience ? currentExperience.position : ''} />
          <input type="text" name="responsibilities" placeholder="Enter responsibilities" defaultValue={currentExperience ? currentExperience.responsibilities : ''} />
          <input type="text" name="dateFrom" placeholder="Enter start date" defaultValue={currentExperience ? currentExperience.dateFrom : ''} />
          <input type="text" name="dateTo" placeholder="Enter end date" defaultValue={currentExperience ? currentExperience.dateTo : ''} />
          <button type="submit">Save</button>
          <button type="button" onClick={() => { setIsEditing(false); setCurrentExperience(null); }}>Cancel</button>
        </form>
      )}
    </div>
  );
}
