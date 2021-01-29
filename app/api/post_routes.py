from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Post, PostLike, db
from app.forms import ImageUploadForm
import base64
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


@post_routes.route('/<int:id>/allcomments')
def post_comments(id):
    print(id)
    comments = Comment.query.filter(Comment.postId==id).all()

    return {"comments":[comment.to_dict() for comment in comments]}



@post_routes.route('/<int:id>')
# @login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()
