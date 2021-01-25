from .db import db

class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key = True)
  text = db.Coulumn(db.String(255), nullable = False)
  senderId = db.Column(db.Integer, db.ForeignKey(users.id))
  recipientId = db.Column(db.Integer, db.ForeignKey(users.id))
