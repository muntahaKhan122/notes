export default function searchFunc(value,data){
 
 const res=[];
    

     if(value === '')
     {
         return data;
     }
    for(var val in data)
  {
      if(data[val].title)
      {
        if(data[val].title.includes(value))
        {
            res.push(data[val]);
            break;
        }
      }
      if(data[val].text){
      if(data[val].text.includes(value)){
         res.push(data[val]);
      }
    }
  }
    return res;
}