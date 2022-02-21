import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FiShare } from 'react-icons/fi'
import { AiFillEye } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from "react-router-dom";
const Page1 = () => {
  const url = 'http://www.mocky.io/v2/59b3f0b0100000e30b236b7e' ;
  const [pages2, setPages2] = useState({})
 const fetchPages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setPages2(data)
      // console.log(data.posts[0])
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
   const {page,posts} = pages2;
   useEffect(() =>{
    fetchPages()
   },[])

// Sorting 

  // const [data, setData] = useState([]);
  // console.log(posts)
  // const [value, setValue] = useState('date');
  // console.log(data);


  // useEffect(() => {
  //   const sortArray = (type) => {
  //     const types = {
  //       'date': 'event_date',
  //       'likes': 'likes',
  //       'views': 'views',
  //       'shares': 'shares'
  //     };
  //     const sortpages = types[type];

  //     const sorted =posts.sort((a, b) => a[sortpages] < b[sortpages] ? 1 : -1)
  //     setData([...sorted]);
  //     console.log(sorted)
  //   };
  //   sortArray(value);
  // }, [value]);

 
    return (
      <>
        sorting logic is in github repo.
        <div className='page'>
          pages
          <Link to="/"><button>1</button></Link> 
          <Link to="/page2"><button>2</button></Link> 
          <Link to="/page3"><button>3</button></Link>       
        </div>
        <label>Sort by increasing order</label>
        {/* <select value={value} onChange={e => setValue(e.target.value)}>  */}    
        <select> 
          <option value="date">date</option>
          <option value="likes">likes</option>
          <option value="shares">shares</option>
          <option value="views">views</option>
        </select>
  
        {posts?.map((item) => {
          const { id, event_date, event_name, likes, shares, thumbnail_image, views } = item;
          let date = new Date(event_date * 1000);
          //  console.log(date);
          return (<div key={event_date} className='post'>
            <div className='horizontal_center'>
              <header>
                <p>{event_name.length < 25 ? event_name : event_name.slice(0, -25)}</p>
                <h4>{date.toDateString()}</h4>
              </header>
              <img className='img_result' src={thumbnail_image} alt={event_name} />
              <footer>
                <div className='center_footer'>
                  <p><button className='btn'><BiLike className='icon' /></button><span>{likes}</span></p>
                  <p><button className='btn'><AiFillEye className='icon' /></button><span>{views}</span></p>
                  <p><button className='btn'><FiShare className='icon' /></button><span>{shares}</span></p>
                </div>
              </footer>
              <div className='divider'></div>
            </div>
          </div>)
        })
        }
         <div className='page'>
          pages
          <Link to="/"><button>1</button></Link> 
          <Link to="/page2"><button>2</button></Link> 
          <Link to="/page3"><button>3</button></Link>       
        </div>
      </>
    )
 
  
}

export default Page1