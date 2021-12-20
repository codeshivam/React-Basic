//using arrow function
export const Student =props => {
    return(
        <div className="Students">
            <h1>Hey {props.name}, Your age is {props.age}</h1>
        </div>
    );
}