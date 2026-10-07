#!/usr/bin/env python3
"""
Simple HTTP Server for AFAN Disease Prevention Web Portal
Runs on http://localhost:8080
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print(" AFAN Disease Prevention & Public Health Web Portal")
        print(f" Serving locally at: http://localhost:{PORT}")
        print(" Supporting Aid for AIDS of Nevada (AFAN Las Vegas)")
        print(" Press Ctrl+C to stop server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()

if __name__ == "__main__":
    run()
