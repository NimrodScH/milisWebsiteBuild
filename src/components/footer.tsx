import './footer.css'
import { Link } from 'react-router-dom';

const Footer = (props:any) => {
    const currentYear = new Date().getFullYear();
    const mili = "בראש המשרד עומדת אדר' מילי בן עזרא, ילידת ארגנטינה, שהחלה את לימודי האדריכלות בארץ הולדתה. ב-1988 עלתה לארץ, וב-1991 סיימה לימודי אדריכלות ובינוי ערים בטכניון. ב-2005, אחרי כמה שנות עבודה במשרדי אדריכלות, היא הקימה משרד עצמאי שצמח מפה לאוזן וצבר מעגל רחב של לקוחות מרוצים, שלהם הוא מספק מענה ייחודי בנוף האדריכלות הישראלי."
    return (
      <footer
        className="footer-footer section-container-footer"
      >
        <div className="footer-max-width max-content-container">
          <div className="footer-bottom-container">
            {window.innerWidth<941 && (<>
            <div className="footer-links">
              <div className="footer-container3">
                <span className="footer-text23">
                  <span>פרטים</span>
                  <span></span>
                </span>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/contact"} className="footer-link">יצירת קשר</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/projects"} className="footer-link">פרוייקטים</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/'why-us'"} className="footer-link">למה אנחנו</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/about-us"} className="footer-link">אודותינו</Link>
              </div>
            </div>
              <div className="footer-left-side">
              <img
                alt="image"
                src="mili logo white (2).png"
                className="footer-image"
              />
              <span className="footer-text14">
                {mili}
              </span>
            </div></>)}

            {window.innerWidth>941 && (<>
              <div className="footer-left-side">
              <img
                alt="image"
                src="mili logo white (2).png"
                className="footer-image"
              />
              <span className="footer-text14">
                {mili}
              </span>
            </div> 
              <div className="footer-links">
              <div className="footer-container3">
                <span className="footer-text23">
                  <span>פרטים</span>
                  <span></span>
                </span>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/contact"} className="footer-link">יצירת קשר</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/projects"} className="footer-link">פרוייקטים</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/'why-us'"} className="footer-link">למה אנחנו</Link>
                <Link onClick={()=>window.scrollTo(0, 0)} to={"/about-us"} className="footer-link">אודותינו</Link>
              </div>
            </div></>)}
          </div>
          <div className="footer-copyright">
            <span className="footer-text31">
                <span>
                   כל הזכויות שמורות למילי בן עזרא {currentYear}©
                </span>
                       </span>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer;
  