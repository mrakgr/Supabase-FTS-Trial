from routes import main_page
from core import app

app.register_blueprint(main_page)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)
