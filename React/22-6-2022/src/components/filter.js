



function Filter(){
    const age = [13,20,15,16,22,25,30]
    const filterAge = age.filter((a)=>{
        return a>18 ;
    })
    const filtered = filterAge.map((a)=>{
        return (
            <tr>
                {a}
            </tr>
        );
    })
    return(
        <div>
            <h2>Filter Method</h2>
            <table border={1}>
                <tr>filtered Age </tr>
                {filtered}
                
            </table>
        </div>
    );
}

export default Filter;