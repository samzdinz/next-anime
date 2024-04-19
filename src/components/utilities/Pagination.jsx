const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };
  const handlePrevButton = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNextButton = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center text-xl items-center py-6 px-2 gap-4 text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevButton}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextButton}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
