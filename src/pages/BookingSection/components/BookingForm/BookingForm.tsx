import FormInput from "../FormInput/FormInput";
import classes from "./BookingForm.module.css";

function BookingForm() {
  return (
    <div className={classes.BookingForm}>
      <div className={classes.form}>
        <FormInput
          name="firstName"
          label="First name"
          placeholder="John"
          required={true}
        />
        <FormInput
          name="lastName"
          label="Last name"
          placeholder="Doe"
          required={true}
        />
        <FormInput
          name="mail"
          label="Email address"
          type="mail"
          placeholder="JohnDoe.gmail.com"
          required={true}
        />
        <FormInput
          name="phone"
          label="Phone number"
          type="phone"
          placeholder="1234567890"
          required={true}
        />
      </div>
    </div>
  );
}

export default BookingForm;
