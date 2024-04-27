from flask import Blueprint, current_app, jsonify
from core import supabase_client

api_page = Blueprint('api', __name__,url_prefix="/api")

@api_page.route('/get_all_concepts', methods=["GET"])
def get_all_concepts():
  response = supabase_client.table("concept").select("*").execute()
  return jsonify(response.data)
  
@api_page.route('/fts/<phrase>', methods=["GET"])
def fts(phrase : str):
  import base64
  phrase = base64.b64decode(phrase).decode('utf-8').replace(r"'",r"\'")
  response = (
    supabase_client
      .from_("concept")
      .select("*")
      .text_search("name", f"'{phrase}'")
      .execute()
  )
  # policy
  print(response)
  return jsonify(response.data)
