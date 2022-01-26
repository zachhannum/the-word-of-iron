from bs4 import BeautifulSoup as bs

# Add meta to nav
toc_path = "./build/toc.html"
n = open(toc_path)
nav = bs(n, 'html.parser')
head = nav.find("head")
meta = bs('<meta name="viewport" content="width=device-width, initial-scale=1">', 'html.parser').meta
head.append(meta)
with open(toc_path, "wb") as out:
    out.write(nav.prettify('utf-8'))
