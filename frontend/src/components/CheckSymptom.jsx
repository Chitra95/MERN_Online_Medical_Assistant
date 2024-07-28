// CheckSymptom.jsx

import React, { useState } from 'react';
import { symptomToCondition, conditionToSpecialist } from './mappings';
import './CheckSymptom.css';

const symptomsList = Object.keys(symptomToCondition);

const CheckSymptom = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [detectedConditions, setDetectedConditions] = useState([]);
  const [assignedSpecialists, setAssignedSpecialists] = useState([]);

  const handleSymptomChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom !== value));
    }
  };

  const handleSubmit = () => {
    const conditions = new Set();
    selectedSymptoms.forEach(symptom => {
      symptomToCondition[symptom].forEach(condition => conditions.add(condition));
    });
    setDetectedConditions(Array.from(conditions));

    const specialists = new Set();
    Array.from(conditions).forEach(condition => {
      if (conditionToSpecialist[condition]) {
        conditionToSpecialist[condition].forEach(specialist => specialists.add(specialist));
      }
    });
    setAssignedSpecialists(Array.from(specialists));
  };

  return (
    <div className="CheckSymptom">
      <h1>Symptom Checker</h1>
      <div className="symptom-selection">
        <h2>Select Symptoms:</h2>
        <div className="symptom-list">
          {symptomsList.map(symptom => (
            <div key={symptom}>
              <label>
                <input
                  type="checkbox"
                  value={symptom}
                  onChange={handleSymptomChange}
                />
                {symptom}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Detect Conditions & Assign Specialist</button>
      {detectedConditions.length > 0 && (
        <div className="results">
          <h2>Detected Conditions:</h2>
          <ul>
            {detectedConditions.map(condition => (
              <li key={condition}>{condition}</li>
            ))}
          </ul>
        </div>
      )}
      {assignedSpecialists.length > 0 && (
        <div className="results">
          <h2>Suggested Specialist(s):</h2>
          <ul>
            {assignedSpecialists.map(specialist => (
              <li key={specialist}>{specialist}</li>
            ))}
          </ul>
        </div>
      )}

      <button className='take-appointment-button' >    <a href="/appointment">Take Appointment</a> </button>
      
    </div>
  );
};

export default CheckSymptom;
