from flask import Blueprint, current_app, jsonify
from core import supabase_client

api_page = Blueprint('api', __name__,url_prefix="/api")

@api_page.route('/test', methods=["GET"])
def test():
  # response = supabase_client.table("posts").select("*").execute()
  # print(response)
  return jsonify(["qwe", "asd"])
