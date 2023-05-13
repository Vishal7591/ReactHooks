import * as React from 'react';
import './style.css';

export default function App() {
  const [data, getData] = React.useState(null);
  React.useEffect(() => {
    console.log("In useEffect Hook");
    const url = 'https://reqres.in/api/users?page=1';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        getData(jsonResponse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  return (
    <div>
      {data&&data.data.map((item:any,index:number)=>(
        <div key={index}>
          <span>{item.first_name}</span>
          <span>{item.last_name}</span>
        </div>
      ))}
    </div>
  );
}
