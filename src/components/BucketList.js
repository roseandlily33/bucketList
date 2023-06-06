import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

const BucketList = () => {
    const [bucket, setBucket] = useState([]);
    //Adds a item to the list
    const addBucketItem = (item) => {
        const newBucket = [item, ...bucket];
        console.log('NEW ITEM', newBucket);
        setBucket(newBucket);
    }
    //Edit an item
    const editItem = (itemId, newValue) => {
        if(!newValue.text){
            return;
        }
        setBucket((prev) => {
            prev.map((item) => (item.id === itemId ? newValue: item))
        })
    }
    //Complete an item
    const completeItem = (id) => {
        let updatedBucket = bucket.map((item) => {
            if(item.id === id){
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        console.log('COMPLETED', updatedBucket);
        setBucket(updatedBucket);

    }
    //Delete an item
    const deleteItem = (id) => {
        const updatedBucket = [...bucket].filter(item => item.id !== id);
        console.log('DELETED', updatedBucket);
        setBucket(updatedBucket);

    }


    return ( <div className="bucketList">
        <h1>Your Bucket List:</h1>
        <BucketForm onSubmit={addBucketItem} />
        <Bucket bucket={bucket} editItem={editItem} completeItem={completeItem} deleteItem={deleteItem} />
    </div> );
}
 
export default BucketList;