import React from 'react'
import Card from './Card';

function List({data}) {
    return (
        <div className="list">
            {
                data.map(ele=>{
                    return (
                        <Card element={ele}/>
                    );
                })
            }
        </div>
    )
}

export default List