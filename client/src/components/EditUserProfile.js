import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditUserProfile = () => {
  const { profileId } = useParams();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    birthDate: '',
    birthPlace: '',
    civilStatus: '',
    gender: '',
    nationality: '',
    educAttain: '',
    contactNo: '',
    street: '',
    barangay: '',
    municipality: '',
    zipCode: '',
  });

  const saveProfileSubmit = async (e) => {
    e.preventDefault();
    if (profileId) {
      try {
        const updatedData = {};
        for (const key in formData) {
          if (formData[key]) {
            updatedData[key] = formData[key];
          }
        }
        const response = await axios.patch(`/profile/updateprofile/${profileId}`, updatedData);
        if (response.status === 200) {
          alert('Profile Updated Successfully');
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal fade" id="editUserProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Profile
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="px-3">
              <div className="row mb-5">
                <div className="col-md-4 text-start">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    id="first_name"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    id="last_name"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="middle_name" className="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middle_name"
                    className="form-control"
                    id="middle_name"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.middle_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4 text-start">
                  <label htmlFor="birthDate" className="form-label">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    className="form-control"
                    id="birthDate"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="birthPlace" className="form-label">
                    Birth Place
                  </label>
                  <input
                    type="text"
                    name="birthPlace"
                    className="form-control"
                    id="birthPlace"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.birthPlace}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="civilStatus" className="form-label">
                    Civil Status
                  </label>
                  <input
                    type="text"
                    name="civilStatus"
                    className="form-control"
                    id="civilStatus"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.civilStatus}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4 text-start">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="form-select"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled style={{ backgroundColor: "white" }}>
                      Choose...
                    </option>
                    <option value="Male" style={{ backgroundColor: "white" }}>
                      Male
                    </option>
                    <option value="Female" style={{ backgroundColor: "white" }}>
                      Female
                    </option>
                  </select>
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="nationality" className="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    className="form-control"
                    id="nationality"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="educAttain" className="form-label">
                    Educational Attainment
                  </label>
                  <input
                    type="text"
                    name="educAttain"
                    className="form-control"
                    id="educAttain"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.educAttain}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4 text-start">
                    <label htmlFor="educAttain" className="form-label">
                      Contact No.
                    </label>
                    <input
                      type="text"
                      name="contactNo"
                      className="form-control"
                      id="contactNo"
                      style={{ backgroundColor: "#CCE8DE" }}
                      value={formData.contactNo}
                      onChange={handleChange}
                    />
                  </div>
              </div>
              <div className="row mb-5">
              <h6 className="text-start mb-3" id="">Current Address</h6>
                <div className="col-md-4 text-start">
                  <label htmlFor="street" className="form-label">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    className="form-control"
                    id="street"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.street}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="barangay" className="form-label">
                    Barangay
                  </label>
                  <input
                    type="text"
                    name="barangay"
                    className="form-control"
                    id="barangay"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.barangay}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="municipality" className="form-label">
                    Municipality
                  </label>
                  <input
                    type="text"
                    name="municipality"
                    className="form-control"
                    id="municipality"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.municipality}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="zipCode" className="form-label">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    id="zipCode"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="workerSubmitEditBtn" onClick={saveProfileSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;


