from app.models import db, Post, hashtagPostJoin, Hashtag

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

    hashtag1 = Hashtag(tag="Noice")
    hashtag2 = Hashtag(tag="Greek")
    hashtag3 = Hashtag(tag="Zeus")
    hashtag4 = Hashtag(tag="Pandora")
    hashtag5 = Hashtag(tag="Mythical")
    hashtag6 = Hashtag(tag="Olympus")
    hashtag7 = Hashtag(tag="Roman")
    hashtag8 = Hashtag(tag="Spartan")
    hashtag9 = Hashtag(tag="300")
    hashtag10 = Hashtag(tag="Aries")
    hashtag11 = Hashtag(tag="Neptune")

    db.session.add(hashtag1)
    db.session.add(hashtag2)
    db.session.add(hashtag3)
    db.session.add(hashtag4)
    db.session.add(hashtag5)
    db.session.add(hashtag6)
    db.session.add(hashtag7)
    db.session.add(hashtag8)
    db.session.add(hashtag9)
    db.session.add(hashtag10)
    db.session.add(hashtag11)
    post1.hashtags.append(hashtag3)
    post1.hashtags.append(hashtag7)
    post2.hashtags.append(hashtag1)
    post2.hashtags.append(hashtag3)
    post2.hashtags.append(hashtag8)
    post2.hashtags.append(hashtag10)
    post3.hashtags.append(hashtag2)
    post4.hashtags.append(hashtag6)
    post4.hashtags.append(hashtag9)
    post5.hashtags.append(hashtag11)
    post5.hashtags.append(hashtag4)
    

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()