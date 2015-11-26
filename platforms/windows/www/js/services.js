//angular.module('starter.services', [])

app.service('myPosts', ['$http', function($http){
    return $http.get('http://brandage.com.ng/wp-json/posts?filter[post_status]=publish&filter[posts_per_page]=25&filter[orderby]=date&filter[order]=desc')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
    
    
}])