from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .comments import seed_comments, undo_comments
from .follows import seed_follows, undo_follows
from .messages import seed_messages, undo_messages
from .postLikes import seed_postLikes, undo_postLikes
from .commentLikes import seed_commentLikes, undo_commentLikes
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    seed_comments()
    seed_follows()
    seed_messages()
    seed_commentLikes()
    seed_postLikes()


    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_commentLikes()
    # undo_comments()
    # undo_posts()
    # undo_messages()
    # undo_follows()
    undo_users()
    # undo_postLikes()
    # Add other undo functions here
