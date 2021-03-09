from flask import Blueprint, jsonify, session, request
from app.models import User,Post, Comment, db
from app.forms import CommentForm
from flask_login import current_user, login_user, logout_user, login_required

comment_routes = Blueprint('comment', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@comment_routes.route('<int:id>')
# @login_required
def get_comments(id):
    comments = Comment.query.filter(Comment.postId == id).all()
    comments_dict = []
    for comment in comments:
        comments_dict.append(comment.to_dict())
    return jsonify(comments_dict)

@comment_routes.route('/new/<int:postId>', methods=['POST'])
@login_required
def new_comment(postId):
    form = CommentForm()
    data = request.get_json(force = True)
    
    form['csrf_token'].data = request.cookies['csrf_token']
    # form['userId'].data = '1'
    form['text'].data = data['data']
    form['userId'].data = current_user.id
    form['postId'].data = postId
    
    if form.validate_on_submit():
        newComment = Comment()
        form.populate_obj(newComment)
        db.session.add(newComment)
        db.session.commit()
        return {"postId": postId, "text":data['data'], "userId": current_user.id}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



