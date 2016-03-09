/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	hi: function (req,res){
		return res.view('portal/hi',{
			user:{'name':'lyd'},
			corndogs:{'name':'lyds'}
		});
	},
    bye: function (req, res) {
   		return res.redirect("http://www.sayonara.com");
  }
	
};

