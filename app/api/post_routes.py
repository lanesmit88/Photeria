from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, PostLike

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>/likes')
@login_required
def postLikes(id):
    post = PostLikes.query.filer(PostLikes.postId.equal(id)).all()
    return {"users": [user.to_dict() for user in users]}
# Get users another time

@post_routes.route('/<int:id>')
@login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()