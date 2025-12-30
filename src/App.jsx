import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import BackgroundShader from "./components/BackgroundShader/BackgroundShader.jsx";

function App() {
  return (
    <div className="container">
      {/* <BackgroundShader 
         shape="square" 
         pixelSize={1}
         inkColor="#999999"
         bgColor="#000000"
      /> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
