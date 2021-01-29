from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Post, Follower

feed_routes = Blueprint('feed', __name__)


@feed_routes.route('/')
# @login_required
def feed():
    followed = Follower.query.filter(Follower.followerId == current_user.id).all()
    followed_dict = []
    for follow in followed:
        followed_dict.append(follow.to_dict())

    for user in followed_dict:
        followed_posts = Post.query.filter(Post.userId == user.userId)
        print(followed_posts)
    return followed_posts.to_dict()

