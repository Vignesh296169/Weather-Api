
import axios from 'axios'
const Api=async(item)=> {
  const loc=`q=${item}`
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?${loc},IND&appid=30c0dae34517d3ca6d78eb9b07e2902c&units=metric`,{
    //     headers:{
    //         Authorization:"Client-ID 30c0dae34517d3ca6d78eb9b07e2902c",
    //     },
       
    //  params:{
    //     query:Text, 
    //  },
        
    })

 


  return  res.data.main.temp;
 
  
}

export default Api