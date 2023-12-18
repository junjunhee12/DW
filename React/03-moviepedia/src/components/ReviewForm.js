import { useState } from "react";

const ReviewForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setContent] = useState("");
  const [value, setValue] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input type="file" accept="image/png, image/jpeg"></input>
      <input
        type="text"
        name="title"
        value={value.title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="rating"
        value={value.rating}
        onChange={handleChange}
      ></input>
      <textarea name="content" value={value.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
};

export default ReviewForm;
