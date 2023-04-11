from pymongo import MongoClient
# 컴퓨터 보안환경에 따라 certifi 설치 후 아래와 같이 사용해야하는 경우도 있다.
# 설치 안할 경우 client=MongoClient('mongodb+srv://sparta:test@cluster0.hubtakr.mongodb.net/?retryWrites=true&w=majority')
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.hubtakr.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)

db = client.dbsparta
'''
# Q1
gb=list(db.movies.find({},{'_id':False}))

for a in gb:
    if a['title']=='렌필드':
        print(a['grade'])

movie=db.movies.find_one({'title':'렌필드'})['grade']
print(movie)
'''
'''
# Q2
movie=db.movies.find_one({'title':'렌필드'})
target_star=movie['grade']

movies=list(db.movies.find({'grade':target_star},{'_id':False}))

# print(movies)

for a in movies:
    print(a['title'])
'''
# Q3
db.movies.update_one({'title':'렌필드'},{'$set':{'grade':0}})