
const DoneTodo = ({item, setToMove, todoId, setTodoId, setStatus}) => {
    const ToggleActiveness = () => {
        const findItem = todoId.find(ele => ele === item.id)
        if(!findItem) {
            setTodoId([...todoId, item.id])
            setStatus('undone')
        }else {
            const filterout = todoId.filter(ele => ele !== item.id)
            setTodoId(filterout)
            setStatus('')
        }
        setToMove(item)
    }
    return (
        <div className="content">
            <div onClick={ToggleActiveness} className={`box ${todoId.includes(item.id) ? 'boxchecked' : ''}`}></div>
            <div className="">{item.title}</div>
        </div>
    )
}

export default DoneTodo