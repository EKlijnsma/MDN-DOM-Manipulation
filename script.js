const list = document.querySelector("ul")
const input = document.querySelector("input")
const add = document.querySelector("#add")

add.addEventListener("click", () => {
      const txt = input.value;
      input.value = "";

      const listItem = document.createElement("li");
      const span = document.createElement("span");
      const delBtn = document.createElement("button");

      listItem.appendChild(span);
      span.textContent = txt;
      listItem.appendChild(delBtn);
      delBtn.textContent = "Delete";
      list.appendChild(listItem);

      delBtn.addEventListener("click", () => {
        list.removeChild(listItem);
      })
      input.focus()
    });