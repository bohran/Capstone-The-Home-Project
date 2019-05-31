docker rm -f capclient

export TLSCERT=/etc/letsencrypt/live/seattleforallkc.com/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/seattleforallkc.com/privkey.pem

docker run -d \
--name capclient \
-p 443:443 \
-p 80:80 \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
-e TLSCERT=$TLSCERT \
-e TLSKEY=$TLSKEY \
eropes/capclientfinal2
