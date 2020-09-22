import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogEdit from './components/BlogEdit'
import CreateBlog from './components/CreateBlog'
import Header from './components/Header'



function App() {
	return ( 
		
    <Router>
    <Header />
    <div className="ui container" style={{marginTop: '7em'}}>
		<Route path="/blogs" exact component={BlogList} />
		<Route path="/blogs/new" component={CreateBlog} />
		<Route path="blogs/edit/:id" component={BlogEdit} />
		
    </div>
		</Router>


	);
}

export default App;
