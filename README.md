#messages
| カラム名 | 型 | オプション |
|:-----|------:|:--------:|
| body | text | not null |
| image | string | |
| group_id | references | foreign_key |
| user_id | references | foreign_key |

#users
| カラム名 | 型 | オプション |
|:-----|------:|:--------:|
| name | string | not null |
| email | string | unique |
| password | string | not null |
*has_many :users_groups  
*has_many :groups, through: :users_groups

#groups
| カラム名 | 型 | オプション |
|:-----|------:|:--------:|
| name | string | not null |
*has_many :users_groups  
*has_many :users, through: :users_groups

#users_groups
| カラム名 | 型 | オプション |
|:-----|------:|:--------:|
| user_id | resources | foreig_key |
| group_id | resources | foreign_key |
*belongs_to :user  
*belongs_to :group