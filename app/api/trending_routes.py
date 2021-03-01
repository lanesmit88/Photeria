from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Post, Follower, PostLike

trending_routes = Blueprint('trending', __name__)


@trending_routes.route('/')
# @login_required
def trending():
    posts = Post.query.all()
    posts_dict = []
    for post in posts:
        posts_dict.append(post.to_dict())
    # return jsonify(posts_dict)
    def sortFunc(e):
        return (len(e['likes']))
    posts_dict.sort(reverse=True, key=sortFunc)
    return jsonify(posts_dict)
 