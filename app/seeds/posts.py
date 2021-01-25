from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():

    mike = User(username='mike1', email='mike@mike.oom',
                hashedPassword='mikespwd', firstName='Mike', 
                lastName='Not Smith',
                profilePhoto='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')


    db.session.add(demo)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE users;')
    db.session.commit()