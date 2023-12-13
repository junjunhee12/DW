import "./ReviewList.css";
//  이미지 아이템들에 대한 관리
function ReviewlistItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{item.createdAt}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

// 전체 관리
function Reviewlist({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewlistItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default Reviewlist;
