import React from 'react'

const AdditionTetanusToxoid = () => {
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
                    <option value="#"  style={{backgroundColor: "white"}}>TT1</option>
                    <option value="#"  style={{backgroundColor: "white"}}>TT2</option>
                    <option value="#"  style={{backgroundColor: "white"}}>TT3</option>
                    <option value="#"  style={{backgroundColor: "white"}}>TT4</option>
                    <option value="#"  style={{backgroundColor: "white"}}>TT5</option>
                </select>
            </div>
        </div>
    </form>
  )
}

export default AdditionTetanusToxoid