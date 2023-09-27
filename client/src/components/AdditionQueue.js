import React from "react";
import Worker_Searchbox from "./Worker_Searchbox";

const AdditionQueue = () => {
    return ( 
        <div className="modal fade" id="AddQueue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Queuing</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex justify-content-center">
                    <form className='px-3'>
                        <Worker_Searchbox />
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="workerSubmitEditBtn">Add</button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default AdditionQueue;