// import React from 'react'

// function Todo({title}){

//     return (
//         <p>{title}</p>
//     )
// }

// export default Todo

// import React from 'react'

// function Todo({title,completed}){

//     return (
//         <p>{title} - {completed ?"Completed":"Pending"}</p>
//     )
// }

// export default Todo

import React from 'react'

function Todo({title,completed,onToggle}){

    return (
        <div>
            <input 
            type="checkbox"
            checked={completed}
            onChange={onToggle}
            />
            <span>{title}</span>
        </div>
    )
}

export default Todo