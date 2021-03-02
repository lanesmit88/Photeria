from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField
from wtforms.validators import DataRequired
from app.models import User, Post


class CreatePostForm(FlaskForm):
    photoData = TextField('photoData', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    caption = StringField('caption', validators=[DataRequired()])
    location = StringField('location', validators=[DataRequired()])
  