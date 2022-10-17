import React from 'react'
import PendingTeamItem from './PendingTeamItem'


const testObject =
    [{
        name: 'coolejongenz',
        id: 6
    },
    {
        name: 'geenCOolejongenzz',
        id: 3
    }
    ]

export default function DecisionPanel() {
  return (
    <div>
        <h2 className='page-title'>DECISION ROOM</h2>
        
        {testObject.map(item => {
          return  <PendingTeamItem name={item.name} key={item.id}/>
        })}
    </div>
  )
}
