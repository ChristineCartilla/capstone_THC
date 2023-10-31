import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const EditUserProfile = () => {
  const { profileId } = useParams();
  const [visible, setVisibility] = useState(false);

  // Separate states for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [educAttain, setEducAttain] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [street, setStreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [zipCodeError, setZipCodeError] = useState('');
  const [contactNoError, setContactNoError] = useState('');

  useEffect(() => {
    // Fetch the profile data and set it as the initial form data
    if (profileId) {
      axios.get(`/profile/${profileId}`)
        .then((response) => {
          // Set the birthDate field after formatting it
          const formattedBirthDate = new Date(response.data.birthDate).toISOString().split('T')[0];
          setFirstName(response.data.first_name);
          setLastName(response.data.last_name);
          setMiddleName(response.data.middle_name);
          setBirthDate(formattedBirthDate);
          setBirthPlace(response.data.birthPlace);
          setCivilStatus(response.data.civilStatus);
          setGender(response.data.gender);
          setNationality(response.data.nationality);
          setEducAttain(response.data.educAttain);
          setContactNo(response.data.contactNo);
          setStreet(response.data.street);
          setBarangay(response.data.barangay);
          setMunicipality(response.data.municipality);
          setZipCode(response.data.zipCode);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });

      axios.get(`/account/fetchaccount/${profileId}`)
        .then((response) => {
          axios.get('/account/specaccount/' + response.data)
            .then((response) => {
              setEmail(response.data[0].email);
              setPassword(response.data[0].password);
            });
        });
    }
  }, [profileId]);

  const saveProfileSubmit = async (e) => {
    e.preventDefault();

    setZipCodeError('');
    setContactNoError('');

    // Validate zipCode and contactNo here

    if (profileId) {
      try {
        // Prepare the updatedData object here
        const updatedData = {
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          birthDate: birthDate,
          birthPlace: birthPlace,
          civilStatus: civilStatus,
          gender: gender,
          nationality: nationality,
          educAttain: educAttain,
          contactNo: contactNo,
          street: street,
          barangay: barangay,
          municipality: municipality,
          zipCode: zipCode,
          email: email,
          password: password,
        };

        const response = await axios.patch(`/profile/updateprofile/${profileId}`, updatedData);
        if (response.status === 200) {
          toast.success('Profile Updated Successfully');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding state based on the name
    switch (name) {
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'middle_name':
        setMiddleName(value);
        break;
      case 'birthDate':
        setBirthDate(value);
        break;
      case 'birthPlace':
        setBirthPlace(value);
        break;
      case 'civilStatus':
        setCivilStatus(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'nationality':
        setNationality(value);
        break;
      case 'educAttain':
        setEducAttain(value);
        break;
      case 'contactNo':
        setContactNo(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'barangay':
        setBarangay(value);
        break;
      case 'municipality':
        setMunicipality(value);
        break;
      case 'zipCode':
        setZipCode(value);
        break;
      case 'password':
        setPassword(value);
        break;
      // handle other cases if needed
      default:
        break;
    }
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
                    value={firstName}
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
                    value={lastName}
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
                    value={middleName}
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
                    value={birthDate}
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
                    value={birthPlace}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="civilStatus" className="form-label">
                    Civil Status
                  </label>
                  <select
                    name="civilStatus"
                    className="form-select"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={civilStatus}
                    onChange={handleChange}
                  >
                    <option value="" disabled style={{ backgroundColor: "white" }}>
                      Choose...
                    </option>
                    <option value="Single" style={{ backgroundColor: "white" }}>
                      Single
                    </option>
                    <option value="Married" style={{ backgroundColor: "white" }}>
                      Married
                    </option>
                    <option value="Separated" style={{ backgroundColor: "white" }}>
                      Separated
                    </option>
                    <option value="Widowed" style={{ backgroundColor: "white" }}>
                      Widowed
                    </option>
                  </select>
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
                    value={gender}
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
                    value={nationality}
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
                    value={educAttain}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4 text-start">
                  <label htmlFor="contactNo" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="contactNo"
                    className="form-control"
                    id="contactNo"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={contactNo}
                    onChange={handleChange}
                  />
                  {contactNoError && <div className="text-danger">{contactNoError}</div>}
                </div>
              </div>
              <div className="row mb-5">
                <h6 className="text-start mb-3" id="">
                  Current Address
                </h6>
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
                    value={street}
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
                    value={barangay}
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
                    value={municipality}
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
                    value={zipCode}
                    onChange={handleChange}
                  />
                  {zipCodeError && <div className="text-danger">{zipCodeError}</div>}
                </div>
              </div>
              <div className="row mb-5">
                <h6 className="text-start mb-3" id="">
                  Account Credentials
                </h6>
                <div className="col-md-4 text-start">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="email"
                    style={{ backgroundColor: "#CCE8DE" }}
                    value={email}
                    disabled
                  />
                </div>
                <div className="col-md-4 text-start">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend" style={{ cursor: "pointer" }}>
                      <FontAwesomeIcon
                        icon={visible ? faEyeSlash : faEye}
                        onClick={() => setVisibility((visibility) => !visibility)}
                      />
                    </span>
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      className="form-control"
                      id="password"
                      style={{ backgroundColor: "#CCE8DE" }}
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
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
