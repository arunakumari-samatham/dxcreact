import React from 'react'

/* function Greet(){
    return  <h1>welcome abdul</h1>
} */

//const Greet = ({name,college}) => {
    const Greet = props => {
        const {name,college} = props
    //console.log(props);
    //props.name = 'dxc'
    return (
        <div>
            <h1> hello  {name} iam aruna {college}</h1>
        </div>
    )

}
export default Greet
