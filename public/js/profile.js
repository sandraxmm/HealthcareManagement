
//create new patient entry
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#patient-name').value.trim();
    const phone = document.querySelector('#patient-phone').value.trim();
    const DOB = document.querySelector('#patient-DOB').value.trim();
    const insurance = document.querySelector('#patient-insurance').value.trim();
    const appointment = document.querySelector('#patient-next-appointment').value.trim();
    const email = document.querySelector('#patient-email').value.trim();
  
    if (name && phone && DOB && insurance && appointment && email) {
      const response = await fetch(`/api/patient/`, {
        method: 'POST',
        body: JSON.stringify({ name, phone, DOB, insurance, appointment, email }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create new patient');
      }
    }
  };

//delete patient
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/patient/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete patient');
      }
    }
  };
  
  document
    .querySelector('.new-patient-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.patient-list')
    .addEventListener('click', delButtonHandler);
  