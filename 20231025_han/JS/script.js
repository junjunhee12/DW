const modal_open = document.getElementById("modal_open");
const modal_back = document.getElementById("modal_back");

const open = function () {
  modal_back.style.display = "block";
  //   open();
};

// open();

// modal_open.addEventListener("click", open);
// console.log(modal_open);

// 모달 백의 스타일 중 display값을 block으로 변경한다.
// 모달 클로즈가 눌리면 이런일이 버라질 것이다.
// 모달백의 스타일 중 디스플레이 값을 논으로 변경한다.

// document.getElementById("modal_open").onclick = function () {
//   document.getElementById("modal_back").style.display = "block";
// };
// document.getElementById("modal_close").onclick = function () {
//   document.getElementById("modal_back").style.display = "none";
// };
// $("#modal_open").click(function () {
//   $("#modal_back").fadeIn();
// });
// $("#modal_close").click(function () {
//   $("#modal_back").fadeOut();
// });
