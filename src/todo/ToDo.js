import React, { useState } from 'react';

const ToDo = () => {

  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  
  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    })
  }

  const removeActivity = (i) => {
    const updatedListData = listData.filter((element, id) => {
      return i!==id;
    })
    setListData(updatedListData);
  }

  function removeAll(){
    setListData([]);
  }

  return (
    <>
      <div className=' h-auto mx-auto flex md:py-10'>
        <div className='flex flex-col items-center md:w-[750px] h-auto bg-blue-900 mx-auto pb-5 px-5 w-full'>
            <h1 className='text-white text-xl md:text-4xl font-bold mx-auto pt-3'>TODO LIST</h1>
            <div className='mt-6 border-none flex flex-col md:flex-row items-center gap-2  '>
                <input type='text' className='h-9 md:h-10 md:w-[600px] bg-white border-none pl-4 rounded md:text-xl' value={activity} onChange={(e) => setActivity(e.target.value)} placeholder='Add Activity'/>
                <button onClick={addActivity} className='md:h-10 w-20 md:text-xl bg-green-600 border-none rounded cursor-pointer'>Add</button>
            </div>
            <div className='bg-green-200 md:h-[60px] md:w-[350px] mt-7 flex items-center justify-center md:place-self-start md:ml-5 md:mb-5 px-2'>
              <h1 className='text-xl md:text-4xl font-bold'>Here is Your List :{')'}</h1>
            </div>
            {listData != [] && listData.map((data, i) => {
              return ( 
              <>
                <div key={i} className='flex flex-col md:flex-row md:items-center md:gap-2 gap-[1px] place-self-start md:ml-5 my-[6px]'>                  
                    <div className='w-fit  bg-blue-200 border-none px-2 py-1 rounded my-1 flex md:items-center md:text-xl'>
                    {data}
                    </div>                
                    <button onClick={() => removeActivity(i)} className='md:h-10 md:w-[150px] w-[90px] md:text-xl bg-green-600 border-none rounded cursor-pointer px-2'>Remove(-)</button>
                </div>
              </>
              )
            })}
            {listData.length >= 1 &&
            <button onClick={removeAll} className='md:h-[60px] md:w-[150px] md:text-xl bg-green-600 border-none rounded mt-10 px-2 py-1'>Remove All </button>}
        </div>
      </div>
    </>
  );
}

export default ToDo;
