import JsonData from "./data.json"  
import {useState} from 'react'
import ListItem from "./ListItem"

const List = () => {
    const [json] = useState(JsonData)
    return (
      <>
        {json.map((item)=>{
            return <ListItem item = {item} key={item.docid}/>
        })}
      </>
    )
}

export default Listlink