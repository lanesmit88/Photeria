from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from app.models import User, Post


class CommentForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
    userId = StringField('userId', validators=[DataRequired()])
    postId = StringField('postId', validators=[DataRequired()])
  