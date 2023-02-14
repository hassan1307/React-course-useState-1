import React, { useState } from 'react'

const ErrorExample = () => {
    const[title,setTitle] = useState('hello world')
    const changeTitle = () => {
        if (title === 'hello world' ) {
            setTitle('changed title')
        } else {
            setTitle('hello world')
        }
    }

    return (
    <>
            <div className="container text-capitalize text-center">
                <h1>{title}</h1>
                <button onClick={changeTitle} className="btn btn-outline-info w-25 m-auto">
                    change title
                </button>
            </div>
    </>
)
}

export default ErrorExample
