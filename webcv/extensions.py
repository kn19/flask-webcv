# -*- coding: utf-8 -*-
"""Extensions modules"""
# from flask_caching import Cache
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_heroku import Heroku

db = SQLAlchemy()
migrate = Migrate()
# cache = Cache()
heroku = Heroku()