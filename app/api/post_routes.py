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


@post_routes.route('/testgetimage')
# @login_required
def get_64_image():
    postsquery = Post.query.filter(Post.id==14).all()
    return {"image":[post.to_dict() for post in postsquery]}
    

@post_routes.route('/uploadimage',methods=['POST'])
# @login_required
def upload_image():
    form = ImageUploadForm()
    data = request.get_json(force = True)
   
    form['csrf_token'].data = request.cookies['csrf_token']
    form['photoData'].data = data['base']
    form['location'].data = 'Test'
    form['caption'].data = 'Test'
    form['userId'].data = 1
   
    
    if form.validate_on_submit():
        newPost = Post()
        form.populate_obj(newPost)
        db.session.add(newPost)
        db.session.commit()
        
        return 'Post created'
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
   


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
