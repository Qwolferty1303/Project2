function createForm() {
    document.getElementById('formContainer').innerHTML = `
        <form action="" class="form">
            <input type="text" id="nicknameInput" placeholder="Nickname">
            <input type="text" id="commentInput" placeholder="Write your comment">
            <input type="button" value="Отправить" onclick="createComment()">
        </form>`;
}

function createComment() {
    const nickname = document.getElementById('nicknameInput').value;
    const comment = document.getElementById('commentInput').value;

    document.getElementById('commentsContainer').innerHTML += `
        <p>${nickname}:<b> ${comment}</b></p>`;
}

createForm();
