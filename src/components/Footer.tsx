import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Mohammed Alabsi. Built with precision.
        </p>
      </div>
    </footer>
  )
}
