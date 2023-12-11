const stars = document.querySelectorAll(".stars i");

function checkStars(clickindex) {
  console.log(clickindex);
  // 어느 별이 클릭되었는지 event객체를 통해 알아온다.

  stars.forEach((star, i) => {
    if (i <= clickindex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  // 조건식, 클릭된 별의 인덱스 보다 작거나 같으면 active 클래스를 추가하고 크면, active 클래스를 삭제한다.
}
