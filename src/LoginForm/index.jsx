import React from 'react'

import styles from './styles.module.css'

export const LoginForm = () => {
    return (
        <section className={styles.form}>
            <div className={styles.formHead}>
                <h2>Log in</h2>
                <span className={styles.greenLine}></span>
                <div className={styles.icon}>
                <div>
                    <a href="www.google.com"><i className="fa-brands fa-google"></i></a>
                </div>
                <div>
                    <a href="www.twitter.com"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div>
                    <a href="www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                </div>
                <p>or login using email</p>
            </div>
            <div className={styles.inputsField}>
                <div className={styles.email}>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className={styles.password}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className={styles.forgot}>
                    <div className={styles.checkbox}>
                        <input type="checkbox" /> <span>Remember Me</span>
                    </div>
                    <a className="form-link" href="www.google.com">Forgot Password?</a>
                </div>
            </div>
            <button className={styles.submitBtn}>Submit</button>
            <div className={styles.termsCondition}>
                <a className={styles.formLink} href="www.google.com">Privacy Policy</a>
                <a className={styles.formLink} href="www.google.com">Terms & Condition</a>
            </div>
        </section>
    )
}