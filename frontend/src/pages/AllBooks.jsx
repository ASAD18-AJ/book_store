import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from '../components/Loader/Loader'
import BookCard from "../components/BookCard/BookCard";


const AllBooks = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  return (
    
    <div className='bg-zinc-900 h-auto px-12 py-8'>
      <h4 className="text-3xl text-yellow-100">All books</h4>
      {!data && (
        <div className="flex items-center justify-center my-10">
          <Loader />{" "}
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data &&
          data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
    
  )
}

export default AllBooks
