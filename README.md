#messages
| body | image | group_id | user_id |
|:-----|------:|:--------:|---------|
| text | string | integer | integer |

#users
| name | email | password |
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
| user_id | group_id |
|:-------|:-------|
| integer | integer |  
*belongs_to :users  
*belongs_to :groups
