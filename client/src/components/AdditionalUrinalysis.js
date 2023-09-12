import React from 'react'

const AdditionalUrinalysis = () => {
    return (
        <form className='px-3'>
        <h6 className="pre-pageHeader text-start mb-4" id="">Urinalysis</h6>
            <div className="row mb-4 ">
                <div className="col text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mt-2">Performed by</label>
                    <input type="text"  className="form-control" disabled id="exampleFormControlTextarea1" style={{backgroundColor: "#CCE8DE"}}/>
                </div>
                <div className="col text-start"> 
                </div>    
                <div className="col text-start">  
                </div>
            </div>

        <hr className="hr" />

        {/* Physicochemical Examination */}
        <h6 className="pre-pageHeader text-start mb-3" id=''>Physicochemical Examination</h6>
     
        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Color</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Character</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Reagent Strip used</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Glucose</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bilirubin</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ketone</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Specific Gravity</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Blood</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>

        
        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">PH Level</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Protein</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Urobilinogen</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Nitrate</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Leukocyte</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
            </div>    
            <div className="col text-start">
            </div>
            <div className="col text-start">
            </div>
        </div>

        <hr className="hr" />

        {/* Microscopic Examination */}
        <h6 className="pre-pageHeader text-start mb-3" id=''>Microscopic Examination</h6>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Red Blood Cells</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Pus Cells</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
            </div>
            <div className="col text-start">    
            </div>
        </div>

        <hr className="hr" />

        {/* Crystals */}
        <h6 className="pre-pageHeader text-start mb-3" id=''>Crystals</h6>
        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Calcium Oxalates</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Amorphous Urates</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Uric Acid</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Amorphous Phosphates</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Triple Phosphates</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Others</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
            </div>
            <div className="col text-start">
            </div>
        </div>

        <hr className="hr" />

        {/* Miscellaneous Structures */}
        <h6 className="pre-pageHeader text-start mb-3" id=''>Miscellaneous Structures</h6>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Squamous Epithelial Cells</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Round Epithelial Cells</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bacteria</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mucus Threads</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Yeast Cells</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div> 
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Others</label>
                <input type="text"  className="form-control Addition_Prenatal_textarea" 
                    id="exampleFormControlTextarea1" 
                    style={{backgroundColor: "#CCE8DE"}}/>
            </div>    
            <div className="col text-start">
            </div>
            <div className="col text-start">
            </div>
        </div>

        <hr className="hr" />
        
        {/* Remarks */}
        <h6 className="pre-pageHeader text-start mb-3" id=''>Remarks</h6>

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

export default AdditionalUrinalysis