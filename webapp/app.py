# -*- coding: utf-8 -*-

"""The app module, containing the app factory function."""
from flask import Flask
from webapp import public
from webapp.settings import ProdConfig


def create_app(config_object=ProdConfig):
    """Application factory.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_blueprints(app)
    return app


def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(public.views.public)
    return None
