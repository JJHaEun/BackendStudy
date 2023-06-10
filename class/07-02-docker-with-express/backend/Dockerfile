FROM node:14
# node, npm, yarn 까지 설치되게됨.


COPY . /myfolder/
# 현 위치의 모든파일(.dockerignore에 있는것 제외하고)을 myfolder 라는 폴더에
# COPY 전에 WORKDIR먼저 와도 됨(순서바뀌어도 됨
WORKDIR /myfolder/

# yarn dev 전에 node modules 필요
# 1. 도커 안에서 yarn install 하여 안에 node modules만들기 ==> 더 효율적.
# 사용하는 환경 통일
RUN yarn install
# 2. 애초에 node modules 까지 같이 COPY해 넣기 ==> 내가쓰는 node 버전에 따라 COPY되어 들어갈경우 다른 사람에게서 문제 발생할 수 있음.

# 여기까지 build됨
# -----------------------------------------------

# RUN yarn dev 만약 여기가 CMD가 아니고 이거라면 build가 멈춤. yarn dev로 서버를 켜주는 명령어인데 이것은 24시간 돌고있기에 끝나지 않음.
CMD yarn dev
#  따라서 마지막 실행 명령은 CMD로!!!