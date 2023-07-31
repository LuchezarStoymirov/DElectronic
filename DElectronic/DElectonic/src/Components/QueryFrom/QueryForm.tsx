import emailjs from 'emailjs-com';
import style from "./QueryForm.module.css";

export const QueryForm = () => {
  
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_9spv3ld', 'template_w8200qf', e.target, 'IvUjMz-pUUl-yA7je')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <form className={style.queryForm} onSubmit={sendEmail}>
      <label>
        Вашият Имейл Адрес:
        <input type="email" name="from_name" className={style.input} />
      </label>
      <label>
        Запитване:
        <textarea name="message" className={style.textarea} />
      </label>
      <input type="submit" value="Send" className={style.submitButton} />
    </form>
  );
}
