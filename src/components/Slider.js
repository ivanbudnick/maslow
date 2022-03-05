import React, {useRef, useState} from 'react'

export function Slider({slider, setValue}) {
  const {id, title, initialValue, minValue, maxValue, color} = slider;
  let midValue = (maxValue + minValue)/2
  const percentage = 100 * (initialValue-minValue) / (maxValue-minValue)
  const [selectedValue, setSelValue] = useState(initialValue)
  const [rangeOffset, setOffsetValue] = useState(`${percentage}%`)

  const rangeSliderRef = useRef()

  function handleChange(value){
    setSelValue(value)
    let activePercentage = 100 * (value-minValue) / (maxValue-minValue)
    setOffsetValue(`${activePercentage}%`)
    setValue({})
    slider.activeValue = value;
  }

  return (
    <div className='my-4 card rounded-r-l' >
      <div>
        <h2>{title}</h2>      
      </div>
      <div className='px-[3rem] tablet:px-[2.5rem]'>
      <div className='relative h-12'>                
        <input ref={rangeSliderRef} onChange={() => handleChange(rangeSliderRef.current.value)} value={selectedValue} className='w-full cursor-pointer appearance-none h-1 bg-bg-inactive' type="range" min={minValue} max={maxValue} steps="1"/>        
        <div style={{left: rangeOffset}} className="z-[10] cursor-pointer absolute left-[50%]">
          <div style={{backgroundColor: color}} className='z-[2] rotate-45 h-3 w-3 absolute bottom-[1.6rem]'></div>
          <div>{selectedValue}%</div>
        </div>
        <div style={{width: rangeOffset, backgroundColor: color}} className='h-1 absolute bottom-[1.9rem]'></div>        

        <div onClick={() => handleChange(minValue)} style={{backgroundColor: color}} className='rotate-45 h-3 w-3 absolute bottom-[1.6rem] cursor-pointer'></div>
        <div onClick={() => handleChange(midValue)} className='z-[-1] bg-bg-inactive left-[50%] rotate-45 h-3 w-3 absolute bottom-[1.6rem] cursor-pointer'></div>
        <div onClick={() => handleChange(maxValue)} className='z-[1] absolute top-[0.6rem] left-[100%] rotate-45 h-3 w-3 bg-bg-inactive cursor-pointer'></div>

        <span onClick={() => handleChange(minValue)} className='text-text-inactive float-left cursor-pointer'>{minValue}%</span>
        <span onClick={() => handleChange(midValue)} className='absolute left-[50%] bottom-0 text-text-inactive cursor-pointer'>{midValue}%</span>        
        <span onClick={() => handleChange(maxValue)} className='text-text-inactive absolute left-[100%] bottom-0 cursor-pointer'>{maxValue}%</span>
      </div>
      </div>
    </div>
    
  )
}
