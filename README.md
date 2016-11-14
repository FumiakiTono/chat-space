#messages
| body | image | group_id(foreign_key) | user_id(foreign_key) |
|:-----|------:|:--------:|---------|
| text | string | references | references |

#users
| name(notfull) | email(unique) | password(notfull) |
|:-----|------:|:--------:|
| string | string | string |  
*has_many :users_groups  
*has_many :groups, through: :users_groups

#groups
| name |
|:-----|
| string |  
*has_many :users_groups  
*has_many :users, through: :users_groups

#users_groups
| user_id(foreign_key) | group_id(foreign_key) |
|:-------|:-------|
| references | references |  
*belongs_to :users  
*belongs_to :groups
