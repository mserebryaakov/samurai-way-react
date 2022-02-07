import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;