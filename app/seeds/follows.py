from app.models import db, Follower

# Adds a demo user, you can add other users here if you want
def seed_follows():

    follow1 = Follower(followedId=1,followerId=2)
    follow2 = Follower(followedId=1,followerId=3)
    follow3 = Follower(followedId=1,followerId=4)
    follow4 = Follower(followedId=2,followerId=1)
    follow5 = Follower(followedId=2,followerId=3)
    follow6 = Follower(followedId=4,followerId=3)
    follow7 = Follower(followedId=4,followerId=1)
    follow8 = Follower(followedId=4,followerId=5)
    follow9 = Follower(followedId=5,followerId=1)
    follow10 = Follower(followedId=5,followerId=2)
    follow11 = Follower(followedId=5,followerId=4)
   

    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.add(follow5)
    db.session.add(follow6)
    db.session.add(follow7)
    db.session.add(follow8)
    db.session.add(follow9)
    db.session.add(follow10)
    db.session.add(follow11)

    
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_follows():
    db.session.execute('TRUNCATE followers;')
    db.session.commit()