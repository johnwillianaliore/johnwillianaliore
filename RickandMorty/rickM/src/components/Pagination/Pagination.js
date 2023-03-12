import React from 'react'

const Pagination = ({setpageNumber}) => {

    let next = ()=>{
        setpageNumber(x => x + 1)
    };
    let prev = ()=>{
        setpageNumber(x => x - 1)
    };

  return (
    <div className='container d-flex justify-content-center gap-5 mb-5'>

      <button onClick={prev} className='btn btn-primary'>Anterior</button>
      <button onClick={next} className='btn btn-primary'>Proximo</button>

    </div>
  )
}

export default Pagination
