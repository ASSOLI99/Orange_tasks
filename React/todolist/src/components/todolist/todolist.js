
const Todolist = (props)=>
{
    const deleteitem = props.delete;
    const items = props.items;
    let len = items.length;
        const showItems = items.map((item)=>{
    
            return(
                <tr key={item.id}>
                    <th>{item.name}</th>
                    <td>{item.age}</td>
                    <td onClick={()=>deleteitem(item.id)}>X</td>
                </tr>
            )
        })
    
    return (
        <div className='container' >
            <table className="table" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

            { len?showItems:<tr>No Items to Show</tr> }
            </tbody>
            </table>
        </div>
    )

}



export default Todolist;