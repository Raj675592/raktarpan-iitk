import "../css/navbar.css";
import { Link } from "react-router-dom";

function Home(){
    return(
<>
  <section style={{ minHeight: "100vh", padding: "120px 0", color:"black", background: "#c0392b", height:"100%" }} className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content" style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px"}}>
           
            <h1 style={{ fontSize: "4rem", marginBottom: "25px", lineHeight: "1.1", color:"white" }}>Be Someone's Lifeline</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "400", color:"white" }}>Save Lives Through Blood Donation at IIT Kanpur</h2>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.7", marginBottom: "50px", maxWidth: "700px", margin: "0 auto 50px auto", color:"white" }}>
              Your single blood donation can save up to three precious lives. Join our mission
              to bridge the gap between donors and those in critical need. Find nearby blood camps,
              connect with verified donors, or request emergency blood assistance.
            </p>
           
            <div className="hero-actions" style={{ marginBottom: "60px" }}>
              <Link to="/camps" className="btn btn-primary" style={{ padding: "18px 40px", fontSize: "1.2rem", marginRight: "20px" }}>Find Blood Camps</Link>
              <Link to="/about" className="btn btn-primary" style={{color:"white", padding: "18px 40px", fontSize: "1.2rem"}}>Become a Donor</Link>
            </div>
            <div className="hero-emergency" style={{ padding: "25px 35px", borderRadius: "15px", fontSize: "1.2rem" }}>
              <p style={{ color: "white" }}>📞 <strong style={{ color: "white" }}>Emergency Blood Request:</strong> +91 88907 30683</p>
            </div>
          </div>
        </div>
      </section>
</>
    );
}
export default Home;