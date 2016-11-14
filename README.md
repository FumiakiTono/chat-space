#messages
| body(text) | image(string) | group_id)(integer) | user_id(integer) |
|:-----|------:|:--------:|---------|
|      |       |          |         |

#users
| name(string) | email(string) | password(string) |
|:-----|------:|:--------:|
|      |       |          |

*has_many :users_groups
*has_many :groups, through: :users_groups

#groups
| name(string) |
|:-----|
|      |

*has_many :users_groups
*has_many :users, through: :users_groups

#users_groups
| user_id(integer) | group_id(integer) |
|:-------|:-------|

*belongs_to :users
*belongs_to :groups
