from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', firstName='John', lastName='Smith')
    mike = User(username='mike1', email='mike@mike.oom',
                password=generate_password_hash('password'), firstName='Mike',
                lastName='Not Smith',
                profilePhoto='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
    lane = User(username='lane', email='lane@lane.com',
                password=generate_password_hash('password'), firstName='Lane',
                lastName='Smit', profilePhoto='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
    giiaga = User(username='giiaga', email='giiaga@giiaga.com',
                password=generate_password_hash('password'), firstName='Giiaga',
                lastName='Also not Smith',
                profilePhoto='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?')
    ty = User(username='ty', email='ty@ty.com',
                password=generate_password_hash('password'), firstName='Ty',
                lastName='Again not Smith', profilePhoto='https://images.pexels.com/photos/1484792/pexels-photo-1484792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')


    db.session.add(demo)
    db.session.add(mike)
    db.session.add(lane)
    db.session.add(giiaga)
    db.session.add(ty)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
