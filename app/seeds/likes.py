from app.models import db, PostLike, CommentLike

# Adds a demo user, you can add other users here if you want
def seed_likes():

    postLike1 = PostLike(userId=1,postId=2)
    postLike2 = PostLike(userId=2,postId=3)
    postLike3 = PostLike(userId=2,postId=4)
    postLike4 = PostLike(userId=1,postId=5)
    postLike5 = PostLike(userId=5,postId=6)
    postLike6 = PostLike(userId=3,postId=2)
    postLike7 = PostLike(userId=4,postId=3)
    postLike8 = PostLike(userId=1,postId=4)
    postLike9 = PostLike(userId=2,postId=5)
    postLike10 = PostLike(userId=3,postId=6)
    
    commentLike1 = CommentLike(userId=2,commentId=1)
    commentLike2 = CommentLike(userId=3,commentId=1)
    commentLike3 = CommentLike(userId=4,commentId=1)
    commentLike4 = CommentLike(userId=1,commentId=2)
    commentLike5 = CommentLike(userId=2,commentId=3)
    commentLike6 = CommentLike(userId=3,commentId=4)
    commentLike7 = CommentLike(userId=4,commentId=2)
    commentLike8 = CommentLike(userId=5,commentId=6)


    db.session.add(postLike1)
    db.session.add(postLike2)
    db.session.add(postLike3)
    db.session.add(postLike4)
    db.session.add(postLike5)
    db.session.add(postLike6)
    db.session.add(postLike7)
    db.session.add(postLike8)
    db.session.add(postLike9)
    db.session.add(postLike10)
    
    db.session.add(commentLike1)
    db.session.add(commentLike2)
    db.session.add(commentLike3)
    db.session.add(commentLike4)
    db.session.add(commentLike5)
    db.session.add(commentLike6)
    db.session.add(commentLike7)
    db.session.add(commentLike8)
   

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_likes():
    db.session.execute('TRUNCATE postLikes;')
    db.session.execute('TRUNCATE commentLikes;')
    db.session.commit()