import styles from './Footer.module.css'

export default function Footer() {
    return <footer className={styles.footer}>
            <div className="container">
                <div className={styles.row1}>
                    {/* column1 */}
                    <div className={styles.col1}>
                        <h3>Mvvb</h3>
                        <div>
                            Prenez soin de votre santé physique et mental grâce à notre conférence internationale
                        </div>
                    </div>
                    {/* column2 */}
                    <div className="col2">
                        <p>Date</p>
                        <p> Du 12/02/2024 au </p> 
                        <p>15/02/2024 </p>                  
                    </div>
                    {/* column3 */}
                    <div className="col3">
                        <h4>Adresse</h4>
                        <p>
                            1240 avenue mvvb
                        </p>

                    </div>
                    {/* column4 */}
                    <div className="col4">
                        <h4>Contact</h4>
                        
                            <p>mvvb@gmail.com</p>
                            <p>+1 816 999 999</p>
                        

                    </div>
                </div>

                <hr></hr>

                <div className={styles.row2}>
                <div>  
                    <i className={styles.icone  +' '+ 'uil uil-facebook-f'}></i>
                    <i className={styles.icone  +' '+ 'uil uil-twitter'}></i>
                    <i className={styles.icone  +' '+ 'uil uil-instagram'}></i>
                    
                    <i className={styles.icone2  +' '+ 'uil uil-arrow-circle-up'}></i>
                </div> 
       
                             
                    <p> &copy; Copyright College la Cite - Hiver 2024</p>
                  
                </div>


            </div>       
    </footer>
}