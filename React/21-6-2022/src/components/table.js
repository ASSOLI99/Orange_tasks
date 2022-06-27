import './table.css'
function Table(){
    return(
        <div className="container-fluid row">
            <p className="col-12 border">
                <img src="https://picsum.photos/1" />
                <input type="checkbox" />
                <span>HTML</span>
            </p>
            <p className="col-12 border">
                <img src="https://picsum.photos/2" />
                <input type="checkbox" />
                <span>php</span>
            </p>
            <p className="col-12 border">
                <img src="https://picsum.photos/3" />
                <input type="checkbox" />
                <span>CSS</span>
            </p>
        </div>
    )
}

export default Table;