from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import User, Post


class CreatePostForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    photoData = StringField('photoData', validators=[DataRequired()])
    caption = StringField('caption', validators=[DataRequired()])
    location = StringField('location', validators=[DataRequired()])
  