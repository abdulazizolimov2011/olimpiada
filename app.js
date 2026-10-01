const form = document.querySelector(".form");
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = text.value;
    const item = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = data;

    list.append(item);
    item.append(p);

    text.value = "";
});