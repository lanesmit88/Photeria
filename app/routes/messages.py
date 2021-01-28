from flask import Blueprint
from flask_login import login_required
from app.models import Message, User

bp = Blueprint('messages', __name__)

@bp.route('/<int>:id')
def allMessagesFortheUser(id):
    recievedMessages = Message.query.join(User).filter(Message.recipientId == id).order_by(Message.createdAt).all()
    sentMessages = Message.query.join(User).filter(Message.senderId == id).order_by(Message.createdAt).all()
    messages = {{'sentMessages': [message.to_dict() for message in sentMessages]}, {'recievedMessages': [message.to_dict() for message in recievedMessages]}}
    return messages
