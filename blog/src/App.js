import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog'
import ShowBlogs from './components/ShowBlogs'
import Header from './components/Header'



function App() {
	return ( 
		
    <Router>
    <Header />
	<div className="ui container" style={{marginTop: '7em'}}>
	
		<Route path="/blogs" exact component={BlogList}/>
		<Route path="/new" component={CreateBlog} />
		<Route path={"/blogs/:id"} exact render={()=> <ShowBlogs/>}/>
		
	</div>
	
		</Router>


	);
}

export default App;
