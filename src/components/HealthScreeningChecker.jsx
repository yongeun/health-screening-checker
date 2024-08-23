import React, { useState } from 'react';

const HealthScreeningChecker = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [race, setRace] = useState('');
  const [isSmoker, setIsSmoker] = useState(false);
  const [results, setResults] = useState([]);

  const races = [
    "White",
    "Black or African American",
    "Asian",
    "Hispanic or Latino",
    "American Indian or Alaska Native",
    "Native Hawaiian or Other Pacific Islander",
    "Two or More Races",
    "Other"
  ];

  const checkScreenings = () => {
    const ageNum = parseInt(age);
    const screenings = [];

    // Vaccines
    if (ageNum >= 0.5) {
      screenings.push("COVID-19 Vaccine: Updated COVID-19 vaccine, regardless of previous vaccinations.");
      screenings.push("Flu Vaccine: Annual flu vaccine.");
    }

    // ... (rest of the screening logic remains the same)

    setResults(screenings);
  };

  return (
    <div style={{maxWidth: '400px', margin: '0 auto', padding: '20px'}}>
      <h2 style={{fontSize: '24px', fontWeight: 'bold'}}>Health Screening Checker</h2>
      <div style={{marginTop: '20px'}}>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          style={{width: '100%', padding: '5px', marginTop: '5px'}}
        />
      </div>
      <div style={{marginTop: '10px'}}>
        <label>Sex:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            checked={sex === 'male'}
            onChange={() => setSex('male')}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={sex === 'female'}
            onChange={() => setSex('female')}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div style={{marginTop: '10px'}}>
        <label htmlFor="race">Race:</label>
        <select
          id="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
          style={{width: '100%', padding: '5px', marginTop: '5px'}}
        >
          <option value="">Select your race</option>
          {races.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div style={{marginTop: '10px'}}>
        <input
          type="checkbox"
          id="smoker"
          checked={isSmoker}
          onChange={(e) => setIsSmoker(e.target.checked)}
        />
        <label htmlFor="smoker">History of smoking</label>
      </div>
      <button 
        onClick={checkScreenings}
        style={{marginTop: '20px', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer'}}
      >
        Check Screenings
      </button>
      {results.length > 0 && (
        <div style={{marginTop: '20px'}}>
          <h3 style={{fontSize: '18px', fontWeight: 'bold'}}>Recommended Screenings:</h3>
          <ul style={{paddingLeft: '20px'}}>
            {results.map((screening, index) => (
              <li key={index}>{screening}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HealthScreeningChecker;