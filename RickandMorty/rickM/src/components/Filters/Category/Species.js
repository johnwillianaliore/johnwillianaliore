import React from 'react'

const Species = () => {
  return (
    <div className="accordion-item">
    <div className="accordion-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="accordion-button" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseTwo" 
        aria-expanded="true" 
        aria-controls="collapseTwo">
          Espécies
        </button>
      </h5>
    </div>

    <div id="collapseTwo" className="accordion-collapse collapse show"
     aria-labelledby="headingTwo" 
     data-parent="#accordionExample">

      <div className="accordion-body">

      </div>
    </div>
  </div>
  )
}

export default Species
