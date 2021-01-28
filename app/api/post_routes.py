from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, PostLike

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>/likes')
# @login_required
def postLikes(id):
    posts = PostLike.query.filter(PostLike.postId == id).all()
    allPosts = []
    for post in posts:
        allPosts.append(post.to_dict())
    return jsonify(*allPosts)
# Get users another time

@post_routes.route('/<int:id>')
# @login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()
