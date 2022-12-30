import Link from "next/link"

export default function Footer(){
    return<>
        <div className="footer">
            <div> 
                <h1>This Project Was Developed
                Using NextJS, React, JS, CSS, HTML 
                and Vercel for Deployment</h1>
            </div>
            <div> <h1>Made By Carlos Carranza <br/>
                    Find Out More About Me 
                    <Link href="https://www.linkedin.com/in/carlos-i-carranza/"
                     target="_blank" style={{ textDecoration: "none", color:"white"}}> Here</Link>
                     <br/><br/>
                     Or Contact Me At:
                     <br/>
                     Charsdb@gmail.com
                     <br/>
                                 </h1> 
            
            </div>
        </div>
    </>
}