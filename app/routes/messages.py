from flask import Blueprint, jsonify, request, json
from flask_login import login_required
from app.models import Message, User, db, Follower
from datetime import datetime

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


@bp.route('/<int:userId>/<int:senderId>/specificUser')
def getAllSpecificUserMessages(userId, senderId):
    recievedMessages = Message.query.order_by(Message.createdAt).filter(Message.recipientId == userId, Message.senderId == senderId).all()
    sentMessages = Message.query.order_by(Message.createdAt).filter(Message.senderId == userId, Message.recipientId == senderId).all()
    return jsonify({'recievedMessages': [msg.to_dict() for msg in recievedMessages], 'sentMessages': [msg.to_dict() for msg in sentMessages]})

@bp.route('/submitTheForm', methods=['POST', 'GET'])
def submitTheForm():
    formValue = json.loads(request.data)
    newMessage = Message(text=formValue['formValue'], senderId=formValue['converUserId'], recipientId=formValue['sentToId'], createdAt=datetime.now())
    db.session.add(newMessage)
    db.session.commit()
    return jsonify(newMessage.to_dict())

@bp.route('/<int:id>/message')
def getFollowersToSendMessage(id):
    following = Follower.query.filter(Follower.followerId == id).all()
    follower = Follower.query.filter(Follower.followedId == id).all()
    allFollowings = {'following': [following.to_dict() for following in following], 'follower': [follower.to_dict() for follower in follower]}

    followingName = []
    for follow in allFollowings['following']:
        followingName.append(User.query.filter(User.id == follow['followedId']).with_entities(User.username).all())
    for followed in allFollowings['follower']:
        followingName.append(User.query.filter(User.id == followed['followerId']).with_entities(User.username).all())
    convertedFollowing = []
    for each in followingName:
        convertedFollowing.append(''.join(each[0]))

    return jsonify(convertedFollowing)

@bp.route('/<int:id>/sendMessage', methods=['post'])
def sendMessageTo(id):
    data = json.loads(request.data)
    sendTo = User.query.filter(User.username == data['sendToId']).with_entities(User.id).first()
    sendToId = int(sendTo[0])
    message = Message(text=data['textvalue'], recipientId=sendToId, senderId=data['userId'], createdAt=datetime.now())
    db.session.add(message)
    db.session.commit()
    return jsonify(message.to_dict())
