from .db import db
from datetime import datetime

class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key = True)
  text = db.Column(db.Text, nullable = False)
  senderId = db.Column(db.Integer, db.ForeignKey("users.id"))
  recipientId = db.Column(db.Integer, db.ForeignKey("users.id"))
  createdAt = db.Column(db.DateTime, default=datetime.now())
  updatedAt = db.Column(db.DateTime, default=datetime.now())
  # user = db.relationship('User')

  def to_dict(self):
    return {
      'id': self.id,
      'text': self.text,
      'senderId': self.senderId,
      'recipientId': self.recipientId,
      'createdAt': self.createdAt,
      'updatedAt': self.updatedAt
    }
