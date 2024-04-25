import Footer from "../Section/Footer"
import Header from "../Section/Header"
import Main from "../Section/Main"

const Container = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto box-border">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Container
