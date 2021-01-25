from .db import db

class Hashtag(db.Model):
  __tablename__ = 'hashtags'

  id = db.Column(db.Integer, primary_key = True)
  tag = db.Column(db.String(25), nullable = False)
  
