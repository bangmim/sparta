from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.hubtakr.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)

db = client.dbsparta
import requests
from bs4 import BeautifulSoup

URL = "https://movie.daum.net/ranking/reservation"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작

# print(soup)

#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_cont > strong > a
#mainContent > div > div.box_ranking > ol > li:nth-child(2) > div > div.thumb_cont > strong > a

lis=soup.select('#mainContent > div > div.box_ranking > ol > li')    #list 생성됨 >> 반복문 돌리기

# 제목
#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_cont > strong > a

# 순위
#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_item > div.poster_movie > span.rank_num

# 평점
#mainContent > div > div.box_ranking > ol > li:nth-child(1) > div > div.thumb_cont > span.txt_append > span:nth-child(1) > span
for li in lis:
    # 제목 찾기 : 가져온 것 이후로 하나씩 가져온다
    a=li.select_one('div > div.thumb_cont > strong > a')
    b=li.select_one('div > div.thumb_item > div.poster_movie > span.rank_num')
    grade=li.select_one('div > div.thumb_cont > span.txt_append > span:nth-child(1) > span').text
    rank=b.text
    title=a.text
    # grade=c.text
    # print(rank)
    # none 제외
    if a is not None:
        # print(rank, title, grade)
        # 딕셔너리 만들기 (db저장위해)

        doc={
            'title':title,
            'rank':rank,
            'grade':grade,
        }
        db.movies.insert_one(doc)    
        # moview  폴더 만들어 저장


