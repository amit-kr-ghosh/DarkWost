
import json
import requests
from bs4 import BeautifulSoup
import time
import os

def clean_url(url):
    """
    Removes accidental concatenated URLs and trims spaces.
    """
    url = url.strip()
    if "https://" in url[8:]:  # another https found after index 8
        url = url.split("https://")[1]  # take the part after first
        url = "https://" + url
    return url

def fetch_product_data(url):
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/115.0.0.0 Safari/537.36"
        )
    }
    try:
        url = clean_url(url)
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print(f"❌ Error fetching {url}: {e}")
        return None

    soup = BeautifulSoup(response.text, 'html.parser')

    title = soup.select_one("#productTitle")
    price = soup.select_one(".a-price .a-offscreen")
    rating = soup.select_one(".a-icon-alt")
    image = soup.select_one("#landingImage")

    return {
        "url": url,
        "title": title.get_text(strip=True) if title else None,
        "price": price.get_text(strip=True) if price else None,
        "rating": rating.get_text(strip=True) if rating else None,
        "image": image['src'] if image else None
    }

# Product URLs
product_urls = [
    "https://amzn.in/d/dssfLss",
    "https://amzn.in/d/hamP7PX"
]

# "https://amzn.in/d/gaNhWg3",
# "https://amzn.in/d/81vUleu",
# "https://amzn.in/d/bwmmMCX",
# "https://amzn.in/d/bByDuAW",
# "https://amzn.in/d/2u7FwOU",
# "https://amzn.in/d/9SplO8i",
# "https://amzn.in/d/ibAURLl",
# "https://amzn.in/d/92AX2EX",
# "https://amzn.in/d/0xME8Gz",
#  "https://amzn.in/d/7ZH1XfZ",

#     "https://amzn.in/d/9kgRZP2",
#     "https://amzn.in/d/9vqjEXl",
#     "https://amzn.in/d/3eSR9Pk",
#     "https://amzn.in/d/6fNBTRd",
#     "https://amzn.in/d/h1lHUpF",
#     "https://amzn.in/d/h5w0ni8",
#     "https://amzn.in/d/7VgA7d6",
#     "https://amzn.in/d/9fUofxM",
#     "https://amzn.in/d/2dhdkEC",
#     "https://amzn.in/d/azdYkla",
#     "https://amzn.in/d/hdOD8RC",
#     "https://amzn.in/d/hdOD8RC",
#     "https://amzn.in/d/5kTe4Xj",
#     "https://amzn.in/d/fLArsya",
#     "https://amzn.in/d/h76MD7y",
#     "https://amzn.in/d/5qyHRQe",
#     "https://amzn.in/d/ipEH587",
#     "https://amzn.in/d/0VJ2eeM",
#     "https://amzn.in/d/fMr7OsR"

# Load existing data if file exists
if os.path.exists("products.json"):
    with open("products.json", "r", encoding="utf-8") as f:
        try:
            all_products = json.load(f)
        except json.JSONDecodeError:
            all_products = []
else:
    all_products = []

# Remove duplicates from loaded file
unique_urls = set()
deduped_products = []
for p in all_products:
    if p["url"] not in unique_urls:
        deduped_products.append(p)
        unique_urls.add(p["url"])
all_products = deduped_products

# Track already stored URLs
existing_urls = {p["url"] for p in all_products}

# Keep running until all products are fetched
while True:
    pending_urls = [u for u in product_urls if clean_url(u) not in existing_urls]

    if not pending_urls:
        print("✅ All product details fetched.")
        break

    for url in pending_urls:
        print(f"📦 Fetching: {url}")
        data = fetch_product_data(url)
        if data and data["title"]:
            all_products.append(data)
            existing_urls.add(data["url"])
            print(f"✅ Saved: {data['title']}")
        else:
            print(f"⚠️ Could not fetch {url}, will retry later.")

        # Save progress after every fetch (no duplicates)
        with open("products.json", "w", encoding="utf-8") as f:
            json.dump(all_products, f, indent=2, ensure_ascii=False)

        time.sleep(3)  # delay to avoid detection

