import Header from "../components/Header"
import Footer from "../components/Footer"
import NavDeals from "../components/NavDeals"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout