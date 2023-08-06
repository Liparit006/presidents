import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { presidents } from "us-presidents";
console.log(presidents);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div id='root'>
    <div className='main'>
          <ol className='presidentsOl'>
            {presidents.map((president)=>{
              return <li>
                <a href={"https://en.wikipedia.org/wiki/" + president.name}>{president.name + " " + president.term.startYear + "-" + president.term.endYear}</a>
              </li>
            })}
          </ol>
    </div>
  </div>
)
