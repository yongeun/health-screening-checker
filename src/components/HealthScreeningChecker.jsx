import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    checkScreenings();
  }, [age, sex, race, isSmoker]);

  const checkScreenings = () => {
    const ageNum = parseInt(age);
    const screenings = [];

    if (isNaN(ageNum)) {
      setResults([]);
      return;
    }

    // Vaccines
    if (ageNum >= 0.5) {
      screenings.push("COVID-19 Vaccine: Updated COVID-19 vaccine, regardless of previous vaccinations.");
      screenings.push("Flu Vaccine: Annual flu vaccine.");
    }

    if (ageNum >= 11 && ageNum <= 26) {
      screenings.push("HPV Vaccine: Two doses for ages 11-15, three doses for ages 15-26.");
    }

    if (ageNum >= 50) {
      screenings.push("Shingles Vaccine: Shingrix, two doses 2 to 6 months apart.");
    }

    // Cancer Screenings
    if (sex === 'female') {
      if (ageNum >= 21 && ageNum <= 65) {
        screenings.push("Cervical Cancer Screening: Every 3 years from 21 to 29, every 5 years from 30 to 65.");
      }
      if (ageNum >= 40 && ageNum <= 75) {
        screenings.push("Breast Cancer Screening: Mammogram every 1 to 2 years.");
      }
    }

    if (ageNum >= 45 && ageNum <= 75) {
      screenings.push("Colorectal Cancer Screening: Colonoscopy every 10 years or annual stool screening.");
    }

    if (sex === 'male' && ageNum >= 50 && ageNum <= 69) {
      screenings.push("Prostate Cancer Screening: Options include physical exam and PSA blood test.");
    }

    // Updated Lung Cancer Screening recommendation
    if (ageNum >= 50 && ageNum <= 80 && isSmoker) {
      screenings.push("Lung Cancer Screening: Annual chest CT scan recommended for current or former heavy smokers.");
    }

    // Disease Screenings
    if (ageNum >= 18 && ageNum <= 79) {
      screenings.push("Hepatitis B and C Screening: One-time blood test for Hepatitis C.");
    }

    if (ageNum >= 15 && ageNum <= 65) {
      screenings.push("STI and HIV Screening: Regular testing based on sexual activity and risk factors.");
    }

    if (ageNum >= 35 && ageNum <= 75) {
      screenings.push("Prediabetes and Type 2 Diabetes Screening: Regular screening for overweight or obese patients.");
    }

    if (sex === 'female' && ageNum >= 65) {
      screenings.push("Osteoporosis Screening: DEXA bone scan.");
    }

    // Updated Abdominal Aortic Aneurysm Screening recommendation
    if (sex === 'male' && ageNum >= 65 && ageNum <= 75 && isSmoker) {
      screenings.push("Abdominal Aortic Aneurysm Screening: One-time screening recommended for men who have ever smoked.");
    }

    // Example of a race-specific recommendation
    if (race === "Black or African American" && ageNum >= 45) {
      screenings.push("Consider earlier colorectal cancer screening. Discuss with your doctor.");
    }

    // Smoking-related recommendations
    if (isSmoker) {
      screenings.push("Smoking Cessation: Consider programs and medications to help quit smoking.");
      screenings.push("Cardiovascular Risk Assessment: Regular check-ups to assess heart disease risk.");
    }

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