import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, updateTask, editTask } from "../features/task/taskSlice"

function TaskForm() {
    const selectedTask = useSelector(state => state.tasks.selectedTask)
    const dispatch = useDispatch()
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const isDisabled = title === '' || description === ''

    const handleSubmit = event => {
        event.preventDefault()
        if (!isDisabled) {
            if (selectedTask) {
                dispatch(updateTask({ id, title, description }))
            } else {
                dispatch(addTask({ title, description }))
            }
            clearForm()
        }
    }

    const clearForm = () => {
        setTitle('')
        setDescription('')
    }

    const handleCancelEdit = () => {
        dispatch(editTask())
        clearForm()
    }

    useEffect(() => {
        if (selectedTask) {
            setId(selectedTask.id.slice())
            setTitle(selectedTask.title.slice())
            setDescription(selectedTask.description.slice())
        }
    }, [selectedTask])
    return (
        <>
            <p className="w3-opacity">TASK FORM</p>
            <form className="w3-container w3-card w3-padding-32 w3-white" onSubmit={ handleSubmit }>
                <div className="w3-section">
                    <label className="w3-left">Title</label>
                    <input
                        className="w3-input"
                        type="text"
                        required
                        value={ title }
                        name="title"
                        onChange={ (event) => setTitle(event.target.value) }
                    />
                </div>
                <div className="w3-section">
                    <label className="w3-left">Description</label>
                    <textarea
                        className="w3-input"
                        type="text"
                        value={ description }
                        name="description"
                        onChange={ (event) => setDescription(event.target.value) }
                        required
                    ></textarea>
                </div>
                { selectedTask !== null && <button type="button" onClick={ handleCancelEdit } className="w3-btn w3-black w3-hover-red">Cancel</button> }
                <button type="submit" disabled={ isDisabled } className="w3-btn w3-black w3-hover-green">Save</button>
            </form>
        </>
    )
}

export default TaskForm