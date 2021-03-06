from flask import Blueprint, jsonify, session, request, json
from app.models import User,Post, Comment, Follower, db
from app.forms import CommentForm
from flask_login import current_user, login_user, logout_user, login_required

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/new', methods=['POST'])
@login_required
def add_follow():

    currentUser = current_user.id
    requestData = json.loads(request.data)
    # userToFollow = requestData["userToFollow"]
    postId = requestData["userToFollow"]
    postQuery = Post.query.filter(Post.id==postId).first()
    postOwner = postQuery.userId

    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==postOwner).first()
    print(existingFollow)
    if existingFollow is None:
        newFollow = Follower(followedId=postOwner, followerId=current_user.id)
        db.session.add(newFollow)
        db.session.commit()
    return {"status":True}

@follow_routes.route('/followuser', methods=['POST'])
@login_required
def follow_user():
    requestData = json.loads(request.data)
    currentUser = current_user.id
    userId = requestData["userToFollow"]
  
    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==userId).first()
    print(existingFollow)
    if existingFollow is None:
        newFollow = Follower(followedId=userId, followerId=current_user.id)
        db.session.add(newFollow)
        db.session.commit()
    return {"status":True}

@follow_routes.route('/unfollowuser', methods=['POST'])
@login_required
def user_un_follow():
    print('callederific')
    requestData = json.loads(request.data)
    currentUser = current_user.id
    userId = requestData["userToFollow"]

    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==userId).first()

    db.session.delete(existingFollow)
    db.session.commit()
    return {"status":False}

@follow_routes.route('/unfollow', methods=['POST'])
@login_required
def un_follow():

    currentUser = current_user.id
    requestData = json.loads(request.data)
    postId = requestData["userToFollow"]
    postQuery = Post.query.filter(Post.id==postId).first()
    postOwner = postQuery.userId

    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==postOwner).first()

    # print(existingFollow is not None)
    # if existingFollow is not None:
        # existingFollow.delete()
    db.session.delete(existingFollow)
    db.session.commit()
    return {"status":False}

@follow_routes.route('/followstatus/<int:postId>')
@login_required
def user_follow_status(postId):

    currentUser = current_user.id
    currentPost = Post.query.filter(Post.id == postId).first()
    postInfo = currentPost.to_dict()
    postOwner = postInfo["userId"]
  
    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==postOwner).first()
    if existingFollow is not None:
       return {"status":True}
    return {"status":False}

@follow_routes.route('/followstatus/profile/<int:userId>')
@login_required
def follow_status(userId):
   
    currentUser = current_user.id
    postOwner = userId
  
    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==postOwner).first()
    if existingFollow is not None:
       return {"status":True}
    return {"status":False}
