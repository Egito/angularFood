docker run -ti --name lojas-ds -w /app -e PATH=$PATH:/app/node_modules/.bin -v ${PWD}/:/app node:10.11.0-alpine /bin/sh
