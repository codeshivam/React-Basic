export function List(props){
    const arr = [1,2,5,4,7,8];
    const listItem = arr.map((number) => 
    <li>{number}</li>
    );
    return(
        <div className="List">
            <ul>{listItem}</ul>
        </div>
    );
}