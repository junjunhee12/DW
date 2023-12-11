const genderBtn = document.querySelectorAll("input[name=gender]");
const languageBtn = document.querySelectorAll("input[name=language]");
const getTel = document.querySelector(".get-tel");
const authNum = document.querySelector(".auth-num");
// console.log(authNum);
// console.log(getTel);
// 텍스트를 누를때 쉐도우 효과
const TD = document.querySelectorAll("td");
TD.forEach((td) => {
  // console.log(td);
  td.addEventListener("click", function () {
    if (!td.classList.contains("click")) {
      TD.forEach((button) => {
        button.classList.remove("click");
      });
      td.classList.add("click");
    }
  });
});

// const pClick = document.querySelector("#click");
// const modalPage = document.querySelector(".modal-page");
// const modalClose = document.querySelector(".modal-close");
// const modalBack = document.querySelector(".modal-back");
// btnClick.forEach((el) => {
//   el.addEventListener("click", function () {
//     console.log(el.classList.contains("selected"));
//     if (el.classList.contains("selected")) {
//       el.classList.remove("selected");
//     } else {
//       el.classList.add("selected");
//     }
//   });
// });

genderBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      genderBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});

languageBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      languageBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});

// 인증번호 받기를 누르면 인증번호를 입력하는 칸

authNum.addEventListener("click", function () {
  alert("인증번호를 전송했습니다.");
  getTel.style.display = "block";
});
