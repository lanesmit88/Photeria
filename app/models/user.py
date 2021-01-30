from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  profilePhoto = db.Column(db.String(255), default="https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg")
  headline = db.Column(db.String(100))
  bio = db.Column(db.String(255))
  firstName = db.Column(db.String(80), nullable = False)
  lastName = db.Column(db.String(80), nullable = False)
  createdAt = db.Column(db.DateTime, default=datetime.now())
  updatedAt = db.Column(db.DateTime, default=datetime.now())
  # messages = db.relationship("Message")
  # messages = db.relationship("Message", back_populates="userId")
  posts = db.relationship("Post")

  # posts = db.relationship("Post", back_populates="userId")


# followers and message need relation postlike commentlike comment



  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "profilePhoto": self.profilePhoto,
      "headline": self.headline,
      "bio": self.bio,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "createdAt": self.createdAt,
      "updatedAt": self.updatedAt,
      "posts": [ post.to_dict() for post in self.posts ],
    }

class Follower(db.Model):
  __tablename__ = 'followers'

  id = db.Column(db.Integer, primary_key = True)
  followedId = db.Column(db.Integer, db.ForeignKey("users.id"))
  followerId = db.Column(db.Integer, db.ForeignKey("users.id"))
  createdAt = db.Column(db.DateTime, default=datetime.now())
  updatedAt = db.Column(db.DateTime, default=datetime.now())

  def to_dict(self):
    return {
      "id": self.id,
      "followedId": self.followedId,
      "followerId": self.followerId,
      "createdAt": self.createdAt,
      "updatedAt": self.updatedAt
      
    }
