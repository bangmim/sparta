import requests
from bs4 import BeautifulSoup

URL = "https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20230101"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작
# print(soup)

# title
#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.title.ellipsis
#body-content > div.newest-list > div > table > tbody > tr:nth-child(2) > td.info > a.title.ellipsis
#body-content > div.newest-list > div > table > tbody > tr:nth-child(3) > td.info > a.title.ellipsis
# 가수
#body-content > div.newest-list > div > table > tbody > tr:nth-child(3) > td.info > a.artist.ellipsis
#body-content > div.newest-list > div > table > tbody > tr:nth-child(47) > td.info > a.artist.ellipsis
# 순위
#body-content > div.newest-list > div > table > tbody > tr:nth-child(48) > td.number
#body-content > div.newest-list > div > table > tbody > tr:nth-child(50) > td.number
#body-content > div.newest-list > div > table > tbody > tr:nth-child(37) > td.number

list=soup.select('#body-content > div.newest-list > div > table > tbody > tr')   

for a in list:
    title=a.select_one('td.info > a.title.ellipsis').text
    # 양쪽 공백 지우기 > .strip()
    new_title=title.strip()

    artist=a.select_one('td.info > a.artist.ellipsis').text

    # 앞에서 두 글자만 끊기! .text[0:2]
    rank=a.select_one('td.number').text[0:2]

    print(rank, new_title, artist)

