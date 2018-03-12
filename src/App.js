import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      val: ""
    }

    this.addTask = this.addTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      val: e.target.value
    })
  }

  addTask(e) {
    this.setState({
      tasks: this.state.tasks.concat(this.state.val),
      val: ""
    })

    e.preventDefault()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            { this.state.tasks.map((task, i) =>
              <li key={ i }>{ task }</li>
            ) }
          </ul>
           <form onSubmit={this.addTask}>
             <input type="text" id="new-task" onChange={this.handleChange} value={this.state.val} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
