import "../css/navbar.css";
import { Link } from "react-router-dom";

function Home(){
    return(
<>
  <section style={{ minHeight: "100vh", padding: "120px 0" }} className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content" style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>
            <div className="hero-badge" style={{ marginBottom: "30px" }}>
              <span>RAKTARPAN</span>
            </div>
            <h1 style={{ fontSize: "4rem", marginBottom: "25px", lineHeight: "1.1" }}>Be Someone's Lifeline</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "30px", fontWeight: "400" }}>Save Lives Through Blood Donation at IIT Kanpur</h2>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.7", marginBottom: "50px", maxWidth: "700px", margin: "0 auto 50px auto" }}>
              Your single blood donation can save up to three precious lives. Join our mission 
              to bridge the gap between donors and those in critical need. Find nearby blood camps, 
              connect with verified donors, or request emergency blood assistance.
            </p>
           
            <div className="hero-actions" style={{ marginBottom: "60px" }}>
              <Link to="/camps" className="btn btn-primary" style={{ padding: "18px 40px", fontSize: "1.2rem", marginRight: "20px" }}>Find Blood Camps</Link>
              <Link to="/about" className="btn btn-secondary" style={{color:"white", padding: "18px 40px", fontSize: "1.2rem"}}>Learn More</Link>
            </div>
            <div className="hero-emergency" style={{ padding: "25px 35px", borderRadius: "15px", fontSize: "1.2rem" }}>
              <p>📞 <strong>Emergency Blood Request:</strong>  +91 98765 43212 (24/7)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "20px", color: "#2c3e50" }}>Our Impact</h2>
            <p style={{ fontSize: "1.3rem", color: "#6c757d", maxWidth: "800px", margin: "0 auto" }}>
              Together, we've made a significant difference in saving lives across IIT Kanpur and surrounding communities
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
            <div style={{ textAlign: "center", padding: "40px 30px", background: "white", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#e74c3c", marginBottom: "15px" }}>2,450+</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>Lives Saved</h3>
              <p style={{ color: "#6c757d" }}>Through successful blood donations and transfusions</p>
            </div>
            <div style={{ textAlign: "center", padding: "40px 30px", background: "white", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#3498db", marginBottom: "15px" }}>850+</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>Active Donors</h3>
              <p style={{ color: "#6c757d" }}>Verified and regular blood donors in our network</p>
            </div>
            <div style={{ textAlign: "center", padding: "40px 30px", background: "white", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#27ae60", marginBottom: "15px" }}>150+</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>Blood Camps</h3>
              <p style={{ color: "#6c757d" }}>Successfully organized across campus and city</p>
            </div>
            <div style={{ textAlign: "center", padding: "40px 30px", background: "white", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#f39c12", marginBottom: "15px" }}>24/7</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2c3e50" }}>Emergency Support</h3>
              <p style={{ color: "#6c757d" }}>Round-the-clock assistance for urgent blood needs</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "20px", color: "#2c3e50" }}>How Raktarpan Works</h2>
            <p style={{ fontSize: "1.3rem", color: "#6c757d", maxWidth: "800px", margin: "0 auto" }}>
              Simple steps to save lives through our comprehensive blood donation platform
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "start" }}>
            <div style={{ textAlign: "center", padding: "30px" }}>
              <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #e74c3c, #c0392b)", borderRadius: "50%", margin: "0 auto 30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "white" }}>
                1
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#2c3e50" }}>Register as Donor</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Sign up with your basic details, blood type, and contact information. Get verified through our secure process.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px" }}>
              <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #3498db, #2980b9)", borderRadius: "50%", margin: "0 auto 30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "white" }}>
                2
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#2c3e50" }}>Find Blood Camps</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Discover nearby blood donation camps on campus and in the city. Check schedules, locations, and requirements.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "30px" }}>
              <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #27ae60, #229954)", borderRadius: "50%", margin: "0 auto 30px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "white" }}>
                3
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#2c3e50" }}>Donate & Save Lives</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Complete the donation process safely with medical supervision. Track your donation history and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Types Information */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Blood Type Compatibility</h2>
            <p style={{ fontSize: "1.3rem", opacity: "0.9", maxWidth: "800px", margin: "0 auto" }}>
              Understanding blood types helps us match donors with recipients more effectively
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            {[
              { type: "O-", universal: "Universal Donor", description: "Can donate to all blood types", color: "#e74c3c" },
              { type: "AB+", universal: "Universal Receiver", description: "Can receive from all blood types", color: "#3498db" },
              { type: "A+", universal: "Common Type", description: "Can donate to A+ and AB+", color: "#27ae60" },
              { type: "B+", universal: "Common Type", description: "Can donate to B+ and AB+", color: "#f39c12" }
            ].map((blood, index) => (
              <div key={index} style={{ background: "rgba(255,255,255,0.1)", padding: "30px 20px", borderRadius: "15px", textAlign: "center", backdropFilter: "blur(10px)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px", color: blood.color }}>
                  {blood.type}
                </div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>{blood.universal}</h4>
                <p style={{ opacity: "0.8", fontSize: "0.95rem" }}>{blood.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section style={{ padding: "80px 0", background: "#fff5f5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "20px", color: "#2c3e50" }}>When Every Second Counts</h2>
            <p style={{ fontSize: "1.3rem", color: "#6c757d", maxWidth: "800px", margin: "0 auto" }}>
              Critical situations where immediate blood supply can mean the difference between life and death
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div style={{ background: "white", padding: "40px 30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(231,76,60,0.1)", borderLeft: "5px solid #e74c3c" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🚑</div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#2c3e50" }}>Emergency Surgeries</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Major surgeries often require blood transfusions. Having readily available blood supplies ensures operations can proceed without delays.
              </p>
            </div>
            <div style={{ background: "white", padding: "40px 30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(231,76,60,0.1)", borderLeft: "5px solid #e74c3c" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🤱</div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#2c3e50" }}>Maternal Care</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Complications during childbirth may require immediate blood transfusions to save both mother and child.
              </p>
            </div>
            <div style={{ background: "white", padding: "40px 30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(231,76,60,0.1)", borderLeft: "5px solid #e74c3c" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🩺</div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#2c3e50" }}>Cancer Treatment</h3>
              <p style={{ color: "#6c757d", lineHeight: "1.6" }}>
                Chemotherapy and radiation treatments often require supportive blood transfusions to help patients recover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)", color: "white" }}>
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