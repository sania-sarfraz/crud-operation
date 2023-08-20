import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [data, setData] = useState([]);

  const storeData = (newData) => {
    setData([...data, newData]);
  };

  const DeleteData = (ind) => {
    const filteredData = data.filter((item, index) => index !== ind);
    setData(filteredData);
  };

  const UpdatedData = (ind, updatedItem) => {
    const updatedData = data.map((item, index) =>
      index === ind ? updatedItem : item
    );
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <tbody>
          {data?.map((item, ind) => (
            <tr key={ind}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => DeleteData(ind)}>Delete</button>
                <button onClick={() => UpdatedData(ind, { ...item, name: 'Updated Name',age:'updatedage' })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Child storeData={storeData} />
    </div>
  );
};

export default Parent;