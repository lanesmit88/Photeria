from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Post, Follower

feed_routes = Blueprint('feed', __name__)


@feed_routes.route('/')
@login_required
def feed():
    followed = Follower.query.filter(Follower.followerId == current_user.id).all()
    
    followed_dict = []
    for follow in followed:
        followed_dict.append(follow.to_dict())
    followed_posts = []
    for user in followed_dict:
        
        followed_posts.append(Post.query.filter(Post.userId == user["followedId"]).all())
    
    


    new_followed_posts = [item for sublist in followed_posts for item in sublist]
    # print("----------------------", new_followed_posts)
    # return { "success": True }
    posts_dict = []
    for post in new_followed_posts:
        posts_dict.append(post.to_dict())
    return jsonify(posts_dict)
