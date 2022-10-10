import React from "react";

//Aquí importamos los Componentes de REACT
import Header from './Header.jsx';
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx"
import Footer from "./Footer.jsx"


//Aquí se incorporarn todos los componentes en el MAIN Component Home
const Home = () => (
	<div className="container-fluid px 0">
		<Header/>
		<Jumbotron/>
		<div className= "container card-group">
		<div className="row d-flex justify-content-between">
			<div className= "col-3">
			<Cards/>
			</div>
			<div className= "col-3">
			<Cards/>
			</div>
			<div className= "col-3">
			<Cards/>
			</div>
			<div className= "col-3">
			<Cards/>
			</div>
			
		</div>
		</div>
		<Footer/>
		
	</div>
);

export default Home;