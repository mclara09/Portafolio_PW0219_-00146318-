import React,{Component} from "react";

class RegisterTable extends Component{
    render(){
        let rows=this.props.list.map(element=>{
            return(
                <RegisterRow
                    key={element._id}
                    student={element}
                    onDelete={()=>{
                        this.props.onDelete(element)
                    }}
                />
            )
        })
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className = "table table-hover">
                         <th scope ="col">Carnet</th>
                         <th scope ="col">Horario de Laboratorio</th>
                         <th scope ="col">Hora de ingreso</th>
                         <th scope ="col">Tarde?</th>
                         <th scope ="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
 
            </div>
        )
    }
    }
