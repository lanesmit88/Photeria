from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
# from app.models.post import PostLike,Comment

user_routes = Blueprint('users', __name__)



@user_routes.route('/profile/<int:id>')
def user_profile(id):
    print(id)
    user = User.query.get(id)
    print(user.posts)
    posts = [post.to_dict() for post in user.posts]
    # userToReturn = 
    print(posts)
    # likes = PostLike.query.filter(Postlike.postId==id).all()
    return {"user":user.to_dict(),"posts":posts}
    # return {"user": [user.to_dict() for user in users],"posts": [post.to_dict() for post in users[0].posts]}
    # return jsonify({"name":"a name"})

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

