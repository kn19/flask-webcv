# -*- coding: utf-8 -*-
"""Create an application instance."""

from webcv.app import create_app
from webcv.settings import Config

app = create_app(Config)
# app.jinja_env.cache = {}
app.jinja_env.add_extension('jinja2.ext.do')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)