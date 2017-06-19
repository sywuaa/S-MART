# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
country         | string    |
city            | string    |
postal_code     | integer   |
about_me        | text      |
timestamps      | datetime  |

## campaigns
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key
goal_amt         | integer   | not null
current_amt      | integer   | not null
title            | string    | not null
tile_img_url     | string    | not null
city             | string    | not null
country          | string    | not null
category_id      | integer   | not null
duration         | integer   | not null
pitch_img        | string    | not null
overview_img_url | string    | not null
overview         | text      | not null
campaign_story   | text      | not null
timestamps       | datetime  |

## rewards
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
campaign_id      | integer   | not null, foreign key
price            | integer   | not null
title            | string    | not null
description      | text      | not null
number_available | integer   | not null
number_claimed   | integer   | default("0")
delivery_date    | date      | not null

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
campaign_id | integer   | not null, foreign key
reward_id   | integer   |
amount      | integer   | not null
timestamps  | datetime  |

## comments
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key
campaign_id      | integer   | not null
body             | text      | not null
timestamps       | datetime  |

## categories
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
name             | string    | not null

## followings
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key
campaign_id      | integer   | not null, foreign key
