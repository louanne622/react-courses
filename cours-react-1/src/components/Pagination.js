import React from 'react';

const Pagination = ({totalFlags, flagsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalFlags/flagsPerPage); i++){
        pages.push(i);
    }
    return (
        <div className='pagination'>
        {
            pages.map((page, index) => {
                return <a key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>
                    {page}
                    </a>
            })
        }
        </div>
    );
};

export default Pagination;