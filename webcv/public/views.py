# -*- coding: utf-8 -*-

import smtplib

from email.mime.text import MIMEText
from flask import (
    Blueprint, render_template, request, jsonify, Response, current_app, abort)

from webcv.public.model import Service

public = Blueprint('public', __name__, template_folder='app', static_folder='app')


@public.route('/')
def main():
    return render_template('index.html')

@public.route('/cv')
def get_info():
    return jsonify(Service.get_full_cv())

@public.route('/get_image')
def get_image():
    image_name = request.args.get('image_name')
    app_image = Service.get_image_by_name(image_name)
    return Response(app_image.image, mimetype=app_image.image_type)

@public.route('/get_projects')
def get_projects():
    return render_template('templates/pages/ProjectsPageView.html',
                           projects=Service.get_projects())

@public.route('/send_message', methods=["POST"])
def send_message():
    return send_email(**(request.json))

def send_email(name, message, subject, email):
    try:
        cfg = current_app.config
        msg = MIMEText(message)
        msg['Subject'] = 'Message from {0} - {1}'.format(name, subject)
        msg['From'] = email
        msg['To'] = cfg.get('SMTP_TARGET')
        with smtplib.SMTP(cfg.get('SMTP_SERVER'), cfg.get('SMTP_PORT')) as smtp:
            smtp.login(cfg.get('SMTP_LOGIN'), cfg.get('SMTP_PASSWORD'))
            smtp.sendmail(msg['From'], [msg['To']], msg.as_string())
            smtp.quit()
        return jsonify('Mail sent!')
    except:
        return abort(400)