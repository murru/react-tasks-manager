import { useDispatch, useSelector } from "react-redux"
import { editTask, deleteTask } from "../features/task/taskSlice"

function TaskList() {
    const tasks = useSelector(state => state.tasks.list)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    const handleEdit = (id) => {
        dispatch(editTask(id))
    }
    return (
        <>
            <p className="w3-opacity">TASKS</p>
            <div className="w3-responsive">
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        { tasks.map((task, index) => (
                            <tr key={ `task-${task.id}` } className={ (index % 2 === 0) ? 'w3-white' : '' }>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>
                                    <button
                                        title="Mark as Completed"
                                        type="button"
                                        className="w3-btn w3-black w3-hover-blue"
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button
                                        title="Edit Task"
                                        type="button"
                                        onClick={ () => handleEdit(task.id) }
                                        className="w3-btn w3-black w3-hover-blue"
                                    >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        title="Delete Task"
                                        type="button"
                                        onClick={ () => handleDelete(task.id) }
                                        className="w3-btn w3-black w3-hover-red"
                                    >
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TaskList