import  { useState, useEffect } from "react";
import "../css/bloodcamps.css";
import bloodCampsData from "../data/bloodCampsData.json";

const BloodCamps = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodCamps, setBloodCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load blood camps data from local JSON file
  useEffect(() => {
    const loadBloodCamps = () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Loading blood camps from local data...');
        
        // Load data from imported JSON file
        setBloodCamps(bloodCampsData);
        console.log(`Successfully loaded ${bloodCampsData.length} camps from local data`);
        
      } catch (err) {
        console.error("Error loading blood camps:", err);
        setError(`Failed to load blood camps: ${err.message}`);
        setBloodCamps([]);
      } finally {
        setLoading(false);
      }
    };

    loadBloodCamps();
  }, []);

  // Refresh function to reload data from local file
  const handleRefresh = () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Refreshing blood camps data from local file...');
      
      // Reload data from imported JSON file
      setBloodCamps(bloodCampsData);
      console.log(`Refreshed: ${bloodCampsData.length} camps loaded from local data`);
      
    } catch (err) {
      console.error("Error refreshing blood camps:", err);
      setError(`Failed to refresh blood camps: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Filter camps based on selected filter and search term
  const filteredCamps = bloodCamps.filter(camp => {
    const matchesFilter = selectedFilter === "all" || camp.status === selectedFilter;
    const matchesSearch = camp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         camp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         camp.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const statusClasses = {
      upcoming: "status-upcoming",
      urgent: "status-urgent",
      completed: "status-completed"
    };
    return statusClasses[status] || "status-upcoming";
  };

  const getStatusText = (status) => {
    const statusTexts = {
      upcoming: "Upcoming",
      urgent: "Urgent",
      completed: "Completed"
    };
    return statusTexts[status] || "Upcoming";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getProgressPercentage = (registered, target) => {
    return Math.min((registered / target) * 100, 100);
  };

  // Loading component
  if (loading) {
    return (
      <section className="blood-camps" id="camps">
        <div className="camps-container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <h3>Loading Blood Camps...</h3>
            <p>Please wait while we fetch the latest camp information</p>
          </div>
        </div>
      </section>
    );
  }

  // Error component
  if (error) {
    return (
      <section className="blood-camps" id="camps">
        <div className="camps-container">
          <div className="error-container">
            <i className="fas fa-exclamation-triangle"></i>
            <h3>Unable to Load Camps</h3>
            <p>{error}</p>
            <button 
              className="btn btn-primary"
              onClick={handleRefresh}
            >
              <i className="fas fa-refresh"></i>
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blood-camps" id="camps">
      <div className="camps-container">
        {/* Header Section */}
        <div className="camps-header">
          <div className="header-content">
            <h2>Blood Donation Camps</h2>
            <p>Join our life-saving blood donation camps and be a hero in someone's story</p>
            {/* Data Source Indicator */}
           
          </div>
          <button 
            className="refresh-btn"
            onClick={handleRefresh}
            disabled={loading}
            title="Refresh camp data"
          >
            <i className={`fas fa-sync-alt ${loading ? 'spinning' : ''}`}></i>
            Refresh
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="camps-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search camps by title, location, or organizer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>

          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedFilter("all")}
            >
              All Camps
            </button>
            <button
              className={`filter-btn ${selectedFilter === "upcoming" ? "active" : ""}`}
              onClick={() => setSelectedFilter("upcoming")}
            >
              Upcoming
            </button>
           
            <button
              className={`filter-btn ${selectedFilter === "completed" ? "active" : ""}`}
              onClick={() => setSelectedFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>
            Showing <strong>{filteredCamps.length}</strong> of <strong>{bloodCamps.length}</strong> camps
            {selectedFilter !== "all" && ` (${selectedFilter})`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Camps Grid */}
        <div className="camps-grid">
          {filteredCamps.map(camp => (
            <div key={camp.id} className="camp-card">
              
                {/*camp status*/}
                 <div className="camp-image">
               <div className={`camp-status ${getStatusBadge(camp.status)}`}>
                  {getStatusText(camp.status)}
                </div>
               
              </div>

              <div className="camp-content">
                <h3 className="camp-title">{camp.title}</h3>
                <p className="camp-description">{camp.description}</p>

                <div className="camp-details">
                  <div className="detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{formatDate(camp.date)}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>{camp.time}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{camp.location}</span>
                  </div>
                  {/* <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <span>Organized by {camp.organizer}</span>
                  </div> */}
                </div>

                {/* Progress Bar
                <div className="camp-progress">
                  <div className="progress-info">
                    <span>Registered: {camp.registeredDonors}/{camp.targetDonors}</span>
                    <span>{Math.round(getProgressPercentage(camp.registeredDonors, camp.targetDonors))}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${getProgressPercentage(camp.registeredDonors, camp.targetDonors)}%` }}
                    ></div>
                  </div>
                </div> */}

                {/* Requirements */}
                <div className="camp-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {camp.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
 


                {/* Actions */}
                <div className="camp-actions">
                 
                  {camp.status !== "completed" && (
                    <a href={`tel:${camp.contact}`} className="btn btn-primary">
                    <i className="fas fa-phone"></i>
                    Contact For Registration: {camp.contact}
                  </a>
                   )}

                </div>
              
                
              </div>
               
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCamps.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No camps found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="camps-cta">
          <h3>Want to Organize a Blood Camp?</h3>
          <p>Contact our team to organize a blood donation camp at your location</p>
          <div className="cta-buttons">
            <a href="tel:+9190248 92379" className="btn btn-primary">
              <i className="fas fa-phone"></i>
              Call Us
            </a>
            <a href="mailto:raktarpaniitkanpur@gmail.com" className="btn btn-secondary">
              <i className="fas fa-envelope"></i>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodCamps;