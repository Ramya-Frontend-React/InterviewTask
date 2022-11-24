
import "../assets/style.css"
import { useNavigate } from "react-router-dom";


function App() {


  const navigate = useNavigate();

  
  function creaTion() {
   
    navigate("/");
  }

  const navigate1 = useNavigate();
  function enTry() {

    navigate1("/tableentry");
  }
  return (
    <div className="App">



<aside id="sidebar-wrapper">
    <div className="sidebar-brand">
      <h2>Logo</h2>
    </div>
    <ul className="sidebar-nav">
      
      
 
      <li className="active">
        <a href="#"  onClick={creaTion} ><i className="fa fa-home"></i>Column Creation </a>
      </li>
      <li>
        <a href="#" onClick={enTry} ><i className="fa fa-plug"></i>Table entry</a>
      </li>
      <li>
        <a href="#"><i className="fa fa-user"></i>Table View</a>
      </li>
    </ul>
  </aside>

  <div id="navbar-wrapper">
    <nav className="navbar navbar-inverse bg-warning">
      <div className="container">
        
        <div className="navbar-header">
          <a href="#" className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
        
       
  
        </div>
      </div>
    </nav>
    <section id="content-wrapper">
      <div className="row">
      <div className="col-lg-2"></div>
        <div className="col-lg-10">
          
       

        
        </div>
      </div>
  </section>
  </div>




  


    </div>
  );
}

export default App;
