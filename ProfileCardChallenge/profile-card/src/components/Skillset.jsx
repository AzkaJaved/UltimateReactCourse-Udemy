import React from 'react'

const Skillset = ({skill}) => { 
  return (
    <div >
      <p className='skill' style={{backgroundColor:skill.color}} >{skill.skillName} <span>{skill.level=='Advance'&&'💪' || skill.level=='Intermediate'&&'👍' || skill.level=='Beginner' && '👶' }</span></p>
    </div>
  )
}

export default Skillset
// skill.level=='beginner'?'👶':'💪'