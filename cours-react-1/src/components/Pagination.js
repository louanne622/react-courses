import React from 'react';

const Pagination = ({totalFlags, flagsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
// Définir le nombre de page pour la pagination
    for(let i = 1; i <= Math.ceil(totalFlags/flagsPerPage); i++){
        pages.push(i);
    }
    return (
        <div className='pagination'>
        {
            // Pour toutes les pages, on va afficher un lien hypertexte
            pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>
                    {page}
                    </button>
            })
        }
        </div>
    );
};

export default Pagination;