# -*- coding: utf-8 -*-

"""The app module, containing the app factory function."""
from flask import Flask

from webcv import public
from webcv.extensions import db, migrate, heroku # cache,
from webcv.settings import Config


def create_app(config_object=Config):
    """Application factory.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    # cache.init_app(app)
    heroku.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    return None


def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(public.views.public)
    return None
