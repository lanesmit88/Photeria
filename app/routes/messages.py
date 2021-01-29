from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Message, User

bp = Blueprint('messages', __name__)

@bp.route('/<int:id>')
def allMessagesFortheUser(id):
    # message = Message.query.get()
    # message = Message.query.()
    # recievedMessages = Message.query.filter(Message.recipientId == int(id)).order_by(Message.createdAt).all()
    # user = User.query.order_by(recievedMessages).get(int(id))
    # print(user, 'HEEEEEEEEfgsdghsdfjkgjdfEEERE')
    # recievedMessag =  User.query.order_by(User.recievedMessages).get(int(id)).recievedMessages
    # recieveToDict = [message.to_dict() for message in recievedMessag]
    # # print(recieveToDict)
    # senderUsersFound = []
    # for item in recieveToDict:
    #     test = User.query.get(item['senderId'])
    #     senderUsersFound.append(test.to_dict())
        # print(item['senderId'], 'GHDFSJGSDFGHSDFJH')

    # print('THIS IS THE LIUST', senderUsersFound)
    # senderUsers = {'users': users.to_dict() for users in senderUsersFound}
    # print('ghhfjgf', senderUsersFound)
    # recMessagesToDict = {'recMessages': message.to_dict() for message in recievedMessages}

    # sentMessages = Message.query.filter(Message.senderId == int(id)).order_by(Message.createdAt).all()

    # messages = {{'recievedMessages': [message.to_dict() for message in recievedMessages]},
    # {'sentMessages': [message.to_dict() for message in sentMessages]}}
    recievedMessages = Message.query.order_by(Message.createdAt).filter(Message.recipientId == id).all()
    sentMessages = Message.query.order_by(Message.createdAt).filter(Message.senderId == id).all()
    user = User.query.get(id)
    return jsonify({'recievedMessages': [msg.to_dict() for msg in recievedMessages], 'sentMessages': [msg.to_dict() for msg in sentMessages], 'user': user.to_dict()})
