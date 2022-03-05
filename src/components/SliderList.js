import React from 'react';
import {Slider} from "./Slider";

export function SliderList({setValue ,sliders}) {
  return (
    <div className=''>
      {sliders.map(slider => 
      (<Slider key={slider.id} setValue={setValue} slider = {slider}/>)
      )}
    </div>
  )
}
