# -*- coding: utf-8 -*-
import json
from flask import Blueprint, redirect, render_template, request, jsonify

public = Blueprint('public', __name__, template_folder='app', static_folder='app')

@public.route('/')
def main():
    return render_template('index.html')