from flask import Flask

app = Flask('app', static_url_path="")
app.config['SECRET_KEY'] = 'secret!'

import supabase

# https://supabase.com/docs/guides/cli/getting-started
# https://supabase.com/docs/guides/database/full-text-search
