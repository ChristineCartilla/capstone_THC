import React from 'react'

const AdditionalHematology = () => {
    return (
        <form className='px-3'>
            <h6 className="pre-pageHeader text-start mb-3" id="">Medical Checkup</h6>
            <div className="row mb-4 mt-4">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Performed by</label>
                    <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start"> 
                </div>    
                <div className="col text-start">  
                </div>
            </div>

            <div className="row mb-4">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Hematocrit </label>
                    <input type="text"  className="form-control mt-4" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Hemoglobin Mass Concentration</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>    
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Erythrocyte Number Concentration</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Leukocyte Number Concentration</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Segmenter Number Fraction </label>
                    <input type="text"  className="form-control " disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Lymphocyte Number Fraction</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>    
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Basophile Number Fraction</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Stab</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea mt-4" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Thrombocyte Number Concentration </label>
                    <input type="text"  className="form-control " disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Reticulocyte  Number Fraction</label>
                    <input type="text"  className="form-control Addition_Prenatal_textarea" 
                        id="exampleFormControlTextarea1" 
                        style={{backgroundColor: "#CCE8DE"}}/>
                </div> 
            </div>
            
           
            <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks </label>
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="4" 
                    style={{backgroundColor: "#CCE8DE"}}></textarea>
            </div>
          
        </form>
    )
}

export default AdditionalHematology