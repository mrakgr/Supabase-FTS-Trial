from flask import Flask
import os
from supabase import create_client, Client

app = Flask('app', static_url_path="")
app.config['SECRET_KEY'] = 'secret!'

# https://supabase.com/docs/guides/database/full-text-search

def make_client() -> Client:
  url: str = os.environ["SUPABASE_URL"]
  key: str = os.environ["SUPABASE_KEY"]
  return create_client(url, key)

supabase_client: Client = make_client()