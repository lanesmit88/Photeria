from app.models import db, Comment

# Adds a demo user, you can add other users here if you want
def seed_comments():

    postComment1 = Comment(text='This is a sweet comment',userId=1,postId=5)
    postComment2 = Comment(text='Cool man!',userId=1,postId=2)
    postComment3 = Comment(text='Sweetness!',userId=2,postId=3)
    postComment4 = Comment(text='This is amazing',userId=3,postId=1)
    postComment5 = Comment(text='WTF????',userId=4,postId=2)
    postComment6 = Comment(text='I dunno',userId=5,postId=2)
   
    db.session.add(postComment1)
    db.session.add(postComment2)
    db.session.add(postComment3)
    db.session.add(postComment4)
    db.session.add(postComment5)
    db.session.add(postComment6)
    

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()