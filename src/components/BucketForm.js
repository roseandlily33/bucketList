import { useState } from "react";

const BucketForm = (props) => {
    const [input, setInput] = useState('');
    let [eager, setEager] = useState('');
    const levels = ['high', 'medium', 'low'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!eager){
            eager = 'low'
        }; 
        props.onSubmit({
            id: Math.random(Math.floor() * 100),
            text: input,
            eager: eager
        });
        setInput('');
        setEager('');
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return !props.edit ? (
     <div>
        <form onSubmit={handleSubmit} className="bucketForm">
            <input type="text" placeholder="Add an item" value={input}
            name="text" onChange={handleChange}></input>
            <div className="dropdown">
          <button className={`dropbtn ${eager}`}>
            {eager || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEager(levels[0])}>Must do</p>
            <p onClick={() => setEager(levels[1])}>Want to do</p>
            <p onClick={() => setEager(levels[2])}>Take it or leave it</p>
          </div>
          <button className="bucketBtn">Add Item</button>
        </div>  
        </form>

    </div> ) 
    
    :

    (
    <div>
        <h3>Update Entry: {props.edit.value}</h3>
        <form onSubmit={handleSubmit} className="bucketForm">
            <input type="text" placeholder={props.edit.value} value={input} name="text"
            onChange={handleChange}/>
            <div className="dropdown">
                <button className="eager">{eager || 'Priority'}</button>
                <div className="dropdownContent">
                    <p onClick={levels[0]}>Must do</p>
                    <p onClick={levels[1]}>Want to do</p>
                    <p onClick={levels[2]}>Take it or leave it</p>
                </div>
            </div>
           
        </form>
        <button className="bucketBtn">Add Item</button>

    </div>
    );
}
 
export default BucketForm;