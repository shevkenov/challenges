import React from 'react'

import { connect } from 'react-redux';

const Todolist = ({todolist}) => {
  
  const style = { 
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div style={style}>
      <ul style={{width: "50%"}}>
        {
          todolist.map(task => {
            return <li key={task.id}>{task.name}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todolist: state.todo
})

export default connect(mapStateToProps)(Todolist)
