from flask import Flask

app = Flask('app', static_url_path="")
app.config['SECRET_KEY'] = 'secret!'
