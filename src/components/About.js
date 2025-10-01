
import "../css/about.css";

function About(){
    return(
        <>
        <div className="about-container" id="about">
            <h1>About Us</h1>
            <h1>Raktarpan at IIT Kanpur</h1>
            <div className="about-content">
                <p>Raktarpan is a student-led initiative under the National Service Scheme (NSS) and part of the Community Welfare Cell (CWC) of Students’ Gymkhana, IIT Kanpur. Founded in 2014 by Himanshu Agarwal, Raktarpan was launched to address the critical challenge of blood shortage in Kanpur and nearby regions.
</p>
                <p>As blood cannot be manufactured and depends entirely on voluntary donations, Raktarpan serves as a vital link between generous donors and patients in urgent need. Over the years, it has grown into a youth-driven movement that offers free and timely assistance, especially to the underprivileged. The name “Raktarpan” combines Rakt (blood) and Arpan (offering), reflecting its mission of selfless service and life-saving contribution.</p>
                <h2>Our Mission</h2>
                <p>To create awareness about blood donation, ensure a sustainable supply of blood for those in need within the IITK community and surrounding areas, and foster a culture of social responsibility among students, faculty, and staff.</p>
                
                <h2>Our Vision</h2>
                <p>To create a society where no life is lost due to the unavailability of blood, by fostering a culture of voluntary blood donation and selfless service.</p>
                
                <h2>What We Do</h2>
                <div className="services-grid">
                    <div className="service-item">
                        <h3>🏕️ Blood Donation Camps</h3>
                        <p>Regular blood donation drives organized across the IIT Kanpur campus with professional medical supervision.</p>
                    </div>
                    <div className="service-item">
                        <h3>🆘 Emergency Blood Support</h3>
                        <p>24/7 emergency blood request system connecting donors with patients in critical situations.</p>
                    </div>
                    <div className="service-item">
                        <h3>📚 Awareness Programs</h3>
                        <p>Educational workshops and seminars about blood donation myths, benefits, and importance.</p>
                    </div>
                   
                </div>
                
              
                <p>Since our inception, we have successfully organized multiple blood donation camps, collecting thousands of units of blood and helping countless patients in emergency situations. Our dedicated team of volunteers works tirelessly to ensure that no one in need goes without help.</p>
                
                <h2>Why Donate Blood?</h2>
                <ul className="benefits-list">
                    <li><strong>Save Lives:</strong> One donation can save up to three lives</li>
                    <li><strong>Health Benefits:</strong> Regular donation helps maintain healthy iron levels</li>
                    <li><strong>Free Health Check:</strong> Complimentary health screening with every donation</li>
                    <li><strong>Community Service:</strong> Contribute to the welfare of society</li>
                    <li><strong>Emergency Preparedness:</strong> Build a network of ready donors for emergencies</li>
                </ul>
                
                <h2>Eligibility Criteria</h2>
                <div className="eligibility-info">
                    <div className="eligible-column">
                        <h3>✅ You CAN donate if:</h3>
                        <ul>
                            <li>Age: 18-65 years</li>
                            <li>Weight: Above 50kg</li>
                            <li>Hemoglobin: Above 12.5g/dl</li>
                            <li>Good general health</li>
                            <li>No recent illness or medication</li>
                        </ul>
                    </div>
                    <div className="ineligible-column">
                        <h3>❌ Please wait if you have:</h3>
                        <ul>
                            <li>Donated blood in last 3 months</li>
                            <li>Recent surgery or major illness</li>
                            <li>Pregnancy or lactation</li>
                            <li>Fever or cold symptoms</li>
                            <li>Recent travel to malaria-prone areas</li>
                        </ul>
                    </div>
                </div>
                
                <h2>Our Team</h2>
                <p>Raktarpan is driven by passionate students, faculty members, and healthcare professionals who believe in the power of collective action. Our team includes:</p>
                <ul>
                    <li><strong>Student Volunteers:</strong> Enthusiastic students from various departments</li>
                    {/* <li><strong>Faculty Advisors:</strong> Experienced faculty providing guidance and support</li> */}
                    <li><strong>Medical Team:</strong> Qualified doctors and nurses ensuring safe donations</li>
                    <li><strong>Administrative Support:</strong> Staff members facilitating smooth operations</li>
                </ul>
                
                <h2>Get Involved</h2>
                <p style={{color: "#000000"}}>Join us in this noble cause by participating in our blood donation drives. Your contribution can make a significant difference in someone's life. Whether you're a donor, volunteer, or supporter, there's a place for everyone in our mission.</p>
                
                <div className="involvement-options">
                    <div className="option-card">
                        <h3>🩸 Become a Donor</h3>
                        <p>Register as a blood donor and be part of our life-saving network.</p>
                    </div>
                    <div className="option-card">
                        <h3>🙋‍♂️ Volunteer with Us</h3>
                        <p>Help organize events, spread awareness, and support our operations.</p>
                    </div>
                    <div className="option-card">
                        <h3>📢 Spread the Word</h3>
                        <p>Share our mission with friends and family to expand our reach.</p>
                    </div>
                </div>
                
                <p>Together, we can create a healthier and more compassionate community where no one suffers due to lack of blood availability.</p>
                
                <div className="contact-info-1" >
                    <h2>Contact Us</h2>
                    <p><strong>Email:</strong> raktarpaniitkanpur@gmail.com</p>
                    <p><strong>Emergency Contact:</strong> +91 88907 30683</p>

                </div>
            </div>
           
        </div>
        </>
    )

}
export default About;