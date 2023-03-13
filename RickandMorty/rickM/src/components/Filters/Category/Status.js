import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = () => {

    let status = ['Alive','Dead','Unknown']

  return (
    <div className="accordion-item">
    <div className="accordion-header" id="headingOne">
      <h5 className="mb-0">
        <button className="accordion-button" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseOne" 
        aria-expanded="true" 
        aria-controls="collapseOne">
          Status
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="accordion-collapse collapse show"
     aria-labelledby="headingOne" 
     data-parent="#accordionExample">

      <div className="accordion-body">
        {status.map((items,index)=>(
            
            <FilterBTN key={index} name='status'index={index} items={items}/>
            
        ))}
      </div>
    </div>
  </div>
  )
}

export default Status
