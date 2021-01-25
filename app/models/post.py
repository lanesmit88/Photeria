from .db import db

class Post(db.Model):
  __tablename__ = 'posts'

  id = db.Column(db.Integer, primary_key = True)
  photoData = db.Column(db.String(255), nullable = False)
  location  = db.Column(db.String(255))
  caption = db.Column(db.String(255), nullable = False)

  userId = db.Column(db.Integer, db.ForeignKey('users.id'))
  