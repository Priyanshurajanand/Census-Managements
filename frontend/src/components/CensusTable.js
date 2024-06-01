import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const CensusTable = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);


  const fetchData = async (page) => {
    const response = await fetch(`http://localhost:3000/data?page=${page}`);
    const newData = await response.json();
    console.log(newData);

    setData((prevData) => [...prevData, ...newData.data]);
    if(newData.length  === 0 || newData.length < 3){
      setHasMore(false);
    }
  };

  const fetchMoreData = () =>{
    const nextPage = page + 1 ;
    setPage(nextPage);
    fetchData(nextPage);
  };

  if (data.length === 0) {
    return <div className="text-center p-4">No data available</div>;
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p className="text-center">Loading..........</p>}
    >
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Gender</th>
            <th className="py-2">Birth Date</th>
            <th className="py-2">Vaccinated</th>
          </tr>
        </thead>

        <tbody>
          {data.map((person) => (
            <tr key={person.id} className="text-center">
              <td className="py-2">{person.name}</td>
              <td className="py-2">{person.gender}</td>
              <td className="py-2">
                {new Date(person.birthdate).toLocaleDateString()}
              </td>
              <td className="py-2">{person.is_vaccinated ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfiniteScroll>
  );
};

export default CensusTable;
