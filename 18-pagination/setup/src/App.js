import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    })
  }
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage - 1;
      if (nextPage < 0) {
        nextPage = data.length - 1;
      }
      return nextPage;
    })
  }
  return (
    <>
      <main>
        <div className="section-title">
          <h1>{loading ? 'loading...' : 'pagination'}</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {
              followers.map((follower) => {
                return <Follower key={follower.id} {...follower}></Follower>
              })
            }
          </div>
          {!loading && <div className="btn-container">
            <button className="prev-btn" onClick={nextPage}>prev</button>
            {
              data.map((item, index) => {
                return <button className={`page-btn ${index === page ? 'active-btn' : null}`} key={index} onClick={() => handlePage(index)}>{index + 1}</button>
              })
            }
            <button className="next-btn" onClick={prevPage}>Next</button>
          </div>}

        </section>
      </main>
    </>
  )
}

export default App
