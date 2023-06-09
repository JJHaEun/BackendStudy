# ubuntu(리눅스) 다운로드 FROM하면 도커허브에서 다운 받아옴.
# hub.docker.com에서 필요한게 있는 컴퓨터를 pull 로 설치 할 수 있음.

# FROM ubuntu:20.04

# # apt는 ubuntu명령어. ubuntu를 설치하고 그 안에 nodejs를 설치해줘
# RUN apt install nodejs
#  ==================================================


#  아예 리눅스 안에 node까지 설치 되어있는것을 적으면 이 두줄은 사라지고 한줄만 적어도 됨!!
# 가장 안정적인 버전 14버전을 사용(16버전의 경우 등은 특정 케이스에서 안될 수도 있기에)
FROM node:14

# 내 컴퓨터 안에있는 index.js를 실행하기 위해 이 도커 컨테이너(도커 컴퓨터)에 COPY

# RUN mkdir myfolder
# 그런데 myfolder라는 폴더가 없더라도 만들어서 그쪽에 COPY가 진행되기에 여기도 없어도 됨.


# 내 컴퓨터 현 위치의 index.js를 
# 방금 컨테이너에 만든 myfolder라는 폴더 안에 복사해줘
COPY ./index.js myfolder/

# 폴더 myfolder안으로 들어가서
# RUN cd ./myfolder
#  이렇게 안으로 들어가지 않아도 처음 커서시작위치(WORKDIR)를 해당 폴더로 잡으면 됨.
WORKDIR /myfolder/

# 실행
# RUN node index.js
# 또다른 실행 명령어로 커멘드(CMD)도 사용가능 
CMD node index.js
# (최종 실행명령어일때 CMD를 사용. 
# RUN의 경우에는 여러번 사용 가능하나, CMD는 한번만 사용 가능하기 때문이다.)