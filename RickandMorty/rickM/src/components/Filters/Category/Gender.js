import React from 'react'

const Gender = () => {
  return (
    <div className="accordion-item">
    <div className="accordion-header" id="headingThree">
      <h5 className="mb-0">
        <button className="accordion-button" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseThree" 
        aria-expanded="true" 
        aria-controls="collapseThree">
          Genêro
        </button>
      </h5>
    </div>

    <div id="collapseThree" className="accordion-collapse collapse show"
     aria-labelledby="headingThree" 
     data-parent="#accordionExample">

      <div className="accordion-body">

      </div>
    </div>
  </div>
  )
}

export default Gender
