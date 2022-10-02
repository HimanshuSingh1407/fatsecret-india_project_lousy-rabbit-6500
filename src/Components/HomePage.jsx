import React from 'react'
import Navbar from './Navbar'
import styles from "./Style.module.css";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <h1 className={styles.headerTextStyle}>Your Key to Success</h1>
        <img className={styles.imgTag} alt="FatSecret" src="https://a.ftscrt.com/static/images/splash/FS_Logo_SplashScreen.png" />
        <div style={{textAlign: "left", display: "block", width:"70%", margin:"auto"}}>
				<button className={styles.buttongreenButton} type="button">Start for Free</button>
				<p className={styles.shadow-1}>Already a Member? <a href="/Auth.aspx?pa=s" class="white"><strong>Sign In</strong></a></p> 
				<p>
					Start losing weight the healthy way with easy to use apps, online tools and support.
				</p>
				<div>
					<a target="blank" href="https://itunes.apple.com/in/app/calorie-counter-by-fatsecret/id347184248?mt=8">
						<img src="https://a.ftscrt.com/static/images/mobi/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" height="34"/>
					</a>
					<a target="blank" href="https://play.google.com/store/apps/details?id=com.fatsecret.android">
						<img src="https://a.ftscrt.com/static/images/mobi/android/en_get_2.svg" height="34" />
					</a>
				</div>
		    </div>
            <table style={{width:"100%", borderCollapse:"collapse"}}>
                <tbody>
                    <tr>
                        <td width="50%">&nbsp;</td>
                        <td valign="bottom" rowspan="2"><img src="https://a.ftscrt.com/static/images/splash/Logo_Tab_Reverse_Green.png"/></td>
                        <td width="50%">&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="greenBar">&nbsp;</td>
                        <td class="greenBar">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div className={styles.greenWall}>
            <div className={styles.mainSection}>
                <div className={styles.mainSectionInnerContent}>
                    <h2 className={styles.whiteheaderText}>Superb 100% FREE calorie counter apps</h2>
                    <p className={styles.whitesecondaryText}>Over 35 million people have lost weight with FatSecret. Start your weight loss journey today and access the world's highest quality food and nutrition database.</p>
                </div>
            </div>
            <div >
                <span ><img class="transLogo" src="https://a.ftscrt.com/static/images/splash/Logo_Tab_Green.png"/></span> 
            </div>
        </div>
    </>
  )
}

export default HomePage
