const express = require('express'),
      router   = require('express').Router()
	  Blog     = require('../models/blogs')
	

router.get("/", async(req, res) => {
	try{
	const allBlogs = await Blog.find({})
	res.json(allBlogs) 
     } 
      catch(err) { res.status(400).json('Error: ' + err.message)}						

  })

 // ROUTE INDE", 
 router.get ('/new', async(req, res)=>{ 
	try{
	const title = await req.body.title
	const image= await req.body.image
	const body =  await req.body.body

	const newBlog = await new Blog({
		title,
		image,
		body
	})
	
		newBlog.save()
        res.json('Success')

	}
	catch(err) { res.status(400).json('Error: ' + err.message)}	
})
		   
//Create Route!
router.post("/:id", async(req, res)=>{ 
    try{
     const newBlog = await Blog.create(req.body.blog)
     
    }catch(err) { res.status(400).json('Error: ' + err.message)}			
})

//EDIT ROUT!
router.get("/:id", async(req, res)=> {
	try{
		const foundBlog = awaitBlog.findById(req.params.id)
		res.json(foundBlog)
	}
	catch(err) { res.status(400).json('Error: ' + err.message)}
	})

// EDIT ROUTE
	router.get("/edit/:id", async(req, res)=>{	
		try{
			const title = await req.body.title
			const image= await req.body.image
			const body =  await req.body.body
		
			const newBlog = await new Blog({
				title,
				image,
				body
			})
			
				newBlog.save()
				res.json('Success')
		
			}
			catch(err) { res.status(400).json('Error: ' + err.message)}	
		

	})

	//UPDATE ROUTE
router.put("/:id", async(req, res)=>{

	try{
		req.body.blog.body = req.sanitize(req.body.blog.body)
		const blog= await	Blog.findByIdAndUpdate(req.params.id, req.body.blog.body)
		res.json(foundBlog)
	}
	catch(err) { res.status(400).json('Error: ' + err.message)}	
})
// DELETE THE ROUTE
router.delete("/:id", async (req, res)=>{
	try{
		const blog = await Blog.findById(req.params.id) 
		blog.remove()
		res.json('Succesfully delete!')
	}
	catch(err) { res.status(400).json('Error: ' + err.message)}	

 
	
})

module.exports = router