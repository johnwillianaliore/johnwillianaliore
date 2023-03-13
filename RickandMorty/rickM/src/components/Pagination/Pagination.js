import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './pagination.scss'

const Pagination = ({ info, pageNumber,setpageNumber}) => {

   /*  let next = ()=>{
        if(pageNumber === 42) return;
        setpageNumber(x => x + 1)
    };
    let prev = ()=>{
        if(pageNumber === 1) return;
        setpageNumber(x => x - 1)
    }; */

  return (
  <ReactPaginate 
  className= 'pagination justify-content-center gap-4 my-4' 
  forcePage={ pageNumber===1? 0 : pageNumber -1}
  nextLabel='Proximo'
  previousLabel='Anterior'
  nextclassNameName={`${styles.btn} btn btn-primary}`}
  previousclassNameName={`${styles.btn} btn btn-primary}`}
  pageclassNameName='page-item'
  pageLinkclassNameName='page-link'
  activeclassNameName='active'
  onPageChange={(data)=>{
    setpageNumber(data.selected +1)}}

  pageCount={info?.pages}
    
  /* <div className='container d-flex justify-content-center gap-5 mb-5'>

      <button onClick={prev} className='btn btn-primary'>Anterior</button>
      <button onClick={next} className='btn btn-primary'>Proximo</button>

    </div> */
    />
  );
};

export default Pagination
