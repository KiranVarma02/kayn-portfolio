export default function MenuItem(props) {
    return (
        <a href={props.href} className="navbar-item is-unselectable">{props.text}</a>
    )
}
