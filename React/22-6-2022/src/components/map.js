

function Map(){
    const age = [13,20,15,16,22,25,30] 
    
    const mapAge = age.map((a)=>{
        return (
            <tr>
                {a}
            </tr>
        );
    })
    // console.log(mapAge);
    return(
        <div>
            <h2>Map Method</h2>
            <table border={1}>
                <tr>Age</tr>

                {mapAge}
                
            </table>
        </div>
    );
}

export default Map;