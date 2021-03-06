from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User,Post, PostLike,Follower
from flask_login import current_user, login_user, logout_user, login_required
# from app.models.post import PostLike,Comment

user_routes = Blueprint('users', __name__)



@user_routes.route('/profile/<int:id>')
def user_profile(id):
    print(id)
    user = User.query.get(id)
    # print(user.posts)

    postsquery = Post.query.filter(Post.userId==id).all()

    posts = [post.to_dict() for post in postsquery]

    followers = Follower.query.filter(Follower.followedId==id).all()
    following = Follower.query.filter(Follower.followerId==id).all()


    # likes = PostLike.query.filter(Postlike.postId==id).all()

    return {"user":user.to_dict(),"posts":posts, "numFollowers":len(followers),"numFollowing":len(following)}

@user_routes.route('/search/<string:tag>')
def search_users(tag):
    print(tag)
    search = "%{}%".format(tag)
    results = User.query.filter(User.username.like(search)).all()
    print([result.to_dict() for result in results])

    return {"results": [result.to_dict() for result in results]}

#     return {"results":results.to_dict()}


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

@user_routes.route('/getid')
@login_required
def user_id():

    return {"user": current_user.id}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
