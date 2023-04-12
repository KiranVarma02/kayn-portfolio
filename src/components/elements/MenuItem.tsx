import PropTypes from 'prop-types'

export default function MenuItem({href, text}) {
  return (
      <a href={href} className="navbar-item is-unselectable">{text}</a>
  )
}

MenuItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}
