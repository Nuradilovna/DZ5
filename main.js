const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list")


const createTodo = () =>{
    if (input.value.trim() === "")return alert("напиши что нибудь )))")

    const div = document.createElement("div");
    const text = document.createElement("h3");
    const edit_ = document.createElement("button");
    const delete_ = document.createElement("button");
    div .setAttribute("class" , "block_text")
    edit_.setAttribute("class" , "edit_button")
    delete_.setAttribute("class" , "delete_button")
    text.innerHTML = input.value;
    edit_.innerHTML = 'EDIT';
    delete_.innerHTML = 'DELETE';
    div.append(text);
    div.append(edit_);
    div.append(delete_);
    todoList.append(div)

    delete_.addEventListener("click", () => {
        div.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        div.style.transform = "scaleY(0)";
        setTimeout(() => {
            div.remove();
        }, 300);
    });
    edit_.addEventListener("click", () => {
        const newText = prompt("Напишите новое слово", text.innerHTML);
        if (newText && newText.trim() !== "") {
            text.innerHTML = newText;
        }
    });

    input.value = "";
}
createButton.onclick = () => createTodo()

input.onkeydown = (e) => {
    if (e.key === "Enter") createTodo()
}
