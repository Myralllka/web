const nj= require('nunjucks');
const express = require('express');

const fn = function (req, res) {
  res.send(nj.render("page.njk", 
	{username:"myralllka",
	method:req.method,
	query:JSON.stringify(req.query, null, 2),
	body:req.body}))
}
const app = express();
app.get('/', fn);
app.post('/', fn);
 
app.listen(3000)
