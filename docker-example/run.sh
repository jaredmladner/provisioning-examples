
docker build -t jared_test .

docker run -it --rm -p 8888:8888 -w /opt/node --name jared_test_app jared_test node server.js
