from flask import Blueprint, jsonify, session, request
from app.models import User,Post, Comment, Follower, db
from app.forms import CommentForm
from flask_login import current_user, login_user, logout_user, login_required

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/new', methods=['POST'])
@login_required
def add_follow():

    currentUser = current_user.id
    requestData = request.get_json(force=True)
    userToFollow = requestData["userToFollow"]
    
    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==userToFollow).first()
    print(existingFollow is not None)
    if existingFollow is None:     
        newFollow = Follower(followedId=userToFollow, followerId=current_user.id)
        db.session.add(newFollow)
        db.session.commit()
    return 'User Followed'

@follow_routes.route('/unfollow', methods=['POST'])
@login_required
def un_follow():

    currentUser = current_user.id
    requestData = request.get_json(force=True)
    userToFollow = requestData["userToFollow"]
    
    existingFollow = Follower.query.filter(Follower.followerId==current_user.id, Follower.followedId==userToFollow).first()
    print(existingFollow is not None)
    if existingFollow is not None:     
        # existingFollow.delete()
        db.session.delete(existingFollow)
        db.session.commit()
    return 'User Followed'