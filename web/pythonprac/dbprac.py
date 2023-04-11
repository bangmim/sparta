from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.hubtakr.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)

db = client.dbsparta
'''
doc = {
    'name':'영희',
    'age':30
}

# db에 넣기
db.users.insert_one(doc)

doc = {
    'name':'철수',
    'age':35
}

db.users.insert_one(doc)
'''

'''
# 전체 가져오기
all_users = list(db.users.find({},{'_id':False}))   # {'_id':False} : _id 없이 출력

for a in all_users:
    print(a['name'])
'''

'''
# 하나만 가져오기

# user=db.users.find_one({})
user=db.users.find_one({},{'_id':False})
print(user)
'''

'''
# update
db.users.update_one({'name':'영수'},{'$set':{'age':19}})
'''
'''
# delete
db.users.delete_one({'name':'영수'})
'''

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시 (조건은 중괄호!)
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_users = list(db.users.find({},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})