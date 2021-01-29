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

  sender = db.relationship('User', foreign_keys='Message.senderId', back_populates='sentMessages')
  recipient = db.relationship('User', foreign_keys='Message.recipientId', back_populates='recievedMessages')

  def to_dict(self):
    return {
      'id': self.id,
      'text': self.text,
      'senderId': self.senderId,
      'recipientId': self.recipientId,
      'createdAt': self.createdAt,
      'updatedAt': self.updatedAt,
      'senderUsername': self.sender.username,
      'senderPP': self.sender.profilePhoto,
      'recieverUsername': self.recipient.username,
      'recieverPP': self.recipient.profilePhoto
    }
