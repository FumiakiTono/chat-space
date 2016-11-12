#messages
| body(text) | image(string) | group_id)(integer) | user_id(integer) |
|:-----|------:|:--------:|---------|
|      |       |          |         |
#users
| name(string) | email(string) | password(string) |
|:-----|------:|:--------:|
|      |       |          |
#groups
| name(string) |
|:-----|
|      |
#users_groups
| user_id(integer) | group_id(integer) |
|:-------|:-------|
#association
+------+ 1:n +--------------+n:1 +------+
| user |<===>| users_groups |<==>| group |
+------+     +--------------+    +------+