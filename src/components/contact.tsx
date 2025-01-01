import "./contact.css";
import { useActionState } from "react";
import { isEmail, isNotEmpty } from "../Data/validation";

const contactAction = (prevFormState: any, formData: any) => {
  const email = formData.get("email") as string;
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const phone = formData.get("phone") as string;
  const textBox = formData.get("textBox") as string;
  const acquisitionChannel = formData.getAll("acquisition") as string[];
  const contactingReason = formData.get("contactingReason") as string;
  const terms = formData.get("terms") as string;

  let errors = [];

  if (!isEmail(email)) {
    errors.push("מייל לא תקין");
  }

  if (!isNotEmpty(firstName)) {
    errors.push("לא הוכנס שם");
  }

  if (!isNotEmpty(lastName)) {
    errors.push("לא הוכנס שם משפחה");
  }

  if (!terms) {
    errors.push("חובה להסכים לתנאי השימוש");
  }

  if (!isNotEmpty(contactingReason)) {
    errors.push("אנא בחר סיבת פניה");
  }

  if (acquisitionChannel.length === 0) {
    errors.push("אנא בחר איך שמעת עלינו");
  }
  if (errors.length > 0) {
    return {
      errors: errors,
      enteredValues: {
        email,
        firstName,
        lastName,
        phone,
        textBox,
        acquisitionChannel,
        contactingReason,
        terms,
      },
    };
  }
  return { errors: null };
};

export default function Signup(props: { headline: boolean }) {
  const [formState, formAction, pending] = useActionState(contactAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      {props.headline && (
        <>
          <h2>יצירת קשר</h2>
          <p>מלאו את הפרטים למטה ונחזור אליכם בהקדם</p>
        </>
      )}

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">שם פרטי</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">שם משפחה</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="email">דואר אלקטרוני</label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={formState.enteredValues?.email}
          />
        </div>

        <div className="control">
          <label htmlFor="phone">מספר פלאפון</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="^05(0|2|3|4|8)-?[0-9]{7}$"
            defaultValue={formState.enteredValues?.phone}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="contactingReason">סיבת הפניה?</label>
        <select
          id="contactingReason"
          name="contactingReason"
          defaultValue={formState.enteredValues?.contactingReason}
        >
          <option value="student">הצעת מחיר </option>
        </select>
      </div>

      <fieldset>
        <legend>איך הגעת אלינו?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "google"
            )}
          />
          <label htmlFor="google">גוגל</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "friend"
            )}
          />
          <label htmlFor="friend">המלצה</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "other"
            )}
          />

          <label htmlFor="other">רשת חברתית</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="textBox">מידע נוסף</label>
        <textarea
        className="speaker-card-text-default"
          id="textBox"
          name="textBox"
          defaultValue={formState.enteredValues?.textBox}
        ></textarea>
      </div>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultValue={formState.enteredValues?.terms}
          />
          אני מסכים לתנאים ולשירותים
        </label>
        {formState.errors && (
          <ul className="error">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          איפוס
        </button>
        <button className="button">שלח</button>
      </p>
    </form>
  );
}
