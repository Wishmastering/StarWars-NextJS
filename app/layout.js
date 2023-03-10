import Navbar from "./components/navbar"
import Menu from "./components/menu"
import Footer from "./components/footer"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <div style={{display:"none"}} id="menu">
        <Menu/> 
      </div>
      <div id="home">
        <Navbar/>
        <div>{children}</div>
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
       
       
      {/* Abajo esta bootstrap */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      {/* Abajo estan los scripts de ionic */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
