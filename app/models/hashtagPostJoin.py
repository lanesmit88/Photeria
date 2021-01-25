from .db import db

class HashtagPostJoin(db.Model):
  __tablename__ = 'hashtagPostJoins'

  id = db.Column(db.Integer, primary_key = True)
  postId = db.Column(db.Integer, db.Foreignkey())
  hashtagId = db.Column(db.Integer, db.Foreignkey())
