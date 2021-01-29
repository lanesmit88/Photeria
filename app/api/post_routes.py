from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Post, PostLike, Comment

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>/likes')
# @login_required
def postLikes(id):
    posts = PostLike.query.filter(PostLike.postId == id).all()
    allPosts = []
    for post in posts:
        allPosts.append(post.to_dict())
    return jsonify(allPosts)

# Get users another time


@post_routes.route('/<int:id>/allcomments')
def post_comments(id):
    print(id)
    comments = Comment.query.filter(Comment.postId==id).all()
    return {"comments":[comment.to_dict() for comment in comments]}


@post_routes.route('/<int:id>/like', methods=["POST"])
@login_required
def likePost(id):
    post = Post.query.filter(Post.id == id).one()
    newLike = PostLike(userId=current_user.id, postId=id)
    db.session.add(newLike)
    db.session.commit()
    return { "success": True }


@post_routes.route('/<int:id>')
# @login_required
def post(id):
    post = Post.query.get(id)
    return post.to_dict()
