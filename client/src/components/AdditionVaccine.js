import React from 'react'

const AdditionVaccine = () => {
  return (
    <form >
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Given</label>
                <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Vaccine</label>
                <select className="form-select"  style={{backgroundColor: "#CCE8DE"}}>
                    <option value="#"  style={{backgroundColor: "white"}}>Choose...</option>
                    <option value="#"  style={{backgroundColor: "white"}}>BCG</option>
                    <option value="#"  style={{backgroundColor: "white"}}>HEPBV</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PCV1</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PCV2</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PCV3</option>
                    <option value="#"  style={{backgroundColor: "white"}}>OPV1</option>
                    <option value="#"  style={{backgroundColor: "white"}}>OPV2</option>
                    <option value="#"  style={{backgroundColor: "white"}}>OPV3</option>
                    <option value="#"  style={{backgroundColor: "white"}}>AMV</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PENTA1</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PENTA2</option>
                    <option value="#"  style={{backgroundColor: "white"}}>PENTA3</option>
                    <option value="#"  style={{backgroundColor: "white"}}>MMR</option>
                </select>
            </div>
        </div>
    </form>
  )
}

export default AdditionVaccine