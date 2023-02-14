import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div>CopyRighted 2020-2023   All Rights Reserved.</div>
                    <div>All choto tam nichego ne vizhu kachestvo shakal</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;