import style from "./FormSatisfaction.module.css";
const FormSatisfaction = () => {
  return (
    <div className={`${style.satic_box}`}>
      <ul className={`${style.satic_box_list}`}>
        <li className={`${style.satic_item}`}>
          <div className={`${style.satic_item_title}`}>
            % SATISFACTION GUARANTEED
          </div>
          <div className={`${style.satic_item_text}`}>
            We back each cleaning with our written 100% Satisfaction Guarantee.
            If you are not delighted with your cleaning for any reason, we will
            return and re-clean. No questions asked. This is our promise to you.
          </div>
        </li>
        <li className={`${style.satic_item}`}>
          <div className={`${style.satic_item_title}`}>
            NO CHARGES UNTIL CLEANING COMPLETE
          </div>
          <div className={`${style.satic_item_text}`}>
            After booking, we may put a hold on your card for the cleaning
            amount but nothing is charged until the cleaning is completed.
          </div>
        </li>
        <li className={`${style.satic_item}`}>
          <div className={`${style.satic_item_title}`}>1 MAID FOR 1 HOUR</div>
          <div className={`${style.satic_item_text}`}>
            Purchasing 1 hour of maid services gets you 1 insured, bonded, and
            background checked maid, with supplies, for 1 hour of house
            cleaning. If we send multiple maids to your home, then each maid's
            time is billed at the hourly rate then added together. <br /> For
            example, a 12-hour cleaning is too much for 1 maid, so we may send 2
            or 3 maids to your home. 2 maids would complete a 12-hour cleaning
            in 6 clock hours, 3 maids would do it in 4 clock hours. Either way,
            you get 12 total hours of cleaning.
          </div>
        </li>
        <li className={`${style.satic_item}`}>
          <div className={`${style.satic_item_title}`}>
            LOYAL CUSTOMERS SAVE EVEN MORE
          </div>
          <div className={`${style.satic_item_text}`}>
            Recurring customers save 25% on future cleanings. Just select the
            service frequency you desire and we will schedule you accordingly
            and apply your discount automatically.
          </div>
        </li>
      </ul>
    </div>
  );
};
export default FormSatisfaction;
