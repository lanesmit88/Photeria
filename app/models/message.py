from .db import db
from datetime import datetime

class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key = True)
  text = db.Column(db.String(255), nullable = False)
  senderId = db.Column(db.Integer, db.ForeignKey("users.id"))
  recipientId = db.Column(db.Integer, db.ForeignKey("users.id"))
  createdAt = db.Column(db.DateTime, default=datetime.now())
  updatedAt = db.Column(db.DateTime, default=datetime.now())