import css from './LoadMoreBtn.module.css'; 

const LoadMoreBtn = ({ loadMore, hasImages }) => {
  return (
    hasImages && (
      <button onClick={loadMore} className={css.loadMoreBtn}>
        Load more
      </button>
    )
  );
};

export default LoadMoreBtn;