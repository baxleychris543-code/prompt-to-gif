#!/usr/bin/env python3
"""
Simple HTTP Server for Prompt to GIF Generator
Run this script to serve the offline.html file locally
"""

import os
import sys
import http.server
import socketserver
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent / "public"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    """Start the HTTP server"""
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("🎬 Prompt to GIF Generator - Offline Server")
        print("=" * 60)
        print()
        print(f"📁 Serving files from: {DIRECTORY}")
        print()
        print(f"🚀 Server running on: http://localhost:{PORT}")
        print()
        print("📱 Open in your browser:")
        print(f"   • http://localhost:{PORT}/offline.html")
        print(f"   • http://localhost:{PORT}/index.html")
        print()
        print("⌨️  Press Ctrl+C to stop the server")
        print()
        print("=" * 60)
        print()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✋ Server stopped. Goodbye!")
            sys.exit(0)

if __name__ == "__main__":
    main()
