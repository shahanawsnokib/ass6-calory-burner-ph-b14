import React from 'react';
import ItemCard from '../component/itemCard/itemCard'


const getItems = async()=>{
    const rest = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return rest.json()
}
const page = async () => {
    const Items = await getItems()
    return (
    <div className='container mx-auto flex justify-center my-4 items-center'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
          {
        Items.map(item => <ItemCard key={item.id} item={item}> </ItemCard> )
       }
     </div>
    </div>
    );
};

export default page;