


> Schema

**Users**
column name | data type | details

 - username | string | null: false, index
 - password_digest | string | null: false
 - email | string | null: false
 - home_lat | float | null: false
 - home_long | float | null: false
 - session_token | string| null: false
 - timestamps

**Routes**
column name | data type | details

 - name | string | null: false
 - description | text | null: false
 - user_id | integer| null: false, index
 - map | google map | <- not sure if pointers/route can be stored in this?
 - (might be a few more characteristics here)
 - timestamps

**Friends**
column name | data type | details

 - user_id | integer | null: false, index
 - friend_id | integer | null: false, index

**Workouts**
column name | data type | details

 - name | string | null: false
 - date | date | null: false
 - duration | time | null: false
 - route_id | integer | index
 - user_id | integer | null: false, index
 - activity | string | null: false
 - (might be a few more characteristics here)