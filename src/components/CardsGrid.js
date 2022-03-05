import React from 'react'
import {SliderList} from "./SliderList";
import {ChartContainer} from "./ChartContainer";
import {WeeklyWorkHours} from "./WeeklyWorkHours";
import {Compensation} from "./Compensation"

export function CardsGrid({sliders, workHours, compensations, setValue, sliderValue}) {  
  return (
    <div className='my-6 flex flex-wrap justify-center'>
      <ChartContainer sliders={sliders}/>
      <div className="flex-col grow">
        <div className="flex flex-row tablet:flex-col">
          <WeeklyWorkHours workHours={workHours}/>
          <Compensation compensations={compensations}/>
        </div>
        <SliderList setValue={setValue} sliders = {sliders}/>
      </div>
    </div>
  )
}
