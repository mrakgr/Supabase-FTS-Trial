from flask import Blueprint, current_app
from core import supabase_client

api_page = Blueprint('api', __name__,url_prefix="/api")

@api_page.route('/test')
def test():
  response = supabase_client.table("posts").select("*").execute()
  print(response)
  return ["Ok"]
