# -*- coding: utf-8 -*-
"""Create an application instance."""
# from flask.helpers import get_debug_flag

# from webcv.app import create_app
# from webcv.settings import DevConfig, ProdConfig


# app = create_app(CONFIG)


from flask.helpers import get_debug_flag

from webcv.app import create_app
from webcv.settings import DevConfig, ProdConfig

CONFIG = DevConfig if get_debug_flag() else ProdConfig

app = create_app(CONFIG)
# app.jinja_env.cache = {}
app.jinja_env.add_extension('jinja2.ext.do')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)