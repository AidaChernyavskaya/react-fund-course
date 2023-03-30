import React from 'react';

export const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__container">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};
