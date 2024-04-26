from api import api_page
from core import app
from routes import main_page

app.register_blueprint(main_page)
app.register_blueprint(api_page)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)
