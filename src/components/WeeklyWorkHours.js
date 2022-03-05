import React, {useState} from 'react'

export function WeeklyWorkHours({workHours}) {
  const [activeButtonId, setActiveButton] = useState(1)

  function handleStatus(id){
    setActiveButton(id)
  }

  return (
    <div className='card self-baseline tablet:self-auto grow'>
        <h2>Work hours per week</h2>
        {workHours.map(hour =>         
          (<button key={hour.id} onClick={() => handleStatus(hour.id)} className={activeButtonId === hour.id ? "" : "button-inactive"}>
            {hour.value} Hs
          </button>)
        )}
    </div>
    
  )
}
