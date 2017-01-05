(function(){
    var app = angular.module('blogApp',[]);

    app.controller('BlogController', ['$http', function($http){

        var blog = this;
        blog.title = "AngularJS Blog App";
        
        blog.posts = [];


        blog.tab = 'blog';

        blog.selectTab = function(setTab){
            blog.tab = setTab;
            //console.log(blog.tab)
        };

        blog.isSelected = function(checkTab){
            return blog.tab === checkTab;
        };

        blog.style = function(post){

        };

        blog.post = {};
        blog.addPost = function(){
            blog.post.createdOn = Date.now();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(this.post);
            blog.tab = 0;
            blog.post ={};
            console.log(blog.posts);
        };

        blog.style = function(post){
            return{
                'font-style' : post.italic ? 'italic':'normal',
                'font-weight' : post.bold ? 'bold':'normal',
                'text-decoration' : post.underlined ? 'underline':'normal'

            }
        }

    }]);

    app.controller('CommentController', function(){
        this.comment = {};
        this.addComment = function(post){
            this.comment.createdOn = Date.now();
            post.comments.push(this.comment);
            this.comment ={};
        };
    });

})();