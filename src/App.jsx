import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#14e_100%)]"></div>
      <div>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
