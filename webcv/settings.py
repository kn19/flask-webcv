# -*- coding: utf-8 -*-
"""Application configuration."""
import os


class Config(object):
    """Base configuration."""

    SECRET_KEY = os.environ.get('FLASKAPP_SECRET')
    APP_DIR = os.path.abspath(os.path.dirname(__file__))
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))
    ASSETS_DEBUG = False
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    CACHE_TYPE = 'simple'

    # SQLAlchemy settings
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')

    # SMTP Settings for sending mails
    SMTP_SERVER = os.environ.get('MAILGUN_SMTP_SERVER')
    SMTP_PORT = os.environ.get('MAILGUN_SMTP_PORT')
    SMTP_LOGIN = os.environ.get('MAILGUN_SMTP_LOGIN')
    SMTP_PASSWORD = os.environ.get('MAILGUN_SMTP_PASSWORD')
    SMTP_TARGET = os.environ.get('SMTP_TARGET')
