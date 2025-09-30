import "../css/navbar.css";
import { Link } from "react-router-dom";

function Home(){
    return(
<>
  <section style={{ minHeight: "100vh", padding: "120px 0", color:"black", background: "#c0392b" }} className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content" style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px"}}>
            {/* <div className="hero-badge" style={{ marginBottom: "30px" }}>
              <span style={{color:"black"}}>RAKTARPAN</span>
            </div> */}
            <h1 style={{ fontSize: "4rem", marginBottom: "25px", lineHeight: "1.1", color:"white" }}>Be Someone's Lifeline</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "400", color:"white" }}>Save Lives Through Blood Donation at IIT Kanpur</h2>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.7", marginBottom: "50px", maxWidth: "700px", margin: "0 auto 50px auto", color:"white" }}>
              Your single blood donation can save up to three precious lives. Join our mission
              to bridge the gap between donors and those in critical need. Find nearby blood camps,
              connect with verified donors, or request emergency blood assistance.
            </p>
           
            <div className="hero-actions" style={{ marginBottom: "60px" }}>
              <Link to="/camps" className="btn btn-primary" style={{ padding: "18px 40px", fontSize: "1.2rem", marginRight: "20px" }}>Find Blood Camps</Link>
              <Link to="/about" className="btn btn-secondary" style={{color:"white", padding: "18px 40px", fontSize: "1.2rem"}}>Learn More</Link>
            </div>
            <div className="hero-emergency" style={{ padding: "25px 35px", borderRadius: "15px", fontSize: "1.2rem" }}>
              <p style={{ color: "white" }}>📞 <strong style={{ color: "white" }}>Emergency Blood Request:</strong> 0512 259 7777</p>
            </div>
          </div>
        </div>
      </section>


  

     

      {/* Call to Action */}
      <section style={{ padding: "80px 0", background: "#c0392b", color: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "25px" }}>Ready to Save Lives?</h2>
          <p style={{ fontSize: "1.4rem", marginBottom: "50px", opacity: "0.9", lineHeight: "1.6" }}>
            Join our community of life-savers today. Your donation could be the miracle someone is waiting for.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <Link to="/about" style={{ 
              background: "#e74c3c", 
              color: "white", 
              padding: "18px 40px", 
              borderRadius: "50px", 
              textDecoration: "none", 
              fontSize: "1.2rem", 
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(231,76,60,0.3)"
            }}>
              Become a Donor
            </Link>
            <Link to="/camps" style={{ 
              background: "transparent", 
              color: "white", 
              padding: "18px 40px", 
              borderRadius: "50px", 
              textDecoration: "none", 
              fontSize: "1.2rem", 
              fontWeight: "500",
              border: "2px solid white",
              transition: "all 0.3s ease"
            }}>
              Find Blood Camps
            </Link>
          </div>
          <div style={{ marginTop: "50px", padding: "30px", background: "rgba(231,76,60,0.1)", borderRadius: "15px", border: "1px solid rgba(231,76,60,0.3)" }}>
            <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>🆘 Emergency Blood Request</h4>
            <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
              For urgent blood requirements, call our 24/7 helpline: <strong>+91 98765 43212</strong>
            </p>
          </div>
        </div>
      </section>
</>
    );
}
export default Home;