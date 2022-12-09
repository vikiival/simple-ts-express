build:
  docker build . -t simple-ts-express

whale:
  docker run --rm -p 3003:3003 simple-ts-express

sh:
  docker run -it simple-ts-express sh