import React from 'react'
import styles from './Search.module.scss'

function Search({setSearch}) {
  return (
    <div>
        <form className='d-flex justify-content-center gap-4 mb-5'>
        <input onChange={e=>{
            setSearch(e.target.value)
        }}
         placeholder='Procurar por Personagens' type='' className={styles.input}>
             

        </input>
        <button onClick={e=>{e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5`}> Procurar</button>
        </form>
      
    </div>
  )
}

export default Search
