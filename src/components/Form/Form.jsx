import { useState } from "react";
import validate from "../Validation";
import styles from './Form.module.css'
const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})


    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(userData)

    }
    const handleButtonClick = (event) => {
        event.target.classList.add(styles['blur-out-expand']);
      }


    return (
        
        <form onSubmit={handleOnSubmit} className={styles.formContainer}>
       <img src={"https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png"} alt="Logo" className={styles.formImage} />
        
        <div className={styles.formInputContainer}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            name="email"
            type="text"
            placeholder="Ingrese su email"
            value={userData.email}
            onChange={handleOnChange}
            className={styles.formInput}
          />
          {errors.email && <p className={styles.p}>{errors.email}</p>}
        </div>
  
        <div className={styles.formInputContainer}>
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Ingrese su password"
            value={userData.password}
            onChange={handleOnChange}
            className={styles.formInput}
          />

        </div>
      <div>{errors.password && <p  className={`${styles["text-glow"]}`}>{errors.password}</p>}</div>
        <button
          disabled={!userData.email || !userData.password || errors.email || errors.password}
          type="submit"
          className={`${styles["glow-on-hover"]}`}
         onClick={handleButtonClick}
        >
          Submit
        </button>
      </form>

    )
}

export default Form;