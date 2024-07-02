"use client";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(6);
  const [total, setTotal] = useState(100);
  const [totalPages, setTotalPages] = useState(0);
  const [list, setList] = useState([]);
  const classes = 'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-10 w-10 text-xl font-medium';

  const loadData = async () => {
    let config = {
      method: "get",
      url: `https://jsonplaceholder.typicode.com/photos`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        _start: currentPage,
        _limit: itemsPerPage
      }
    };

    let apiRes = await axios(config);
    setList(apiRes.data);
    const pages = Math.ceil(total / itemsPerPage);
    setTotalPages(pages);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const renderPaginationItems = () => {
    const pages = [];
    const ellipsis = <span key="ellipsis" className={classes +"px-2"}>...</span>;

    let startPage = Math.max(0, currentPage - 7);
    let endPage = Math.min(totalPages, currentPage + 7 + 1);

    if (startPage > 0) {
      pages.push(
        <button
          key={0}
          onClick={() => handlePageChange(0)}
          className={`${classes} text-xl font-medium ${currentPage === 0 ? 'text-black' : 'text-[#ACACAC]'}`}
        >
          1
        </button>
      );

      if (startPage > 1) {
        pages.push(ellipsis);
      }
    }

    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${classes} text-xl font-medium ${i === currentPage ? 'text-black' : 'text-[#ACACAC]'}`}
        >
          {i + 1}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(ellipsis);
      }

      pages.push(
        <button key={totalPages - 1} onClick={() => handlePageChange(totalPages - 1)} className={`${classes} text-xl font-medium text-[#ACACAC] ${currentPage === totalPages - 1 ? ' text-black' : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  const generateList = list.map((interest) => {
    return(
      <li key={interest.id} className="flex items-center py-3">
        <input className="accent-black mr-2 w-6 h-6" type="checkbox" id={interest.id} name="persons_interest" value={interest.id}/>
        <label htmlFor={interest.id} className="text-base font-normal text-black">{interest.title}</label>
      </li>
    )
  });

  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails){
      router.push('/account/login');
    }else{
      setIsClient(true);
      loadData();
    }
  }, [currentPage, itemsPerPage]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center py-8">
        <div className="px-14 py-12 w-11/12 sm:w-[576px] border border-[#C1C1C1] rounded-[20px]">

          <div className="sm:mx-auto sm:w-full">
            <h2 className="text-3xl font-bold text-black text-center mb-4">Please mark your interests!</h2>
            <p className="text-base font-normal text-black text-center">We will keep you notified.</p>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full">
            <p className='text-xl font-medium text-black mb-4'>My saved interests!</p>
            <div>
              {isClient ? (
                <>
                  <ul className="mb-6">
                    {generateList}
                  </ul>
                </>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0} className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-10 w-10 text-xl font-medium text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-4 w-4 "><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            {renderPaginationItems()}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages - 1} className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-10 w-10 text-xl font-medium text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 "><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}