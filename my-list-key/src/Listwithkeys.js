export function Listwithkeys(props){
    const arr = props.numbers;
    const list = arr.map((numb) =>
        <li key={numb.toString()}>{numb}</li>
    );
    return(
        <div>
            <ul>{list}</ul>
        </div>
    );
}