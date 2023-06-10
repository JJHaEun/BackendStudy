FROM node:14
# node, npm, yarn 까지 설치되게됨.

WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/

# yarn dev 전에 node modules 필요
# 1. 도커 안에서 yarn install 하여 안에 node modules만들기 ==> 더 효율적.
# 사용하는 환경 통일
RUN yarn install
#  여기까지 미리 진행하여 소스코드 바뀌었어도 캐시에서 이부분은 가져올 수 있게 함.
# ====================================================
COPY . /myfolder/
#  소스코드 변경시 cache거 깨짐. 그리고 이 아래쪽부터 다시 재실행됨(다시 build)
#  즉, cache가 깨지게 되면 그 후부터 다시 재실행됨.
#  이때 소스코드만 바뀌었는데 yarn install부터 다시 진행됨!!
# COPY 전에 WORKDIR먼저 와도 됨(순서바뀌어도 됨
#   따라서 먼저 package.json과 yarn.lock을 먼저 COPY
# 그다음 yarn install



# 여기까지 build됨
# -----------------------------------------------

# RUN yarn dev 만약 여기가 CMD가 아니고 이거라면 build가 멈춤. yarn dev로 서버를 켜주는 명령어인데 이것은 24시간 돌고있기에 끝나지 않음.
CMD yarn dev
#  따라서 마지막 실행 명령은 CMD로!!!