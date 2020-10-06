import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogEdit from './components/BlogEdit'
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
		<Route path="/blogs/:id" exact component={ShowBlogs}/>
		<Route path="/blogs/:id/edit" exact component={BlogEdit}/>
		<Route path="/blogs/:id/delete" exact component={BlogEdit}/>
		
	</div>
	
		</Router>


	);
}

export default App;
