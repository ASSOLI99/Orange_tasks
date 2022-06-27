const Map =() =>{
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
const mapFruits = Fruits.map((fruit)=>{
    return (
        <tr>
            <td>{fruit.id}</td>
            <td>{fruit.name}</td>
            <td>{fruit.color}</td>
        </tr>
    )
})      
    return(
    <div  className="m-5">
        <h3> Task 2</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Color</th>

                </tr>
            </thead>
            <tbody>
                {mapFruits}
            </tbody>
        </table>
        <div>-------------------------------------------------</div>
    </div>
    );
}

export default Map;