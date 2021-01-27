from .db import db

hashtagPostJoin = db.Table(
  "hashtagPostJoins",
  db.Model.metadata,
  db.Column("postId", db.Integer, db.ForeignKey("posts.id"), primary_key = True),
  db.Column("hashtagId", db.Integer, db.ForeignKey("hashtags.id"), primary_key = True)
)

class Post(db.Model):
  __tablename__ = 'posts'

  id = db.Column(db.Integer, primary_key = True)
  photoData = db.Column(db.String(255), nullable = False)
  location  = db.Column(db.String(255))
  caption = db.Column(db.String(255), nullable = False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'))
  hashtags = db.relationship("Hashtag", secondary=hashtagPostJoin, back_populates="posts")
  
  likes = db.relationship("PostLike")
  comments = db.relationship('Comment')
  
  def to_dict(self):
    return {
      "id": self.id,
      "photoData": self.photoData,
      "location": self.location,
      "caption": self.caption,
      "userId": self.userId,
      # "likes": self.likes,
     
    }
  

class Hashtag(db.Model):
  __tablename__ = 'hashtags'

  id = db.Column(db.Integer, primary_key = True)
  tag = db.Column(db.String(25), nullable = False)
  
  posts = db.relationship("Post", secondary=hashtagPostJoin, back_populates="hashtags")

class PostLike(db.Model):
  __tablename__ = 'postLikes'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"))
  postId = db.Column(db.Integer, db.ForeignKey("posts.id"))
  
  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "postId": self.postId
    }

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  text = db.Column(db.String(255), nullable = False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"))
  postId = db.Column(db.Integer, db.ForeignKey("posts.id"))
  
  # def to_dict(self):
  #   return {
  #     "id": self.id,
  #     "text": self.text,
  #     "userId": self.userId,
  #     "postId": self.postId
  #   }

class CommentLike(db.Model):
  __tablename__ = 'commentLikes'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"))
  commentId = db.Column(db.Integer, db.ForeignKey("comments.id"))