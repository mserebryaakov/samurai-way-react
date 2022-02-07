import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.container}>
            <div className={s.item}>
                <p className={s.text}>{props.text}</p>
            </div>
        </div>
    );
}

export default Post;