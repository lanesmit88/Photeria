from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, PostLike

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>/likes')
@login_required
def postLikes(id):
    post = PostLikes.query.filter(PostLikes.postId.equal(id)).all()
    return post.to_dict()
# Get users another time

@post_routes.route('/<int:id>')
# @login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()