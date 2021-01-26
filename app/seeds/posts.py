from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():

    post1 = Post(photoData='https://images.pexels.com/photos/6075007/pexels-photo-6075007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', location='The moon',
                caption='My life is crazy!!', userId='1', 
    )
    post2 = Post(photoData='https://images.pexels.com/photos/3814319/pexels-photo-3814319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', location='The U S of A',
                caption='Go USA GO!!', userId='2', 
    )
    post3 = Post(photoData='https://images.pexels.com/photos/4394274/pexels-photo-4394274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', location='The center of the Earth',
                caption='How did I get down here?', userId='2', 
    )
    post6 = Post(photoData='https://images.pexels.com/photos/4394274/pexels-photo-4394274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', location='Narnia',
                caption='Whats in this door?', userId='2', 
    )
    post4 = Post(photoData='https://images.pexels.com/photos/5808477/pexels-photo-5808477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', location='Up in the sky',
                caption='I guess I can fly', userId='3', 
    )
    post5 = Post(photoData='https://images.pexels.com/photos/4530525/pexels-photo-4530525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', location='Drivin down the road',
                caption='Im almost out of gas!', userId='4', 
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()