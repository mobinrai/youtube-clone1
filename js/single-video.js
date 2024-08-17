import comments from "../data/comments.js";

function loadComments() {
    let html = '<ul class="comments">';
    //1,2
    let parents = comments.filter((item) => {
        return item.parent_id == 0
    })
    for (let i = 0; i < parents.length; i++) {
        html += getHtmlText(parents[i]);
        let childUl = loadChildComments(parents[i].id) + '</li>'
        html += childUl
    }
    html += '</ul>';
    document.querySelector('.comment-section').innerHTML = html;
}
function loadChildComments(parent_id) {
    if (parent_id == '') {
        return ' ';
    }
    let childs = comments.filter(comment => {
        return comment.parent_id === parent_id
    })
    if (childs.length === 0) {
        return '</li>';
    }
    var text = '<ul class="comments">';
    for (let j = 0; j < childs.length; j++) {
        text += getHtmlText(childs[j]);
        if (j == childs.length) {
            text += loadChildComments('')
        } else {
            text += loadChildComments(childs[j].id)
        }
    }
    text += '</ul>'
    return text
}

function getHtmlText(parents){
    let imgNumber = Math.floor(Math.random() * 5) + 1

    return `<li id="${parents.id}">
                <div class="d-f fd-c">
                    <div class="comments-text-section">
                    <img src="./../images/users-profile-pic/user-${imgNumber}.jpg" alt="user 1" class="h-40">
                    ${parents.comments}
                    </div>
                    <div class="comment-like-btn-section">
                        <button type="button" class="btn btn-round b-none c-pointer ptb05-lr1">like</button>
                        <button type="button" class="btn btn-round b-none c-pointer ptb05-lr1">unlike</button>
                        <button type="button" class="btn btn-round b-none c-pointer ptb05-lr1 show-comment-form">Reply</button>
                    </div>
                    <form action="" class="reply-form d-f d-none">
                        <textarea name="comment-text" class="comment-text" placeholder="add your comments....">
                        </textarea>
                        <div>
                            <button type="button" value="" class="btn c-pointer b-none ptb05-lr1 btn-round comment-form-btn btn-disable">Comment</button>
                            <button type="button" value="" class="btn c-pointer b-none ptb05-lr1 btn-round comment-form-cancel">Cancel</button>
                        </div>
                    </form>
                </div>`;
}

loadComments();

document.querySelectorAll('.comment-form-cancel').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentNode.classList.add('d-none');
    })
});
document.querySelectorAll('.show-comment-form').forEach(showForm => {
    showForm.addEventListener('click', () => {
        showForm.parentNode.parentNode.querySelector('.reply-form').classList.remove('d-none');
    })
});