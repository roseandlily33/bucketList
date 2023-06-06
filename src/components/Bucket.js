import { useState } from "react";
import BucketForm from "./BucketForm";

const Bucket = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        eager: ''
    });
    console.log(props.bucket);

    const submitUpdate = (value) => {
        props.editItem(edit.id, value);
        setEdit({id: null, value: '', eager: ''})
    }
    if(edit.id){
        return <BucketForm edit={edit} onSubmit={submitUpdate} />
    }

    return (  
        <div className="itemCont">
            {props.bucket.map((item, index) => (
                <div className={item.isComplete ? `bucketRow complete ${item.eager}`:  `bucketRow ${item.eager}`} key={index} id="item">
                    <div  key={item.id} onClick={() => props.completeItem(item.id)}>
                {item.text}
                    </div>
                     <div className="icons">
                  <p onClick={() => setEdit({id: item.id, vale: item.text, eager: item.eager })}> ✏️</p>
                  <p onClick={() => props.deleteItem(item.id)}> 🗑️</p></div>
                </div>
            ))}
        </div>
    );
}
 
export default Bucket;