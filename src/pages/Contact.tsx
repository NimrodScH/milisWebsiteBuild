import Signup from "../components/contact";
import RootHeadline from "./RootHeadline";

function Contact() {
  return (
    <>
      <RootHeadline
        firstH1="יצירת קשר"
        secondH1="מלאו את הפרטים ונחזור אליכם"
      />
      <Signup headline={false} />
    </>
  );
}

export default Contact;
