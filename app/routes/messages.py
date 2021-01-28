from flask import Blueprint
from flask_login import login_required
from app.models import Message, User

bp = Blueprint('messages', __name__)

@bp.route('/dm/:id<int>')
def allMessagesFortheUser():
    messages = Message.query.order_by(Message.createdAt).all()
    return {'messages': [message.to_dict() for message in messages]}
