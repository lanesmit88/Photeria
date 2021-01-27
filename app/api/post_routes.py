from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, PostLike, Comment

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>/likes')
@login_required
def postLikes(id):
    post = PostLikes.query.filter(PostLikes.postId.equal(id)).all()
    return {"users": [user.to_dict() for user in users]}
# Get users another time


@post_routes.route('/<int:id>/allcomments')
def post_comments(id):
    print(id)
    comments = Comment.query.filter(Comment.postId==id).all()

    return {"comments":[comment.to_dict() for comment in comments]}



@post_routes.route('/<int:id>')
@login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()