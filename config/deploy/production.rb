# EC2サーバーのIP、EC2サーバーにログインするユーザー名、サーバーのロールを記述
server '35.164.215.254', user: 'fumiaki', roles: %w{app db web}

#デプロイするサーバにsshログインする鍵の情報を記述
set :ssh_options, keys: '~/.ssh/first_aws_rsa'
