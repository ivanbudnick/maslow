import './App.css';
import React, {Fragment, useState} from "react";
import {CardsGrid} from "./components/CardsGrid"
import {Top} from "./components/Top";

export function App() {
  const [sliderValue, setValue] = useState();
  const user = {id: 1, name: "John Smith", company: "ACME LLC", position: "UX/UI Designer", avatar: "avatar.png"}
  const workHours = [{id: 1, value: 20}, {id: 2, value: 30}, {id: 3, value: 40}]
  const compensations = [{id: 1,type: "Base", value: 100000, currency: "USD"}, {id: 2,type: "Potential", value: 180000, currency: "USD"}]
  const [sliders, setSliders] = useState([
    {id: 1, title: "Cash", activeValue: null, initialValue: 70, minValue: 50, maxValue: 100, color: "#5AD0A2"},
    {id: 2, title: "Stock Options", activeValue: null, initialValue: 10, minValue: 0, maxValue: 30, color: "#327C62"},
    {id: 3, title: "Bonus", activeValue: null, initialValue: 10, minValue: 0, maxValue: 30, color: "#4BB089"},
    {id: 4, title: "Maslow Points", activeValue: null, initialValue: 10, minValue: 0, maxValue: 30, color: "#755AD0"}
  ])
  return (
      <Fragment>
        <Top user = {user}/>
        <div className='mx-4 pb-10'>
          <CardsGrid setValue={setValue} sliderValue={sliderValue} sliders={sliders} setSliders={setSliders} workHours={workHours} compensations={compensations}/>
          <button className='float-right'>
            Accept Offer
          </button>
        </div>
      </Fragment>
    )
}

export default App;
