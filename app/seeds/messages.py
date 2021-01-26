from app.models import db, Message

# Adds a demo user, you can add other users here if you want
def seed_messages():

    message1 = Message(text='Yo dude!!',senderId=1,recipientId=2)
    message2 = Message(text='Cool Pix',senderId=3,recipientId=2)
    message3 = Message(text='I like your page',senderId=2,recipientId=5)
    message4 = Message(text='You play minecraft?',senderId=3,recipientId=5)
    message5 = Message(text='Do you play the trombone?',senderId=3,recipientId=4)
    message6 = Message(text='Where you at???',senderId=4,recipientId=3)
    message7 = Message(text='Do you have bail money?',senderId=4,recipientId=2)
  
    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)
    db.session.add(message7)
   
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_messages():
    db.session.execute('TRUNCATE messages;')
    db.session.commit()