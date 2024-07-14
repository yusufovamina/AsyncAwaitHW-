import React  from 'react'
import {useState , useEffect} from 'react'


const SearchGoods = () => {

  const [searchInput, setSearchInput] = useState('')
const [filteredItems,setFilteredItems] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  

  useEffect(()=> {

    const fetchFilter=async() => {
    if (searchInput.trim() === '') {
      setFilteredItems([])
      return
    }


    const response = await fetch(`http://localhost:5000/search-goods/${encodeURIComponent(searchInput)}`)
      const data = await response.json();
        setFilteredItems(data);
      }
  
  fetchFilter();    
  }, [searchInput]);


  return (
    <div>
      <input type="text" placeholder="search" value={searchInput} onChange={handleChange}/>
      
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.product_name}</li>
        ))}
      </ul>
    </div>)
}



export default SearchGoods