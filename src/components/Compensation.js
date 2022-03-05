import React, {useState} from 'react'

export function Compensation({compensations}) {
  const [activeButtonId, setActiveButton] = useState(1)

  function handleStatus(id){
    setActiveButton(id)
  }
  
  return (
    <div className='card self-baseline tablet:self-auto grow'>
        <h2>Total Compensation</h2>
        {compensations.map(compensation =>         
          (<button key={compensation.id} onClick={() => handleStatus(compensation.id)} className={activeButtonId === compensation.id ? "" : "button-inactive"}>
            {compensation.type} {compensation.value} {compensation.currency}
          </button>)
        )}
    </div>    
  )
}
