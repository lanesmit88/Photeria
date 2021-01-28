from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Message, User

bp = Blueprint('messages', __name__)

@bp.route('/<int:id>')
def allMessagesFortheUser(id):
    # message = Message.query.get()
    # message = Message.query.()
    user = User.query.get(int(id))
    print(user)
    recievedMessages = Message.query.filter(Message.recipientId == int(id)).order_by(Message.createdAt).all()
    sentMessages = Message.query.filter(Message.senderId == int(id)).order_by(Message.createdAt).all()

    messages = {{'recievedMessages': [message.to_dict() for message in recievedMessages]},
    {'sentMessages': [message.to_dict() for message in sentMessages]}}

    return jsonify([message.to_dict() for message in messages])
