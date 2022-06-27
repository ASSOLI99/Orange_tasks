

function Sort(){
    const age = [13,20,15,16,22,25,30] 
    const sortedAge = age.sort((a,b)=>{
        return b-a ;
    })

    const showAge= sortedAge.map((a)=>{
        return(
            <tr>
                {a}
            </tr>
        );
    })

    return(
        <div>
            <h2>Sort Method</h2>
            <table border={1}>
                <tr>Age</tr>
                {showAge}
            </table>
        </div>
    );
}

export default Sort;