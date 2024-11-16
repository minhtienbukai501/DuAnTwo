const navE = document.querySelector(".navbar");
const listE = navE.querySelector(".list");
const items = listE.querySelectorAll(".item");
for (const item of items) {
    item.onclick = () => {
        const removeE = listE.querySelector(".item.active");
        removeE.classList.remove("active");
        item.classList.add("active");
    };
}

const btnCoursesE = document.querySelectorAll(".btn-course");
for (const btnCourse of btnCoursesE) {
    btnCourse.onmouseover = () => {
        btnCourse.style.backgroundColor = "#ffb900";
    };

    btnCourse.onmouseout = () => {
        btnCourse.style.backgroundColor = "#171100";
    };
}

const btnReadMoreE = document.querySelectorAll(".btn-readmore");
for (const btn of btnReadMoreE) {
    btn.onmouseover = () => {
        btn.style.backgroundColor = "#ffb900";
    };

    btn.onmouseout = () => {
        btn.style.backgroundColor = "#171100";
    };
}
